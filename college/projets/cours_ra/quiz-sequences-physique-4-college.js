const QUIZ_PHYSIQUE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option présentent » ?", options:["La mesure qui ne tombe jamais deux fois pareil", "OS uniquement — Simuler avant de conclure", "OS uniquement — Un paradoxe du XXe siècle", "OS uniquement — Un lien physique-biologie"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En lien avec la biologie » ?", options:["OS uniquement — Un lien physique-biologie", "La mesure qui ne tombe jamais deux fois pareil", "OS uniquement — Un paradoxe du XXe siècle", "Lire un graphique sans le texte"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_4_COLLEGE = QUIZ_PHYSIQUE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
