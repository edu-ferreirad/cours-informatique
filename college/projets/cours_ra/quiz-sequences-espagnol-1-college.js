const QUIZ_ESPAGNOL_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Scènes de survie linguistique", "Oral blanc de maturité", "Rédiger un texte argumentatif complet", "Discussion et échange d'idées encadré"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'une chanson hispanophone simple » ?", options:["Discussion et échange d'idées encadré", "Rédiger un texte argumentatif complet", "Oral blanc de maturité", "Travailler l'accent avec une chanson"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ESPAGNOL_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ESPAGNOL_1_COLLEGE = QUIZ_ESPAGNOL_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
