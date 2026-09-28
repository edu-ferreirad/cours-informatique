const QUIZ_LATIN_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à une phrase latine courte » ?", options:["Analyser un texte dans son contexte", "Version guidée pas à pas", "Chasse à l'étymologie", "Le thème comme miroir de sa propre langue"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'une liste de mots latins simples » ?", options:["Analyser un texte dans son contexte", "L'héritage romain dans le droit suisse", "Chasse à l'étymologie", "Étudier seul un texte d'auteur"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_LATIN_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_LATIN_1_COLLEGE = QUIZ_LATIN_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
