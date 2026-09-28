const QUIZ_LATIN_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un texte d'auteur latin étudié en option spécifique » ?", options:["Le thème comme miroir de sa propre langue", "Analyser un texte dans son contexte", "Version guidée pas à pas", "Petit dossier de civilisation romaine"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'une phrase française simple » ?", options:["Comparer deux traductions d'un même texte", "Version guidée pas à pas", "Le thème comme miroir de sa propre langue", "Chasse à l'étymologie"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_LATIN_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_LATIN_3_COLLEGE = QUIZ_LATIN_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
