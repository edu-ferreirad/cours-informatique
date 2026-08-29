const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const dom = new JSDOM(html, {
  url: 'https://example.github.io/escalade-outdoor/',
  runScripts: 'outside-only',
  pretendToBeVisual: true,
  resources: 'usable'
});
const { window } = dom;
const { document } = window;

// ---- Stubs for browser APIs jsdom doesn't implement ----
window.HTMLCanvasElement.prototype.getContext = () => ({
  drawImage(){}, fillRect(){}, strokeRect(){}, beginPath(){}, arc(){}, fill(){}, stroke(){},
  fillText(){}, save(){}, restore(){}, createLinearGradient: () => ({ addColorStop(){} }),
  scale(){}, getImageData: () => ({ data: new Uint8ClampedArray(8*8*4) }),
  set fillStyle(v){}, set strokeStyle(v){}, set lineWidth(v){}, set font(v){}, set textAlign(v){}, set textBaseline(v){}
});
window.HTMLCanvasElement.prototype.toBlob = function (cb) { cb(new window.Blob(['x'])); };
window.URL.createObjectURL = () => 'blob://fake';
window.URL.revokeObjectURL = () => {};
window.navigator.mediaDevices = undefined; // simulate "AR camera unavailable" path
window.navigator.geolocation = undefined;
delete window.speechSynthesis;
window.AudioContext = undefined;
window.webkitAudioContext = undefined;
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.Image = class extends window.Image {
  set src(v) { this._src = v; setTimeout(() => this.onload && this.onload(), 0); }
  get src() { return this._src; }
};
window.HTMLFormElement.prototype.requestSubmit = function () {
  this.dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
};
window.Element.prototype.scrollIntoView = function () {};

// Accélère le temps : la logique du jeu utilise setTimeout(…, 900) pour
// enchaîner les secteurs — on plafonne tous les délais pour que le test
// tourne en quelques secondes au lieu de plusieurs minutes.
const realSetTimeout = window.setTimeout.bind(window);
window.setTimeout = (fn, ms, ...args) => realSetTimeout(fn, Math.min(ms || 0, 30), ...args);

const errors = [];
window.addEventListener('error', (e) => {
  errors.push((e.error && e.error.stack) || e.message);
});
window.onerror = (msg, src, line, col, err) => {
  errors.push(`${msg} @${line}:${col}\n${err && err.stack}`);
};

// Load script.js manually (runScripts:'outside-only' means <script src> tags do not auto-execute)
const scriptSrc = fs.readFileSync(path.join(ROOT, 'script.js'), 'utf8');
// Top-level `const`/`function` in an eval'd classic script don't become
// window properties automatically — expose the bits the harness needs.
const exposure = `
;window.STEPS = STEPS; window.ALL_STEPS = ALL_STEPS; window.LOCATION_STEP = LOCATION_STEP;
window.markComplete = markComplete; window.state = state;
`;
try {
  window.eval(scriptSrc + exposure);
} catch (e) {
  errors.push('TOP-LEVEL LOAD ERROR: ' + e.stack);
}

