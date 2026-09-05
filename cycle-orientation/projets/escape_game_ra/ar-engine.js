// ============================================================================
// AR ENGINE — gestion caméra + effets de réalité augmentée
//
// Pas de reconnaissance d'image lourde (pas de dépendance externe) :
// - "Scan" = confirmation non-bloquante après un court temps d'analyse simulé
//   (même esprit que la comparaison visuelle indicative de MATRIX_1602 :
//   ça ne bloque jamais une équipe, c'est de l'habillage immersif).
// - Détection d'obscurité = moyenne de luminance du flux vidéo, ce qui
//   fonctionne pareil sur Android Chrome et iOS Safari (pas d'API capteur).
// - Mode "android" ajoute un rendu d'ancrage plus riche (grille stabilisée) ;
//   mode "other" reste un simple overlay plaqué sur l'image.
// ============================================================================

const ArEngine = (() => {
  let stream = null;
  let videoEl = null;
  let canvasEl = null;
  let ctx = null;
  let rafId = null;
  let darkSince = null;
  let onDarkCallback = null;
  let darkTriggered = false;
  let mode = "other";
  let testMode = false;

  function setMode(m) { mode = m; }
  function setTestMode(t) { testMode = t; }

  async function attach(videoElement, canvasElement) {
    videoEl = videoElement;
    canvasEl = canvasElement;
    ctx = canvasEl.getContext("2d");
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false
      });
      videoEl.srcObject = stream;
      await videoEl.play();
      resizeCanvas();
      loop();
      return { ok: true };
    } catch (err) {
      return { ok: false, error: err.message || String(err) };
    }
  }

  function resizeCanvas() {
    if (!canvasEl || !videoEl) return;
    const rect = canvasEl.getBoundingClientRect();
    canvasEl.width = rect.width * (window.devicePixelRatio || 1);
    canvasEl.height = rect.height * (window.devicePixelRatio || 1);
  }

  function detach() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    if (stream) {
      stream.getTracks().forEach(t => t.stop());
      stream = null;
    }
    darkSince = null;
    darkTriggered = false;
    onDarkCallback = null;
  }

  function watchDarkness(callback) {
    onDarkCallback = callback;
    darkTriggered = false;
    darkSince = null;
  }

  function sampleLuminance() {
    if (!videoEl || videoEl.readyState < 2) return null;
    const w = 32, h = 24;
    const off = sampleLuminance._off || (sampleLuminance._off = document.createElement("canvas"));
    off.width = w; off.height = h;
    const octx = off.getContext("2d");
    octx.drawImage(videoEl, 0, 0, w, h);
    const data = octx.getImageData(0, 0, w, h).data;
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      sum += 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    }
    return sum / (data.length / 4);
  }

  function loop(ts) {
    rafId = requestAnimationFrame(loop);
    if (!ctx || !canvasEl) return;
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // reticle / anchoring effect
    drawReticle(ts || 0);

    // darkness watch
    if (onDarkCallback) {
      const lum = sampleLuminance();
      if (lum !== null) {
        const DARK_THRESHOLD = 40;
        if (lum < DARK_THRESHOLD) {
          if (darkSince === null) darkSince = performance.now();
          else if (!darkTriggered && performance.now() - darkSince > 900) {
            darkTriggered = true;
            onDarkCallback(true);
          }
        } else {
          darkSince = null;
          if (darkTriggered) {
            darkTriggered = false;
            onDarkCallback(false);
          }
        }
      }
    }
  }

  function drawReticle(ts) {
    const w = canvasEl.width, h = canvasEl.height;
    const cx = w / 2, cy = h / 2;
    const pulse = 0.5 + 0.5 * Math.sin(ts / 500);
    ctx.save();
    ctx.strokeStyle = mode === "android"
      ? `rgba(231,169,76,${0.55 + 0.25 * pulse})`
      : `rgba(231,169,76,0.45)`;
    ctx.lineWidth = 2;

    if (mode === "android") {
      // grille "ancrée" pour donner un effet spatial plus riche
      const gridSize = Math.min(w, h) * 0.55;
      ctx.beginPath();
      const steps = 4;
      for (let i = 0; i <= steps; i++) {
        const x = cx - gridSize / 2 + (gridSize / steps) * i;
        ctx.moveTo(x, cy - gridSize / 2);
        ctx.lineTo(x, cy + gridSize / 2);
        const y = cy - gridSize / 2 + (gridSize / steps) * i;
        ctx.moveTo(cx - gridSize / 2, y);
        ctx.lineTo(cx + gridSize / 2, y);
      }
      ctx.globalAlpha = 0.35;
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // corner brackets (both modes)
    const s = Math.min(w, h) * 0.32;
    const len = s * 0.22;
    const corners = [
      [cx - s, cy - s, 1, 1],
      [cx + s, cy - s, -1, 1],
      [cx - s, cy + s, 1, -1],
      [cx + s, cy + s, -1, -1],
    ];
    ctx.beginPath();
    corners.forEach(([x, y, dx, dy]) => {
      ctx.moveTo(x, y + len * dy);
      ctx.lineTo(x, y);
      ctx.lineTo(x + len * dx, y);
    });
    ctx.stroke();
    ctx.restore();
  }

  // Confirmation de scan non-bloquante : simule une courte analyse puis réussit.
  // "success" garanti après le délai, quel que soit ce qui est réellement filmé —
  // c'est une confirmation d'immersion, pas un blocage de progression.
  function scan({ durationMs = 1400, onProgress, onDone }) {
    const start = performance.now();
    function tick() {
      const elapsed = performance.now() - start;
      const pct = Math.min(1, elapsed / durationMs);
      if (onProgress) onProgress(pct);
      if (pct < 1) {
        requestAnimationFrame(tick);
      } else {
        if (onDone) onDone();
      }
    }
    tick();
  }

  return { attach, detach, watchDarkness, scan, setMode, setTestMode, resizeCanvas };
})();

