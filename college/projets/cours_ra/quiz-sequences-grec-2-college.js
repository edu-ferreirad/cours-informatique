const QUIZ_GREC_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves traduisent en groupe un très court extrait d'un auteur grec facile » ?", options:["Petit exposé de culture grecque", "Premiers pas avec un texte d'auteur", "Aborder les grands textes par auteur", "Raconter un mythe à sa façon"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Aborder les grands textes par auteur", "Petit exposé de culture grecque", "Lecture comparée en traduction", "La finesse d'un seul mot"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GREC_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GREC_2_COLLEGE = QUIZ_GREC_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
