const QUIZ_GEOGRAPHIE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un enjeu environnemental global » ?", options:["Une même carte, trois échelles", "Décortiquer un document complexe", "Un grand problème planétaire, plusieurs échelles", "Débattre d'un aménagement du territoire"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit un territoire de son choix et mène une recherche documentaire courte pour en dégager une problématique… » ?", options:["Un grand problème planétaire, plusieurs échelles", "Pas de géographie en 1ère année", "Une même carte, trois échelles", "Petite recherche territoriale personnelle"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_4_COLLEGE = QUIZ_GEOGRAPHIE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
