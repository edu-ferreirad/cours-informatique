const QUIZ_MUSIQUE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option comparent un extrait musical occidental à un extrait d'une autre tradition musicale du monde » ?", options:["OS uniquement — Petit projet musical de fin de cursus", "OS uniquement — Improviser sur une contrainte", "OS uniquement — Comparer deux traditions musicales", "Reconnaître un instrument les yeux fermés"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de l'option préparent en petit groupe une courte production musicale originale (interprétation ou composition)… » ?", options:["OS uniquement — Petit projet musical de fin de cursus", "Reconnaître un instrument les yeux fermés", "Situer un morceau sur la frise musicale", "Construire une critique argumentée"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MUSIQUE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MUSIQUE_4_COLLEGE = QUIZ_MUSIQUE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
