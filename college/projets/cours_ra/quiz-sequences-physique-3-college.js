const QUIZ_PHYSIQUE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option spécifique calculent comment une petite erreur de mesure au départ se propage jusqu'au résultat final d'un… » ?", options:["OS uniquement — Simuler avant de conclure", "OS uniquement — Un paradoxe du XXe siècle", "OS uniquement — Un lien physique-biologie", "OS uniquement — Calculer l'impact d'une incertitude"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'un outil informatique simple » ?", options:["Estimer avant de mesurer", "La mesure qui ne tombe jamais deux fois pareil", "OS uniquement — Un lien physique-biologie", "OS uniquement — Simuler avant de conclure"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_3_COLLEGE = QUIZ_PHYSIQUE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
