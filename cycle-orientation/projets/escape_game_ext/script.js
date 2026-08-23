/* ============================================================
   MATRIX_1602 — Escalade outdoor (Vieille Ville de Genève)
   Reconstruit à partir du dossier complet 2024-2025 (feuille du
   juge, règles, mail de menace) : mêmes 8 énigmes officielles,
   même dénouement (l'enseignant-e est démasqué-e), mêmes
   identifiants de fin de mission.

   PERSONNALISATION — points à adapter avant de jouer :
   1) Coordonnées GPS de chaque secteur (voir README, fiabilité
      variable selon les lieux).
   2) CULPRIT_ANSWERS  : qui est "démasqué" (nom réel de la personne).
   3) LOCATION_STEP.gps : lieu de ralliement final réel (Bourg-de-Four
      par défaut — changez-le si vous préférez un autre lieu réel).
   ============================================================ */

const PROLOGUE = {
  title: "DOSSIER D'ENQUÊTE — Cycle de Drize",
  mail: `De : anonyme@anonyme.com — À : la direction\n"Cette année, c'est votre école qui payera ma marmite en chocolat !"`,
  text: "Inquiétée par ce message, la direction a découvert que des indices, disséminés dans la Vieille Ville, désignent le véritable coupable et le lieu où la marmite a été cachée. Ces indices suivent l'ordre de l'histoire de l'Escalade de 1602. Suivez-la pour ne pas vous tromper : à chaque secteur validé, un mot du dossier s'assemble."
};

// Les 8 énigmes ci-dessous et leurs réponses reprennent telles quelles
// la "feuille juge" 2024-2025 du projet (colonnes "Réponses attendues").
const STEPS = [
  {
    id: 1,
    type: "text",
    title: "ÉNIGME 1 — La carte des espions",
    brief: "Un chef ambitieux a décidé d'envahir la cité. Ses espions en ont étudié la géographie avant l'assaut.",
    gps: { lat: 46.2020, lng: 6.1480, label: "Promenade de la Treille" },
    question: "Quel est le nom de la cité menacée ?",
    answer: "GENEVE",
    hint: "Il paraît qu'il faut toujours commencer par les coins — aidez-vous du texte au dos de la carte.",
    fragment: "LE"
  },
  {
    id: 2,
    type: "photo",
    title: "ÉNIGME 2 — L'assaut des murailles",
    brief: "Une partie des soldats a lancé l'assaut à 2h du matin, à l'aide d'un objet démontable en bois, peint en noir pour ne pas être vu de nuit. Les échelles originales de 1602 sont conservées à quelques pas d'ici, à la Maison Tavel, qui retrace l'histoire de l'Escalade.",
    gps: { lat: 46.2016, lng: 6.1489, label: "Maison Tavel (Rue du Puits-Saint-Pierre 6)" },
    question: "Quel objet leur a permis d'escalader la muraille ? Prenez en photo la façade de la Maison Tavel pour valider votre passage.",
    answer: "ECHELLE",
    refPhoto: "assets/ref-maison-tavel.jpg",
    hint: "Le matériel de départ peut vous être utile.",
    fragment: "COUPABLE"
  },
  {
    id: 3,
    type: "text",
    title: "ÉNIGME 3 — L'alerte",
    brief: "Un vigile a donné l'alerte à 4h30, réveillant toute la cité.",
    gps: { lat: 46.2044, lng: 6.1487, label: "Cathédrale Saint-Pierre" },
    question: "Quel objet sonore a donné l'alerte ? (S=XIX, retrouvez la conversion chiffres romains → lettres)",
    answer: "CLOCHE",
    hint: "Les murs peuvent peut-être vous aider.",
    fragment: "EST"
  },
  {
    id: 4,
    type: "photo",
    title: "ÉNIGME 4 — La marmite de laiton",
    brief: "Notre première héroïne aurait renversé sa marmite en laiton sur la tête d'un envahisseur, depuis sa fenêtre. Sa maison se serait en réalité trouvée plus bas, vers l'ancienne porte de la Monnaie — mais un immeuble de la Corraterie, tout près de la maison de notre prochaine héroïne, lui est aujourd'hui associé par la tradition populaire.",
    gps: { lat: 46.2018, lng: 6.1464, label: "Rue de la Corraterie (Tour de la Corraterie)" },
    question: "Prenez en photo la tour dite « de l'Escalade », sur la façade de la Corraterie, et notez le nom complet de cette héroïne.",
    refPhoto: "assets/ref-corraterie.jpg",
    hint: "Les nouvelles technologies peuvent être utiles parfois.",
    fragment: "PARMI"
  },
  {
    id: 5,
    type: "photo",
    title: "ÉNIGME 5 — L'objet de Dame Piaget",
    brief: "Notre seconde héroïne a lancé un autre objet depuis sa fenêtre pour aider les défenseurs à ouvrir un passage. Sa maison se trouvait juste à côté de la tour de la Corraterie — un visage sculpté (un mascaron) orne encore aujourd'hui la façade du 7, rue de la Corraterie, près du Grand Théâtre. Les historiens débattent pour savoir s'il représente Dame Piaget ou Mère Royaume : à vous de vous faire votre propre avis !",
    gps: { lat: 46.2011, lng: 6.1462, label: "7, Rue de la Corraterie (mascaron, près du Grand Théâtre)" },
    question: "Quel objet Dame Piaget a-t-elle lancé aux défenseurs ? Prenez en photo le mascaron du 7 rue de la Corraterie pour valider votre passage.",
    refPhoto: "assets/ref-corraterie-piaget.jpg",
    hint: "Elle rentre toujours la première et sort toujours la dernière — vous en avez sûrement une sur vous.",
    fragment: "NOUS"
  },
  {
    id: 6,
    type: "text",
    title: "ÉNIGME 6 — Le héros de la Porte-Neuve",
    brief: "Un militaire a fait tomber la coulisse (herse) sur la Porte-Neuve pour empêcher les ennemis d'entrer. Une chanson célèbre lui rend hommage. La place actuelle occupe l'emplacement exact de cette ancienne porte de ville.",
    gps: { lat: 46.2009, lng: 6.1434, label: "Place Neuve (ancienne Porte-Neuve)" },
    question: "Quel est le numéro de la strophe du « Cé qu'è lainô » qui relate cet exploit ? (indice de calcul : (4×7)×(36/18), puis 1+4/2+(8-5-2))",
    answer: "14",
    hint: "Aidez-vous d'Internet pour trouver le texte complet du « Cé qu'è lainô ».",
    fragment: "DANS"
  },
  {
    id: 7,
    type: "text",
    title: "ÉNIGME 7 — La déroute des envahisseurs",
    brief: "Après seulement trois ou quatre heures de combat, les envahisseurs ont pris la fuite, décimés par un moyen bien précis, tiré depuis le bastion de l'Oye, juste devant vous.",
    gps: { lat: 46.2019, lng: 6.1462, label: "Rue de la Tertasse (À VÉRIFIER sur place)" },
    question: "Par quel moyen les Genevois ont-ils fait fuir les envahisseurs ?",
    answer: "CANONNADE",
    altAnswers: ["CANNONADE"],
    hint: "Un objet dans la salle vous aiderait normalement — ici, pensez plutôt à ce qui fait beaucoup de bruit et de dégâts en une seule salve.",
    fragment: "LA"
  }
];

