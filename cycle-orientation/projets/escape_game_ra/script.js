// ============================================================================
// SCRIPT PRINCIPAL — navigation, rendu des chapitres, validation des réponses
// ============================================================================

const state = {
  teamName: "",
  teamClass: "",
  mode: null,          // "android" | "other"
  testMode: false,
  webxrAvailable: false,
  calibrated: false,
  currentChapter: 0,   // index dans CHAPTERS
  score: 0,
  scanConfirmed: {},   // { [chapterId]: true }
  startTime: null,
  jokerUsed: false,
  unlockedCards: [],
  timelineEntries: [], // { title, historicalTime, successNote } — un par chapitre résolu, dans l'ordre
  dossierUnlocked: false,
  codesUnlocked: {},
  lastGateWrongCount: 0,
  chapterProgress: { textOk: false, objectOk: false },
  soundOn: true,
  difficulty: "normal",
  achievements: { noHint: true, perfectAll: true },
  snapshots: [],
};

function teamDisplayName() {
  return state.teamClass ? `${state.teamName} — ${state.teamClass}` : state.teamName;
}

function consumeHint() {
  // renvoie true si gratuit, false si ça coûte 1 point
  if (state.difficulty === "facile") return true;
  if (state.difficulty === "difficile") {
    state.score = Math.max(0, state.score - 1);
    updateScorePill();
    return false;
  }
  // normal : premier indice de toute la partie gratuit
  if (!state.jokerUsed) { state.jokerUsed = true; return true; }
  state.score = Math.max(0, state.score - 1);
  updateScorePill();
  return false;
}
function hintButtonLabel() {
  if (state.difficulty === "facile") return "Besoin d'un indice ? (gratuit)";
  if (state.difficulty === "difficile") return "Besoin d'un indice ? (–1 pt)";
  return state.jokerUsed ? "Besoin d'un indice ? (–1 pt)" : "Besoin d'un indice ? (1er gratuit 🃏)";
}
function quizTimeLimit() {
  return state.difficulty === "facile" ? 999000 : state.difficulty === "difficile" ? 8000 : 15000;
}

// ---------- sons procéduraux (aucun fichier audio requis) ----------
let audioCtx = null;
function playTone(kind) {
  if (!state.soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const seqs = {
      right: [[660, 0.09], [880, 0.14]],
      wrong: [[220, 0.16]],
      unlock: [[520, 0.08], [660, 0.08], [880, 0.18]],
    };
    const seq = seqs[kind] || seqs.right;
    let t = audioCtx.currentTime;
    seq.forEach(([freq, dur]) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.02);
      t += dur;
    });
  } catch (e) { /* silence, jamais bloquant */ }
}

function speak(text) {
  try {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR";
    u.rate = 0.98;
    window.speechSynthesis.speak(u);
  } catch (e) { /* pas grave */ }
}

// ---------- utils ----------
function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // accents
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return [...root.querySelectorAll(sel)]; }
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}
function showScreen(name) {
  $all(".screen").forEach(s => s.classList.remove("active"));
  const target = $(`.screen[data-screen="${name}"]`);
  if (target) target.classList.add("active");
  window.scrollTo(0, 0);
}

// ---------- test mode ----------
function activateTestMode() {
  state.testMode = true;
  ArEngine.setTestMode(true);
  $("#test-banner").classList.remove("hidden");
}
$("#btn-test-mode").addEventListener("click", activateTestMode);

// auto test mode via ?test=1
if (new URLSearchParams(location.search).get("test") === "1") {
  activateTestMode();
}

// ---------- mode tableau de bord (projecteur) ----------
if (new URLSearchParams(location.search).get("dashboard") === "1") {
  showScreen("dashboard");
  (async () => {
    const statusEl = $("#dashboard-status");
    if (!window.Leaderboard) { statusEl.textContent = "Tableau de bord indisponible."; return; }
    const ok = await Leaderboard.init();
    if (!ok) {
      statusEl.textContent = "Aucune configuration Firebase trouvée — voir firebase-config.js pour l'activer.";
      return;
    }
    statusEl.textContent = "Connecté — mise à jour en direct.";
    Leaderboard.subscribe((teams) => {
      const rows = Object.values(teams).sort((a, b) => (b.chapter - a.chapter) || (b.score - a.score));
      const table = $("#dashboard-table");
      if (!rows.length) {
        table.innerHTML = `<div class="chapter-text">En attente des équipes…</div>`;
        return;
      }
      table.innerHTML = rows.map(t => `
        <div class="dashboard-row ${t.finished ? "finished" : ""}">
          <div class="dashboard-row-name">${escapeHtml(t.name || "?")}</div>
          <div class="dashboard-row-progress">
            <div class="dashboard-row-bar"><div style="width:${Math.round(100 * (t.chapter || 0) / (t.total || 8))}%"></div></div>
            <span>${t.chapter || 0} / ${t.total || 8}</span>
          </div>
          <div class="dashboard-row-score">${t.score || 0} pts</div>
          <div class="dashboard-row-time">${t.finished ? "✓ " + (t.time || "") : ""}</div>
        </div>
      `).join("");
    });
  })();
}

// ---------- mot de passe d'accès ----------
$("#form-password").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = $("#game-password").value.trim();
  const expected = window.GAME_ACCESS_PASSWORD || "";
  if (val.toLowerCase() === expected.toLowerCase()) {
    showScreen("home");
  } else {
    $("#password-error").textContent = "Mot de passe incorrect.";
  }
});

// ---------- écran accueil ----------
$("#form-team").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = $("#team-name").value.trim();
  const cls = $("#team-class").value.trim();
  if (!val || !cls) return;
  state.teamName = val;
  state.teamClass = cls;
  if (window.Leaderboard) {
    Leaderboard.setTeam(val + " — " + cls);
    Leaderboard.init(); // best-effort, ne bloque jamais la suite
  }
  renderModeHint();
  showScreen("mode");
});

function renderModeHint() {
  const hint = $("#mode-auto-hint");
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  hint.textContent = isAndroid
    ? "Cet appareil semble être sous Android — le bouton « Android » est recommandé."
    : "Cet appareil ne semble pas être sous Android — le bouton « Autre navigateur » est recommandé.";
}

$all(".mode-card[data-mode]").forEach(card => {
  card.addEventListener("click", async () => {
    $all(".mode-card[data-mode]").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    state.mode = card.dataset.mode;
    ArEngine.setMode(state.mode);
    state.webxrAvailable = false;
    if (state.mode === "android") {
      state.webxrAvailable = await ArXR.isAvailable();
    }
    setTimeout(() => showScreen("difficulty"), 250);
  });
});

$all(".mode-card[data-difficulty]").forEach(card => {
  card.addEventListener("click", () => {
    if (card.dataset.difficulty === "bonus") {
      const val = (prompt("Mot de passe du bonus Salle noire :") || "").trim();
      if (val.toLowerCase() === (window.BONUS_PASSWORD || "").toLowerCase()) {
        showScreen("game");
        renderSalleNoireBonus(true);
      } else if (val) {
        alert("Mot de passe incorrect.");
      }
      return;
    }
    $all(".mode-card[data-difficulty]").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    state.difficulty = card.dataset.difficulty;
    ArXR.setJitterEnabled(state.difficulty !== "libre");
    setTimeout(() => showScreen("rules"), 250);
  });
});

function beginGameplay() {
  if (!state.startTime) state.startTime = Date.now();
  showScreen("game");
  renderChapter(0);
  startTimerLoop();
}

$("#btn-start-game").addEventListener("click", async () => {
  if (state.mode === "android" && state.webxrAvailable) {
    showScreen("calibrate");
    $("#calib-point-desc").textContent = window.CALIBRATION_POINT_DESC || "";
    $("#btn-calibrate-fake").classList.toggle("hidden", !state.testMode);
  } else {
    beginGameplay();
  }
});

$("#btn-calibrate-skip").addEventListener("click", () => {
  beginGameplay();
});

$("#btn-calibrate-fake").addEventListener("click", () => {
  ArXR.fakeCalibrate();
  state.calibrated = true;
  beginGameplay();
});

$("#btn-calibrate-start").addEventListener("click", async () => {
  const btn = $("#btn-calibrate-start");
  btn.disabled = true;
  btn.textContent = "Connexion à la RA…";
  const overlayRoot = $("#xr-overlay-root");
  overlayRoot.classList.remove("hidden");
  $(".xr-overlay-hint", overlayRoot).textContent = "Touchez l'écran pour calibrer ici.";
  // Un canvas RA, créé pour cette calibration puis détruit avec la session
  // juste après (voir onCalibrated) : pendant qu'une session RA immersive
  // est active, le téléphone n'affiche QUE la caméra + cette zone — jamais
  // le reste de l'appli. Il faut donc bien REFERMER la session pour que
  // l'appli (le puzzle, etc.) redevienne visible et utilisable ensuite.
  const canvas = el("canvas", "xr-canvas");
  canvas.id = "xr-render-canvas";
  document.body.appendChild(canvas);

  try {
    await ArXR.calibrate({
      canvas,
      overlayRoot,
      onCalibrated: () => {
        state.calibrated = true;
        ArXR.endSession(); // déclenche onEnd juste après, qui lance la partie
      },
      onEnd: () => {
        overlayRoot.classList.add("hidden");
        canvas.remove();
        if (state.calibrated) {
          beginGameplay();
        } else {
          btn.disabled = false;
          btn.textContent = "Commencer la calibration";
        }
      }
    });
  } catch (err) {
    overlayRoot.classList.add("hidden");
    canvas.remove();
    btn.disabled = false;
    btn.textContent = "Commencer la calibration";
    showXrError(err);
  }
});

function showXrError(err) {
  const name = (err && err.name) || "Erreur";
  const msg = (err && err.message) || String(err);
  let box = $("#xr-error-box");
  if (!box) {
    box = el("div", "xr-error-box");
    box.id = "xr-error-box";
    document.querySelector('.screen[data-screen="calibrate"] .screen-inner').appendChild(box);
  }
  box.innerHTML = `<strong>RA indisponible ici.</strong><br>Détail technique (utile si tu me le transmets) :<br><code>${escapeHtml(name)}: ${escapeHtml(msg)}</code>`;
  box.classList.remove("hidden");
}

