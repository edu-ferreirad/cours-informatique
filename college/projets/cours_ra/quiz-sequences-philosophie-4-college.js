const QUIZ_PHILOSOPHIE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves lisent en autonomie plusieurs extraits successifs d'un même ouvrage philosophique et doivent reconstituer » ?", options:["Discussion libre mais encadrée par la rigueur", "Pas encore de philosophie en 2e année", "Dialoguer directement avec un texte source", "Suivre la continuité d'une pensée sur un ouvrage"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur un sujet contemporain (technologie et vie privée » ?", options:["Dialoguer directement avec un texte source", "Un problème philosophique, plusieurs disciplines", "Pas de philosophie en 1ère année", "Discussion libre mais encadrée par la rigueur"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHILOSOPHIE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHILOSOPHIE_4_COLLEGE = QUIZ_PHILOSOPHIE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