function flushTimers(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Filet de sécurité : le script de test ne doit jamais tourner plus de 30s.
const watchdog = setTimeout(() => {
  console.log('\n!!! WATCHDOG : le test a dépassé 30s, arrêt forcé. Ça peut lui-même être un symptôme (boucle infinie).');
  console.log('Erreurs capturées avant coupure:', errors.length);
  errors.forEach((e, i) => console.log(`\n[Erreur ${i + 1}]\n${e}`));
  process.exit(1);
}, 30000);
watchdog.unref();

async function run() {
  // ---- Gate ----
  const gateInput = document.getElementById('input-gate-password');
  gateInput.value = 'drize2025';
  document.getElementById('gate-form').requestSubmit();
  await flushTimers(40);

  // ---- Team form ----
  const nameInput = document.getElementById('input-team-name');
  nameInput.value = 'Équipe Test Automatisée';
  document.getElementById('team-form').requestSubmit();
  await flushTimers(40);

  console.log('--- après démarrage ---');
  console.log('Erreurs jusqu\'ici:', errors.length);

  // Access game internals via window (they are top-level `const`/`function`
  // in a classic, non-module script evaluated with window.eval, so they
  // become properties of window).
  const STEPS = window.STEPS;
  const ALL_STEPS = window.ALL_STEPS;
  console.log('STEPS trouvés:', !!STEPS, STEPS && STEPS.length);

  for (let round = 0; round < ALL_STEPS.length + 2; round++) {
    await flushTimers(15);
    const container = document.getElementById('step-container');
    const stepEl = container.querySelector('.step');
    if (!stepEl) { console.log('Plus de secteur affiché (fin ?) au round', round); break; }

    // Transition screen? click continue
    const continueBtn = stepEl.querySelector('.continue-btn');
    if (continueBtn) {
      continueBtn.click();
      await flushTimers(15);
    }

    const container2 = document.getElementById('step-container');
    const activeStep = container2.querySelector('.step');
    if (!activeStep) { console.log('Rien après continue au round', round); break; }

    const type = activeStep.dataset.type;
    const numText = activeStep.querySelector('.step-num') ? activeStep.querySelector('.step-num').textContent : '?';
    console.log(`Round ${round}: type=${type} (${numText})`);

    if (type === 'text') {
      // Find which step this is by matching title
      const titleText = activeStep.querySelector('.step-title').textContent;
      const stepData = ALL_STEPS.find((s) => s.title === titleText);
      const input = activeStep.querySelector('.answer-input');
      const btn = activeStep.querySelector('.validate-btn:not(.bonus-validate)');
      if (!stepData) { console.log('  !! step introuvable pour', titleText); break; }
      const answer = stepData.isAccusation ? 'ENSEIGNANT'
        : stepData.answer ? stepData.answer
        : (stepData.codeGate ? null : 'MARMITE');
      if (answer) {
        input.value = answer;
        btn.click();
      }
      // photoRequired hybrid (énigme 6) needs the extra photo too
      const extraInput = activeStep.querySelector('.extra-photo-input');
      if (extraInput) {
        try {
          Object.defineProperty(extraInput, 'files', { value: [new window.File(['x'], 'test.jpg', { type: 'image/jpeg' })], configurable: true });
          extraInput.dispatchEvent(new window.Event('change', { bubbles: true }));
        } catch (e) { errors.push('extraInput sim error: ' + e.stack); }
      }
    } else if (type === 'photo') {
      const fileInput = activeStep.querySelector('.photo-input');
      try {
        Object.defineProperty(fileInput, 'files', { value: [new window.File(['x'], 'test.jpg', { type: 'image/jpeg' })], configurable: true });
        fileInput.dispatchEvent(new window.Event('change', { bubbles: true }));
      } catch (e) { errors.push('fileInput sim error: ' + e.stack); }
      await flushTimers(15);
      const validateBtn = activeStep.querySelector('.photo-validate');
      validateBtn.click();
      await flushTimers(25);
    } else if (type === 'puzzle') {
      // For codeGate (énigme 9) fill it first
      const gateInput = activeStep.querySelector('.code-gate-input');
      if (gateInput) {
        gateInput.value = 'BOURG DE FOUR';
        activeStep.querySelector('.code-gate-btn').click();
        await flushTimers(15);
      }
      // Vrai solveur : lit la position de chaque pièce via son
      // background-position (encode col/row de la pièce d'origine) et
      // échange par sélection jusqu'à résolution.
      function readGridState() {
        const tiles = Array.from(document.querySelectorAll('.puzzle-tile'));
        const n = Math.round(Math.sqrt(tiles.length));
        const pieces = tiles.map((t) => {
          const bg = t.style.backgroundPosition || '0% 0%';
          const [xStr, yStr] = bg.split(' ');
          const x = parseFloat(xStr), y = parseFloat(yStr);
          const col = n > 1 ? Math.round(x / (100 / (n - 1))) : 0;
          const row = n > 1 ? Math.round(y / (100 / (n - 1))) : 0;
          return row * n + col;
        });
        return { tiles, pieces, n };
      }
      let guard = 0;
      while (guard < 30) {
        const { tiles, pieces } = readGridState();
        if (!tiles.length) break;
        const wrongPos = pieces.findIndex((p, i) => p !== i);
        if (wrongPos === -1) break; // résolu
        const correctSrcPos = pieces.indexOf(wrongPos);
        tiles[wrongPos].click();
        tiles[correctSrcPos].click();
        await flushTimers(10);
        guard++;
      }
      const solved = !!document.querySelector('.puzzle-grid.solved');
      console.log('  puzzle: solved =', solved, '(itérations:', guard, ')');
      if (!solved) errors.push(`Puzzle secteur ${numText} non résolu par le solveur automatique (peut être un bug du solveur de test, ou un vrai bug du puzzle) — à vérifier manuellement.`);
    }

    await flushTimers(80); // laisse le setTimeout (accéléré) se déclencher
  }

  console.log('\n=== RÉSULTAT ===');
  console.log('Erreurs capturées:', errors.length);
  errors.forEach((e, i) => console.log(`\n[Erreur ${i + 1}]\n${e}`));

  // ---- Vérifie que l'écran final (diplôme, carte mentale, quiz...) ----
  const finalScreen = document.getElementById('final-screen');
  const finalVisible = finalScreen && !finalScreen.classList.contains('hidden');
  console.log('\nÉcran final affiché :', finalVisible);
  if (finalVisible) {
    console.log('  - diplôme (canvas):', !!finalScreen.querySelector('.diploma-preview'));
    console.log('  - carte mentale (svg):', !!finalScreen.querySelector('.mindmap-svg'));
    console.log('  - quiz (items):', finalScreen.querySelectorAll('.quiz-item').length);
    console.log('  - fiche "pour aller plus loin":', finalScreen.querySelectorAll('.further-reading-list li').length);
    // Clique sur une réponse de quiz pour vérifier que ça ne plante pas
    const firstQuizOption = finalScreen.querySelector('.quiz-option');
    if (firstQuizOption) { firstQuizOption.click(); console.log('  - clic option quiz : ok'); }
    // Télécharge le diplôme et la carte mentale (déclenche le code canvas)
    const diplomaBtn = finalScreen.querySelector('.diploma-download-btn');
    if (diplomaBtn) diplomaBtn.click();
    const mindmapBtn = finalScreen.querySelector('.mindmap-download-btn');
    if (mindmapBtn) mindmapBtn.click();
  }
  await flushTimers(50);
  console.log('\nErreurs après interaction avec l\'écran final :', errors.length);
  errors.forEach((e, i) => console.log(`\n[Erreur ${i + 1}]\n${e}`));

  console.log('\nDernier contenu #step-container (200 premiers caractères):');
  const c = document.getElementById('step-container');
  console.log(c ? c.innerHTML.slice(0, 200) : '(introuvable)');
  // Des timers restent en attente (boucle d'ambiance sonore, animation du
  // mini-jeu du canon...) — normal en usage réel, mais il faut forcer la
  // sortie ici sinon le process Node ne se termine jamais tout seul.
  process.exit(errors.length > 0 ? 1 : 0);
}

run().catch((e) => { console.error('FATAL', e); process.exit(1); });