// need a "game" screen container — build it once
(function ensureGameScreen() {
  const root = $("#game-root");
  const section = el("section", "screen", "");
  section.id = "screen-game";
  section.dataset.screen = "game";
  section.innerHTML = `
    <div class="parchment-bg"></div>
    <div class="screen-inner" id="chapter-mount"></div>
  `;
  root.appendChild(section);

  const scorePill = el("div", "score-pill hidden");
  scorePill.id = "score-pill";
  document.body.appendChild(scorePill);

  const timerPill = el("div", "timer-pill hidden");
  timerPill.id = "timer-pill";
  document.body.appendChild(timerPill);

  const carnetBtn = el("button", "carnet-btn hidden", "📖");
  carnetBtn.id = "carnet-btn";
  carnetBtn.title = "Carnet de personnages";
  carnetBtn.addEventListener("click", openCarnet);
  document.body.appendChild(carnetBtn);

  const dossierBtn = el("button", "dossier-btn hidden", "🗂️");
  dossierBtn.id = "dossier-btn";
  dossierBtn.title = "Porte-documents (tables de décodage)";
  dossierBtn.addEventListener("click", openDossier);
  document.body.appendChild(dossierBtn);

  const minimap = el("div", "minimap hidden");
  minimap.id = "minimap";
  document.body.appendChild(minimap);

  const carnetModal = el("div", "carnet-modal hidden");
  carnetModal.id = "carnet-modal";
  document.body.appendChild(carnetModal);

  const dossierModal = el("div", "carnet-modal hidden");
  dossierModal.id = "dossier-modal";
  document.body.appendChild(dossierModal);
})();

// ---------- porte-documents : tables de décodage toujours disponibles ----------
function unlockDossier() {
  state.dossierUnlocked = true;
  $("#dossier-btn").classList.remove("hidden");
  playTone("unlock");
}

function openDossier() {
  const modal = $("#dossier-modal");
  const tabs = ["Pyramide de conversion", "Chiffres romains", "Roue de César", "Code Morse", "Table des éléments"];
  let active = modal.dataset.activeTab ? Number(modal.dataset.activeTab) : 0;

  function render() {
    modal.dataset.activeTab = active;
    modal.innerHTML = `
      <div class="carnet-inner">
        <div class="carnet-header">
          <div class="chapter-title" style="font-size:22px;">Porte-documents</div>
          <button class="btn-secondary dossier-close" style="width:auto; padding:8px 14px;">Fermer</button>
        </div>
        <div class="dossier-tabs">
          ${tabs.map((t, i) => `<button class="dossier-tab${i === active ? " active" : ""}" data-tab="${i}">${t}</button>`).join("")}
        </div>
        <div class="dossier-body">${renderTabContent(active)}</div>
      </div>
    `;
    $all(".dossier-tab", modal).forEach(btn => {
      btn.addEventListener("click", () => { active = Number(btn.dataset.tab); render(); });
    });
    if (active === 2) wireCaesarWheel(modal);
    $(".dossier-close", modal).addEventListener("click", () => modal.classList.add("hidden"));
  }

  function renderTabContent(tab) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (tab === 0) {
      return `<div class="dossier-grid">${alphabet.map((l, i) => `<div class="dossier-cell"><span>${i + 1}</span>=${l}</div>`).join("")}</div>`;
    }
    if (tab === 1) {
      return `<div class="dossier-grid">${alphabet.map((l, i) => `<div class="dossier-cell"><span>${toRoman(i + 1)}</span>=${l}</div>`).join("")}</div>`;
    }
    if (tab === 3) {
      return `<div class="dossier-grid">${alphabet.map(l => `<div class="dossier-cell"><span>${(typeof MORSE_TABLE !== "undefined" ? MORSE_TABLE[l] : "") || ""}</span>=${l}</div>`).join("")}</div>`;
    }
    if (tab === 4) {
      const table = (typeof PERIODIC_TABLE_20 !== "undefined") ? PERIODIC_TABLE_20 : [];
      return `<div class="dossier-grid">${table.map(([s, z]) => `<div class="dossier-cell"><span>${z}</span>=${s}</div>`).join("")}</div>`;
    }
    return `
      <div class="caesar-wheel">
        <div class="caesar-shift-controls">
          <button type="button" class="btn-secondary caesar-minus" style="width:auto; padding:8px 14px;">−</button>
          <div class="caesar-shift-value">Décalage : <strong id="caesar-shift-n">3</strong></div>
          <button type="button" class="btn-secondary caesar-plus" style="width:auto; padding:8px 14px;">+</button>
        </div>
        <div class="caesar-row" id="caesar-plain"></div>
        <div class="caesar-row shifted" id="caesar-shifted"></div>
        <div class="mirror-hint">Chaque lettre du haut se lit comme la lettre du bas juste en dessous.</div>
      </div>
    `;
  }

  function toRoman(n) {
    const table = [[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]];
    let res = "";
    table.forEach(([v, s]) => { while (n >= v) { res += s; n -= v; } });
    return res;
  }

  render();
  modal.classList.remove("hidden");
}

function wireCaesarWheel(modal) {
  let shift = 3;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  function draw() {
    $("#caesar-shift-n", modal).textContent = shift;
    $("#caesar-plain", modal).innerHTML = alphabet.map(l => `<span>${l}</span>`).join("");
    $("#caesar-shifted", modal).innerHTML = alphabet.map((_, i) => `<span>${alphabet[(i + shift) % 26]}</span>`).join("");
  }
  $(".caesar-minus", modal).addEventListener("click", () => { shift = (shift + 25) % 26; draw(); });
  $(".caesar-plus", modal).addEventListener("click", () => { shift = (shift + 1) % 26; draw(); });
  draw();
}

function updateScorePill() {
  const pill = $("#score-pill");
  pill.textContent = `${state.score} pt${state.score > 1 ? "s" : ""}`;
  pill.classList.remove("hidden");
}

