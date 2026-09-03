// ============================================================================
// SCRIPT PRINCIPAL — navigation, rendu des chapitres, validation des réponses
// ============================================================================

const state = {
  teamName: "",
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
  lastGateWrongCount: 0,
  soundOn: true,
  difficulty: "normal",
  achievements: { noHint: true, perfectAll: true },
  snapshots: [],
};

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

// ---------- écran accueil ----------
$("#form-team").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = $("#team-name").value.trim();
  if (!val) return;
  state.teamName = val;
  if (window.Leaderboard) {
    Leaderboard.setTeam(val);
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
    $all(".mode-card[data-difficulty]").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    state.difficulty = card.dataset.difficulty;
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
  const canvas = el("canvas", "xr-canvas");
  canvas.id = "xr-render-canvas";
  document.body.appendChild(canvas);

  try {
    await ArXR.calibrate({
      canvas,
      overlayRoot,
      onCalibrated: () => {
        state.calibrated = true;
        ArXR.endSession();
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

  const minimap = el("div", "minimap hidden");
  minimap.id = "minimap";
  document.body.appendChild(minimap);

  const carnetModal = el("div", "carnet-modal hidden");
  carnetModal.id = "carnet-modal";
  document.body.appendChild(carnetModal);
})();

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
  modal.innerHTML = `
    <div class="carnet-inner">
      <div class="carnet-header">
        <div class="chapter-title" style="font-size:22px;">Carnet de l'enquête</div>
        <button class="btn-secondary carnet-close" style="width:auto; padding:8px 14px;">Fermer</button>
      </div>
      <div class="carnet-cards">${cards}</div>
    </div>
  `;
  modal.classList.remove("hidden");
  $(".carnet-close", modal).addEventListener("click", () => modal.classList.add("hidden"));
}

// ============================================================================
// RENDU D'UN CHAPITRE
// ============================================================================
function renderChapter(index) {
  state.currentChapter = index;
  const ch = CHAPTERS[index];
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  updateScorePill();
  updateMinimap();
  $("#carnet-btn").classList.toggle("hidden", state.unlockedCards.length === 0);

  if (window.Leaderboard) {
    Leaderboard.update({ name: state.teamName, score: state.score, chapter: index + 1, total: CHAPTERS.length, finished: false });
  }

  // progression
  const progress = el("div", "chapter-progress");
  CHAPTERS.forEach((c, i) => {
    const dot = el("div", "progress-seal" + (i < index ? " done" : i === index ? " current" : ""));
    progress.appendChild(dot);
  });
  mount.appendChild(progress);

  const card = el("div", "chapter-card");
  card.appendChild(el("div", "chapter-label", ch.label));
  const titleRow = el("div");
  titleRow.style.display = "flex";
  titleRow.style.alignItems = "center";
  titleRow.style.justifyContent = "space-between";
  titleRow.style.gap = "10px";
  titleRow.appendChild(el("div", "chapter-title", ch.title));
  const speakBtn = el("button", "narrate-btn", "🔊");
  speakBtn.title = "Écouter";
  speakBtn.addEventListener("click", () => speak(ch.narrative.join(" ")));
  titleRow.appendChild(speakBtn);
  card.appendChild(titleRow);
  ch.narrative.forEach(p => card.appendChild(el("p", "chapter-text", p)));
  mount.appendChild(card);

  // ---- puzzle widget selon le type ----
  const puzzleCard = el("div", "chapter-card");
  mount.appendChild(puzzleCard);

  const needsSpatialGate = ch.spatialKey && state.mode === "android" && state.webxrAvailable && state.calibrated;
  const needsMinimalArGate = ch.spatialKey && !needsSpatialGate;
  state.lastGateWrongCount = needsSpatialGate ? 0 : null;
  if (needsSpatialGate) {
    renderSpatialGate(puzzleCard, ch);
  } else if (needsMinimalArGate) {
    renderMinimalArGate(puzzleCard, ch);
  } else {
    renderPuzzle(puzzleCard, ch);
  }
}

// ---- sensation RA minimale (mode "autre navigateur", ou Android sans WebXR) :
// caméra réelle + scan non-bloquant, sans ancrage spatial, avant l'énigme ----
function renderMinimalArGate(container, ch) {
  container.innerHTML = "";
  const target = (window.SPATIAL_ANCHORS && window.SPATIAL_ANCHORS[ch.spatialKey] || []).find(a => a.correct);
  const label = target ? target.label : "l'indice";

  container.appendChild(el("div", "chapter-text", `<strong>📷 Pointez la caméra dans la salle et scannez pour révéler l'indice.</strong>`));
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
        btn.addEventListener("click", () => renderPuzzle(container, ch));
        container.appendChild(btn);
      }
    });
  });
}

