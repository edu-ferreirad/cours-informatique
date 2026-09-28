const QUIZ_ITALIEN_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Chasse aux sons italiens", "Débat sur un texte d'actualité italienne", "Conversation spontanée minutée", "Oral blanc de maturité"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent un article de presse » ?", options:["Lire des textes de natures différentes", "Recherche personnelle sur une œuvre", "Chasse aux sons italiens", "Frise des courants littéraires italiens"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ITALIEN_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ITALIEN_2_COLLEGE = QUIZ_ITALIEN_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
