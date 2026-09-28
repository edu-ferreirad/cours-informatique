const QUIZ_TRAVAIL_SOCIAL_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans le récit de migration reconstitué, que doivent identifier les élèves pour chaque étape ?", options:["Rien de précis", "Le contexte historique correspondant", "Uniquement la date", "Le prix du voyage"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Avant de tester une animation sur de vrais enfants, sur qui les élèves la testent-ils d'abord ?", options:["Personne", "Leurs camarades de classe", "Leurs parents", "Un enseignant seul"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Que doit contenir le carnet réflexif tenu pendant le stage encadré, au-delà du récit factuel ?", options:["Rien de plus", "Une analyse de ce que la situation a appris à l'élève", "Uniquement des dates", "Des dessins"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"À qui le projet d'action sociale est-il présenté en fin de cursus ?", options:["Uniquement à l'enseignant", "À un professionnel ou une structure partenaire réelle", "À personne", "Uniquement par écrit"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_TRAVAIL_SOCIAL_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_TRAVAIL_SOCIAL_ECG_3 = QUIZ_TRAVAIL_SOCIAL_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
