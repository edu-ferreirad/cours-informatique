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
      type: "riddle",
      prompt: "Reconstituez les coins de la carte pour révéler la ville qu'elle représente. Un lac immense, un fleuve qui la traverse, une nuit de décembre 1602 où elle fut attaquée par surprise…",
    },
    scan: null,
    answers: ["geneve", "genève"],
    hint: "C'est la ville où vous vous trouvez en ce moment même.",
    successNote: "La carte représente bien Genève, à cette époque passée."
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
    scan: { key: "echelle", label: "Cahier « Les échelles »", instruction: "Visez le cahier « échelle » (attention : deux faux exemplaires traînent aussi dans la salle)." },
    answers: ["echelle", "échelle", "les echelles", "une echelle"],
    hint: "Elle est en bois, peinte en noir pour ne pas être vue dans la nuit — trois d'entre elles sont aujourd'hui exposées à la Cathédrale Saint-Pierre.",
    successNote: "300 soldats environ franchirent ainsi la muraille grâce à 3 échelles démontables, à 2h du matin."
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
    scan: { key: "miroir_cloche", label: "Le miroir + l'écusson de Genève", instruction: "Visez le miroir et la feuille qui l'accompagne." },
    answers: ["cloche", "la cloche", "une cloche"],
    hint: "XIX en chiffres romains = 19. La 19e lettre de l'alphabet est S… comme un mot qui commence par S et qui sonne l'alarme.",
    successNote: "Droit au clocher, on sonna l'alarme : « Aux armes, aux armes ! »"
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
    scan: { key: null, label: "Le calendrier scotché sur l'armoire", instruction: "Feuilletez le calendrier jusqu'au mois indiqué par l'énigme précédente." },
    answers: ["mere royaume", "mère royaume", "la mere royaume", "catherine cheynel", "royaume"],
    hint: "Son nom complet évoque un règne — « Royaume ». On l'appelle aussi simplement « Mère ».",
    successNote: "Un Savoyard fut tué net, sous sa fenêtre, d'un grand coup de marmite."
  },

  // ---------------------------------------------------------------- CH 5
  {
    id: 5,
    label: "Chapitre V",
    title: "Le bulletin et l'écusson",
    narrative: [
      "Dans la pile de bulletins scolaires, un nom a été discrètement encerclé : « Clément Clé ». Un indice, ou une signature ?",
      "À côté, un gobelet porte un écusson. Il faut le reconnaître entre tous pour savoir où chercher."
    ],
    puzzle: {
      type: "image-choice",
      prompt: "Repérez l'écusson de Genève parmi les quatre blasons ci-dessous.",
      options: [
        { key: "ecusson_vaud", label: "?", correct: false, name: "Vaud" },
        { key: "ecusson_berne", label: "?", correct: false, name: "Berne" },
        { key: "ecusson_geneve", label: "?", correct: true, name: "Genève" },
        { key: "ecusson_valais", label: "?", correct: false, name: "Valais" },
      ]
    },
    scan: { key: null, label: "Le gobelet à l'écusson de Genève", instruction: "Une fois le bon écusson repéré, retournez vers le gobelet qui lui correspond." },
    answers: ["cle", "clé", "une cle", "une clé"],
    hint: "L'écusson de Genève porte un aigle noir à couronne d'un côté, une clé d'or de l'autre.",
    successNote: "Le prénom « Clément » et le nom de famille « Clé », entourés sur le bulletin, désignaient bien l'objet recherché."
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
    scan: { key: null, label: "Le panneau « Cé qu'è lainô »", instruction: "Comptez les strophes jusqu'au numéro trouvé." },
    answers: ["14", "strophe 14", "la strophe 14"],
    hint: "(4 × 7) = 28, puis 28 ÷ 2 = 14.",
    successNote: "Isaac Mercier, qui fit tomber la coulisse de la Porte-Neuve pour bloquer l'ennemi, est honoré à la strophe 14."
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
    scan: { key: "rebus_true", label: "Le vrai rébus", instruction: "Visez la bonne feuille de rébus une fois repérée." },
    answers: ["canonnade", "la canonnade", "une canonnade"],
    hint: "« Canne » + « eau » se ressemblent, mais le vrai rébus commence par un tir : pensez « canon ».",
    successNote: "Grâce à la canonnade improvisée, les Genevois repoussèrent l'assaut final."
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
    scan: { key: null, label: "Indice à l'encre invisible", instruction: "Obscurité requise pour révéler l'indice." },
    answers: ["enseignant", "le professeur", "la maitresse", "le maitre", "l'enseignant", "professeur", "maitre", "maitresse"],
    hint: "Relisez la phrase révélée dans le noir : qui, dans cette salle, n'est jamais parti pendant toute l'enquête ?",
    successNote: "Le coupable est démasqué : celui ou celle qui n'a jamais quitté la salle. Direction l'armoire fermée à clé sous le bureau — la marmite s'y trouve peut-être encore.",
    isFinal: true
  },
];

const RULES_INTRO = "Vous êtes les meilleurs enquêteurs du canton de Genève.";

if (typeof window !== "undefined") {
  window.CHAPTERS = CHAPTERS;
  window.RULES_INTRO = RULES_INTRO;
}
