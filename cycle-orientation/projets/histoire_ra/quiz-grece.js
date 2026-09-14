// ============================================================================
// QUIZ FINAL — SALLE GRÈCE ANTIQUE
// Mélange QCM + réponses courtes à taper. La correction est automatique
// (comparaison texte normalisée pour les réponses courtes : sans accents,
// insensible à la casse).
// ============================================================================

const QUIZ_GRECE = [
  {
    id: "q1",
    type: "qcm",
    prompt: "Comment appelle-t-on la place publique où les citoyens athéniens se réunissaient pour décider des lois ?",
    options: ["Le forum", "L'agora", "Le Sénat", "L'acropole"],
    correct: 1,
  },
  {
    id: "q2",
    type: "qcm",
    prompt: "À quel dieu étaient consacrés les Jeux antiques d'Olympie ?",
    options: ["Poséidon", "Apollon", "Zeus", "Hermès"],
    correct: 2,
  },
  {
    id: "q3",
    type: "texte",
    prompt: "Quel nom donne-t-on à la période de paix imposée entre les cités grecques pendant la durée des Jeux ?",
    answers: ["treve sacree", "la treve sacree"],
  },
  {
    id: "q4",
    type: "texte",
    prompt: "Sur quelle colline sacrée d'Athènes se trouve le Parthénon ?",
    answers: ["acropole", "l acropole", "sur l acropole"],
  },
  {
    id: "q5",
    type: "qcm",
    prompt: "Quelle cité grecque est surtout connue pour son entraînement militaire rigoureux dès l'enfance ?",
    options: ["Corinthe", "Sparte", "Delphes", "Athènes"],
    correct: 1,
  },
  {
    id: "q6",
    type: "texte",
    prompt: "De quel peuple les Grecs ont-ils adapté leur alphabet, en y ajoutant des voyelles ?",
    answers: ["phenicien", "les pheniciens", "phenicienne"],
  },
];

function normalizeAnswer(s) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // enlève les accents
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");
}

window.QUIZ_GRECE = QUIZ_GRECE;
window.normalizeAnswer = normalizeAnswer;
