const QUIZ_GEOGRAPHIE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un projet d'aménagement fictif mais réaliste (nouvelle ligne de transport » ?", options:["Pas de géographie en 1ère année", "Petite recherche territoriale personnelle", "Cartographier un flux mondial", "Débattre d'un aménagement du territoire"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves construisent une carte simplifiée représentant un flux économique ou migratoire mondial (matière première » ?", options:["Petite recherche territoriale personnelle", "Une même carte, trois échelles", "Cartographier un flux mondial", "Débattre d'un aménagement du territoire"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_3_COLLEGE = QUIZ_GEOGRAPHIE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