let timerInterval = null;
function startTimerLoop() {
  const pill = $("#timer-pill");
  pill.classList.remove("hidden");
  if (timerInterval) clearInterval(timerInterval);
  function tick() {
    const secs = Math.floor((Date.now() - state.startTime) / 1000);
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    pill.textContent = `⏱ ${m}:${s}`;
  }
  tick();
  timerInterval = setInterval(tick, 1000);
}
function stopTimerLoop() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}
function elapsedLabel() {
  const secs = Math.floor((Date.now() - state.startTime) / 1000);
  const m = String(Math.floor(secs / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function updateMinimap() {
  const map = $("#minimap");
  map.classList.remove("hidden");
  const dots = CHAPTERS.map((c, i) => {
    const state_ = i < state.currentChapter ? "done" : i === state.currentChapter ? "current" : "";
    return `<div class="minimap-dot ${state_}" title="${c.title}"></div>`;
  }).join("");
  map.innerHTML = `<div class="minimap-label">Salle</div><div class="minimap-grid">${dots}</div>`;
}

function openCarnet() {
  const modal = $("#carnet-modal");
  const cards = state.unlockedCards.map(c => `
    <div class="carnet-card">
      <div class="carnet-card-name">${escapeHtml(c.name)}</div>
      <div class="carnet-card-role">${escapeHtml(c.role)}</div>
      <div class="carnet-card-blurb">${escapeHtml(c.blurb)}</div>
    </div>
  `).join("") || `<div class="chapter-text">Aucun personnage débloqué pour l'instant.</div>`;
  // Chronologie : se remplit au fil des chapitres résolus (pas d'avance sur
  // ce qui n'est pas encore joué) — donne une vraie sensation d'enquête qui
  // avance, plutôt qu'un simple récapitulatif figé.
  const chrono = state.timelineEntries.map((t, i) => `
    <div class="chrono-row">
      <div class="chrono-num">${i + 1}</div>
      <div>
        <div class="chrono-title">${escapeHtml(t.title)}</div>
        ${t.historicalTime ? `<div class="historical-time-badge" style="margin:2px 0 6px;">🕑 ${escapeHtml(t.historicalTime)}</div>` : ""}
        <div class="chrono-text">${escapeHtml(t.successNote || "")}</div>
      </div>
    </div>
  `).join("") || `<div class="chapter-text">L'enquête commence à peine — revenez ici après votre premier chapitre résolu.</div>`;
  modal.innerHTML = `
    <div class="carnet-inner">
      <div class="carnet-header">
        <div class="chapter-title" style="font-size:22px;">Carnet de l'enquête</div>
        <button class="btn-secondary carnet-close" style="width:auto; padding:8px 14px;">Fermer</button>
      </div>
      <div class="chrono-list">${chrono}</div>
      <div class="carnet-cards">${cards}</div>
    </div>
  `;
  modal.classList.remove("hidden");
  $(".carnet-close", modal).addEventListener("click", () => modal.classList.add("hidden"));
}

function openChronologie() {
  const modal = $("#carnet-modal");
  const rows = CHAPTERS.map((c, i) => `
    <div class="chrono-row">
      <div class="chrono-num">${i + 1}</div>
      <div>
        <div class="chrono-title">${escapeHtml(c.title)}</div>
        <div class="chrono-text">${escapeHtml(c.successNote || "")}</div>
      </div>
    </div>
  `).join("");
  modal.innerHTML = `
    <div class="carnet-inner">
      <div class="carnet-header">
        <div class="chapter-title" style="font-size:22px;">La nuit du 12 décembre 1602</div>
        <button class="btn-secondary carnet-close" style="width:auto; padding:8px 14px;">Fermer</button>
      </div>
      <div class="chrono-list">${rows}</div>
    </div>
  `;
  modal.classList.remove("hidden");
  $(".carnet-close", modal).addEventListener("click", () => modal.classList.add("hidden"));
}

// ============================================================================
// RENDU D'UN CHAPITRE
// ============================================================================
function renderAccusationStrip(index) {
  const words = window.ACCUSATION_WORDS || [];
  const code = window.MARMITE_ROOM_CODE || "";
  const wordsRevealed = Math.min(index, words.length);
  const digitsRevealed = Math.max(0, Math.min(index - words.length, code.length));

  const wrap = el("div", "accusation-strip");
  const wordsLine = el("div", "accusation-line");
  wordsLine.innerHTML = words.map((w, i) =>
    i < wordsRevealed
      ? `<span class="accusation-word revealed">${w}</span>`
      : `<span class="accusation-word">${"▢".repeat(w.length)}</span>`
  ).join(" ");
  wrap.appendChild(wordsLine);

  if (code) {
    const codeLine = el("div", "accusation-line accusation-code");
    const digits = code.split("").map((d, i) =>
      i < digitsRevealed
        ? `<span class="accusation-word revealed">${d}</span>`
        : `<span class="accusation-word">▢</span>`
    ).join("");
    codeLine.innerHTML = `<span class="accusation-code-label">Salle de la marmite n°</span> ${digits}`;
    wrap.appendChild(codeLine);
  }
  return wrap;
}

function renderChapter(index) {
  state.currentChapter = index;
  const ch = CHAPTERS[index];
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  updateScorePill();
  updateMinimap();
  $("#carnet-btn").classList.toggle("hidden", state.unlockedCards.length === 0);
  // Compteur d'erreurs RA du chapitre : remis à zéro ICI, une fois par
  // chapitre — pas à chaque porte RA. Un chapitre comme le 2 ou le 3 a
  // DEUX portes (recherche + confirmation) ; avant, remettre le compteur
  // à zéro à chaque porte effaçait les erreurs de la première étape, donc
  // le bonus "trouvé du premier coup" ne reflétait que la dernière porte.
  state.lastGateWrongCount = 0;
  // Suivi "réponse tapée" / "objet trouvé en RA" pour ce chapitre — les
  // deux sont nécessaires (chapitres avec confirmSpatialKey), dans
  // n'importe quel ordre. Remis à zéro une fois par chapitre.
  state.chapterProgress = { textOk: false, objectOk: false };

  if (window.Leaderboard) {
    Leaderboard.update({ name: teamDisplayName(), score: state.score, chapter: index + 1, total: CHAPTERS.length, finished: false });
  }

  // progression
  const progress = el("div", "chapter-progress");
  CHAPTERS.forEach((c, i) => {
    const dot = el("div", "progress-seal" + (i < index ? " done" : i === index ? " current" : ""));
    progress.appendChild(dot);
  });
  mount.appendChild(progress);

  mount.appendChild(renderAccusationStrip(index));

  const card = el("div", "chapter-card");
  card.appendChild(el("div", "chapter-label", ch.label));
  if (ch.historicalTime) {
    card.appendChild(el("div", "historical-time-badge", `🕑 ${escapeHtml(ch.historicalTime)}`));
  }
  const titleRow = el("div");
  titleRow.style.display = "flex";
  titleRow.style.alignItems = "center";
  titleRow.style.justifyContent = "space-between";
  titleRow.style.gap = "10px";
  titleRow.appendChild(el("div", "chapter-title", ch.title));
  const speakBtn = el("button", "narrate-btn", "🔊");
  speakBtn.title = "Écouter";
  if (ch.audioNarration) {
    speakBtn.title = "Écouter l'enregistrement";
    speakBtn.addEventListener("click", () => {
      const a = new Audio(ch.audioNarration);
      a.play();
    });
  } else {
    speakBtn.addEventListener("click", () => speak(ch.narrative.join(" ")));
  }
  titleRow.appendChild(speakBtn);
  card.appendChild(titleRow);
  ch.narrative.forEach(p => card.appendChild(el("p", "chapter-text", p)));
  mount.appendChild(card);

  // ---- puzzle widget selon le type ----
  const puzzleCard = el("div", "chapter-card");
  mount.appendChild(puzzleCard);

  // Chapitre 1 : le puzzle-carte se résout d'abord dans l'app ; la porte RA
  // (écusson de Genève) vient ensuite, gérée depuis le gestionnaire du puzzle.
  if (ch.puzzle.type === "jigsaw-image") {
    renderPuzzle(puzzleCard, ch);
    return;
  }

  routeToGateOrPuzzle(puzzleCard, ch);
}

// Choisit la porte RA (immersive ou minimale) si le chapitre en a une, sinon
// exécute le repli fourni (par défaut : affiche l'énigme). Le chapitre 1
// passe son propre repli (finishChapter) puisque son "énigme" — le
// puzzle-carte — est déjà résolue à ce stade.
function routeToGateOrPuzzle(container, ch, fallbackFn, keyOverride, introText) {
  const key = keyOverride || ch.spatialKey;
  // Sur la porte de CONFIRMATION (keyOverride posé), l'indice de
  // l'archiviste doit aider à trouver CET objet-là (confirmGateHint),
  // jamais celui de la porte initiale (gateHint) — les deux recherches
  // ne portent pas sur le même objet.
  const chForGate = keyOverride ? { ...ch, spatialKey: key, gateHint: ch.confirmGateHint } : ch;
  const needsSpatialGate = key && state.mode === "android" && state.webxrAvailable && state.calibrated;
  const needsMinimalArGate = key && !needsSpatialGate;
  // Résolu une fois pour toutes : c'est CE qu'on fait une fois l'objet
  // trouvé (ou si on n'a pas de porte RA du tout) — jamais un raccourci
  // qui saute l'énigme/la réponse texte. Trouver l'objet en RA ouvre la
  // question, il ne la remplace pas.
  const resolvedFallback = fallbackFn || (() => renderPuzzle(container, ch));
  if (needsSpatialGate) {
    renderSpatialGate(container, chForGate, resolvedFallback, introText);
  } else if (needsMinimalArGate) {
    renderMinimalArGate(container, chForGate, resolvedFallback, introText);
  } else {
    resolvedFallback();
  }
}

// ---- sensation RA minimale (mode "autre navigateur", ou Android sans WebXR) :
// caméra réelle + scan non-bloquant, sans ancrage spatial, avant l'énigme ----
function renderMinimalArGate(container, ch, onFoundFn, introText) {
  container.innerHTML = "";
  const target = (window.SPATIAL_ANCHORS && window.SPATIAL_ANCHORS[ch.spatialKey] || []).find(a => a.correct);
  const label = target ? target.label : "l'indice";

  container.appendChild(el("div", "chapter-text", introText || `<strong>📷 Pointez la caméra dans la salle et scannez pour révéler l'indice.</strong>`));
  const block = el("div", "ar-block");
  block.innerHTML = `
    <div class="ar-video-wrap">
      <video playsinline muted></video>
      <canvas class="ar-overlay"></canvas>
      <div class="ar-clue-overlay"></div>
      <div class="ar-status">Caméra inactive</div>
    </div>
    <div class="ar-actions">
      <button type="button" class="btn-secondary btn-cam-start">Activer la caméra</button>
      <button type="button" class="btn-primary btn-scan" disabled>Scanner la salle</button>
    </div>
  `;
  container.appendChild(block);

  const video = $("video", block);
  const canvas = $(".ar-overlay", block);
  const status = $(".ar-status", block);
  const clueOverlay = $(".ar-clue-overlay", block);
  const btnStart = $(".btn-cam-start", block);
  const btnScan = $(".btn-scan", block);

  async function startCamera() {
    status.textContent = "Connexion à la caméra…";
    const res = await ArEngine.attach(video, canvas);
    if (res.ok) {
      status.textContent = "Visez autour de vous…";
      status.className = "ar-status ok";
      btnScan.disabled = false;
      btnStart.style.display = "none";
    } else {
      status.textContent = "Caméra inaccessible — vous pouvez continuer sans.";
      btnScan.disabled = false;
    }
  }
  btnStart.addEventListener("click", startCamera);
  if (state.testMode) btnScan.disabled = false;

  btnScan.addEventListener("click", () => {
    btnScan.disabled = true;
    status.textContent = "Analyse en cours…";
    ArEngine.scan({
      durationMs: state.testMode ? 300 : 1400,
      onDone: () => {
        status.textContent = "Indice trouvé ✓";
        status.className = "ar-status ok";
        clueOverlay.textContent = `« ${label} »`;
        clueOverlay.classList.add("visible");
        playTone("right");
        const btn = el("button", "btn-primary", "Continuer →");
        btn.style.marginTop = "12px";
        btn.addEventListener("click", () => (onFoundFn || (() => renderPuzzle(container, ch)))());
        container.appendChild(btn);
      }
    });
  });
}

// ---------- porte d'entrée RA : trouver le bon objet ancré avant de voir l'énigme ----------
// onFoundFn = ce qu'on fait une fois l'objet trouvé (afficher l'énigme, ou la
// confirmation suivante) — la RA ne remplace JAMAIS la réponse à donner.
function renderSpatialGate(container, ch, onFoundFn, introText) {
  container.innerHTML = "";
  container.appendChild(el("div", "chapter-text", introText || "<strong>📍 Explorez la salle en réalité augmentée pour trouver l'indice.</strong> Un vieil archiviste attend près de la porte si vous êtes bloqués."));
  const dommage = el("div", "answer-feedback wrong");
  dommage.style.minHeight = "18px";

  const launchBtn = el("button", "immersive-launch", "Explorer en RA");
  container.appendChild(launchBtn);
  container.appendChild(dommage);

  function launch() {
    launchBtn.disabled = true;
    launchBtn.textContent = "Explorer en RA";
    const overlayRoot = $("#xr-overlay-root");
    overlayRoot.classList.remove("hidden");
    $(".xr-overlay-hint", overlayRoot).textContent = window.CALIBRATION_POINT_DESC
      ? `D'abord, ${window.CALIBRATION_POINT_DESC} puis touchez l'écran pour recalibrer.`
      : "Touchez l'écran pour recalibrer ici.";
    $("#xr-exit-btn").textContent = "Quitter la RA immersive";
    $("#xr-exit-btn").classList.remove("pulse");
    // Un canvas neuf à chaque porte RA, détruit avec la session en sortant
    // (voir plus bas) — sinon le reste de l'appli (le puzzle, les
    // questions...) reste invisible tant qu'une session immersive existe.
    const canvas = el("canvas", "xr-canvas");
    canvas.id = "xr-render-canvas";
    document.body.appendChild(canvas);

    // Mode "libre" : au lieu du seul groupe d'objets de ce chapitre, on
    // fusionne TOUS les groupes RA du jeu — comme dans la salle physique où
    // tout est déjà en place. Un objet qui appartient à un AUTRE chapitre
    // (futureCorrect) n'est pas un vrai leurre : on lui donne un message
    // différent plus bas plutôt que "Ce n'est pas ça".
    function buildLibreAnchors(currentKey) {
      const groups = window.SPATIAL_ANCHORS || {};
      const merged = [];
      Object.keys(groups).forEach(groupKey => {
        groups[groupKey].forEach(a => {
          const isCurrent = groupKey === currentKey;
          merged.push({ ...a, correct: isCurrent ? a.correct : false, futureCorrect: !isCurrent && !!a.correct });
        });
      });
      return merged;
    }
    const baseAnchors = state.difficulty === "libre"
      ? buildLibreAnchors(ch.spatialKey)
      : (window.SPATIAL_ANCHORS && window.SPATIAL_ANCHORS[ch.spatialKey]) || [];
    const hintCharacter = { id: "hint_npc", role: "hint", emoji: "🧑‍🦳", label: "Le vieil archiviste — indice",
      forward: 0.5, right: -1.2, height: 1.0 };
    const anchors = [...baseAnchors, hintCharacter];
    let wrongCount = 0;
    let found = false;
    let wrongFeedbackTimer = null;

    // Sortie contextuelle : le bouton "Quitter"/"Continuer" referme
    // VRAIMENT la session RA (sinon le reste de l'appli reste invisible),
    // et fait ensuite la bonne chose selon qu'on a trouvé l'objet ou pas.
    function leaveGate() {
      ArXR.endSession(); // déclenche onEnd juste après
    }
    $("#xr-exit-btn").onclick = leaveGate;
    // Filet contre la dérive du suivi caméra (courante en RA sans marqueur,
    // surtout après un temps d'immobilité comme la lecture d'un indice) :
    // permet de retoucher le point de repère sans recharger tout le
    // chapitre. Rien dans ce jeu ne déplace les objets tout seul.
    $("#xr-recalibrate-btn").onclick = () => {
      ArXR.recalibrate();
      $(".xr-overlay-hint", overlayRoot).textContent = window.CALIBRATION_POINT_DESC
        ? `D'abord, ${window.CALIBRATION_POINT_DESC} puis touchez l'écran pour recalibrer.`
        : "Touchez l'écran pour recalibrer ici.";
      $("#xr-inspect-panel").classList.add("hidden");
      $("#xr-hint-panel").classList.add("hidden");
    };

    ArXR.exploreChapter({
      canvas, overlayRoot, anchors,
      onCalibrated: () => {
        $(".xr-overlay-hint", overlayRoot).textContent = "Regardez autour de vous et touchez l'écran sur l'objet qui vous semble bon.";
      },
      onCorrect: (anchor) => {
        found = true;
        clearTimeout(wrongFeedbackTimer);
        // Cumulé, pas écrasé : un chapitre à deux portes (recherche +
        // confirmation) ne doit pas perdre les erreurs de la première
        // porte quand la deuxième se termine.
        state.lastGateWrongCount += wrongCount;
        playTone("right");
        launchConfetti(overlayRoot); // dans la zone dom-overlay : visible tout de suite, pendant qu'on est encore en RA
        $(".xr-overlay-hint", overlayRoot).innerHTML = `<strong style="color:var(--flame-bright); font-size:15px;">✓ Bravo, vous avez trouvé : « ${anchor.label} » !</strong><br>Touchez « Continuer » ci-dessous.`;
        $("#xr-exit-btn").textContent = `✓ Continuer →`;
        $("#xr-exit-btn").classList.add("pulse");
      },
      onWrong: (anchor) => {
        const hintEl = $(".xr-overlay-hint", overlayRoot);
        const defaultHint = "Regardez autour de vous et touchez l'écran sur l'objet qui vous semble bon.";
        clearTimeout(wrongFeedbackTimer);
        if (anchor.futureCorrect) {
          // Mode libre : cet objet est bien la bonne réponse d'un AUTRE
          // chapitre, pas un leurre — pas de pénalité, message différent.
          playTone("wrong");
          hintEl.innerHTML = `<strong style="color:#8ec9ff;">👀 Intéressant, mais pas maintenant.</strong><br>Continuez à chercher l'objet de cette étape.`;
          wrongFeedbackTimer = setTimeout(() => { if (!found) hintEl.textContent = defaultHint; }, 2200);
          return;
        }
        wrongCount++;
        playTone("wrong");
        // Visible tout de suite DANS l'overlay RA (avant : écrit dans
        // `dommage`, un élément caché derrière l'overlay plein écran tant
        // qu'on est en RA — l'élève ne le voyait qu'en sortant, trop tard).
        hintEl.innerHTML = `<strong style="color:#ff8f6b;">✗ Ce n'est pas « ${anchor.label} ».</strong><br>Continuez à chercher.`;
        wrongFeedbackTimer = setTimeout(() => {
          if (!found) hintEl.textContent = defaultHint;
        }, 2200);
      },
      // Un tap zoome d'abord sur l'objet (image en grand si dispo, sinon son
      // émoji) et demande confirmation — l'objet reste petit à l'écran à
      // distance normale (surtout un document à lire comme le bulletin),
      // et ça évite aussi de trancher sur un tap imprécis entre deux objets
      // proches.
      onInspect: (anchor, confirm) => {
        const panel = $("#xr-inspect-panel");
        const media = $("#xr-inspect-media");
        media.innerHTML = anchor.image
          ? `<img src="${anchor.image.src}" alt="">`
          : `<div class="xr-inspect-emoji">${anchor.emoji || "❔"}</div>`;
        $("#xr-inspect-label").textContent = anchor.label;
        panel.classList.remove("hidden");
        const yesBtn = $("#xr-inspect-yes"), noBtn = $("#xr-inspect-no");
        const close = () => panel.classList.add("hidden");
        yesBtn.onclick = () => { close(); confirm(true); };
        noBtn.onclick = () => { close(); confirm(false); };
      },
      onHint: () => {
        const costLabel = state.difficulty === "facile" ? "gratuit"
          : (state.difficulty !== "difficile" && !state.jokerUsed) ? "1er indice gratuit"
          : "coûte 1 point";
        const panel = $("#xr-hint-panel");
        $("#xr-hint-question").textContent = `Le vieil archiviste peut vous aider (${costLabel}). Voulez-vous un indice ?`;
        panel.classList.remove("hidden");
        const yesBtn = $("#xr-hint-yes"), noBtn = $("#xr-hint-no");
        const close = () => panel.classList.add("hidden");
        yesBtn.onclick = () => {
          close();
          consumeHint();
          const hintEl = $(".xr-overlay-hint", overlayRoot);
          clearTimeout(wrongFeedbackTimer);
          hintEl.innerHTML = `💡 ${ch.gateHint || ch.hint}`;
        };
        noBtn.onclick = close;
      },
      onEnd: () => {
        clearTimeout(wrongFeedbackTimer);
        $("#xr-hint-panel").classList.add("hidden");
        $("#xr-inspect-panel").classList.add("hidden");
        overlayRoot.classList.add("hidden");
        canvas.remove();
        if (found) {
          state.score += 3;
          updateScorePill();
          (onFoundFn || (() => renderPuzzle(container, ch)))();
        } else {
          launchBtn.disabled = false;
          launchBtn.textContent = "Reprendre la RA";
          dommage.textContent = "Session RA interrompue — vous pouvez la relancer à tout moment.";
        }
      }
    }).catch((err) => {
      overlayRoot.classList.add("hidden");
      canvas.remove();
      launchBtn.disabled = false;
      launchBtn.textContent = "Réessayer la RA";
      dommage.textContent = `RA indisponible (${(err && err.name) || "erreur"}). Vous pouvez réessayer, ou continuer sans.`;
    });
  }

  launchBtn.addEventListener("click", launch);

  const skipBtn = el("button", "link-btn", "Continuer sans réalité augmentée");
  container.appendChild(skipBtn);
  skipBtn.addEventListener("click", () => (onFoundFn || (() => renderPuzzle(container, ch)))());
}

function renderPuzzle(container, ch) {
  container.innerHTML = "";
  const p = ch.puzzle;

  if (p.type === "jigsaw-image") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    const widget = el("div", "puzzle-widget jigsaw-widget");
    const grid = el("div", "jigsaw-grid jigsaw-grid-image");
    grid.style.gridTemplateColumns = `repeat(${p.cols}, 1fr)`;
    grid.style.aspectRatio = `${p.cols} / ${p.rows}`;
    widget.appendChild(grid);
    const status = el("div", "mirror-hint", "Touchez un premier fragment, puis un second pour les échanger.");
    widget.appendChild(status);
    container.appendChild(widget);

    const total = p.cols * p.rows;
    const imageUrl = GAME_ASSETS[p.imageKey];
    let order = Array.from({ length: total }, (_, i) => i); // pieceIndex présent à chaque emplacement
    do {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    } while (order.every((v, i) => v === i)); // évite un mélange déjà résolu

    let selected = null;
    let solved = false;

    function draw() {
      grid.innerHTML = "";
      order.forEach((pieceIdx, slot) => {
        const col = pieceIdx % p.cols;
        const row = Math.floor(pieceIdx / p.cols);
        const tile = el("button", "jigsaw-tile jigsaw-tile-image" + (selected === slot ? " selected" : ""));
        tile.type = "button";
        tile.dataset.piece = pieceIdx;
        tile.style.backgroundImage = `url(${imageUrl})`;
        tile.style.backgroundSize = `${p.cols * 100}% ${p.rows * 100}%`;
        tile.style.backgroundPosition = `${p.cols > 1 ? (col / (p.cols - 1)) * 100 : 0}% ${p.rows > 1 ? (row / (p.rows - 1)) * 100 : 0}%`;
        tile.disabled = solved;
        tile.addEventListener("click", () => onTileClick(slot));
        grid.appendChild(tile);
      });
    }

    function onTileClick(slot) {
      if (solved) return;
      if (selected === null) { selected = slot; draw(); return; }
      if (selected === slot) { selected = null; draw(); return; }
      [order[selected], order[slot]] = [order[slot], order[selected]];
      selected = null;
      draw();
      if (order.every((v, i) => v === i)) {
        solved = true;
        status.textContent = "Carte reconstituée ✓";
        status.style.color = "var(--ok-bright)";
        draw();
        state.score += 3;
        updateScorePill();
        playTone("right");
        setTimeout(() => {
          const toolsCh = { spatialKey: "tools", hint: "Ils sont souvent posés bien en évidence, pas cachés." };
          // La recherche de l'écusson de Genève appartient au chapitre 2
          // (spatialKey "ch2", avec sa propre énigme et sa réponse à taper) —
          // elle démarrera juste après, via son propre renderChapter().
          routeToGateOrPuzzle(container, toolsCh, () => {
            unlockDossier();
            finishChapter(container, ch);
          }, null, "<strong>Bravo, vous avez trouvé Genève !</strong> Avant d'aller plus loin, un dernier repérage : les outils de décodage doivent être quelque part dans la salle — ils vous serviront toute la partie.");
        }, 700);
      }
    }

    draw();
  }

  else if (p.type === "riddle") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    if (p.imageKey && GAME_ASSETS[p.imageKey]) {
      const box = el("div", "puzzle-widget");
      box.style.background = "#fff";
      box.innerHTML = `<img src="${GAME_ASSETS[p.imageKey]}" style="width:100%; max-width:280px; display:block; margin:0 auto; border-radius:8px;">`;
      container.appendChild(box);
    }
    renderAnswerForm(container, ch);
  }

  else if (p.type === "mirror") {
    const widget = el("div", "puzzle-widget");
    widget.innerHTML = `
      <div class="mirror-text">${p.mirrorText}</div>
      <div class="mirror-hint">Lisez ce texte à l'aide d'un miroir</div>
    `;
    container.appendChild(widget);
    container.appendChild(el("div", "chapter-text", p.prompt));
    container.appendChild(el("div", "chapter-text", p.followup));
    renderAnswerForm(container, ch);
  }

  else if (p.type === "image-choice") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    const grid = el("div", "roman-grid");
    grid.style.gridTemplateColumns = "repeat(2, 1fr)";
    grid.style.gap = "10px";
    p.options.forEach(opt => {
      const btn = el("button", "mode-card");
      btn.style.padding = "10px";
      btn.style.textAlign = "center";
      btn.innerHTML = `<img src="${GAME_ASSETS[opt.key]}" style="width:100%;border-radius:8px;display:block;margin-bottom:6px;">`;
      btn.addEventListener("click", () => {
        if (opt.correct) {
          btn.style.borderColor = "var(--ok)";
          btn.style.boxShadow = "0 0 0 1px var(--ok)";
          markPartialCorrect(container, ch, "C'est le bon écusson — celui de Genève.");
        } else {
          btn.style.borderColor = "var(--danger)";
          setTimeout(() => { btn.style.borderColor = "var(--night-600)"; }, 700);
        }
      });
      grid.appendChild(btn);
    });
    container.appendChild(grid);
    renderAnswerForm(container, ch);
  }

  else if (p.type === "calc") {
    if (p.unlockCode && !state.codesUnlocked[ch.id]) {
      renderCodeLock(container, p.unlockCode, () => {
        state.codesUnlocked[ch.id] = true;
        renderPuzzle(container, ch);
      });
      return;
    }
    const widget = el("div", "puzzle-widget");
    widget.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:28px; letter-spacing:6px; color:var(--flame-bright);">${p.expression}</div>
    `;
    container.appendChild(widget);
    container.appendChild(el("div", "chapter-text", p.prompt));
    renderAnswerForm(container, ch);
  }

  else if (p.type === "rebus") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    const row = el("div", "roman-grid");
    row.style.gridTemplateColumns = "repeat(2, 1fr)";
    row.style.gap = "10px";
    p.images.forEach(img => {
      const box = el("div");
      box.style.background = "#fff";
      box.style.borderRadius = "8px";
      box.style.padding = "10px";
      box.innerHTML = `<img src="${GAME_ASSETS[img.key]}" style="width:100%;display:block;">`;
      row.appendChild(box);
    });
    container.appendChild(row);
    renderAnswerForm(container, ch);
  }

  else if (p.type === "bulletin-code") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    renderAnswerForm(container, ch);
  }
}

function renderCodeLock(container, code, onUnlocked) {
  container.innerHTML = "";
  const widget = el("div", "puzzle-widget code-lock");
  widget.innerHTML = `
    <div class="chapter-text"><strong>🔒 Boîte à cadenas — entrez le code à 4 chiffres trouvé sur le bulletin de Clément Clé.</strong></div>
    <div class="code-lock-digits">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
    </div>
    <div class="answer-feedback"></div>
  `;
  container.appendChild(widget);
  const inputs = $all("input", widget);
  const feedback = $(".answer-feedback", widget);
  inputs.forEach((inp, i) => {
    inp.addEventListener("input", () => {
      inp.value = inp.value.replace(/[^0-9]/g, "");
      if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      if (inputs.every(x => x.value)) {
        const entered = inputs.map(x => x.value).join("");
        if (entered === code) {
          feedback.textContent = "Cadenas ouvert ✓";
          feedback.className = "answer-feedback right";
          playTone("right");
          setTimeout(onUnlocked, 500);
        } else {
          feedback.textContent = "Ce n'est pas le bon code.";
          feedback.className = "answer-feedback wrong";
          playTone("wrong");
        }
      }
    });
  });
}

function markPartialCorrect(container, ch, msg) {
  let note = container.querySelector(".partial-note");
  if (!note) {
    note = el("div", "answer-feedback right partial-note", msg);
    container.appendChild(note);
  }
}

// ---------- formulaire de réponse texte ----------
function renderAnswerForm(container, ch, getValue) {
  const form = el("form", "answer-form");
  const hintLabel = hintButtonLabel();
  const progress = state.chapterProgress;
  const needsConfirm = !!ch.confirmSpatialKey;
  form.innerHTML = getValue ? `
    <button type="submit" class="btn-primary">Valider</button>
    <div class="answer-feedback"></div>
    <div class="hint-block">
      <button type="button" class="hint-toggle">${hintLabel}</button>
      <div class="hint-content">${ch.hint}</div>
    </div>
  ` : `
    <input type="text" placeholder="Votre réponse…" autocomplete="off" required>
    <button type="submit" class="btn-primary">Valider</button>
    <div class="answer-feedback"></div>
    <div class="hint-block">
      <button type="button" class="hint-toggle">${hintLabel}</button>
      <div class="hint-content">${ch.hint}</div>
    </div>
  `;
  const feedback = $(".answer-feedback", form);
  const input = getValue ? null : $("input", form);
  const hintBtn = $(".hint-toggle", form);
  const hintContent = $(".hint-content", form);
  let hintUsed = false;

  // Chercher l'objet dans la salle est possible à tout moment — pas
  // seulement après avoir répondu juste. Peu importe l'ordre : il faut
  // les deux (la réponse ET l'objet trouvé) pour passer au chapitre
  // suivant, mais chacun peut se faire en premier.
  if (needsConfirm) {
    if (progress.objectOk) {
      container.appendChild(el("div", "answer-feedback right", "✓ Objet trouvé dans la salle — il reste à taper la réponse."));
    } else {
      const searchBtn = el("button", "link-btn", "Vous ne savez pas ? Cherchez l'objet dans la salle");
      searchBtn.type = "button"; // sinon, dans un <form>, un bouton sans type vaut "submit" par défaut
      form.appendChild(searchBtn);
      searchBtn.addEventListener("click", () => {
        routeToGateOrPuzzle(container, ch, () => {
          progress.objectOk = true;
          tryFinishChapter(container, ch);
        }, ch.confirmSpatialKey, "<strong>Explorez la salle en réalité augmentée pour trouver l'objet correspondant.</strong>");
      });
    }
  }

  hintBtn.addEventListener("click", () => {
    hintContent.classList.toggle("shown");
    if (!hintUsed) { hintUsed = true; consumeHint(); }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = getValue ? getValue() : input.value;
    const val = normalize(raw);
    const ok = ch.answers.some(a => normalize(a) === val);
    if (ok) {
      feedback.textContent = "Exact.";
      feedback.className = "answer-feedback right";
      if (input) input.disabled = true;
      $("button[type=submit]", form).disabled = true;
      state.score += 3;
      updateScorePill();
      playTone("right");
      if (ch.audioOnSuccess) {
        try { new Audio(ch.audioOnSuccess).play().catch(() => {}); } catch (e) { /* jamais bloquant */ }
      }
      progress.textOk = true;
      const proceed = () => tryFinishChapter(container, ch);
      if (ch.videoOnSuccess) {
        renderVideoTransition(container, ch.videoOnSuccess, proceed);
      } else {
        proceed();
      }
    } else {
      feedback.textContent = "Ce n'est pas ça — regardez encore.";
      feedback.className = "answer-feedback wrong";
      playTone("wrong");
    }
  });

  container.appendChild(form);
}

function renderVideoTransition(container, src, onDone) {
  container.innerHTML = "";
  const wrap = el("div", "video-transition");
  wrap.innerHTML = `
    <video src="${src}" playsinline controls autoplay></video>
    <button type="button" class="btn-primary" style="margin-top:12px;">Continuer →</button>
  `;
  container.appendChild(wrap);
  const video = $("video", wrap);
  const btn = $("button", wrap);
  video.addEventListener("ended", () => btn.classList.add("pulse"));
  btn.addEventListener("click", onDone);
}

// Chapitres avec confirmSpatialKey : il faut la réponse ET l'objet trouvé
// en RA, dans n'importe quel ordre. Rappelé après chacun des deux ; termine
// le chapitre seulement quand les deux sont faits, sinon relance ce qui
// manque encore.
function tryFinishChapter(container, ch) {
  const progress = state.chapterProgress;
  const needsConfirm = !!ch.confirmSpatialKey;
  if (progress.textOk && (!needsConfirm || progress.objectOk)) {
    finishChapter(container, ch);
    return;
  }
  if (!progress.textOk) {
    renderPuzzle(container, ch);
  } else {
    routeToGateOrPuzzle(container, ch, () => {
      progress.objectOk = true;
      tryFinishChapter(container, ch);
    }, ch.confirmSpatialKey, "<strong>Bonne réponse. Confirmez-le en trouvant, en réalité augmentée, l'objet qui s'y réfère dans la salle.</strong>");
  }
}

// ---------- mini-jeu "vrai ou légende ?" avant de révéler historicalNote ----------
function renderHistoricalGuess(container, ch) {
  const box = el("div", "historical-note");
  box.innerHTML = `
    <div class="historical-note-label">📜 Vrai ou légende ?</div>
    <div class="chapter-text" style="margin:0 0 12px;">${escapeHtml(ch.historicalClaim)}</div>
    <div class="historical-guess-actions">
      <button type="button" class="btn-secondary" data-guess="true">Vrai</button>
      <button type="button" class="btn-secondary" data-guess="false">Légende</button>
    </div>
  `;
  container.appendChild(box);
  const actions = $(".historical-guess-actions", box);
  actions.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const guessedLegend = btn.dataset.guess === "false";
      const correct = guessedLegend === !!ch.historicalIsLegend;
      actions.querySelectorAll("button").forEach(b => b.disabled = true);
      playTone(correct ? "right" : "wrong");
      const result = el("div", `answer-feedback ${correct ? "right" : "wrong"}`,
        correct ? "✓ Bien vu !" : `✗ En fait, c'est ${ch.historicalIsLegend ? "une légende" : "vrai"}.`);
      box.appendChild(result);
      box.appendChild(el("div", "chapter-text", escapeHtml(ch.historicalNote)));
    });
  });
}