/* ---- ÉTAPE 8 : démasquer le coupable ------------------------- */
// La feuille juge 2024-2025 indique explicitement "Enseignant" comme
// réponse attendue. Personnalisez avec le nom réel si besoin.
const CULPRIT_ANSWERS = ["ENSEIGNANT", "ENSEIGNANTE", "PROFESSEUR", "PROF", "ACCOMPAGNATEUR", "ACCOMPAGNATRICE"];

const ACCUSATION_STEP = {
  id: 8,
  type: "text",
  title: "ÉNIGME 8 — Le dossier assemblé",
  brief: "Les mots recueillis à chaque secteur forment une phrase. Relisez-la dans le dossier ci-dessus : elle désigne le coupable, caché parmi vous depuis le début. Rien ni personne n'a jamais quitté la salle de classe...",
  question: "Qui, parmi les adultes présents aujourd'hui, est le véritable coupable ?",
  isAccusation: true
};

/* ---- ÉTAPE 9 : le point de ralliement final -------------------- */
// Le Bourg-de-Four est une vraie place historique de la Vieille Ville,
// avec sa fontaine et ses bancs — idéale pour que la classe s'installe
// et partage la marmite en chocolat une fois le coupable démasqué.
// Remplacez gps si vous préférez un autre lieu de rassemblement réel
// (école, parc...).
const LOCATION_ANSWERS = ["MARMITE"];

const LOCATION_STEP = {
  id: 9,
  type: "text",
  title: "ÉNIGME 9 — Le point de ralliement",
  brief: "Coupable démasqué ! Rendez-vous au point de ralliement, où la marmite en chocolat sera enfin partagée entre toute la classe.",
  gps: { lat: 46.2012, lng: 6.1487, label: "Bourg-de-Four" },
  question: "Vous voici au Bourg-de-Four. Tapez le mot qui va bientôt voler en éclats pour clore la mission !",
  hint: "C'est l'objet que Dame Royaume a lancé par sa fenêtre — sa version sucrée vous attend."
};

