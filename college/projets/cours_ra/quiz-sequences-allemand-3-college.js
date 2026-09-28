const QUIZ_ALLEMAND_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève prépare un exposé de 3 minutes sur un sujet culturel germanophone de son choix et doit répondre ensuite à deux… » ?", options:["Repérer l'essentiel d'un document sonore", "Présenter et défendre un sujet", "Exprimer un point de vue sur un texte", "Expliquer un texte littéraire court"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un court extrait littéraire allemand » ?", options:["Exprimer un point de vue sur un texte", "Nacherzählung à partir d'images", "Expliquer un texte littéraire court", "Oral blanc de maturité"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ALLEMAND_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ALLEMAND_3_COLLEGE = QUIZ_ALLEMAND_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
