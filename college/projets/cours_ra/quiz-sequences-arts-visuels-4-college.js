const QUIZ_ARTS_VISUELS_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option finalisent un projet personnel démarré en 3e année et doivent présenter » ?", options:["Justifier un goût esthétique", "OS uniquement — Confronter modèle ancien et art contemporain", "Lire un portrait officiel", "OS uniquement — Synthèse d'un projet cohérent"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option mènent une visite active dans un lieu d'exposition » ?", options:["OS uniquement — Travail de terrain en musée", "OS uniquement — Élaborer un projet personnel", "OS uniquement — Confronter modèle ancien et art contemporain", "OS uniquement — Synthèse d'un projet cohérent"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_VISUELS_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_VISUELS_4_COLLEGE = QUIZ_ARTS_VISUELS_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
