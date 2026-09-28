const QUIZ_ITALIEN_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Recherche personnelle sur une œuvre", "Conversation spontanée minutée", "Chasse aux sons italiens", "Frise des courants littéraires italiens"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un article italien récent » ?", options:["Oral blanc de maturité", "Recherche personnelle sur une œuvre", "Débat sur un texte d'actualité italienne", "Conversation spontanée minutée"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_ITALIEN_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_ITALIEN_3_COLLEGE = QUIZ_ITALIEN_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
