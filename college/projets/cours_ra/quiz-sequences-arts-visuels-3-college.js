const QUIZ_ARTS_VISUELS_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option spécifique définissent seuls un petit projet plastique personnel (thème » ?", options:["OS uniquement — Confronter modèle ancien et art contemporain", "OS uniquement — Synthèse d'un projet cohérent", "Justifier un goût esthétique", "OS uniquement — Élaborer un projet personnel"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option comparent une œuvre classique à une œuvre contemporaine traitant du même sujet » ?", options:["Justifier un goût esthétique", "Lire un portrait officiel", "OS uniquement — Confronter modèle ancien et art contemporain", "OS uniquement — Élaborer un projet personnel"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_VISUELS_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_VISUELS_3_COLLEGE = QUIZ_ARTS_VISUELS_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
