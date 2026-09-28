const QUIZ_ALLEMAND_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « En lien avec une autre discipline (histoire ou sciences) » ?", options:["Expliquer un texte littéraire court", "Oral blanc de maturité", "Présenter et défendre un sujet", "Mini-recherche transdisciplinaire"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En conditions d'examen » ?", options:["Oral blanc de maturité", "Exprimer un point de vue sur un texte", "Jeux de rôle du quotidien", "Présenter et défendre un sujet"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ALLEMAND_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ALLEMAND_4_COLLEGE = QUIZ_ALLEMAND_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
