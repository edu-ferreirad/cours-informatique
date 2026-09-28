const QUIZ_ESPAGNOL_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un texte littéraire hispanique » ?", options:["Travailler l'accent avec une chanson", "Commenter et interpréter un texte", "Oral blanc de maturité", "Effectuer une recherche personnelle"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit un sujet culturel du monde hispanique et mène une petite recherche documentaire en espagnol » ?", options:["Effectuer une recherche personnelle", "Rédiger un texte argumentatif complet", "Travailler l'accent avec une chanson", "Discussion et échange d'idées encadré"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ESPAGNOL_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ESPAGNOL_3_COLLEGE = QUIZ_ESPAGNOL_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
