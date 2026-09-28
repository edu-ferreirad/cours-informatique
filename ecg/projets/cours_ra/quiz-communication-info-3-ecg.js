const QUIZ_COMMUNICATION_INFO_ECG_3 = [
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'audit des traces numériques, que consulte chaque élève ?", options:["Ses notes scolaires", "Les paramètres de confidentialité de ses applications", "Un livre d'histoire", "Rien de personnel"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de comptabilité, qu'est-ce qui est volontairement glissé dans les données ?", options:["Rien de particulier", "Une erreur à repérer", "Un bonus", "Une image"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Dans la simulation de conférence de presse, comment le groupe doit-il répondre aux questions ?", options:["Avec des réponses préparées à l'avance", "En direct, sans préparation", "En refusant de répondre", "Par écrit uniquement"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans la revue de presse tournante, que doit justifier l'élève en plus du résumé ?", options:["Rien de plus", "Pourquoi il a choisi ces actualités plutôt que d'autres", "Le prix du journal", "La couleur de la page"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_COMMUNICATION_INFO_ECG_3.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_COMMUNICATION_INFO_ECG_3 = QUIZ_COMMUNICATION_INFO_ECG_3; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
