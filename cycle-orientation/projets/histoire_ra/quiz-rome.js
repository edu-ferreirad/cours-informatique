// ============================================================================
// QUIZ FINAL — SALLE ROME ANTIQUE
// ============================================================================

const QUIZ_ROME = [
  {
    id: "q1",
    type: "qcm",
    prompt: "Quel animal aurait, selon la légende, sauvé et allaité Romulus et Rémus ?",
    options: ["Un aigle", "Une louve", "Un sanglier", "Une chèvre"],
    correct: 1,
  },
  {
    id: "q2",
    type: "texte",
    prompt: "Quelle colline Romulus choisit-il pour fonder Rome, selon la légende ?",
    answers: ["palatin", "le palatin", "mont palatin"],
  },
  {
    id: "q3",
    type: "qcm",
    prompt: "En quelle année (avant notre ère) la tradition situe-t-elle la fondation de Rome ?",
    options: ["-509", "-753", "-44", "-27"],
    correct: 1,
  },
  {
    id: "q4",
    type: "texte",
    prompt: "Quel nom porte la place publique, cœur politique de Rome, proche du Capitole ?",
    answers: ["forum", "le forum"],
  },
  {
    id: "q5",
    type: "qcm",
    prompt: "Qui succède à Jules César après son assassinat ?",
    options: ["Rémus", "Virgile", "Octavien (futur Auguste)", "Cicéron"],
    correct: 2,
  },
  {
    id: "q6",
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

window.QUIZ_ROME = QUIZ_ROME;
window.normalizeAnswer = normalizeAnswer;