function finishChapter(container, ch) {
  // Journal d'enquête : un point de chronologie par chapitre résolu, dans
  // l'ordre — consultable depuis le carnet (📖) pendant toute la partie.
  state.timelineEntries.push({ title: ch.title, historicalTime: ch.historicalTime, successNote: ch.successNote });

  const note = el("div", "chapter-text", `<em>${ch.successNote}</em>`);
  note.style.marginTop = "14px";
  note.style.color = "var(--ok-bright)";
  container.appendChild(note);

  if (ch.historicalNote) {
    if (ch.historicalClaim) {
      renderHistoricalGuess(container, ch);
    } else {
      const histBox = el("div", "historical-note");
      histBox.innerHTML = `<div class="historical-note-label">📜 Le sais-tu ? Histoire vs légende</div><div>${escapeHtml(ch.historicalNote)}</div>`;
      container.appendChild(histBox);
    }
  }

  // bonus de précision (chasse RA réussie sans toucher un leurre)
  if (state.lastGateWrongCount === 0 && ch.spatialKey) {
    state.score += 2;
    updateScorePill();
    container.appendChild(el("div", "answer-feedback right", "🎯 Bonus précision : trouvé du premier coup (+2 pts)"));
  }

  // déblocage de la carte de personnage
  if (ch.character) {
    state.unlockedCards.push(ch.character);
    $("#carnet-btn").classList.remove("hidden");
    playTone("unlock");
    const unlock = el("div", "character-unlock");
    unlock.innerHTML = `
      <div class="character-unlock-label">Personnage débloqué</div>
      <div class="character-unlock-name">${escapeHtml(ch.character.name)}</div>
      <div class="character-unlock-role">${escapeHtml(ch.character.role)}</div>
    `;
    container.appendChild(unlock);
  }

  // mini-jeux bonus optionnels (jamais bloquants)
  if (ch.bonus === "patois") renderPatoisBonus(container);
  if (ch.bonus === "canon") renderCanonBonus(container);

  const btn = el("button", "btn-primary", ch.isFinal ? "Voir la conclusion" : "Continuer →");
  btn.style.marginTop = "16px";
  btn.addEventListener("click", () => {
    if (ch.isFinal) {
      renderFinale();
    } else {
      renderChapter(state.currentChapter + 1);
    }
  });
  container.appendChild(btn);
}