// ---------- porte d'entrée RA : trouver le bon objet ancré avant de voir l'énigme ----------
function renderSpatialGate(container, ch) {
  container.innerHTML = "";
  container.appendChild(el("div", "chapter-text", "<strong>📍 Explorez la salle en réalité augmentée pour trouver l'indice.</strong>"));
  const dommage = el("div", "answer-feedback wrong");
  dommage.style.minHeight = "18px";

  const launchBtn = el("button", "immersive-launch", "Explorer en RA");
  container.appendChild(launchBtn);
  container.appendChild(dommage);

  launchBtn.addEventListener("click", async () => {
    launchBtn.disabled = true;
    const overlayRoot = $("#xr-overlay-root");
    overlayRoot.classList.remove("hidden");
    $(".xr-overlay-hint", overlayRoot).textContent = "Regardez autour de vous et touchez l'écran sur l'objet qui vous semble bon.";
    const canvas = el("canvas", "xr-canvas");
    canvas.id = "xr-render-canvas";
    document.body.appendChild(canvas);

    const anchors = (window.SPATIAL_ANCHORS && window.SPATIAL_ANCHORS[ch.spatialKey]) || [];
    let wrongCount = 0;

    try {
      await ArXR.exploreChapter({
        canvas, overlayRoot, anchors,
        onCorrect: (anchor) => {
          state.lastGateWrongCount = wrongCount;
          playTone("right");
          $("#xr-exit-btn").textContent = `« ${anchor.label} » ✓ — Continuer`;
        },
        onWrong: (anchor) => {
          wrongCount++;
          playTone("wrong");
          dommage.textContent = `Dommage — ce n'est pas « ${anchor.label} ». Continuez à chercher.`;
        },
        onEnd: () => {
          overlayRoot.classList.add("hidden");
          canvas.remove();
          renderPuzzle(container, ch);
        }
      });
    } catch (err) {
      overlayRoot.classList.add("hidden");
      canvas.remove();
      launchBtn.disabled = false;
      dommage.textContent = `RA indisponible (${(err && err.name) || "erreur"}) — passage direct à l'énigme.`;
      renderPuzzle(container, ch);
    }
  });

  $("#xr-exit-btn").onclick = () => ArXR.endSession();
}

function renderPuzzle(container, ch) {
  const p = ch.puzzle;

  if (p.type === "cipher") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    const widget = el("div", "puzzle-widget cipher-widget");
    const tiles = el("div", "cipher-tiles");
    p.numbers.forEach((n, i) => {
      const tile = el("div", "cipher-tile");
      tile.innerHTML = `<input type="text" maxlength="1" class="cipher-input" data-idx="${i}"><div class="cipher-number">${n}</div>`;
      tiles.appendChild(tile);
    });
    widget.appendChild(tiles);
    widget.appendChild(el("div", "mirror-hint", "1 = A, 2 = B, 3 = C… complétez chaque lettre"));
    container.appendChild(widget);

    const inputs = $all(".cipher-input", tiles);
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", () => {
        inp.value = inp.value.toUpperCase().replace(/[^A-Z]/g, "");
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      });
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !inp.value && inputs[i - 1]) inputs[i - 1].focus();
      });
    });

    renderAnswerForm(container, ch, () => inputs.map(i => i.value).join(""));
  }

  else if (p.type === "riddle") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
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
    const widget = el("div", "puzzle-widget");
    widget.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:22px; color:var(--flame-bright);">${p.expression} = ?</div>
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

  else if (p.type === "bulletin-then-dark") {
    renderBulletinThenDark(container, ch);
  }
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
      finishChapter(container, ch);
    } else {
      feedback.textContent = "Ce n'est pas ça — regardez encore.";
      feedback.className = "answer-feedback wrong";
      playTone("wrong");
    }
  });

  container.appendChild(form);
}

