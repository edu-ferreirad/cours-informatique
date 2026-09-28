const QUIZ_CHIMIE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option construisent une pile simple en laboratoire et doivent expliquer » ?", options:["OS uniquement — D'où vient l'énergie d'une pile ?", "Rapport d'expérience : mesurer un pH", "Enquête dans le tableau périodique", "OS uniquement — De l'univers primitif aux atomes"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option présentent en groupe » ?", options:["Trouver la bonne méthode de séparation", "OS uniquement — D'où vient l'énergie d'une pile ?", "OS uniquement — De l'univers primitif aux atomes", "OS uniquement — De la molécule à la fonction biologique"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_CHIMIE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_CHIMIE_4_COLLEGE = QUIZ_CHIMIE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
