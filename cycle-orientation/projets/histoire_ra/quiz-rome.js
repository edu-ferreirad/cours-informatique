// ============================================================================
// QUIZ FINAL — SALLE ROME ANTIQUE
// ============================================================================

const QUIZ_ROME = [
  {
    id: "q1",
    tier: "court",
    type: "qcm",
    prompt: "Quel animal aurait, selon la légende, sauvé et allaité Romulus et Rémus ?",
    options: ["Un aigle", "Une louve", "Un sanglier", "Une chèvre"],
    correct: 1,
  },
  {
    id: "q2",
    tier: "court",
    type: "texte",
    prompt: "Quelle colline Romulus choisit-il pour fonder Rome, selon la légende ?",
    answers: ["palatin", "le palatin", "mont palatin"],
  },
  {
    id: "q3",
    tier: "court",
    type: "qcm",
    prompt: "En quelle année (avant notre ère) la tradition situe-t-elle la fondation de Rome ?",
    options: ["-509", "-753", "-44", "-27"],
    correct: 1,
  },
  {
    id: "q4",
    tier: "court",
    type: "texte",
    prompt: "Quel nom porte la place publique, cœur politique de Rome, proche du Capitole ?",
    answers: ["forum", "le forum"],
  },
  {
    id: "q5",
    tier: "standard",
    type: "qcm",
    prompt: "Qui succède à Jules César après son assassinat ?",
    options: ["Rémus", "Virgile", "Octavien (futur Auguste)", "Cicéron"],
    correct: 2,
  },
  {
    id: "q6",
    tier: "standard",
    type: "texte",
    prompt: "Quel nom prend Octavien lorsqu'il devient le premier empereur romain ?",
    answers: ["auguste"],
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


const QUIZ_TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getQuizForParcours(parcours) {
  const maxLevel = QUIZ_TIER_ORDER[parcours] || 1;
  return QUIZ_ROME.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel);
}

window.QUIZ_ROME = QUIZ_ROME;
window.getQuizForParcours = getQuizForParcours;
window.normalizeAnswer = normalizeAnswer;
