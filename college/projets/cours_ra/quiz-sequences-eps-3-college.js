const QUIZ_EPS_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Lors d'une sortie ou d'un module spécifique (eau » ?", options:["Débattre d'un enjeu du sport contemporain", "Une activité en lien avec un élément naturel", "Sport (OC) — le sport vu par une autre discipline", "Sport (OC) — concevoir sa propre séance"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un article d'actualité sportive » ?", options:["Débattre d'un enjeu du sport contemporain", "Devenir arbitre pour comprendre les règles", "Un carrousel de sports pour découvrir ses goûts", "Suivre ses propres progrès sur un test simple"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_EPS_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_EPS_3_COLLEGE = QUIZ_EPS_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
