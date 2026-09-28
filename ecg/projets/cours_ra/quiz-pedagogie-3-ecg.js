const QUIZ_PEDAGOGIE_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'exercice du jeu mathématique manipulable, sur qui les élèves testent-ils leur jeu ?", options:["De vrais enfants uniquement", "Des camarades jouant le rôle d'élèves", "Personne", "Un ordinateur"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans la vulgarisation d'expérience scientifique, pour quel public l'expérience doit-elle être adaptée ?", options:["Des adultes", "Des enfants de primaire", "Des scientifiques", "Personne en particulier"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Dans le journal d'observation de stage, quelle distinction méthodologique l'élève doit-il respecter ?", options:["Aucune distinction", "Observation factuelle vs interprétation personnelle", "Français vs allemand", "Matin vs après-midi"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans le projet de séquence complète, quels deux rôles successifs joue le public de la classe ?", options:["Rien de précis", "D'abord élèves, puis jury critique", "Uniquement spectateurs muets", "Uniquement examinateurs"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PEDAGOGIE_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PEDAGOGIE_ECG_3 = QUIZ_PEDAGOGIE_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