// ---------- bonus patois (après chapitre 6) ----------
function renderPatoisBonus(container) {
  const b = window.PATOIS_BONUS;
  if (!b) return;
  const box = el("div", "puzzle-widget bonus-widget");
  box.innerHTML = `
    <div class="immersive-badge">🎁 Bonus optionnel — traduction du patois</div>
    <div class="chapter-text"><strong>« ${b.word} »</strong><br>${b.prompt}</div>
  `;
  const opts = el("div", "bonus-options");
  b.options.forEach(o => {
    const btn = el("button", "btn-secondary", o.text);
    btn.style.marginBottom = "6px";
    btn.addEventListener("click", () => {
      if (o.correct) {
        btn.style.borderColor = "var(--ok)"; btn.style.color = "var(--ok-bright)";
        state.score += 1; updateScorePill(); playTone("right");
      } else {
        btn.style.borderColor = "var(--danger)"; playTone("wrong");
      }
      $all("button", opts).forEach(b2 => b2.disabled = true);
    });
    opts.appendChild(btn);
  });
  box.appendChild(opts);
  container.appendChild(box);
}

// ---------- mini-jeu bonus canon (après chapitre 7) ----------
function renderCanonBonus(container) {
  const box = el("div", "puzzle-widget bonus-widget");
  box.innerHTML = `<div class="immersive-badge">🎁 Bonus optionnel — tir de précision</div>
    <div class="chapter-text">Touchez la cible avant qu'elle ne s'échappe. 3 tirs.</div>
    <div class="canon-range"><div class="canon-target"></div></div>
    <div class="canon-result"></div>`;
  container.appendChild(box);

  const range = $(".canon-range", box);
  const target = $(".canon-target", box);
  const result = $(".canon-result", box);
  let shots = 0, hits = 0;

  function moveTarget() {
    const maxX = range.clientWidth - 40;
    target.style.left = Math.max(0, Math.random() * maxX) + "px";
    target.style.top = (10 + Math.random() * 40) + "px";
  }
  moveTarget();

  function endGame() {
    const bonus = hits * 1;
    if (bonus > 0) { state.score += bonus; updateScorePill(); }
    result.textContent = `${hits}/3 touchés — +${bonus} pt${bonus > 1 ? "s" : ""}`;
    range.style.pointerEvents = "none";
  }

  range.addEventListener("click", (e) => {
    if (shots >= 3) return;
    shots++;
    const rect = target.getBoundingClientRect();
    const inX = e.clientX >= rect.left && e.clientX <= rect.right;
    const inY = e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (inX && inY) { hits++; playTone("right"); } else { playTone("wrong"); }
    if (shots >= 3) endGame(); else moveTarget();
  });
}

