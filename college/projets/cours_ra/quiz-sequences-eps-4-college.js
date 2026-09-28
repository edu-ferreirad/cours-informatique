const QUIZ_EPS_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves ayant choisi l'option complémentaire Sport conçoivent » ?", options:["Débattre d'un enjeu du sport contemporain", "Un carrousel de sports pour découvrir ses goûts", "Devenir arbitre pour comprendre les règles", "Sport (OC) — concevoir sa propre séance"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option complémentaire Sport analysent » ?", options:["Une activité en lien avec un élément naturel", "Nommer la frustration plutôt que la jouer", "Un carrousel de sports pour découvrir ses goûts", "Sport (OC) — le sport vu par une autre discipline"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_EPS_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_EPS_4_COLLEGE = QUIZ_EPS_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
