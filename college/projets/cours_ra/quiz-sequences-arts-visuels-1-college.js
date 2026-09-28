const QUIZ_ARTS_VISUELS_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un objet simple posé devant eux » ?", options:["Justifier un goût esthétique", "Dessiner ce qu'on voit vraiment", "OS uniquement — Élaborer un projet personnel", "OS uniquement — Travail de terrain en musée"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un portrait historique de pouvoir » ?", options:["OS uniquement — Travail de terrain en musée", "Lire un portrait officiel", "OS uniquement — Élaborer un projet personnel", "OS uniquement — Synthèse d'un projet cohérent"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ARTS_VISUELS_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ARTS_VISUELS_1_COLLEGE = QUIZ_ARTS_VISUELS_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