// ---------- chapitre 8 : bulletin à lettres surlignées puis obscurité ----------
// ============================================================================
// FINALE
// ============================================================================
function renderFinale() {
  ArEngine.detach();
  stopTimerLoop();
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  $("#score-pill").classList.add("hidden");
  $("#minimap").classList.add("hidden");

  const finalTime = elapsedLabel();
  if (window.Leaderboard) {
    Leaderboard.update({ name: teamDisplayName(), score: state.score, chapter: CHAPTERS.length, total: CHAPTERS.length, finished: true, time: finalTime });
  }

  const card = el("div", "chapter-card");
  card.style.textAlign = "center";
  card.innerHTML = `
    <div class="chapter-label">Affaire résolue</div>
    <div class="chapter-title">Bravo, ${escapeHtml(state.teamName)} !</div>
    <div class="finale-reveal">
      ${(window.ACCUSATION_WORDS || []).map(w => `<span class="finale-word revealed">${w}</span>`).join("")}
    </div>
    <p class="chapter-text">Vous avez retracé toute la nuit du 12 décembre 1602, de l'échelle jusqu'à la marmite — et démasqué qui, dans cette salle, n'était jamais parti.</p>
    ${window.MARMITE_ROOM_CODE ? `<p class="chapter-text" style="color:var(--heraldry-gold); font-family:var(--font-mono); font-size:16px; letter-spacing:0.1em;">La marmite est cachée en salle ${escapeHtml(window.MARMITE_ROOM_CODE)}</p>` : ""}
    <p class="chapter-text" style="color:var(--heraldry-gold); font-family:var(--font-mono); font-size:14px;">Score final : ${state.score} points · Temps : ${finalTime}</p>
    <button class="btn-primary" id="btn-open-quiz" style="margin-top:10px;">Quiz bonus sur l'Escalade</button>
    <button class="btn-secondary" id="btn-open-carnet-final" style="margin-top:10px;">Voir le carnet complet</button>
    <button class="btn-secondary" id="btn-open-chrono" style="margin-top:10px;">Revoir la chronologie de la nuit</button>
    <button class="btn-secondary" id="btn-open-salle-noire" style="margin-top:10px;">🕯️ Bonus : la Salle noire</button>
    <div class="expert-moment">
      <div class="historical-note-label">🎤 Moment expert</div>
      <div class="chapter-text">Avant de rendre l'écran, choisissez une carte de votre carnet et expliquez-la en une phrase au reste de la classe.</div>
    </div>
  `;
  mount.appendChild(card);
  $("#btn-open-quiz", card).addEventListener("click", renderQuizBonus);
  $("#btn-open-carnet-final", card).addEventListener("click", openCarnet);
  $("#btn-open-chrono", card).addEventListener("click", openChronologie);
  $("#btn-open-salle-noire", card).addEventListener("click", () => renderSalleNoireBonus(false));
  launchConfetti();
  setTimeout(renderEndCredits, 1600);
}

// ============================================================================
// BONUS OPTIONNEL — LA SALLE NOIRE
// Débloqué depuis l'écran de fin uniquement. Fonctions entièrement à part :
// ne lisent ni ne modifient aucun état des 8 chapitres (state.score,
// state.difficulty, etc. ne sont pas touchés). Basé sur le vrai concept
// "Salle noire" (cadenas chimie, indices UV/braille/son) et sur le journal
// de bord de Mère Royaume retrouvés dans les archives du projet.
// ============================================================================
// Vue : une note du manuel de Zoé Royaume désigne LEQUEL des 4 symboles
// compte (les autres sont des leurres) — pas de lampe UV, l'obscurité est
// détectée pour de vrai via ArEngine.watchDarkness (luminance de la caméra),
// donc les élèves éteignent réellement la lumière de la salle.
const SALLE_NOIRE_ELEMENT_CLUE = "Une note griffonnée dans la marge dit : « le gaz qui nourrit le feu ».";
const SALLE_NOIRE_ELEMENTS_SHOWN = [
  { symbol: "H", name: "Hydrogène", z: 1 },
  { symbol: "N", name: "Azote", z: 7 },
  { symbol: "O", name: "Oxygène", z: 8 },
  { symbol: "C", name: "Carbone", z: 6 },
];
const SALLE_NOIRE_VUE_DIGIT = 8; // Oxygène : le gaz qui nourrit le feu

// Toucher : la vibration (avec repli visuel) code un CHIFFRE en morse
// directement (pas une lettre) — table complète (lettres + chiffres) dans
// le nouvel onglet "Code Morse" du porte-documents.
const SALLE_NOIRE_TOUCH_DIGIT = 3;

// Ouïe : synthèse vocale du téléphone — aucun fichier audio nécessaire,
// juste la voix de l'appareil qui prononce une phrase où un chiffre est dit
// en toutes lettres.
const SALLE_NOIRE_OUIE_PHRASE = "Sept coups de canon résonnent dans la nuit.";
const SALLE_NOIRE_OUIE_DIGIT = 7;

// Odorat / Goût : 10 propositions chacun — la position (0 à 9) de la bonne
// réponse dans la liste EST le chiffre, pas besoin d'autre codage.
const SALLE_NOIRE_SMELL_OPTIONS = ["Du pain frais", "De la lavande", "Du vinaigre", "De la fumée de bois", "De la poudre à canon", "Du café", "Des herbes de Provence", "Du savon", "De la cire d'abeille", "Du cuir"];
const SALLE_NOIRE_SMELL_CORRECT = 4; // "De la poudre à canon" — écho à la canonnade
const SALLE_NOIRE_TASTE_OPTIONS = ["Fraise", "Menthe", "Citron", "Chocolat", "Vanille", "Carotte", "Réglisse", "Miel", "Pomme", "Caramel"];
const SALLE_NOIRE_TASTE_CORRECT = 5; // "Carotte" — les légumes enfermés dans le coffre

// 5 sens, 5 chiffres — mais le cadenas n'en veut que 4. Un sens est exclu
// (counts:false), signalé par une icône biffée plutôt qu'annoncé en toutes
// lettres. L'ordre ci-dessous fixe l'ordre attendu au cadenas.
const SALLE_NOIRE_SENSES = [
  { key: "vue", icon: "👁️", label: "Vue", digit: SALLE_NOIRE_VUE_DIGIT, counts: true },
  { key: "toucher", icon: "✋", label: "Toucher", digit: SALLE_NOIRE_TOUCH_DIGIT, counts: true },
  { key: "ouie", icon: "👂", label: "Ouïe", digit: SALLE_NOIRE_OUIE_DIGIT, counts: true },
  { key: "odorat", icon: "👃", label: "Odorat", digit: SALLE_NOIRE_SMELL_CORRECT, counts: false },
  { key: "gout", icon: "👄", label: "Goût", digit: SALLE_NOIRE_TASTE_CORRECT, counts: true },
];
const SALLE_NOIRE_CODE = SALLE_NOIRE_SENSES.filter(s => s.counts).map(s => s.digit).join("");

// Table des 20 premiers éléments, pour que les élèves vérifient eux-mêmes
// à quel symbole correspond quel numéro atomique.
const PERIODIC_TABLE_20 = [
  ["H",1],["He",2],["Li",3],["Be",4],["B",5],["C",6],["N",7],["O",8],["F",9],["Ne",10],
  ["Na",11],["Mg",12],["Al",13],["Si",14],["P",15],["S",16],["Cl",17],["Ar",18],["K",19],["Ca",20],
];
// Morse international standard (lettres + chiffres), table complète pour le
// nouvel onglet du porte-documents (voir openDossier) — les élèves
// traduisent eux-mêmes la vibration/le motif visuel qu'ils reçoivent.
const MORSE_TABLE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
};

