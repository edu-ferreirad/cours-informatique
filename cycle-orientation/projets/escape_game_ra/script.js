// ============================================================================
// SCRIPT PRINCIPAL — navigation, rendu des chapitres, validation des réponses
// ============================================================================

const state = {
  teamName: "",
  mode: null,          // "android" | "other"
  testMode: false,
  currentChapter: 0,   // index dans CHAPTERS
  score: 0,
  scanConfirmed: {},   // { [chapterId]: true }
};

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

// ---------- écran accueil ----------
$("#form-team").addEventListener("submit", (e) => {
  e.preventDefault();
  const val = $("#team-name").value.trim();
  if (!val) return;
  state.teamName = val;
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

$all(".mode-card").forEach(card => {
  card.addEventListener("click", async () => {
    $all(".mode-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    state.mode = card.dataset.mode;
    ArEngine.setMode(state.mode);
    state.webxrAvailable = false;
    if (state.mode === "android") {
      state.webxrAvailable = await ArXR.isAvailable();
    }
    setTimeout(() => showScreen("rules"), 250);
  });
});

$("#btn-start-game").addEventListener("click", () => {
  showScreen("game");
  renderChapter(0);
});

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
})();

function updateScorePill() {
  const pill = $("#score-pill");
  pill.textContent = `${state.score} pt${state.score > 1 ? "s" : ""}`;
  pill.classList.remove("hidden");
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

  // progression
  const progress = el("div", "chapter-progress");
  CHAPTERS.forEach((c, i) => {
    const dot = el("div", "progress-seal" + (i < index ? " done" : i === index ? " current" : ""));
    progress.appendChild(dot);
  });
  mount.appendChild(progress);

  const card = el("div", "chapter-card");
  card.appendChild(el("div", "chapter-label", ch.label));
  card.appendChild(el("div", "chapter-title", ch.title));
  ch.narrative.forEach(p => card.appendChild(el("p", "chapter-text", p)));
  mount.appendChild(card);

  // ---- puzzle widget selon le type ----
  const puzzleCard = el("div", "chapter-card");
  renderPuzzle(puzzleCard, ch);
  mount.appendChild(puzzleCard);
}

function renderPuzzle(container, ch) {
  const p = ch.puzzle;

  if (p.type === "riddle") {
    container.appendChild(el("div", "chapter-text", `<strong>${p.prompt}</strong>`));
    renderScanBlock(container, ch);
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
    renderScanBlock(container, ch);
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
    renderScanBlock(container, ch);
    renderAnswerForm(container, ch);
  }

  else if (p.type === "calc") {
    const widget = el("div", "puzzle-widget");
    widget.innerHTML = `
      <div style="font-family:var(--font-mono); font-size:22px; color:var(--flame-bright);">${p.expression} = ?</div>
    `;
    container.appendChild(widget);
    container.appendChild(el("div", "chapter-text", p.prompt));
    renderScanBlock(container, ch);
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
    renderScanBlock(container, ch);
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
function renderAnswerForm(container, ch) {
  const form = el("form", "answer-form");
  form.innerHTML = `
    <input type="text" placeholder="Votre réponse…" autocomplete="off" required>
    <button type="submit" class="btn-primary">Valider</button>
    <div class="answer-feedback"></div>
    <div class="hint-block">
      <button type="button" class="hint-toggle">Besoin d'un indice ? (–1 pt)</button>
      <div class="hint-content">${ch.hint}</div>
    </div>
  `;
  const feedback = $(".answer-feedback", form);
  const input = $("input", form);
  const hintBtn = $(".hint-toggle", form);
  const hintContent = $(".hint-content", form);
  let hintUsed = false;

  hintBtn.addEventListener("click", () => {
    hintContent.classList.toggle("shown");
    if (!hintUsed) {
      hintUsed = true;
      state.score = Math.max(0, state.score - 1);
      updateScorePill();
    }
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

function finishChapter(container, ch) {
  const note = el("div", "chapter-text", `<em>${ch.successNote}</em>`);
  note.style.marginTop = "14px";
  note.style.color = "var(--ok-bright)";
  container.appendChild(note);

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

// ---------- bloc scan RA (générique, non-bloquant) ----------
function renderScanBlock(container, ch) {
  if (!ch.scan) return;

  const useImmersive = state.mode === "android" && state.webxrAvailable;
  if (useImmersive) {
    renderImmersiveScanBlock(container, ch);
  } else {
    renderFlatScanBlock(container, ch);
  }
}

// ---- variante WebXR immersive (mode Android, quand disponible) ----
function renderImmersiveScanBlock(container, ch) {
  const block = el("div", "ar-block");
  block.innerHTML = `
    <div class="chapter-text" style="margin-bottom:8px;"><strong>📷 ${ch.scan.label}</strong><br><span style="color:var(--parchment-dim); font-size:13px;">${ch.scan.instruction}</span></div>
    <div class="immersive-badge">◆ Réalité augmentée immersive — indice ancré dans la pièce</div>
    <button type="button" class="immersive-launch">Lancer la RA immersive</button>
    <div class="ar-status" style="position:static; margin-top:8px; background:none; text-align:center; padding:0;"></div>
  `;
  container.appendChild(block);

  const launchBtn = $(".immersive-launch", block);
  const status = $(".ar-status", block);

  launchBtn.addEventListener("click", async () => {
    launchBtn.disabled = true;
    const overlayRoot = $("#xr-overlay-root");
    overlayRoot.classList.remove("hidden");
    const canvas = el("canvas", "xr-canvas");
    canvas.id = "xr-render-canvas";
    document.body.appendChild(canvas);

    try {
      await ArXR.startImmersiveScan({
        canvas,
        overlayRoot,
        labelText: ch.scan.label,
        onPlaced: () => {
          state.scanConfirmed[ch.id] = true;
          $("#xr-exit-btn").textContent = "Indice ancré ✓ — Quitter la RA";
        },
        onEnd: () => {
          overlayRoot.classList.add("hidden");
          canvas.remove();
          status.textContent = state.scanConfirmed[ch.id] ? "Indice ancré ✓" : "Session RA terminée";
          status.className = state.scanConfirmed[ch.id] ? "ar-status ok" : "ar-status";
          launchBtn.textContent = "Relancer la RA immersive";
          launchBtn.disabled = false;
        }
      });
      status.textContent = "Session immersive active — touchez l'écran pour ancrer l'indice";
    } catch (err) {
      overlayRoot.classList.add("hidden");
      canvas.remove();
      status.textContent = "RA immersive indisponible ici — passage en mode compatibilité.";
      launchBtn.remove();
      renderFlatScanBlock(container, ch);
    }
  });

  $("#xr-exit-btn").onclick = () => ArXR.stopImmersiveScan();
}

// ---- variante caméra à plat (mode "autre navigateur", ou repli si WebXR indisponible) ----
function renderFlatScanBlock(container, ch) {
  const block = el("div", "ar-block");
  block.innerHTML = `
    <div class="chapter-text" style="margin-bottom:8px;"><strong>📷 ${ch.scan.label}</strong><br><span style="color:var(--parchment-dim); font-size:13px;">${ch.scan.instruction}</span></div>
    <div class="ar-video-wrap">
      <video playsinline muted></video>
      <canvas class="ar-overlay"></canvas>
      <div class="ar-status">Caméra inactive</div>
    </div>
    <div class="ar-actions">
      <button type="button" class="btn-secondary btn-cam-start">Activer la caméra</button>
      <button type="button" class="btn-primary btn-scan" disabled>Scanner l'indice</button>
    </div>
  `;
  container.appendChild(block);

  const video = $("video", block);
  const canvas = $(".ar-overlay", block);
  const status = $(".ar-status", block);
  const btnStart = $(".btn-cam-start", block);
  const btnScan = $(".btn-scan", block);

  async function startCamera() {
    status.textContent = "Connexion à la caméra…";
    const res = await ArEngine.attach(video, canvas);
    if (res.ok) {
      status.textContent = state.mode === "android" ? "Ancrage actif — visez l'indice" : "Visez l'indice";
      status.className = "ar-status ok";
      btnScan.disabled = false;
      btnStart.style.display = "none";
    } else {
      status.textContent = "Caméra inaccessible — vous pouvez continuer sans.";
      if (state.testMode) btnScan.disabled = false;
    }
  }

  btnStart.addEventListener("click", startCamera);
  if (state.testMode) {
    // en mode test, le scan est utilisable même sans caméra
    btnScan.disabled = false;
  }

  btnScan.addEventListener("click", () => {
    btnScan.disabled = true;
    status.textContent = "Analyse en cours…";
    ArEngine.scan({
      durationMs: state.testMode ? 300 : 1400,
      onDone: () => {
        status.textContent = "Indice confirmé ✓";
        status.className = "ar-status ok";
        state.scanConfirmed[ch.id] = true;
        btnScan.textContent = "Indice confirmé ✓";
      }
    });
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
      form.innerHTML = `
        <input type="text" placeholder="Qui est le coupable ?" autocomplete="off" required>
        <button type="submit" class="btn-primary">Accuser</button>
        <div class="answer-feedback"></div>
        <div class="hint-block">
          <button type="button" class="hint-toggle">Besoin d'un indice ? (–1 pt)</button>
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
        if (!hintUsed) { hintUsed = true; state.score = Math.max(0, state.score - 1); updateScorePill(); }
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
  const mount = $("#chapter-mount");
  mount.innerHTML = "";
  $("#score-pill").classList.add("hidden");

  const card = el("div", "chapter-card");
  card.style.textAlign = "center";
  card.innerHTML = `
    <div class="chapter-label">Affaire résolue</div>
    <div class="chapter-title">Bravo, ${escapeHtml(state.teamName)} !</div>
    <div class="finale-reveal">
      ${"LE COUPABLE EST PARMI NOUS".split(" ").map(w => `<span class="finale-word revealed">${w}</span>`).join("")}
    </div>
    <p class="chapter-text">Vous avez retracé toute la nuit du 12 décembre 1602, de l'échelle jusqu'à la marmite — et démasqué qui, dans cette salle, n'était jamais parti.</p>
    <p class="chapter-text" style="color:var(--heraldry-gold); font-family:var(--font-mono); font-size:14px;">Score final : ${state.score} points</p>
  `;
  mount.appendChild(card);
  launchConfetti();
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
