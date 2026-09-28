const QUIZ_ARTS_VISUELS_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Après avoir copié fidèlement un détail d'une œuvre du passé » ?", options:["OS uniquement — Élaborer un projet personnel", "OS uniquement — Confronter modèle ancien et art contemporain", "Lire un portrait officiel", "Copier puis transformer une œuvre"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à deux œuvres contrastées » ?", options:["Justifier un goût esthétique", "OS uniquement — Synthèse d'un projet cohérent", "Copier puis transformer une œuvre", "OS uniquement — Élaborer un projet personnel"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_VISUELS_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_VISUELS_2_COLLEGE = QUIZ_ARTS_VISUELS_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