const MERE_ROYAUME_JOURNAL = [
  { date: "13.12.1602", author: "Mère Royaume", text: "Aujourd'hui, je me suis confrontée à ce maudit coffre, mais impossible de l'ouvrir, même à la hache… Cela m'a mise dans une rage folle, surtout contre ce Savoyard qui a enfermé mes légumes à l'intérieur ! Ils ont perdu la guerre — alors moi et ma lignée aurons ce coffre !" },
  { date: "23.05.1806", author: "Auguste Royaume", text: "Mais pourquoi s'embêter avec ces maudits légumes. Ils doivent être pourris depuis le temps… on pourrait juste en racheter d'autres." },
  { date: "05.03.1912", author: "Iphigénie Royaume", text: "J'ai proclamé avec arrogance que je réussirais là où les autres ont échoué. Je dois avouer que je suis dépassée par ces maudites énigmes. Je dois humblement chercher de l'aide." },
  { date: "07.02.2001", author: "Paul Royaume", text: "Un cadenas à 4 possibilités… une date ? Je sais celle du soldat. Je vais le retrouver et lui demander." },
  { date: "18.11.2012", author: "Athéna Royaume", text: "Mon désespoir grandit devant ce maudit cadenas. Comment résoudre le dilemme de ces 5 symboles avec un cadenas qui n'en compte que 4 ? Je refuse d'abandonner." },
  { date: "30.03.2019", author: "Ferdinand Royaume", text: "Vous pensez que le soldat s'en veut… car peut-être a-t-il dit à sa famille comment faire ?" },
  { date: "10.05.2021", author: "Zoé Royaume", text: "Par chance, j'ai trouvé un vieux manuel de chimie qui pourrait être notre salut. Le tableau périodique pourrait nous aider à déchiffrer cette énigme." },
  { date: "19.04.2024", author: "Sahra Royaume", text: "La maison doit rester propre. Chaque chose à sa place. Les assiettes dans la cuisine, le canapé au salon, les paires de chaussettes avec les paires de chaussettes !" },
];

// Le synopsis (Mère Royaume et ses légumes) s'affiche en premier, avant
// toute mécanique de jeu.
function renderSalleNoireBonus(standalone) {
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  const card = el("div", "chapter-card");
  card.innerHTML = `
    <div class="immersive-badge">🕯️ Bonus optionnel — La Salle noire</div>
    <div class="chapter-title">Le coffre à légumes de Mère Royaume</div>
    <p class="chapter-text">Cette nuit-là, un soldat savoyard en déroute enferma dans un coffre les derniers légumes qu'il avait volés avant de fuir. Mère Royaume, furieuse, jura que sa lignée finirait par l'ouvrir. Quatre siècles plus tard, tous ses descendants s'y sont cassé les dents — la dernière, Zoé Royaume, a laissé un vieux manuel de chimie avant d'abandonner : « le tableau périodique pourrait nous aider à déchiffrer cette énigme. »</p>
    <p class="chapter-text" style="opacity:.85; font-style:italic;">Cinq sens, un cadenas à 4 chiffres — à vous de finir ce que Zoé a commencé. Aucun matériel n'est nécessaire : juste votre téléphone, et la possibilité d'éteindre la lumière de la salle un instant.</p>
    <button class="btn-primary" id="sn-start" style="margin-top:14px;">Commencer</button>
  `;
  mount.appendChild(card);
  $("#sn-start", card).addEventListener("click", () => renderSalleNoireSenses(standalone));
}

