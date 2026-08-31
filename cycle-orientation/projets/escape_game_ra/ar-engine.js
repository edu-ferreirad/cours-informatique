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
  let renderer = null, scene = null, camera = null, reticle = null;
  let session = null, hitTestSource = null, refSpace = null;
  let anchorMeshes = [];
  let raycaster = null;
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

  function makePanel(text, { correct, imageDataUrl } = {}) {
    const canvas = document.createElement("canvas");
    canvas.width = 512; canvas.height = 320;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(10,13,19,0.9)";
    roundRect(ctx, 0, 0, 512, 320, 26); ctx.fill();
    ctx.strokeStyle = correct === false ? "#c0524a" : "#e7a94c";
    ctx.lineWidth = 6;
    roundRect(ctx, 6, 6, 500, 308, 24); ctx.stroke();
    ctx.fillStyle = correct === false ? "#e08a83" : "#f6cf8a";
    ctx.font = "600 30px Georgia, serif";
    ctx.textAlign = "center";
    wrapText(ctx, text, 256, 165, 440, 38);
    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
    const geo = new THREE.PlaneGeometry(0.42, 0.26);
    const mesh = new THREE.Mesh(geo, mat);
    return mesh;
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

  async function openSession(overlayRoot) {
    session = await navigator.xr.requestSession("immersive-ar", {
      requiredFeatures: ["hit-test"],
      optionalFeatures: ["dom-overlay"],
      domOverlay: overlayRoot ? { root: overlayRoot } : undefined,
    });
    renderer.xr.setReferenceSpaceType("local");
    await renderer.xr.setSession(session);
    const viewerSpace = await session.requestReferenceSpace("viewer");
    hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
    refSpace = await session.requestReferenceSpace("local");
    return session;
  }

  // ---------------------------------------------------------------
  // CALIBRATION : l'élève vise le point de repère (sol / bord de table)
  // et touche l'écran une fois. On enregistre position + orientation
  // (le "devant" = direction regardée à cet instant, projetée à
  // l'horizontale) comme origine pour tous les ancrages suivants.
  // ---------------------------------------------------------------
  async function calibrate({ canvas, overlayRoot, onCalibrated, onEnd }) {
    initRenderer(canvas);

    const ringGeo = new THREE.RingGeometry(0.06, 0.085, 32).rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xe7a94c });
    reticle = new THREE.Mesh(ringGeo, ringMat);
    reticle.matrixAutoUpdate = false;
    reticle.visible = false;
    scene.add(reticle);

    await openSession(overlayRoot);

    let done = false;
    session.addEventListener("select", () => {
      if (!reticle.visible || done) return;
      done = true;

      const pos = new THREE.Vector3().setFromMatrixPosition(reticle.matrix);
      // "devant" = direction de la caméra projetée à l'horizontale au moment du tap
      const camDir = new THREE.Vector3();
      camera.getWorldDirection(camDir);
      camDir.y = 0;
      if (camDir.lengthSq() < 1e-6) camDir.set(0, 0, -1);
      camDir.normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(camDir, up).normalize();

      calib = { pos, forward: camDir, right, up };
      scene.remove(reticle);
      if (onCalibrated) onCalibrated();
    });

    session.addEventListener("end", () => {
      hitTestSource = null; session = null;
      if (onEnd) onEnd();
    });

    renderer.setAnimationLoop((_, frame) => {
      if (frame && hitTestSource && !done) {
        const results = frame.getHitTestResults(hitTestSource);
        if (results.length) {
          const pose = results[0].getPose(refSpace);
          reticle.visible = true;
          reticle.matrix.fromArray(pose.transform.matrix);
        } else {
          reticle.visible = false;
        }
      }
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
  async function exploreChapter({ canvas, overlayRoot, anchors, onCorrect, onWrong, onEnd }) {
    if (!calib) throw new Error("Calibration requise avant d'explorer un chapitre.");
    initRenderer(canvas);
    await openSession(overlayRoot);

    anchorMeshes = anchors.map(a => {
      const imgKey = a.assetKey;
      const panel = makePanel(a.label, { correct: a.correct, imageDataUrl: imgKey && GAME_ASSETS[imgKey] });
      const worldPos = new THREE.Vector3()
        .copy(calib.pos)
        .addScaledVector(calib.forward, a.forward)
        .addScaledVector(calib.right, a.right)
        .addScaledVector(calib.up, a.height);
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
      if (anchor.correct) {
        resolved = true;
        if (onCorrect) onCorrect(anchor);
      } else {
        flashWrong(hits[0].object);
        if (onWrong) onWrong(anchor);
      }
    });

    session.addEventListener("end", () => {
      hitTestSource = null; session = null;
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
