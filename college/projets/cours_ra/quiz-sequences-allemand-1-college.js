const QUIZ_ALLEMAND_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Mini-recherche transdisciplinaire", "Nacherzählung à partir d'images", "Jeux de rôle du quotidien", "Présenter et défendre un sujet"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'une suite de 4 images muettes » ?", options:["Nacherzählung à partir d'images", "Jeux de rôle du quotidien", "Expliquer un texte littéraire court", "Exprimer un point de vue sur un texte"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ALLEMAND_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ALLEMAND_1_COLLEGE = QUIZ_ALLEMAND_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
