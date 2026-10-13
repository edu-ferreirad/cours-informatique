// ============================================================================
// QUIZ FINAL — SALLE THÉÂTRE — EXPRESSION ORALE 9e
// ============================================================================

const QUIZ_THEATRE_9E = [
  {
    id: "q1",
    tier: "court",
    type: "qcm",
    prompt: "Pendant l'exercice de respiration allongé, où pose-t-on la main pour sentir l'air ?",
    options: ["Sur la poitrine", "Sur l'abdomen", "Sur la gorge", "Sur le front"],
    correct: 1,
  },
  {
    id: "q2",
    tier: "court",
    type: "texte",
    prompt: "Comment appelle-t-on une phrase difficile à prononcer, répétée pour s'entraîner à l'articulation (ex. : \"un chasseur sachant chasser\") ?",
    answers: ["virelangue", "un virelangue", "virelangues"],
  },
  {
    id: "q3",
    tier: "court",
    type: "qcm",
    prompt: "Dans l'exercice du corps qui raconte, comment doit-on exécuter le geste choisi ?",
    options: ["Le plus vite possible", "En chantant", "De plus en plus lentement, jusqu'au ralenti", "Les yeux fermés"],
    correct: 2,
  },
  {
    id: "q4",
    tier: "moyen",
    type: "qcm",
    prompt: "Où se situe le point unique du masque neutre, censé représenter son regard ?",
    options: ["Sur le menton", "Au centre du front", "Sur la joue droite", "Il n'y en a pas"],
    correct: 1,
  },
  {
    id: "q5",
    tier: "moyen",
    type: "texte",
    prompt: "Quel très court poème japonais les élèves tentent-ils de reconstituer de mémoire, ensemble, dans l'exercice d'écoute ?",
    answers: ["haiku", "haïku", "un haiku", "un haïku"],
  },
  {
    id: "q6",
    tier: "moyen",
    type: "qcm",
    prompt: "Dans l'exercice \"Journal de 20 heures\", que doivent faire les élèves-journalistes avant de poser une question ?",
    options: ["Lever la main sans se lever", "Se lever pour demander la parole", "Crier leur question", "Écrire leur question au tableau"],
    correct: 1,
  },
  {
    id: "q7",
    tier: "long",
    type: "texte",
    prompt: "Quel humoriste allemand a écrit la \"conversation absurde\" jouée en duo, avec deux secondes de silence entre chaque réplique ?",
    answers: ["karl valentin", "valentin"],
  },
  {
    id: "q8",
    tier: "long",
    type: "qcm",
    prompt: "Dans l'exercice de narration et description, quelle est la première étape avant de raconter une histoire ?",
    options: ["Inventer un dialogue", "Décrire précisément l'objet", "Choisir un titre", "Dessiner l'objet"],
    correct: 1,
  },
  {
    id: "q9",
    tier: "long",
    type: "qcm",
    prompt: "De quel auteur les scènes travaillées en mémorisation/interprétation (L'École des femmes, Le Bourgeois gentilhomme...) sont-elles tirées ?",
    options: ["Victor Hugo", "Molière", "Jean Tardieu", "Albert Camus"],
    correct: 1,
  },
  {
    id: "q10",
    tier: "long",
    type: "texte",
    prompt: "En improvisation, quelle règle interdit-on absolument : refuser systématiquement quoi, venant de son partenaire ?",
    answers: ["les propositions", "ses propositions", "proposition", "les propositions de jeu"],
  },
];

function normalizeAnswer(s) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");
}

const QUIZ_TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getQuizForParcours(parcours) {
  const maxLevel = QUIZ_TIER_ORDER[parcours] || 1;
  return QUIZ_THEATRE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel);
}

window.QUIZ_THEATRE_9E = QUIZ_THEATRE_9E;
window.getQuizForParcours = getQuizForParcours;
window.normalizeAnswer = normalizeAnswer;
