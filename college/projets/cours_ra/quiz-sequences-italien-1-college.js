const QUIZ_ITALIEN_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par petits groupes » ?", options:["Lire des textes de natures différentes", "Chasse aux sons italiens", "Débat sur un texte d'actualité italienne", "Recherche personnelle sur une œuvre"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Un élève décrit oralement en italien simple une image qu'il est seul à voir ; son camarade doit la dessiner uniquement à partir… » ?", options:["Débat sur un texte d'actualité italienne", "Chasse aux sons italiens", "Décrire une image à un camarade aveugle", "Oral blanc de maturité"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ITALIEN_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ITALIEN_1_COLLEGE = QUIZ_ITALIEN_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
