const QUIZ_ESPAGNOL_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent deux textes sur un même thème » ?", options:["Scènes de survie linguistique", "Oral blanc de maturité", "Lire des textes de complexité croissante", "Effectuer une recherche personnelle"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur un sujet culturel simple » ?", options:["Effectuer une recherche personnelle", "Discussion et échange d'idées encadré", "Travailler l'accent avec une chanson", "Lire des textes de complexité croissante"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ESPAGNOL_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ESPAGNOL_2_COLLEGE = QUIZ_ESPAGNOL_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
