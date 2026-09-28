const QUIZ_LATIN_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["L'héritage romain dans le droit suisse", "Chasse à l'étymologie", "Petit dossier de civilisation romaine", "Le thème comme miroir de sa propre langue"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent deux traductions différentes d'un même court passage latin et doivent identifier les choix d'interprétation… » ?", options:["Petit dossier de civilisation romaine", "L'héritage romain dans le droit suisse", "Analyser un texte dans son contexte", "Comparer deux traductions d'un même texte"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_LATIN_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_LATIN_2_COLLEGE = QUIZ_LATIN_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