// exposition explicite (compat multi-<script> et environnements de test)
if (typeof window !== "undefined") window.ArEngine = ArEngine;

// ============================================================================
// WEBXR IMMERSIF (mode "Android — optimum")
//
// Vraie réalité augmentée ancrée dans la pièce (hit-test + placement d'un
// panneau 3D qui reste stable même si on bouge le téléphone), via WebXR
// natif + three.js. Contrainte technique importante : WebXR ne donne PAS
// accès aux pixels de la caméra passthrough (confidentialité du navigateur),
// donc la détection d'obscurité (chapitre chambre noire) reste toujours sur
// l'approche getUserMedia classique, même en mode Android.
// ============================================================================

const ArXR = (() => {
  let renderer = null, scene = null, camera = null;
  let session = null;
  let anchorMeshes = [];
  let raycaster = null;
  let usingFloorSpace = true;
  const ASSUMED_HEAD_HEIGHT = 1.3; // repli si le repère "sol" (local-floor) n'est pas dispo
  let calib = null; // { pos: THREE.Vector3, forward: THREE.Vector3, right: THREE.Vector3, up: THREE.Vector3 }

  async function isAvailable() {
    if (!navigator.xr || !navigator.xr.isSessionSupported) return false;
    try { return await navigator.xr.isSessionSupported("immersive-ar"); }
    catch { return false; }
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "", lines = [];
    words.forEach(w => {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; }
      else line = test;
    });
    if (line) lines.push(line);
    const startY = y - ((lines.length - 1) * lineHeight) / 2;
    lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function makePanel(text, { correct, image, emoji, hintRole, romanTrap } = {}) {
    const canvas = document.createElement("canvas");
    canvas.width = 680; canvas.height = 440;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(10,13,19,0.92)";
    roundRect(ctx, 0, 0, 680, 440, 32); ctx.fill();
    ctx.strokeStyle = hintRole ? "#5fa8e0" : (correct === false ? "#c0524a" : "#e7a94c");
    ctx.lineWidth = 8;
    roundRect(ctx, 8, 8, 664, 424, 28); ctx.stroke();
    ctx.fillStyle = hintRole ? "#a9d4f5" : (correct === false ? "#e08a83" : "#f6cf8a");

    if (romanTrap) {
      // easter egg fidèle à l'original : "dommage" écrit en chiffres romains
      // (1=A, 2=B... comme au dos du cahier ascenseur/escaliers réel)
      ctx.save();
      ctx.font = "italic 15px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(224,138,131,0.55)";
      ctx.fillText("IV·XV·XIII·XIII·I·VII·V", 340, 410);
      ctx.restore();
    }

    if (image) {
      // zone image (haut du panneau), contenue et centrée — grande pour rester lisible en RA
      const padding = 26;
      const imgBoxW = 680 - padding * 2;
      const imgBoxH = 270;
      const imgBoxX = padding, imgBoxY = 26;
      const scale = Math.min(imgBoxW / image.width, imgBoxH / image.height);
      const dw = image.width * scale, dh = image.height * scale;
      const dx = imgBoxX + (imgBoxW - dw) / 2, dy = imgBoxY + (imgBoxH - dh) / 2;
      ctx.save();
      roundRect(ctx, imgBoxX, imgBoxY, imgBoxW, imgBoxH, 18);
      ctx.clip();
      ctx.fillStyle = "#f2ead6";
      ctx.fillRect(imgBoxX, imgBoxY, imgBoxW, imgBoxH);
      ctx.drawImage(image, dx, dy, dw, dh);
      ctx.restore();
      ctx.fillStyle = correct === false ? "#e08a83" : "#f6cf8a";
      ctx.font = "600 34px Georgia, serif";
      ctx.textAlign = "center";
      wrapText(ctx, text, 340, 355, 600, 40);
    } else if (emoji) {
      const imgBoxH = 270, imgBoxY = 26;
      ctx.save();
      roundRect(ctx, 26, imgBoxY, 628, imgBoxH, 18);
      ctx.clip();
      ctx.fillStyle = "#f2ead6";
      ctx.fillRect(26, imgBoxY, 628, imgBoxH);
      ctx.font = "170px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(emoji, 340, imgBoxY + imgBoxH / 2 + 10);
      ctx.restore();
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = correct === false ? "#e08a83" : "#f6cf8a";
      ctx.font = "600 34px Georgia, serif";
      ctx.textAlign = "center";
      wrapText(ctx, text, 340, 355, 600, 40);
    } else {
      ctx.font = "600 40px Georgia, serif";
      ctx.textAlign = "center";
      wrapText(ctx, text, 340, 220, 600, 50);
    }

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
    const geo = new THREE.PlaneGeometry(0.7, 0.45);
    const mesh = new THREE.Mesh(geo, mat);
    return mesh;
  }

  // ---- cache d'images préchargées pour les panneaux RA (échelle, ascenseur, rébus, écussons...) ----
  const imageCache = {};
  function preloadImage(assetKey) {
    if (!assetKey) return Promise.resolve(null);
    if (imageCache[assetKey]) return Promise.resolve(imageCache[assetKey]);
    const url = typeof GAME_ASSETS !== "undefined" ? GAME_ASSETS[assetKey] : null;
    if (!url) return Promise.resolve(null);
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => { imageCache[assetKey] = img; resolve(img); };
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  function initRenderer(canvas) {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
    raycaster = new THREE.Raycaster();
  }

  // Pas de hit-test requis : on ne détecte pas de surface réelle, on place
  // les objets par décalage mesuré depuis le point de calibration (voir
  // spatial-config.js). "local-floor" donne juste un Y=0 au niveau du sol
  // quand le téléphone le sait ; sinon on utilise une hauteur estimée.
  async function openSession(overlayRoot) {
    session = await navigator.xr.requestSession("immersive-ar", {
      optionalFeatures: ["local-floor", "dom-overlay"],
      domOverlay: overlayRoot ? { root: overlayRoot } : undefined,
    });
    usingFloorSpace = true;
    try {
      renderer.xr.setReferenceSpaceType("local-floor");
      await renderer.xr.setSession(session);
    } catch (e) {
      usingFloorSpace = false;
      renderer.xr.setReferenceSpaceType("local");
      await renderer.xr.setSession(session);
    }
    return session;
  }

  // ---------------------------------------------------------------
  // CALIBRATION : l'élève se tient au point de repère et touche l'écran
  // une fois. On enregistre position + orientation (le "devant" = direction
  // regardée à cet instant, projetée à l'horizontale) comme origine pour
  // tous les ancrages suivants. Aucune détection de surface nécessaire.
  // ---------------------------------------------------------------
  async function calibrate({ canvas, overlayRoot, onCalibrated, onEnd }) {
    initRenderer(canvas);
    await openSession(overlayRoot);

    let done = false;
    session.addEventListener("select", () => {
      if (done) return;
      done = true;

      const pos = new THREE.Vector3();
      camera.getWorldPosition(pos);
      if (!usingFloorSpace) pos.y -= ASSUMED_HEAD_HEIGHT;

      const camDir = new THREE.Vector3();
      camera.getWorldDirection(camDir);
      camDir.y = 0;
      if (camDir.lengthSq() < 1e-6) camDir.set(0, 0, -1);
      camDir.normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(camDir, up).normalize();

      calib = { pos, forward: camDir, right, up };
      if (onCalibrated) onCalibrated();
    });

    session.addEventListener("end", () => {
      session = null;
      if (onEnd) onEnd();
    });

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  function isCalibrated() { return !!calib; }


  // ---------------------------------------------------------------
  // EXPLORATION D'UN CHAPITRE : place tous les ancrages fournis en
  // fonction de la calibration enregistrée, sans refaire de hit-test.
  // Sélection par visée : au tap, un rayon part de la caméra ; le
  // premier ancrage touché déclenche onCorrect ou onWrong.
  // ---------------------------------------------------------------
  // ---------------------------------------------------------------
  // Convertit un ancrage {distance, angle, height} (mesure boussole :
  // 0°=tout droit devant soi, 90°=à droite, 180°=derrière, 270°=à
  // gauche — sens horaire, comme un cap de boussole) en {forward,
  // right, height}. Les ancrages déjà au format forward/right ne sont
  // pas modifiés (rétrocompatibilité).
  // ---------------------------------------------------------------
  function toForwardRight(a) {
    if (typeof a.forward === "number" && typeof a.right === "number") return a;
    const rad = (a.angle || 0) * Math.PI / 180;
    return { ...a, forward: a.distance * Math.cos(rad), right: a.distance * Math.sin(rad) };
  }

  const DECOY_JITTER_METERS = 0.18; // rejouabilité : les leurres bougent légèrement à chaque partie

  async function exploreChapter({ canvas, overlayRoot, anchors, onCorrect, onWrong, onHint, onEnd }) {
    if (!calib) throw new Error("Calibration requise avant d'explorer un chapitre.");
    const preloaded = await Promise.all(anchors.map(a => preloadImage(a.assetKey)));
    initRenderer(canvas);
    await openSession(overlayRoot);

    anchorMeshes = anchors.map((rawA, idx) => {
      const a = toForwardRight(rawA);
      const panel = makePanel(a.label, { correct: a.role === "hint" ? undefined : a.correct, hintRole: a.role === "hint", image: preloaded[idx], emoji: rawA.emoji, romanTrap: rawA.romanTrap });
      const jitter = (a.correct || a.role === "hint") ? 0 : DECOY_JITTER_METERS;
      const jf = a.forward + (Math.random() * 2 - 1) * jitter;
      const jr = a.right + (Math.random() * 2 - 1) * jitter;
      // Hauteur = hauteur RÉELLE au-dessus du sol (repère "local-floor"),
      // indépendante de la hauteur à laquelle le téléphone était tenu lors
      // de la calibration — sinon la hauteur du bras s'additionnait à la
      // hauteur du bureau (d'où les indices qui flottaient trop haut).
      const worldPos = new THREE.Vector3()
        .copy(calib.pos)
        .addScaledVector(calib.forward, jf)
        .addScaledVector(calib.right, jr);
      worldPos.y = a.height;
      panel.position.copy(worldPos);
      panel.userData.anchor = a;
      // orienté vers l'origine de calibration (à peu près face à l'élève)
      panel.lookAt(calib.pos.x, worldPos.y, calib.pos.z);
      scene.add(panel);
      return panel;
    });

    let resolved = false;

    session.addEventListener("select", () => {
      if (resolved) return;
      const dir = new THREE.Vector3();
      camera.getWorldDirection(dir);
      const origin = new THREE.Vector3();
      camera.getWorldPosition(origin);
      raycaster.set(origin, dir);
      raycaster.far = 12;
      const hits = raycaster.intersectObjects(anchorMeshes, false);
      if (!hits.length) return;
      const anchor = hits[0].object.userData.anchor;
      if (anchor.role === "hint") {
        flashHint(hits[0].object);
        if (onHint) onHint(anchor);
        return;
      }
      if (anchor.correct) {
        resolved = true;
        if (onCorrect) onCorrect(anchor);
      } else {
        flashWrong(hits[0].object);
        if (onWrong) onWrong(anchor);
      }
    });

    session.addEventListener("end", () => {
      session = null;
      if (onEnd) onEnd();
    });

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }

  function flashWrong(mesh) {
    const original = mesh.material.map;
    mesh.material.color.set(0xff5555);
    setTimeout(() => { if (mesh.material) mesh.material.color.set(0xffffff); }, 350);
  }

  function flashHint(mesh) {
    mesh.material.color.set(0x8ec9ff);
    setTimeout(() => { if (mesh.material) mesh.material.color.set(0xffffff); }, 350);
  }

  function endSession() {
    if (session) session.end();
    if (renderer) renderer.setAnimationLoop(null);
  }

  function resetCalibration() { calib = null; }

function fakeCalibrate() {
    calib = {
      pos: new THREE.Vector3(0, 0, 0),
      forward: new THREE.Vector3(0, 0, -1),
      right: new THREE.Vector3(1, 0, 0),
      up: new THREE.Vector3(0, 1, 0),
    };
  }

  return { isAvailable, calibrate, isCalibrated, exploreChapter, endSession, resetCalibration, fakeCalibrate };
})();

if (typeof window !== "undefined") window.ArXR = ArXR;