function finishChapter(container, ch) {
  const note = el("div", "chapter-text", `<em>${ch.successNote}</em>`);
  note.style.marginTop = "14px";
  note.style.color = "var(--ok-bright)";
  container.appendChild(note);

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
function renderBulletinThenDark(container, ch) {
  const p = ch.puzzle;

  function renderStageBulletin() {
    container.innerHTML = "";
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));

    const table = el("div", "puzzle-widget");
    table.style.textAlign = "left";
    let rows = "";
    p.bulletinRows.forEach(r => {
      const letters = r.remark.split("");
      const marked = letters.map((c, i) =>
        i === r.circleIndex
          ? `<span style="display:inline-block; border:2px solid var(--flame); border-radius:50%; width:1.4em; height:1.4em; text-align:center; line-height:1.35em; color:var(--flame-bright); font-weight:700;">${c}</span>`
          : c
      ).join("");
      rows += `
        <div style="display:flex; justify-content:space-between; gap:10px; padding:8px 0; border-bottom:1px solid var(--night-600); font-size:13.5px;">
          <span style="color:var(--parchment-dim); min-width:90px;">${r.subject}</span>
          <span style="flex:1; text-align:right;">${marked}</span>
        </div>
      `;
    });
    table.innerHTML = `<div style="font-family:var(--font-mono); font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--heraldry-gold); margin-bottom:8px;">Bulletin scolaire — appréciations</div>${rows}`;
    container.appendChild(table);

    const form = el("form", "answer-form");
    form.innerHTML = `
      <input type="text" placeholder="Le mot formé par les lettres entourées…" autocomplete="off" required>
      <button type="submit" class="btn-primary">Valider</button>
      <div class="answer-feedback"></div>
    `;
    const input = $("input", form);
    const feedback = $(".answer-feedback", form);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (normalize(input.value) === normalize(p.solutionWord)) {
        feedback.textContent = "Exact.";
        feedback.className = "answer-feedback right";
        input.disabled = true;
        $("button[type=submit]", form).disabled = true;
        state.score += 2;
        updateScorePill();
        setTimeout(renderStageDark, 700);
      } else {
        feedback.textContent = "Relisez les lettres entourées, dans l'ordre du bulletin.";
        feedback.className = "answer-feedback wrong";
      }
    });
    container.appendChild(form);
  }

  function renderStageDark() {
    container.innerHTML = "";
    container.appendChild(el("div", "chapter-text", `<strong>${p.afterWordPrompt}</strong>`));

    const block = el("div", "ar-block");
    block.innerHTML = `
      <div class="ar-video-wrap">
        <video playsinline muted></video>
        <canvas class="ar-overlay"></canvas>
        <div class="ar-clue-overlay">${p.revealText}</div>
        <div class="ar-status">Caméra inactive</div>
      </div>
      <div class="ar-actions">
        <button type="button" class="btn-secondary btn-cam-start">Activer la caméra</button>
        ${state.testMode ? '<button type="button" class="btn-primary btn-force-dark">Forcer le noir (test)</button>' : ""}
      </div>
    `;
    container.appendChild(block);

    const video = $("video", block);
    const canvas = $(".ar-overlay", block);
    const status = $(".ar-status", block);
    const clueOverlay = $(".ar-clue-overlay", block);
    const btnStart = $(".btn-cam-start", block);

    let revealed = false;
    function onReveal() {
      if (revealed) return;
      revealed = true;
      clueOverlay.classList.add("visible");
      status.textContent = "Indice révélé dans le noir ✓";
      status.className = "ar-status dark";
      renderAnswerFormFinal();
    }

    async function startCamera() {
      status.textContent = "Connexion à la caméra…";
      const res = await ArEngine.attach(video, canvas);
      if (res.ok) {
        status.textContent = "Éteignez la lumière ou couvrez l'objectif…";
        btnStart.style.display = "none";
        ArEngine.watchDarkness((isDark) => { if (isDark) onReveal(); });
      } else {
        status.textContent = "Caméra inaccessible.";
      }
    }
    btnStart.addEventListener("click", startCamera);

    const forceBtn = $(".btn-force-dark", block);
    if (forceBtn) forceBtn.addEventListener("click", onReveal);

    function renderAnswerFormFinal() {
      const form = el("form", "answer-form");
      const hintLabel = hintButtonLabel();
      form.innerHTML = `
        <input type="text" placeholder="Qui est le coupable ?" autocomplete="off" required>
        <button type="submit" class="btn-primary">Accuser</button>
        <div class="answer-feedback"></div>
        <div class="hint-block">
          <button type="button" class="hint-toggle">${hintLabel}</button>
          <div class="hint-content">${ch.hint}</div>
        </div>
      `;
      const input = $("input", form);
      const feedback = $(".answer-feedback", form);
      const hintBtn = $(".hint-toggle", form);
      const hintContent = $(".hint-content", form);
      let hintUsed = false;
      hintBtn.addEventListener("click", () => {
        hintContent.classList.toggle("shown");
        if (!hintUsed) { hintUsed = true; consumeHint(); }
      });
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const val = normalize(input.value);
        const ok = ch.answers.some(a => normalize(a) === val);
        if (ok) {
          feedback.textContent = "Exact.";
          feedback.className = "answer-feedback right";
          input.disabled = true;
          $("button[type=submit]", form).disabled = true;
          state.score += 3;
          updateScorePill();
          finishChapter(container, ch);
        } else {
          feedback.textContent = "Ce n'est pas ça — regardez encore.";
          feedback.className = "answer-feedback wrong";
        }
      });
      container.appendChild(form);
    }
  }

  renderStageBulletin();
}

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
    Leaderboard.update({ name: state.teamName, score: state.score, chapter: CHAPTERS.length, total: CHAPTERS.length, finished: true, time: finalTime });
  }

  const card = el("div", "chapter-card");
  card.style.textAlign = "center";
  card.innerHTML = `
    <div class="chapter-label">Affaire résolue</div>
    <div class="chapter-title">Bravo, ${escapeHtml(state.teamName)} !</div>
    <div class="finale-reveal">
      ${"LE COUPABLE EST PARMI NOUS".split(" ").map(w => `<span class="finale-word revealed">${w}</span>`).join("")}
    </div>
    <p class="chapter-text">Vous avez retracé toute la nuit du 12 décembre 1602, de l'échelle jusqu'à la marmite — et démasqué qui, dans cette salle, n'était jamais parti.</p>
    <p class="chapter-text" style="color:var(--heraldry-gold); font-family:var(--font-mono); font-size:14px;">Score final : ${state.score} points · Temps : ${finalTime}</p>
    <button class="btn-primary" id="btn-open-quiz" style="margin-top:10px;">Quiz bonus sur l'Escalade</button>
    <button class="btn-secondary" id="btn-open-carnet-final" style="margin-top:10px;">Voir le carnet complet</button>
  `;
  mount.appendChild(card);
  $("#btn-open-quiz", card).addEventListener("click", renderQuizBonus);
  $("#btn-open-carnet-final", card).addEventListener("click", openCarnet);
  launchConfetti();
  setTimeout(renderEndCredits, 1600);
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
      Leaderboard.update({ name: state.teamName, score: state.score, chapter: CHAPTERS.length, total: CHAPTERS.length, finished: true, time: elapsedLabel() });
    }
  }

  renderQuestion();
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function launchConfetti() {
  const canvas = el("canvas", "confetti-canvas");
  document.body.appendChild(canvas);
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
