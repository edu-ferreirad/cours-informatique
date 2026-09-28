const QUIZ_EPS_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur plusieurs semaines » ?", options:["Un carrousel de sports pour découvrir ses goûts", "Une activité en lien avec un élément naturel", "Sport (OC) — le sport vu par une autre discipline", "Devenir arbitre pour comprendre les règles"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À tour de rôle » ?", options:["Une activité en lien avec un élément naturel", "Devenir arbitre pour comprendre les règles", "Nommer la frustration plutôt que la jouer", "Débattre d'un enjeu du sport contemporain"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_EPS_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_EPS_1_COLLEGE = QUIZ_EPS_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
