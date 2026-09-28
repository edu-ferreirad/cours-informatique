const QUIZ_ALLEMAND_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Après lecture d'un court texte allemand » ?", options:["Repérer l'essentiel d'un document sonore", "Nacherzählung à partir d'images", "Mini-recherche transdisciplinaire", "Exprimer un point de vue sur un texte"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après une seule écoute d'un court reportage » ?", options:["Expliquer un texte littéraire court", "Repérer l'essentiel d'un document sonore", "Exprimer un point de vue sur un texte", "Présenter et défendre un sujet"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ALLEMAND_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ALLEMAND_2_COLLEGE = QUIZ_ALLEMAND_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
