// ============================================================================
// GAME DATA — L'Enquête de la Marmite (Escalade 1602)
// Basé sur le jeu de salle original (dossier 2024-2025 fourni) :
// feuille du juge (8 énigmes officielles) + inventaire réel du matériel
// ("Liste du matériel présent dans une boîte pour l'escape Game") :
//   - enveloppe de départ           → énigme 1 (carte / Genève)
//   - goblet à l'écusson de Genève  → contient l'énigme 2 (échelle)
//   - vrai cahier « échelle »       → contient l'énigme 3 (cloche)
//   - (pas d'objet — pure narration)→ énigme 4 (Mère Royaume)
//   - bulletins « Clément Clé »     → énigme 5 (clé) + lettres surlignées
//     qui indiquent d'éteindre la lumière avant l'énigme 6
//   - boîte à cadenas               → contient l'énigme 6 (chanson/strophe)
//   - calendrier (dos de novembre)  → contient l'énigme 7 (rébus/canonnade)
//   - (pas d'objet — pure narration)→ énigme 8 (coupable)
// Chaque chapitre = 1 écran plein, pas de retour en arrière (esprit MATRIX_1602).
// ============================================================================

const CHAPTERS = [

  // ---------------------------------------------------------------- CH 1
  {
    id: 1,
    label: "Chapitre I",
    title: "L'enveloppe scellée",
    narrative: [
      "Vous êtes les meilleurs enquêteurs du canton de Genève, appelés sur la scène d'un cambriolage au Cycle de Drize : quelqu'un a volé la marmite en chocolat de l'Escalade.",
      "Sur la table, une enveloppe scellée. À l'intérieur, une carte ancienne découpée en morceaux et un mot : « Il paraît qu'il faut toujours commencer par les coins. »"
    ],
    puzzle: {
      type: "jigsaw-image",
      prompt: "Une carte ancienne de Genève, découpée en douze fragments. Touchez deux fragments pour les échanger et reconstituez la carte.",
      imageKey: "img_map1602",
      cols: 3,
      rows: 4,
    },
    scan: null,
    answers: ["geneve", "genève"],
    hint: "Un bon puzzle commence toujours par les coins.",
    successNote: "La carte représente bien Genève, à cette époque passée.",
    character: { name: "La Cité", role: "Genève, décembre 1602", blurb: "Ville-État protestante encerclée par la Savoie catholique, défendue par ses seules murailles." }
  },

  // ---------------------------------------------------------------- CH 2
  {
    id: 2,
    label: "Chapitre II",
    title: "Le gobelet à l'écusson",
    narrative: [
      "La carte confirme : vous êtes à Genève. Quelque part dans la salle, un gobelet marqué de l'écusson de la ville — aigle noir couronné, clé d'or — cache la suite de l'enquête.",
      "Méfiez-vous : d'autres écussons cantonaux et de simples verres traînent aussi sur les bureaux. Un seul gobelet porte celui de Genève, et il n'est pas sur un bureau d'élève."
    ],
    puzzle: {
      type: "riddle",
      prompt: "Explorez la salle en réalité augmentée pour trouver le gobelet à l'écusson de Genève. À l'intérieur : une armée de 2000 hommes a longé l'Arve puis le Rhône jusqu'à la Corraterie pour atteindre la porte de la Monnaie, laissée sans garde. Quel objet, discret et démontable, leur a permis de franchir la muraille ?"
    },
    scan: null,
    spatialKey: "ch2",
    answers: ["echelle", "échelle", "les echelles", "une echelle"],
    hint: "Le matériel qu'on vous a donné au départ peut vous être utile. Trois cahiers « échelles » traînent dans la salle — méfiez-vous d'une échelle bien trop moderne pour 1602.",
    successNote: "300 soldats environ franchirent ainsi la muraille grâce à 3 échelles démontables, à 2h du matin.",
    character: { name: "Le soldat savoyard", role: "Assaillant, armée du duc de Savoie", blurb: "Grimpe en silence dans le noir, une échelle démontable sur l'épaule." }
  },

  // ---------------------------------------------------------------- CH 3
  {
    id: 3,
    label: "Chapitre III",
    title: "L'alerte dans la nuit",
    narrative: [
      "Le vrai cahier « échelle » cachait la suite : un garde aperçoit l'ombre des échelles contre le mur. Il n'a qu'un instant pour donner l'alerte à toute la cité endormie."
    ],
    puzzle: {
      type: "mirror",
      mirrorText: "S = XIX",
      prompt: "Le message du garde a été inversé pour brouiller les espions. Lisez-le dans le miroir de la salle, puis convertissez le chiffre romain en lettre (A=I, B=II, C=III… — le porte-documents 🗂️ peut vous aider).",
      followup: "La lettre trouvée est l'initiale de ce qui a résonné dans tout Genève cette nuit-là."
    },
    scan: null,
    spatialKey: "ch3",
    answers: ["cloche", "la cloche", "une cloche"],
    hint: "XIX en chiffres romains = 19. La 19e lettre de l'alphabet est S… comme un mot qui commence par S et qui sonne l'alarme.",
    successNote: "Droit au clocher, on sonna l'alarme : « Aux armes, aux armes ! »",
    character: { name: "Le guet", role: "Garde de nuit", blurb: "Le premier à voir les échelles contre le mur — et à sonner l'alerte qui sauva la ville." }
  },

  // ---------------------------------------------------------------- CH 4
  {
    id: 4,
    label: "Chapitre IV",
    title: "La marmite fumante",
    narrative: [
      "Réveillée par le vacarme, une habitante se penche à sa fenêtre. Elle tient entre les mains une lourde marmite, encore fumante de la soupe du soir.",
      "Sans hésiter, elle la renverse sur les assaillants massés sous sa fenêtre."
    ],
    puzzle: {
      type: "riddle",
      prompt: "C'est en souvenir de cette habitante que Genève mange, chaque année, une marmite en chocolat. À quelle héroïne rend-on hommage ?"
    },
    scan: null,
    answers: ["mere royaume", "mère royaume", "la mere royaume", "catherine cheynel", "royaume"],
    hint: "Grâce à elle, vous mangez du chocolat chaque année pour fêter cette victoire.",
    successNote: "Un Savoyard fut tué net, sous sa fenêtre, d'un grand coup de marmite.",
    character: { name: "Mère Royaume", role: "Héroïne de l'Escalade", blurb: "Renversa sa marmite de soupe bouillante sur les assaillants depuis sa fenêtre." }
  },

  // ---------------------------------------------------------------- CH 5
  {
    id: 5,
    label: "Chapitre V",
    title: "Le bulletin de Clément Clé",
    narrative: [
      "Une devinette griffonnée au dos d'un billet : « J'entre le premier et je sors toujours le dernier. Qui suis-je ? »",
      "Sur le bureau du professeur, une pile de bulletins scolaires. Un seul porte un nom qui n'est pas un hasard."
    ],
    puzzle: {
      type: "bulletin-then-dark",
      prompt: "Trouvez d'abord, en réalité augmentée, le bulletin de « Clément Clé » parmi les autres sur le bureau du professeur. Une fois trouvé, une lettre est surlignée dans chaque appréciation du bulletin — lisez-les dans l'ordre.",
      bulletinRows: [
        { subject: "Français",      remark: "Lacunes en grammaire",        circleIndex: 0 },
        { subject: "Mathématiques", remark: "Utile de revoir les bases",   circleIndex: 0 },
        { subject: "Allemand",      remark: "Motivé et appliqué",          circleIndex: 0 },
        { subject: "Sciences",      remark: "Inégal selon les chapitres",  circleIndex: 0 },
        { subject: "Histoire",      remark: "Efforts à poursuivre",        circleIndex: 0 },
        { subject: "Arts visuels",  remark: "Rigueur à développer",        circleIndex: 0 },
        { subject: "Sport",        remark: "Excellent trimestre",          circleIndex: 0 },
      ],
      solutionWord: "LUMIERE",
      afterWordPrompt: "« LUMIÈRE. » Un geste à faire avant de continuer : éteignez la lumière de la salle (ou couvrez l'objectif de la caméra). La boîte à cadenas du chapitre suivant ne se révèle que dans le noir complet.",
      revealText: "LA CLÉ OUVRE LA BOÎTE À CADENAS"
    },
    scan: null,
    spatialKey: "ch5",
    answers: ["cle", "clé", "une cle", "une clé"],
    hint: "On m'insère en premier pour ouvrir, on me retire en dernier en partant — c'est bien une clé.",
    successNote: "Le prénom « Clément » et le nom de famille « Clé », sur ce bulletin précis, désignaient bien l'objet recherché.",
    character: { name: "Clément Clé", role: "Élève (ou signature ?)", blurb: "Un nom trop parfait pour être un hasard, glissé au milieu des bulletins du bureau." }
  },

  // ---------------------------------------------------------------- CH 6
  {
    id: 6,
    label: "Chapitre VI",
    title: "La boîte à cadenas",
    narrative: [
      "Muni de votre clé, vous repérez une boîte fermée par un cadenas dans la salle, plongée dans le noir. À l'intérieur : la chanson « Cé qu'è lainô », en patois genevois, chantée chaque année lors de la Course de l'Escalade.",
      "Deux lettres « a » y sont mystérieusement entourées. Un calcul, griffonné dans la marge, doit vous indiquer où chercher."
    ],
    puzzle: {
      type: "calc",
      expression: "(4 × 7) ÷ 2",
      expected: 14,
      prompt: "Explorez la salle en réalité augmentée pour trouver la boîte à cadenas, puis résolvez le calcul griffonné dans la marge. Le résultat est le numéro de la strophe à retrouver sur le panneau."
    },
    scan: null,
    spatialKey: "ch6",
    answers: ["14", "strophe 14", "la strophe 14"],
    hint: "(4 × 7) = 28, puis 28 ÷ 2 = 14.",
    successNote: "Isaac Mercier, qui fit tomber la coulisse de la Porte-Neuve pour bloquer l'ennemi, est honoré à la strophe 14.",
    character: { name: "Isaac Mercier", role: "Défenseur de la Porte-Neuve", blurb: "Fit tomber la coulisse (herse) de la porte pour couper la retraite à l'ennemi." },
    bonus: "patois"
  },

  // ---------------------------------------------------------------- CH 7
  {
    id: 7,
    label: "Chapitre VII",
    title: "Le calendrier de novembre",
    narrative: [
      "Un calendrier traîne près de l'armoire. Au dos du mois de novembre : deux feuilles de rébus — l'une d'elles est un piège grossier laissé pour vous ralentir.",
      "Un dernier assaut se prépare."
    ],
    puzzle: {
      type: "rebus",
      prompt: "Trouvez le calendrier en réalité augmentée, puis le vrai rébus parmi les deux au dos de novembre. Déchiffrez-le : un objet + un son + une fraction de mot.",
      images: [
        { key: "rebus_fake", isTrap: true },
        { key: "rebus_true", isTrap: false }
      ]
    },
    scan: null,
    spatialKey: "ch7",
    answers: ["canonnade", "la canonnade", "une canonnade"],
    hint: "« Canne » + « eau » se ressemblent, mais le vrai rébus commence par un tir : pensez « canon ».",
    successNote: "Grâce à la canonnade improvisée, les Genevois repoussèrent l'assaut final.",
    character: { name: "Le canonnier", role: "Artilleur genevois", blurb: "Répondit à l'assaut par une canonnade improvisée depuis les remparts." },
    bonus: "canon"
  },

  // ---------------------------------------------------------------- CH 8
  {
    id: 8,
    label: "Chapitre VIII",
    title: "Le coupable",
    narrative: [
      "La canonnade repoussée, il ne reste plus qu'à démasquer le coupable. Un seul indice, griffonné à la hâte : « Rien ni personne n'a jamais quitté cette salle. »"
    ],
    puzzle: {
      type: "riddle",
      prompt: "Qui, dans cette salle, n'a jamais quitté sa place pendant toute l'enquête ?"
    },
    scan: null,
    answers: ["enseignant", "le professeur", "la maitresse", "le maitre", "l'enseignant", "professeur", "maitre", "maitresse"],
    hint: "Relisez l'indice : qui, dans cette salle, n'est jamais parti pendant toute l'enquête ?",
    successNote: "Le coupable est démasqué : celui ou celle qui n'a jamais quitté la salle. Direction l'armoire fermée à clé sous le bureau — la marmite s'y trouve peut-être encore.",
    character: { name: "Le coupable", role: "???", blurb: "N'a jamais quitté cette salle. Vous l'avez démasqué." },
    isFinal: true
  },
];

