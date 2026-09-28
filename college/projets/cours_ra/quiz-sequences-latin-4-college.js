const QUIZ_LATIN_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève choisit un court texte d'un auteur latin étudié » ?", options:["Étudier seul un texte d'auteur", "Version guidée pas à pas", "Petit dossier de civilisation romaine", "Comparer deux traductions d'un même texte"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En lien avec le cours d'économie et droit » ?", options:["Version guidée pas à pas", "Étudier seul un texte d'auteur", "Comparer deux traductions d'un même texte", "L'héritage romain dans le droit suisse"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_LATIN_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_LATIN_4_COLLEGE = QUIZ_LATIN_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