function renderSalleNoireSenses(standalone) {
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  const card = el("div", "chapter-card");
  card.innerHTML = `
    <div class="immersive-badge">🕯️ La Salle noire</div>
    <div class="chapter-title">Cinq sens, quatre chiffres</div>
    <p class="chapter-text"><strong>Éteignez la lumière de la salle.</strong> Une vieille lampe UV traîne dans un tiroir — en réalité, c'est la caméra du téléphone qui fait le travail (rien à acheter, ni lampe ni piles). Dès que l'obscurité est détectée, les 5 sens apparaissent d'un coup, phosphorescents (il y a peu d'éléments dans la salle, pas besoin de les chercher un par un). Touchez une icône pour explorer ce sens. Une fois les indices notés, <strong>rallumez la lumière</strong> avant de continuer.</p>
    <div class="ar-video-wrap" style="max-width:280px; margin:10px auto;">
      <video playsinline muted></video>
      <canvas class="ar-overlay"></canvas>
    </div>
    <div class="ar-status" id="sn-dark-status">Caméra inactive</div>
    <button class="btn-secondary" id="sn-dark-start">🔦 Allumer la lampe UV</button>
    <div id="sn-icon-row" class="hidden sn-uv-glow" style="display:flex; justify-content:center; gap:16px; font-size:32px; margin-top:16px; padding:14px; border-radius:10px;"></div>
  `;
  mount.appendChild(card);

  const darkVideo = $("video", card), darkCanvas = $(".ar-overlay", card);
  const darkStatus = $("#sn-dark-status", card);
  const iconRow = $("#sn-icon-row", card);

  // ---------------- Vue : contenu (icône = 👁️) ----------------
  const vueBox = el("div", "puzzle-widget hidden");
  vueBox.id = "sn-box-vue";
  vueBox.style.marginTop = "14px";
  vueBox.innerHTML = `
    <div class="chapter-text">👁️ <strong>Vue</strong></div>
    <p class="chapter-text" style="font-style:italic;">${SALLE_NOIRE_ELEMENT_CLUE}</p>
    <p class="chapter-text" style="font-size:12px; opacity:.8;">Un seul de ces symboles compte — les autres sont des leurres. Le porte-documents (onglet « Table des éléments ») donne les numéros atomiques.</p>
    <div class="roman-grid" id="sn-vue-grid" style="grid-template-columns:repeat(4,1fr); gap:8px;"></div>
  `;
  card.appendChild(vueBox);
  const vueGrid = $("#sn-vue-grid", vueBox);
  vueGrid.innerHTML = SALLE_NOIRE_ELEMENTS_SHOWN.map(e => `
    <button type="button" class="sn-elem-btn sn-uv-glow" data-z="${e.z}" style="padding:10px; border-radius:8px; cursor:pointer;">
      <div style="font-size:22px;">${e.symbol}</div>
      <div style="font-size:11px;">${e.name}</div>
    </button>`).join("");
  $all(".sn-elem-btn", vueGrid).forEach(btn => {
    btn.addEventListener("click", () => {
      const ok = Number(btn.dataset.z) === SALLE_NOIRE_VUE_DIGIT;
      btn.style.borderColor = ok ? "var(--ok)" : "var(--danger)";
      playTone(ok ? "right" : "wrong");
    });
  });

  // ---------------- Toucher : contenu (icône = ✋) ----------------
  const touchBox = el("div", "puzzle-widget hidden");
  touchBox.id = "sn-box-toucher";
  touchBox.style.marginTop = "14px";
  touchBox.innerHTML = `
    <div class="chapter-text">✋ <strong>Toucher</strong> — un mécanisme fait vibrer votre main : un rythme, comme un vieux code. Le porte-documents (onglet « Code Morse ») traduit ce rythme en chiffre.</div>
    <button class="btn-secondary" id="sn-vibrate">Sentir le rythme</button>
    <div id="sn-morse-visual" style="font-family:var(--font-mono); font-size:26px; letter-spacing:10px; margin-top:12px; min-height:32px; text-align:center;"></div>
  `;
  card.appendChild(touchBox);
  $("#sn-vibrate", touchBox).addEventListener("click", () => {
    const morse = MORSE_TABLE[String(SALLE_NOIRE_TOUCH_DIGIT)];
    const unit = 220;
    const pattern = [];
    morse.split("").forEach((c, i) => {
      pattern.push(c === "." ? unit : unit * 3);
      if (i < morse.length - 1) pattern.push(unit);
    });
    if (navigator.vibrate) navigator.vibrate(pattern);
    // Repli visuel : chaque point/trait s'affiche au rythme de la
    // vibration, pour que ça fonctionne aussi sans vibreur (iPhone).
    const visual = $("#sn-morse-visual", touchBox);
    visual.textContent = "";
    let t = 0;
    morse.split("").forEach(c => {
      setTimeout(() => { visual.textContent += c; }, t);
      t += (c === "." ? unit : unit * 3) + unit;
    });
    playTone("right");
  });

  // ---------------- Ouïe : contenu (icône = 👂), aucun fichier audio ----------------
  const earBox = el("div", "puzzle-widget hidden");
  earBox.id = "sn-box-ouie";
  earBox.style.marginTop = "14px";
  earBox.innerHTML = `<div class="chapter-text">👂 <strong>Ouïe</strong> — une voix murmure dans le noir. Un chiffre s'y cache, en toutes lettres.</div>
    <button class="btn-secondary" id="sn-listen">🔊 Écouter</button>`;
  card.appendChild(earBox);
  $("#sn-listen", earBox).addEventListener("click", () => {
    if (!("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(SALLE_NOIRE_OUIE_PHRASE);
    u.lang = "fr-FR";
    speechSynthesis.speak(u);
  });

  // ---------------- Odorat / Goût : contenu (icônes = 👃 / 👄) ----------------
  const smellBox = el("div", "puzzle-widget hidden");
  smellBox.id = "sn-box-odorat";
  smellBox.style.marginTop = "14px";
  smellBox.innerHTML = `<div class="chapter-text">👃 <strong>Odorat</strong> — une odeur âcre et piquante, presque brûlée, flotte soudain dans l'air.</div>`;
  card.appendChild(smellBox);
  buildQcm10(smellBox, SALLE_NOIRE_SMELL_OPTIONS, SALLE_NOIRE_SMELL_CORRECT);

  const tasteBox = el("div", "puzzle-widget hidden");
  tasteBox.id = "sn-box-gout";
  tasteBox.style.marginTop = "14px";
  tasteBox.innerHTML = `<div class="chapter-text">👄 <strong>Goût</strong> — un bonbon au goût surprenant, presque terreux.</div>`;
  card.appendChild(tasteBox);
  buildQcm10(tasteBox, SALLE_NOIRE_TASTE_OPTIONS, SALLE_NOIRE_TASTE_CORRECT);

  // ---------------- Icônes des 5 sens : révélées d'un coup dans le noir ----------------
  const SENSE_ICON_BOXES = { vue: vueBox, toucher: touchBox, ouie: earBox, odorat: smellBox, gout: tasteBox };
  iconRow.innerHTML = SALLE_NOIRE_SENSES.map(s => `<button type="button" class="sn-sense-icon" data-key="${s.key}" style="background:none; border:none; cursor:pointer; opacity:.85;">${s.icon}</button>`).join("");
  $all(".sn-sense-icon", iconRow).forEach(btn => {
    btn.addEventListener("click", () => {
      SENSE_ICON_BOXES[btn.dataset.key].classList.remove("hidden");
      btn.style.opacity = "1";
      btn.style.transform = "scale(1.15)";
      playTone("right");
    });
  });

  $("#sn-dark-start", card).addEventListener("click", async () => {
    darkStatus.textContent = "Connexion à la caméra…";
    const res = await ArEngine.attach(darkVideo, darkCanvas);
    if (!res.ok) {
      darkStatus.textContent = "Caméra inaccessible.";
      if (!$("#sn-dark-fallback", card)) {
        const fb = el("button", "btn-secondary", "Je confirme que la lumière est éteinte");
        fb.id = "sn-dark-fallback";
        fb.style.marginTop = "8px";
        fb.addEventListener("click", () => {
          darkStatus.textContent = "Obscurité confirmée ✓ — la lampe UV révèle les 5 sens.";
          darkStatus.className = "ar-status ok";
          iconRow.classList.remove("hidden");
          fb.remove();
          playTone("right");
        });
        card.insertBefore(fb, iconRow);
      }
      return;
    }
    darkStatus.textContent = "Lampe UV prête — éteignez la lumière de la salle.";
    darkStatus.className = "ar-status ok";
    $("#sn-dark-start", card).style.display = "none";
    if (state.testMode) {
      darkStatus.textContent = "Mode test ✓ — la lampe UV révèle les 5 sens.";
      iconRow.classList.remove("hidden");
    }
    ArEngine.watchDarkness(isDark => {
      if (isDark) {
        darkStatus.textContent = "Obscurité détectée ✓ — la lampe UV révèle les 5 sens.";
        iconRow.classList.remove("hidden");
        playTone("right");
      } else {
        darkStatus.textContent = "Lumière rallumée ✓";
      }
    });
  });

  // ---------------- La clé de lecture (un sens ne compte pas — pas annoncé en clair) ----------------
  const keyBox = el("div", "puzzle-widget");
  keyBox.style.cssText = "margin-top:14px; text-align:center;";
  keyBox.innerHTML = `
    <p class="chapter-text" style="font-style:italic;">Dans la marge du manuel de Zoé, une tache d'encre a maculé un pictogramme.</p>
    <div style="display:flex; justify-content:center; gap:14px; font-size:28px; margin-top:6px;">
      ${SALLE_NOIRE_SENSES.map(s => `<span style="position:relative; display:inline-block;">${s.icon}${s.counts ? "" : '<span style="position:absolute; left:-4px; top:48%; width:36px; height:3px; background:var(--danger); transform:rotate(-18deg);"></span>'}</span>`).join("")}
    </div>
  `;
  card.appendChild(keyBox);

  // ---------------- Le cadenas ----------------
  const lockBox = el("div", "puzzle-widget");
  lockBox.style.cssText = "margin-top:14px;";
  lockBox.innerHTML = `<div class="chapter-text"><strong>🔒 Le coffre a un cadenas à 4 chiffres.</strong> Quatre des cinq sens comptent — entrez leurs chiffres dans l'ordre : vue, toucher, ouïe, goût.</div>
    <div class="code-lock-digits" id="sn-digits">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
      <input type="text" inputmode="numeric" maxlength="1">
    </div>
    <div class="answer-feedback" id="sn-feedback"></div>`;
  card.appendChild(lockBox);
  const snInputs = $all("input", lockBox);
  const snFeedback = $("#sn-feedback", lockBox);
  snInputs.forEach((inp, i) => {
    inp.addEventListener("input", () => {
      inp.value = inp.value.replace(/[^0-9]/g, "");
      if (inp.value && snInputs[i + 1]) snInputs[i + 1].focus();
      if (snInputs.every(x => x.value)) {
        const entered = snInputs.map(x => x.value).join("");
        if (entered === SALLE_NOIRE_CODE) {
          snFeedback.textContent = "Le coffre s'ouvre ✓";
          snFeedback.className = "answer-feedback right";
          playTone("right");
          ArEngine.detach();
          setTimeout(() => renderSalleNoireJournal(standalone), 500);
        } else {
          snFeedback.textContent = "Ce n'est pas le bon code.";
          snFeedback.className = "answer-feedback wrong";
          playTone("wrong");
        }
      }
    });
  });

  const backBtn = el("button", "btn-secondary", "← Retour");
  backBtn.style.marginTop = "14px";
  backBtn.addEventListener("click", () => {
    ArEngine.detach();
    standalone ? showScreen("difficulty") : renderFinale();
  });
  card.appendChild(backBtn);
}

// QCM générique à 10 propositions (odorat/goût) : pas de pénalité, un
// nouvel essai est toujours possible, purement là pour faire chercher —
// la vraie vérification a lieu au cadenas final.
function buildQcm10(container, options, correctIndex) {
  const row = el("div", "roman-grid");
  row.style.cssText = "grid-template-columns:repeat(2,1fr); gap:6px; margin-top:10px;";
  const feedback = el("div", "answer-feedback");
  feedback.style.marginTop = "8px";
  options.forEach((label, i) => {
    const btn = el("button", "mode-card", `<div class="mode-card-desc" style="font-size:12px;">${label}</div>`);
    btn.type = "button";
    btn.style.padding = "8px";
    btn.addEventListener("click", () => {
      if (i === correctIndex) {
        btn.style.borderColor = "var(--ok)";
        feedback.textContent = "✓ Ça semble être ça.";
        feedback.className = "answer-feedback right";
        playTone("right");
      } else {
        btn.style.borderColor = "var(--danger)";
        feedback.textContent = "Pas tout à fait — réessayez.";
        feedback.className = "answer-feedback wrong";
        playTone("wrong");
        setTimeout(() => { btn.style.borderColor = ""; }, 700);
      }
    });
    row.appendChild(btn);
  });
  container.appendChild(row);
  container.appendChild(feedback);
}

function renderSalleNoireJournal(standalone) {
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  launchConfetti();
  const card = el("div", "chapter-card");
  card.innerHTML = `
    <div class="immersive-badge">🥕 Bonus résolu — le journal de bord des Royaume</div>
    <div class="chapter-title">Quatre siècles de coffre têtu</div>
    <p class="chapter-text">À l'intérieur : des légumes (bien secs) et un carnet transmis de génération en génération.</p>
    <div id="sn-journal-list"></div>
    <button class="btn-primary" id="sn-journal-back" style="margin-top:14px;">Retour</button>
  `;
  mount.appendChild(card);
  const list = $("#sn-journal-list", card);
  MERE_ROYAUME_JOURNAL.forEach(entry => {
    const line = el("div", "chapter-text");
    line.style.cssText = "border-left:2px solid var(--heraldry-gold); padding:8px 12px; margin:8px 0; text-align:left;";
    line.innerHTML = `<strong style="color:var(--heraldry-gold);">${entry.date} — ${escapeHtml(entry.author)}</strong><br>${escapeHtml(entry.text)}`;
    list.appendChild(line);
  });
  $("#sn-journal-back", card).addEventListener("click", () => { standalone ? showScreen("difficulty") : renderFinale(); });
}

function renderEndCredits() {
  const credits = el("div", "end-credits");
  credits.innerHTML = `
    <div class="end-credits-scroll">
      <div>ESCALADE 1602</div>
      <div>—</div>
      <div>Une enquête menée par</div>
      <div class="end-credits-team">${escapeHtml(state.teamName)}</div>
      <div>—</div>
      <div>D'après le jeu de salle original</div>
      <div>Cycle de Drize</div>
      <div>—</div>
      <div>Ah ! La belle Escalade,<br>Savoyards, Savoyards…</div>
    </div>
  `;
  document.body.appendChild(credits);
  setTimeout(() => credits.remove(), 7000);
  credits.addEventListener("click", () => credits.remove());
}

// ---------- quiz bonus final (chronométré) ----------
function renderQuizBonus() {
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  const questions = window.QUIZ_QUESTIONS || [];
  let qi = 0, quizScore = 0;

  function renderQuestion() {
    if (qi >= questions.length) return renderResult();
    const q = questions[qi];
    const card = el("div", "chapter-card");
    card.innerHTML = `
      <div class="chapter-label">Question ${qi + 1} / ${questions.length}</div>
      <div class="chapter-title" style="font-size:22px;">${escapeHtml(q.q)}</div>
      <div class="quiz-timer"><div class="quiz-timer-bar"></div></div>
    `;
    const opts = el("div", "quiz-options");
    q.options.forEach((optText, i) => {
      const btn = el("button", "btn-secondary quiz-opt", optText);
      btn.addEventListener("click", () => selectAnswer(i));
      opts.appendChild(btn);
    });
    card.appendChild(opts);
    mount.appendChild(card);

    const bar = $(".quiz-timer-bar", card);
    let timeLeft = quizTimeLimit();
    const start = performance.now();
    let answered = false;
    function tick(ts) {
      if (answered) return;
      const elapsed = ts - start;
      const pct = Math.max(0, 1 - elapsed / timeLeft);
      bar.style.width = (pct * 100) + "%";
      if (elapsed >= timeLeft) { selectAnswer(-1); return; }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    function selectAnswer(i) {
      if (answered) return;
      answered = true;
      $all(".quiz-opt", opts).forEach((b, idx) => {
        if (idx === q.correctIndex) b.style.borderColor = "var(--ok)";
        else if (idx === i) b.style.borderColor = "var(--danger)";
        b.disabled = true;
      });
      if (i === q.correctIndex) { quizScore++; playTone("right"); } else { playTone("wrong"); }
      setTimeout(() => { qi++; renderQuestion(); }, 900);
    }
  }

  function renderResult() {
    const bonus = quizScore * 2;
    state.score += bonus;
    const card = el("div", "chapter-card");
    card.style.textAlign = "center";
    card.innerHTML = `
      <div class="chapter-title">Quiz terminé !</div>
      <p class="chapter-text">${quizScore} / ${questions.length} bonnes réponses — +${bonus} points bonus</p>
      <p class="chapter-text" style="color:var(--heraldry-gold); font-family:var(--font-mono);">Score total : ${state.score} points</p>
    `;
    mount.appendChild(card);
    if (window.Leaderboard) {
      Leaderboard.update({ name: teamDisplayName(), score: state.score, chapter: CHAPTERS.length, total: CHAPTERS.length, finished: true, time: elapsedLabel() });
    }
  }

  renderQuestion();
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

// container : où ajouter le canvas des confettis. Par défaut document.body —
// mais pendant une session RA immersive, SEUL le contenu de la zone
// dom-overlay (#xr-overlay-root) est affiché par le navigateur ; tout ce
// qui est ajouté ailleurs (document.body) reste invisible jusqu'à la
// sortie de la RA. D'où l'appel explicite avec overlayRoot depuis
// renderSpatialGate, pour que les confettis se voient immédiatement,
// pendant qu'on est encore en RA — pas après.
function launchConfetti(container = document.body) {
  const canvas = el("canvas", "confetti-canvas");
  container.appendChild(canvas);
  const ctx = canvas.getContext && canvas.getContext("2d");
  if (!ctx) { canvas.remove(); return; } // environnement sans support canvas — on ignore l'effet, sans casser le jeu
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#e7a94c", "#c9a13b", "#a53238", "#ece3cf"];
  const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height,
    r: 3 + Math.random() * 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    vy: 2 + Math.random() * 3,
    vx: -1 + Math.random() * 2,
    rot: Math.random() * Math.PI,
    vr: -0.1 + Math.random() * 0.2,
  }));

  let frame = 0;
  function tick() {
    frame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
      ctx.restore();
    });
    if (frame < 260) requestAnimationFrame(tick);
    else canvas.remove();
  }
  tick();
}
