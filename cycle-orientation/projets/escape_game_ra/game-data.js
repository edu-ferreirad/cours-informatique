// ============================================================================
// GAME DATA — L'Enquête de la Marmite (Escalade 1602)
// Basé sur le jeu de salle original (dossier 2024-2025 fourni) :
// feuille du juge (8 énigmes officielles), plan de salle, matériel par élève.
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
    title: "Le chemin des soldats",
    narrative: [
      "Les espions ennemis ont fini leur récolte d'informations. Une armée de 2000 hommes s'avance vers Genève par une froide nuit de décembre.",
      "Pour ne pas être entendus, ils choisissent de marcher près de l'eau : le bruit du courant et des moulins couvre celui de leurs armures.",
      "Ils longent l'Arve par sa rive droite, remontent le Rhône jusqu'à la Corraterie, puis rejoignent le bastion de l'Oye et la porte de la Monnaie — laissée sans garde par mesure d'économie."
    ],
    puzzle: {
      type: "riddle",
      prompt: "Quel objet, discret et démontable, leur a permis de franchir la muraille sans passer par une porte gardée ?"
    },
    scan: null,
    spatialKey: "ch2",
    answers: ["echelle", "échelle", "les echelles", "une echelle"],
    hint: "Le matériel qu'on vous a donné au départ peut vous être utile.",
    successNote: "300 soldats environ franchirent ainsi la muraille grâce à 3 échelles démontables, à 2h du matin.",
    character: { name: "Le soldat savoyard", role: "Assaillant, armée du duc de Savoie", blurb: "Grimpe en silence dans le noir, une échelle démontable sur l'épaule." }
  },

  // ---------------------------------------------------------------- CH 3
  {
    id: 3,
    label: "Chapitre III",
    title: "L'alerte dans la nuit",
    narrative: [
      "Un garde aperçoit l'ombre des échelles contre le mur. Il n'a qu'un instant pour donner l'alerte à toute la cité endormie."
    ],
    puzzle: {
      type: "mirror",
      mirrorText: "S = XIX",
      prompt: "Le message du garde a été inversé pour brouiller les espions. Lisez-le dans le miroir de la salle, puis convertissez le chiffre romain en lettre (A=I, B=II, C=III…).",
      followup: "La lettre trouvée est l'initiale de ce qui a résonné dans tout Genève cette nuit-là. Cherchez l'objet qui porte ce son sur les murs de la salle."
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
      prompt: "C'est en souvenir de cette habitante que Genève mange, chaque année, une marmite en chocolat. Regardez le calendrier de la salle : à quelle héroïne rend-il hommage ?"
    },
    scan: null,
    spatialKey: "ch4",
    answers: ["mere royaume", "mère royaume", "la mere royaume", "catherine cheynel", "royaume"],
    hint: "Grâce à elle, vous mangez du chocolat chaque année pour fêter cette victoire.",
    successNote: "Un Savoyard fut tué net, sous sa fenêtre, d'un grand coup de marmite.",
    character: { name: "Mère Royaume", role: "Héroïne de l'Escalade", blurb: "Renversa sa marmite de soupe bouillante sur les assaillants depuis sa fenêtre." }
  },

  // ---------------------------------------------------------------- CH 5
  {
    id: 5,
    label: "Chapitre V",
    title: "L'écusson du bureau",
    narrative: [
      "Dans la pile de bulletins scolaires, un nom a été discrètement mis en évidence : « Clément Clé ». Un indice, ou une signature ?",
      "Un écusson a été posé sur chaque bureau de la salle. Un seul est le bon — les autres sont des leurres."
    ],
    puzzle: {
      type: "riddle",
      prompt: "Explorez la salle en réalité augmentée. L'écusson de Genève (aigle noir + clé d'or) est le bon — il n'est pas sur un bureau d'élève."
    },
    scan: null,
    spatialKey: "ch5",
    answers: ["cle", "clé", "une cle", "une clé"],
    hint: "L'écusson de Genève porte un aigle noir à couronne d'un côté, une clé d'or de l'autre — et il se trouve sur le bureau du professeur.",
    successNote: "Le prénom « Clément » et le nom de famille « Clé », entourés sur le bulletin, désignaient bien l'objet recherché.",
    character: { name: "L'aigle de Genève", role: "Emblème de la cité", blurb: "Aigle noir couronné et clé d'or : l'écusson que chaque assaillant redoutait de voir flotter au matin." }
  },

  // ---------------------------------------------------------------- CH 6
  {
    id: 6,
    label: "Chapitre VI",
    title: "La chanson de l'Escalade",
    narrative: [
      "Sur le panneau du fond est punaisée la chanson « Cé qu'è lainô », en patois genevois, chantée chaque année lors de la Course de l'Escalade.",
      "Deux lettres « a » y sont mystérieusement entourées. Un calcul, griffonné dans la marge, doit vous indiquer où chercher."
    ],
    puzzle: {
      type: "calc",
      expression: "(4 × 7) ÷ 2",
      expected: 14,
      prompt: "Résolvez le calcul griffonné dans la marge. Le résultat est le numéro de la strophe à retrouver sur le panneau."
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
    title: "Le rébus de la contre-attaque",
    narrative: [
      "Un dernier assaut se prépare. Deux feuilles de rébus traînent sur la table — l'une d'elles est un piège grossier laissé pour vous ralentir."
    ],
    puzzle: {
      type: "rebus",
      prompt: "Trouvez le vrai rébus parmi les deux, puis déchiffrez-le : un objet + un son + une fraction de mot.",
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

  // ---------------------------------------------------------------- CH 8 — SALLE NOIRE (simplifiée)
  {
    id: 8,
    label: "Chapitre VIII — La chambre noire",
    title: "Ce que la nuit cachait",
    narrative: [
      "Sur la pile de bulletins scolaires, un second nom a été discrètement mis en évidence — comme celui de Clément Clé plus tôt.",
      "Cette fois, ce ne sont pas des lettres de nom qui sont entourées, mais une lettre par appréciation de professeur. Lisez-les dans l'ordre."
    ],
    puzzle: {
      type: "bulletin-then-dark",
      prompt: "Entourez... trouvez plutôt : relevez la lettre surlignée dans chaque appréciation, dans l'ordre du bulletin.",
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
      afterWordPrompt: "« LUMIÈRE. » Un seul geste à faire dans la salle avant de continuer : éteignez-la (ou couvrez l'objectif de la caméra). Un indice à l'encre invisible n'apparaît que dans le noir complet.",
      revealText: "LE COUPABLE N'A JAMAIS QUITTÉ CETTE SALLE"
    },
    scan: null,
    spatialKey: "ch8",
    answers: ["enseignant", "le professeur", "la maitresse", "le maitre", "l'enseignant", "professeur", "maitre", "maitresse"],
    hint: "Relisez la phrase révélée dans le noir : qui, dans cette salle, n'est jamais parti pendant toute l'enquête ?",
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

if (typeof window !== "undefined") {
  window.CHAPTERS = CHAPTERS;
  window.RULES_INTRO = RULES_INTRO;
  window.PATOIS_BONUS = PATOIS_BONUS;
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
  window.ACCUSATION_WORDS = ACCUSATION_WORDS;
  window.MARMITE_ROOM_CODE = MARMITE_ROOM_CODE;
}
