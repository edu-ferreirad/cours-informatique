// ============================================================================
// QUIZ FINAL — SALLE ALEXANDRIE (ÉGYPTE HELLÉNISTIQUE)
// ============================================================================

const QUIZ_ALEXANDRIE = [
  {
    id: "q1",
    type: "qcm",
    prompt: "Le phare d'Alexandrie fait partie de quelle liste antique de monuments exceptionnels ?",
    options: ["Les Sept Merveilles du monde", "Les temples d'Égypte", "Les royaumes hellénistiques", "Les monuments romains"],
    correct: 0,
  },
  {
    id: "q2",
    type: "texte",
    prompt: "Quel général d'Alexandre le Grand devient roi d'Égypte en -305 et donne son nom à la dynastie qui règne ensuite sur Alexandrie ?",
    answers: ["ptolemee", "ptolemee ier", "ptolemee i"],
  },
  {
    id: "q3",
    type: "qcm",
    prompt: "Quel centre d'Alexandrie attire les plus grands savants pour y étudier astronomie, mathématiques et médecine ?",
    options: ["Le Sénat", "L'Acropole", "Le Mouseîon", "Le Forum"],
    correct: 2,
  },
  {
    id: "q4",
    type: "texte",
    prompt: "Quelle reine, dernière souveraine d'Égypte, s'allie à Jules César puis à Marc-Antoine ?",
    answers: ["cleopatre", "cleopatre vii"],
  },
  {
    id: "q5",
    type: "qcm",
    prompt: "Grâce à quel document, gravé en trois écritures, Champollion parvient-il à déchiffrer les hiéroglyphes ?",
    options: ["Le papyrus de Turin", "La pierre de Rosette", "La stèle de Karnak", "Le décret d'Alexandrie"],
    correct: 1,
  },
  {
    id: "q6",
    type: "texte",
    prompt: "Quel titre égyptien traditionnel les Ptolémées reprennent-ils pour légitimer leur pouvoir ?",
    answers: ["pharaon", "le titre de pharaon"],
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

window.QUIZ_ALEXANDRIE = QUIZ_ALEXANDRIE;
window.normalizeAnswer = normalizeAnswer;
