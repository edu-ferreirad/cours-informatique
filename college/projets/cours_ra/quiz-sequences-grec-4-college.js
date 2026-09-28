const QUIZ_GREC_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit un thème lié à la civilisation grecque étudiée sur les quatre années et mène une recherche personnelle… » ?", options:["Lecture comparée en traduction", "Petit exposé de culture grecque", "Premiers pas avec un texte d'auteur", "Travail de recherche personnel"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent un extrait grec traduit à un texte français d'inspiration antique (théâtre » ?", options:["Raconter un mythe à sa façon", "Lecture comparée en traduction", "Travail de recherche personnel", "La finesse d'un seul mot"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GREC_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GREC_4_COLLEGE = QUIZ_GREC_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
