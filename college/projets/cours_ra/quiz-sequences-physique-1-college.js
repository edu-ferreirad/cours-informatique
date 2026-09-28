const QUIZ_PHYSIQUE_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Avant toute mesure réelle » ?", options:["Observer, mesurer, analyser en trois temps", "Lire un graphique sans le texte", "Estimer avant de mesurer", "OS uniquement — Simuler avant de conclure"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Face à un phénomène simple (chute d'un objet » ?", options:["Observer, mesurer, analyser en trois temps", "La mesure qui ne tombe jamais deux fois pareil", "OS uniquement — Simuler avant de conclure", "OS uniquement — Un paradoxe du XXe siècle"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_1_COLLEGE = QUIZ_PHYSIQUE_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
