// ============================================================================
// QUIZ FINAL — SALLE MYTHOLOGIE
// ============================================================================

const QUIZ_MYTHOLOGIE = [
  {
    id: "q1",
    tier: "court",
    type: "qcm",
    prompt: "Combien de travaux Hercule doit-il accomplir ?",
    options: ["7", "10", "12", "15"],
    correct: 2,
  },
  {
    id: "q2",
    tier: "court",
    type: "texte",
    prompt: "Dans quel objet les soldats grecs se cachent-ils pour pénétrer dans Troie ?",
    answers: ["cheval de bois", "un cheval de bois", "cheval"],
  },
  {
    id: "q3",
    tier: "court",
    type: "qcm",
    prompt: "Comment s'appelle le navire magique de Jason ?",
    options: ["L'Odyssée", "L'Argo", "Le Pégase", "Le Nautilus"],
    correct: 1,
  },
  {
    id: "q4",
    tier: "standard",
    type: "texte",
    prompt: "Quel objet Persée utilise-t-il comme miroir pour affronter Méduse sans être pétrifié ?",
    answers: ["bouclier", "un bouclier", "le bouclier"],
  },
  {
    id: "q5",
    tier: "standard",
    type: "qcm",
    prompt: "Pourquoi Icare tombe-t-il dans la mer ?",
    options: [
      "Ses ailes sont trop lourdes",
      "Il s'approche trop du soleil et la cire de ses ailes fond",
      "Il a le mal de mer",
      "Le Minotaure le poursuit"
    ],
    correct: 1,
  },
  {
    id: "q6",
    tier: "riche",
    type: "texte",
    prompt: "En quel animal Minerve transforme-t-elle Arachné ?",
    answers: ["araignee", "une araignee"],
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
  return QUIZ_MYTHOLOGIE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel);
}

window.QUIZ_MYTHOLOGIE = QUIZ_MYTHOLOGIE;
window.getQuizForParcours = getQuizForParcours;
window.normalizeAnswer = normalizeAnswer;
