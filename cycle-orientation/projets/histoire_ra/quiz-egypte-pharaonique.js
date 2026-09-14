// ============================================================================
// QUIZ BONUS — ÉGYPTE PHARAONIQUE
// ============================================================================

const QUIZ_EGYPTE_PHARAONIQUE = [
  {
    id: "q1",
    type: "texte",
    prompt: "En quelle année la tombe de Toutankhamon est-elle découverte ?",
    answers: ["1922"],
  },
  {
    id: "q2",
    type: "qcm",
    prompt: "Quel archéologue découvre l'entrée de la tombe de Toutankhamon ?",
    options: ["Jean-François Champollion", "Howard Carter", "Heinrich Schliemann", "Auguste Mariette"],
    correct: 1,
  },
  {
    id: "q3",
    type: "texte",
    prompt: "Dans quelle vallée, proche de l'antique Thèbes, se trouve la tombe de Toutankhamon ?",
    answers: ["vallee des rois", "la vallee des rois"],
  },
  {
    id: "q4",
    type: "qcm",
    prompt: "Combien de jours dure environ le processus complet de momification ?",
    options: ["10 jours", "30 jours", "70 jours", "150 jours"],
    correct: 2,
  },
  {
    id: "q5",
    type: "texte",
    prompt: "Quel dieu à tête de chacal veille sur les momies dans la mythologie égyptienne ?",
    answers: ["anubis"],
  },
  {
    id: "q6",
    type: "qcm",
    prompt: "Vers quelle date la grande pyramide de Khéops est-elle construite ?",
    options: ["Vers 2570 av. J.-C.", "Vers 753 av. J.-C.", "Vers 331 av. J.-C.", "Vers 30 av. J.-C."],
    correct: 0,
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

window.QUIZ_EGYPTE_PHARAONIQUE = QUIZ_EGYPTE_PHARAONIQUE;
window.normalizeAnswer = normalizeAnswer;