const RULES_INTRO = "Vous êtes les meilleurs enquêteurs du canton de Genève.";

// ---------------------------------------------------------------------------
// Mini-bonus patois (après chapitre 6 — Cé qu'è lainô)
// ---------------------------------------------------------------------------
const PATOIS_BONUS = {
  word: "Cé qu'è lainô",
  prompt: "Un mot de la chanson en patois genevois — que veut-il dire en français ?",
  options: [
    { text: "Celui qui est en haut", correct: true },
    { text: "Celui qui a froid", correct: false },
    { text: "Celui qui chante fort", correct: false },
  ],
};

// ---------------------------------------------------------------------------
// Quiz final (bonus optionnel après l'écran de conclusion)
// ---------------------------------------------------------------------------
const QUIZ_QUESTIONS = [
  {
    q: "En quelle année a eu lieu l'Escalade ?",
    options: ["1502", "1602", "1702", "1802"],
    correctIndex: 1,
  },
  {
    q: "Combien de coureurs participent aujourd'hui à la Course de l'Escalade chaque année ?",
    options: ["environ 4 500", "environ 15 000", "environ 45 000", "environ 90 000"],
    correctIndex: 2,
  },
  {
    q: "Quel duché a attaqué Genève cette nuit-là ?",
    options: ["Le duché de Savoie", "Le duché de Bourgogne", "Le duché de Milan", "Le duché de Lorraine"],
    correctIndex: 0,
  },
  {
    q: "Que mange-t-on traditionnellement pour fêter l'Escalade ?",
    options: ["Une tarte aux pruneaux", "Une marmite en chocolat", "Un pain d'épices", "Une fondue"],
    correctIndex: 1,
  },
  {
    q: "Quel objet a permis aux soldats savoyards de franchir la muraille ?",
    options: ["Un bélier", "Une catapulte", "Des échelles démontables", "Un tunnel"],
    correctIndex: 2,
  },
];

