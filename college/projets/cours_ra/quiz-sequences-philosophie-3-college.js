const QUIZ_PHILOSOPHIE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un court extrait d'un philosophe étudié » ?", options:["Discussion libre mais encadrée par la rigueur", "Pas de philosophie en 1ère année", "Dialoguer directement avec un texte source", "Pas encore de philosophie en 2e année"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur une question philosophique simple (qu'est-ce que la liberté ?) » ?", options:["Pas encore de philosophie en 2e année", "Discussion libre mais encadrée par la rigueur", "Dialoguer directement avec un texte source", "Un problème philosophique, plusieurs disciplines"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHILOSOPHIE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHILOSOPHIE_3_COLLEGE = QUIZ_PHILOSOPHIE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