// Identifiants officiels 2024-2025 (fichier "escalade mail.txt" du dossier).
const FINAL = {
  email: "escaladepointdrize@gmail.com",
  code: "drize081121"
};

const ALL_STEPS = [...STEPS, ACCUSATION_STEP, LOCATION_STEP];

const POINTS_PER_STEP = 10;
const HINT_PENALTY = 5;
const MAX_SCORE = ALL_STEPS.length * POINTS_PER_STEP;

// ⚠ ATTENTION précision GPS smartphone : en conditions réelles (rue étroite,
// façades hautes en Vieille Ville), la précision GPS d'un téléphone tourne
// plutôt autour de 5 à 20 m, parfois plus près des bâtiments — rarement
// 2-3 m de façon fiable. Avec une tolérance aussi serrée, une équipe peut
// être bloquée alors qu'elle est réellement sur place. Testez ce réglage
// vous-même sur le terrain avant la sortie et élargissez-le si besoin.
const GEO_TOLERANCE_M = 3;

/* ============================================================
   ÉTAT DE JEU + PERSISTANCE (localStorage + export/import JSON)
   ============================================================ */

const LS_KEY = "m1602_save";

function defaultState() {
  return {
    teamName: "",
    teamMembers: "",
    startedAt: null,
    completed: [],
    hintsUsed: [],
    sobre: false
  };
}

let state = loadFromLocalStorage() || defaultState();

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    return { ...defaultState(), ...data };
  } catch (e) {
    console.warn("Sauvegarde locale illisible :", e);
    return null;
  }
}

function persist() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch (e) {
    // Sauvegarde silencieuse : navigation privée / quota plein, etc.
    // Le bouton "Sauvegarder" (export fichier) reste disponible.
    console.warn("Autosauvegarde impossible :", e);
  }
}

function currentScore() {
  return MAX_SCORE - state.hintsUsed.length * HINT_PENALTY;
}

function ensureStarted() {
  if (!state.startedAt) {
    state.startedAt = Date.now();
    persist();
  }
}

/* ---- Export / import de sauvegarde (fichier .json) ----------- */

function downloadSave() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const safeName = (state.teamName || "equipe").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30);
  const horodatage = new Date().toISOString().slice(0, 16).replace(/[:T]/g, "-");
  a.href = url;
  a.download = `matrix1602_${safeName}_${horodatage}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function loadSaveFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    let data;
    try {
      data = JSON.parse(e.target.result);
    } catch (err) {
      alert("✘ Fichier de sauvegarde invalide.");
      return;
    }
    if (!data || typeof data !== "object" || !Array.isArray(data.completed)) {
      alert("✘ Fichier de sauvegarde invalide.");
      return;
    }
    state = { ...defaultState(), ...data };
    persist();
    location.reload();
  };
  reader.readAsText(file);
  event.target.value = "";
}

/* ============================================================
   OUTILS
   ============================================================ */

function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function normalize(str) {
  return str
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function mapsUrl(gps) {
  return `https://www.google.com/maps/dir/?api=1&destination=${gps.lat},${gps.lng}`;
}

/* ============================================================
   ÉCRAN D'ACCUEIL (formulaire équipe)
   ============================================================ */

function initWelcomeScreen() {
  const welcome = document.getElementById("welcome-screen");
  const form = document.getElementById("team-form");
  const nameInput = document.getElementById("input-team-name");
  const membersInput = document.getElementById("input-team-members");
  const sobreCheckbox = document.getElementById("checkbox-sobre");
  const restoreBtn = document.getElementById("btn-restore-save");

  sobreCheckbox.checked = !!state.sobre;
  document.body.classList.toggle("sobre", !!state.sobre);
  sobreCheckbox.addEventListener("change", () => {
    state.sobre = sobreCheckbox.checked;
    document.body.classList.toggle("sobre", state.sobre);
    persist();
  });

  // Si une partie a déjà commencé (équipe + progression), on propose de la reprendre.
  if (state.teamName && (state.completed.length > 0 || state.startedAt)) {
    restoreBtn.classList.remove("hidden");
    restoreBtn.textContent = `💾 Reprendre « ${state.teamName} » (${state.completed.length}/${ALL_STEPS.length} secteurs)`;
    restoreBtn.addEventListener("click", () => startGame(welcome));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (!name) return;
    state.teamName = name;
    state.teamMembers = membersInput.value.trim();
    persist();
    startGame(welcome);
  });
}

