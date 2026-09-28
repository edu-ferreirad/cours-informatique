const QUIZ_GEOGRAPHIE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un même territoire (une ville) » ?", options:["Une même carte, trois échelles", "Un grand problème planétaire, plusieurs échelles", "Petite recherche territoriale personnelle", "Pas de géographie en 1ère année"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un document mêlant carte » ?", options:["Pas de géographie en 1ère année", "Décortiquer un document complexe", "Une même carte, trois échelles", "Petite recherche territoriale personnelle"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_2_COLLEGE = QUIZ_GEOGRAPHIE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
