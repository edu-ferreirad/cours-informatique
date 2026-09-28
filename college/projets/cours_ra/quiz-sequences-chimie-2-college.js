const QUIZ_CHIMIE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à une équation chimique non équilibrée » ?", options:["Rapport d'expérience : mesurer un pH", "OS uniquement — D'où vient l'énergie d'une pile ?", "Équilibrer une réaction par tâtonnement contrôlé", "Trouver la bonne méthode de séparation"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après une manipulation mesurant le pH de plusieurs solutions du quotidien » ?", options:["OS uniquement — D'où vient l'énergie d'une pile ?", "Rapport d'expérience : mesurer un pH", "Enquête dans le tableau périodique", "OS uniquement — De la molécule à la fonction biologique"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_CHIMIE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_CHIMIE_2_COLLEGE = QUIZ_CHIMIE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
