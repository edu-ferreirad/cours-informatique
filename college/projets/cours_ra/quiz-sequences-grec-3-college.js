const QUIZ_GREC_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves traduisent et commentent un extrait plus long d'un auteur majeur du programme » ?", options:["Lecture comparée en traduction", "La finesse d'un seul mot", "Aborder les grands textes par auteur", "Déchiffrer avant de traduire"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un mot grec ayant plusieurs traductions possibles selon le contexte » ?", options:["Déchiffrer avant de traduire", "La finesse d'un seul mot", "Raconter un mythe à sa façon", "Premiers pas avec un texte d'auteur"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GREC_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GREC_3_COLLEGE = QUIZ_GREC_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
