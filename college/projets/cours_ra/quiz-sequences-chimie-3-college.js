const QUIZ_CHIMIE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option spécifique reçoivent la formule d'une molécule organique simple et doivent prévoir le produit d'une… » ?", options:["OS uniquement — Prévoir une réaction organique", "Rapport d'expérience : mesurer un pH", "OS uniquement — De la molécule à la fonction biologique", "Enquête dans le tableau périodique"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En coordination avec le cours de biologie de l'option » ?", options:["Rapport d'expérience : mesurer un pH", "OS uniquement — De la molécule à la fonction biologique", "Équilibrer une réaction par tâtonnement contrôlé", "OS uniquement — De l'univers primitif aux atomes"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_CHIMIE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_CHIMIE_3_COLLEGE = QUIZ_CHIMIE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
