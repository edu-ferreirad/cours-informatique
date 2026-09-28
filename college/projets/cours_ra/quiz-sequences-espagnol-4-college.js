const QUIZ_ESPAGNOL_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves rédigent un texte argumentatif structuré sur un sujet de société hispanophone » ?", options:["Travailler l'accent avec une chanson", "Lire des textes de complexité croissante", "Discussion et échange d'idées encadré", "Rédiger un texte argumentatif complet"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En conditions d'examen » ?", options:["Scènes de survie linguistique", "Travailler l'accent avec une chanson", "Commenter et interpréter un texte", "Oral blanc de maturité"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ESPAGNOL_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ESPAGNOL_4_COLLEGE = QUIZ_ESPAGNOL_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