function startGame(welcomeEl) {
  welcomeEl.classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("team-display").textContent = state.teamName
    ? `// équipe : ${state.teamName}`
    : "// parcours outdoor — Vieille Ville de Genève";
  init();
}

/* ============================================================
   RENDU DU JEU
   ============================================================ */

function renderProgress() {
  const pct = Math.round((state.completed.length / ALL_STEPS.length) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
}

function renderDossier() {
  const box = document.getElementById("dossier-words");
  const scoreBox = document.getElementById("dossier-score");
  if (box) {
    const words = STEPS.filter((s) => state.completed.includes(s.id)).map((s) => s.fragment);
    box.textContent = words.length ? words.join(" · ") : "— aucun mot recueilli pour l'instant —";
  }
  if (scoreBox) scoreBox.textContent = `${currentScore()} / ${MAX_SCORE} pts`;
}

function renderPrologue() {
  const game = document.getElementById("game");
  const box = document.createElement("section");
  box.className = "prologue";
  box.innerHTML = `
    <h2>${PROLOGUE.title}</h2>
    <pre class="prologue-mail">${PROLOGUE.mail}</pre>
    <p>${PROLOGUE.text}</p>
    <div class="dossier"><span class="dossier-label">Dossier assemblé :</span> <span id="dossier-words"></span></div>
    <div class="dossier score-line"><span class="dossier-label">Score :</span> <span id="dossier-score"></span></div>
  `;
  game.appendChild(box);
}

function renderStep(step, index, total) {
  const isText = step.type === "text";
  const tpl = document.getElementById(isText ? "tpl-text" : "tpl-photo");
  const node = tpl.content.cloneNode(true);
  const section = node.querySelector(".step");
  section.id = "step-" + step.id;
  if (step.isAccusation) section.classList.add("accusation");

  node.querySelector(".step-num").textContent = `SECTEUR ${index + 1}/${total}`;
  node.querySelector(".step-title").textContent = step.title;
  node.querySelector(".step-brief").textContent = step.brief;
  node.querySelector(".step-question").textContent = step.question;

  const gpsLink = node.querySelector(".gps-link");
  if (step.gps) {
    gpsLink.href = mapsUrl(step.gps);
    node.querySelector(".gps-label").textContent = "Itinéraire (Google Maps) : " + step.gps.label;
  } else {
    gpsLink.remove();
  }

  const hintBtn = node.querySelector(".hint-btn");
  const hintText = node.querySelector(".hint-text");
  if (step.hint) {
    const alreadyUsed = state.hintsUsed.includes(step.id);
    if (alreadyUsed) {
      hintText.classList.remove("hidden");
      hintText.textContent = "» " + step.hint;
      hintBtn.disabled = true;
      hintBtn.textContent = `Indice déjà utilisé (−${HINT_PENALTY} pts)`;
    }
    hintBtn.addEventListener("click", () => {
      hintText.classList.remove("hidden");
      hintText.textContent = "» " + step.hint;
      hintBtn.disabled = true;
      hintBtn.textContent = `Indice utilisé (−${HINT_PENALTY} pts)`;
      if (!state.hintsUsed.includes(step.id)) {
        state.hintsUsed.push(step.id);
        persist();
      }
      renderDossier();
    });
  } else {
    hintBtn.remove();
  }

  const feedback = node.querySelector(".feedback");

  if (isText) {
    const input = node.querySelector(".answer-input");
    const btn = node.querySelector(".validate-btn");
    const acceptable = step.isAccusation ? CULPRIT_ANSWERS
      : step.answer ? [step.answer, ...(step.altAnswers || [])]
      : LOCATION_ANSWERS;
    btn.addEventListener("click", () => {
      ensureStarted();
      const given = normalize(input.value);
      if (acceptable.map(normalize).includes(given)) {
        feedback.textContent = "✔ Code validé — secteur suivant débloqué.";
        feedback.className = "feedback ok";
        input.disabled = true;
        btn.disabled = true;
        markComplete(step.id);
      } else {
        feedback.textContent = "✘ Mauvais code — relisez l'indice de mission.";
        feedback.className = "feedback err";
      }
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") btn.click();
    });
  } else {
    const refImg = node.querySelector(".ref-photo img");
    refImg.src = step.refPhoto;
    refImg.onerror = () => {
      refImg.replaceWith(Object.assign(document.createElement("div"), {
        className: "photo-placeholder",
        textContent: "Photo de référence à ajouter : " + step.refPhoto
      }));
    };

    const fileInput = node.querySelector(".photo-input");
    const placeholder = node.querySelector(".photo-placeholder");
    const userImg = node.querySelector(".user-photo img");
    const geoStatus = node.querySelector(".geo-status");
    const validateBtn = node.querySelector(".photo-validate");
    let photoTaken = false;

    fileInput.addEventListener("change", () => {
      ensureStarted();
      const file = fileInput.files[0];
      if (!file) return;
      photoTaken = true;
      const url = URL.createObjectURL(file);
      userImg.src = url;
      userImg.classList.remove("hidden");
      placeholder.classList.add("hidden");
      geoStatus.textContent = "Comparez votre photo au repère, puis appuyez sur Valider.";
      geoStatus.className = "geo-status";
    });

    function checkLocationAndValidate() {
      if (!("geolocation" in navigator)) {
        geoStatus.textContent = "Géolocalisation indisponible sur cet appareil — photo acceptée sans vérification de position.";
        geoStatus.className = "geo-status warn";
        completePhotoStep();
        return;
      }
      geoStatus.textContent = "Vérification de la position…";
      geoStatus.className = "geo-status";
      validateBtn.disabled = true;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const d = haversine(
            pos.coords.latitude, pos.coords.longitude,
            step.gps.lat, step.gps.lng
          );
          const acc = pos.coords.accuracy ? Math.round(pos.coords.accuracy) : null;
          if (d <= GEO_TOLERANCE_M) {
            geoStatus.textContent = `✔ Position confirmée (≈${d.toFixed(1)} m du repère).`;
            geoStatus.className = "geo-status ok";
            completePhotoStep();
          } else {
            geoStatus.textContent = `✘ Trop loin du repère (≈${d.toFixed(1)} m, tolérance ${GEO_TOLERANCE_M} m` +
              (acc ? `, précision GPS actuelle ≈${acc} m` : "") +
              `). Rapprochez-vous et réessayez.`;
            geoStatus.className = "geo-status warn";
            feedback.textContent = "✘ Secteur non validé : vous n'êtes pas assez près du repère GPS.";
            feedback.className = "feedback err";
            validateBtn.disabled = false;
          }
        },
        () => {
          geoStatus.textContent = "Position non accessible (GPS refusé ou hors service) — photo acceptée sans vérification.";
          geoStatus.className = "geo-status warn";
          completePhotoStep();
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }

    function completePhotoStep() {
      feedback.textContent = "✔ Preuve reçue — secteur suivant débloqué.";
      feedback.className = "feedback ok";
      validateBtn.disabled = true;
      fileInput.disabled = true;
      markComplete(step.id);
    }

    validateBtn.addEventListener("click", () => {
      if (!photoTaken) {
        feedback.textContent = "✘ Ajoutez une photo avant de valider ce secteur.";
        feedback.className = "feedback err";
        return;
      }
      checkLocationAndValidate();
    });
  }

  return node;
}

function markComplete(id) {
  if (!state.completed.includes(id)) {
    state.completed.push(id);
    persist();
  }
  renderProgress();
  renderDossier();
  const idx = ALL_STEPS.findIndex((s) => s.id === id);
  const next = ALL_STEPS[idx + 1];
  if (next) {
    document.getElementById("step-" + next.id).scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showFinal();
  }
}

function showFinal() {
  const el = document.getElementById("final-screen");
  el.querySelector(".final-email").textContent = "Adresse de transmission : " + FINAL.email;
  el.querySelector(".final-code").textContent = "Code secret final : " + FINAL.code;
  const totalSec = Math.round((Date.now() - state.startedAt) / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const team = state.teamName ? `${state.teamName} — ` : "";
  document.getElementById("final-time-value").textContent =
    `${team}${m} min ${s.toString().padStart(2, "0")} s — Score : ${currentScore()} / ${MAX_SCORE} pts`;
  el.classList.remove("hidden");
  el.scrollIntoView({ behavior: "smooth" });
}

function init() {
  renderPrologue();
  const game = document.getElementById("game");
  ALL_STEPS.forEach((step, i) => game.appendChild(renderStep(step, i, ALL_STEPS.length)));
  state.completed.forEach((id) => {
    const section = document.getElementById("step-" + id);
    if (!section) return;
    section.querySelectorAll("input, button.validate-btn, button.photo-validate").forEach((el) => (el.disabled = true));
  });
  renderProgress();
  renderDossier();
  if (state.completed.length === ALL_STEPS.length) showFinal();
}

/* ============================================================
   DÉMARRAGE
   ============================================================ */

document.getElementById("btn-save").addEventListener("click", downloadSave);
document.getElementById("btn-load").addEventListener("click", () => document.getElementById("file-load").click());
document.getElementById("file-load").addEventListener("change", loadSaveFromFile);

initWelcomeScreen();
