// ============================================================================
// QUIZ BONUS — ÉGYPTE PHARAONIQUE
// ============================================================================

const QUIZ_EGYPTE_PHARAONIQUE = [
  {
    id: "q1",
    tier: "court",
    type: "texte",
    prompt: "En quelle année la tombe de Toutankhamon est-elle découverte ?",
    answers: ["1922"],
  },
  {
    id: "q2",
    tier: "riche",
    type: "qcm",
    prompt: "Quel archéologue découvre l'entrée de la tombe de Toutankhamon ?",
    options: ["Jean-François Champollion", "Howard Carter", "Heinrich Schliemann", "Auguste Mariette"],
    correct: 1,
  },
  {
    id: "q3",
    tier: "riche",
    type: "texte",
    prompt: "Dans quelle vallée, proche de l'antique Thèbes, se trouve la tombe de Toutankhamon ?",
    answers: ["vallee des rois", "la vallee des rois"],
  },
  {
    id: "q4",
    tier: "court",
    type: "qcm",
    prompt: "Combien de jours dure environ le processus complet de momification ?",
    options: ["10 jours", "30 jours", "70 jours", "150 jours"],
    correct: 2,
  },
  {
    id: "q5",
    tier: "standard",
    type: "texte",
    prompt: "Quel dieu à tête de chacal veille sur les momies dans la mythologie égyptienne ?",
    answers: ["anubis"],
  },
  {
    id: "q6",
    tier: "court",
    type: "qcm",
    prompt: "Vers quelle date la grande pyramide de Khéops est-elle construite ?",
    options: ["Vers 2570 av. J.-C.", "Vers 753 av. J.-C.", "Vers 331 av. J.-C.", "Vers 30 av. J.-C."],
    correct: 0,
  },
  {
    id: "q7",
    tier: "standard",
    type: "texte",
    prompt: "En quel matériau précieux est fait le masque funéraire de Toutankhamon ?",
    answers: ["or", "de l or", "en or"],
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
  return QUIZ_EGYPTE_PHARAONIQUE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel);
}

window.QUIZ_EGYPTE_PHARAONIQUE = QUIZ_EGYPTE_PHARAONIQUE;
window.getQuizForParcours = getQuizForParcours;
window.normalizeAnswer = normalizeAnswer;
