// ============================================================================
// QUIZ FINAL — SALLE LATINE (« Chez les Nautius »)
// ============================================================================

const QUIZ_LATINE = [
  {
    id: "q1",
    tier: "court",
    type: "texte",
    prompt: "Comment s'appelle le bassin de l'atrium qui recueille l'eau de pluie ?",
    answers: ["impluvium", "l impluvium"],
  },
  {
    id: "q2",
    tier: "court",
    type: "qcm",
    prompt: "Quel gladiateur combat avec un trident et un filet ?",
    options: ["Le mirmillon", "Le rétiaire", "Le lanista", "Le lictor"],
    correct: 1,
  },
  {
    id: "q3",
    tier: "standard",
    type: "qcm",
    prompt: "Quel dieu la famille Nautius remercie-t-elle avant un long voyage ?",
    options: ["Mars", "Vulcain", "Mercure", "Bacchus"],
    correct: 2,
  },
  {
    id: "q4",
    tier: "riche",
    type: "texte",
    prompt: "Dans quelle ville italienne Publius Nautius Vetus se trouve-t-il lors de l'éruption du Vésuve ?",
    answers: ["pompei", "a pompei"],
  },
  {
    id: "q5",
    tier: "riche",
    type: "qcm",
    prompt: "Quels sont les deux grands axes qui structurent le plan d'une ville romaine ?",
    options: ["Le forum et le théâtre", "Le cardo et le decumanus", "L'atrium et le péristyle", "Le cirque et les thermes"],
    correct: 1,
  },
  {
    id: "q6",
    tier: "riche",
    type: "texte",
    prompt: "Quel est le nom du petit chien de la famille Nautius ?",
    answers: ["monstrum"],
  },
  {
    id: "q7",
    tier: "court",
    type: "qcm",
    prompt: "À quoi servait une amphore romaine ?",
    options: ["À transporter du vin", "À s'éclairer", "À se parfumer", "À nourrir les bébés"],
    correct: 0,
  },
  {
    id: "q8",
    tier: "court",
    type: "texte",
    prompt: "Cite une ville traversée par la famille Nautius entre Rome et Genève.",
    answers: ["pise", "genes", "gênes", "turin", "martigny"],
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
  return QUIZ_LATINE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel);
}

window.QUIZ_LATINE = QUIZ_LATINE;
window.getQuizForParcours = getQuizForParcours;
window.normalizeAnswer = normalizeAnswer;