// ---------------------------------------------------------------------------
// Révélation progressive — esprit MATRIX_1602 : l'accusation et le numéro de
// la salle où se cache la marmite se révèlent petit à petit, chapitre après
// chapitre, au lieu d'apparaître d'un coup à la fin.
// ---------------------------------------------------------------------------

// Un mot de l'accusation se révèle après chaque chapitre 1 à 5.
const ACCUSATION_WORDS = ["LE", "COUPABLE", "EST", "PARMI", "NOUS"];

// Un chiffre du numéro de salle se révèle après chaque chapitre 6, 7 et 8.
// À REMPLACER par le vrai numéro de la salle où la marmite doit être cachée
// (même principe que spatial-config.js : c'est un placeholder à corriger).
const MARMITE_ROOM_CODE = "203";

// Mot de passe pour accéder au jeu (écran de chantier, comme sur MATRIX_1602).
// Change-le librement — il est comparé tel quel, sans casse ni accents stricts.
const GAME_ACCESS_PASSWORD = "drizera2025";

if (typeof window !== "undefined") {
  window.CHAPTERS = CHAPTERS;
  window.RULES_INTRO = RULES_INTRO;
  window.PATOIS_BONUS = PATOIS_BONUS;
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.ACCUSATION_WORDS = ACCUSATION_WORDS;
  window.MARMITE_ROOM_CODE = MARMITE_ROOM_CODE;
  window.GAME_ACCESS_PASSWORD = GAME_ACCESS_PASSWORD;
}
