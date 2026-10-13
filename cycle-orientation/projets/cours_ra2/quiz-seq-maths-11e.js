// QUIZ — SÉQUENCES MATHÉMATIQUES 11e
const QUIZ_SEQ_MATHS_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves découpent des carrés construits sur les côtés d'un triangle rectangle et montrent » ?", options:["Enquête : la main de la classe", "Le puzzle de Pythagore", "Cent lancers contre la théorie", "Une recette pour 4, une fête pour 10"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à un problème d'échelle appuyée contre un mur » ?", options:["Enquête : la main de la classe", "Une marche, un graphique, une formule", "Une recette pour 4, une fête pour 10", "L'échelle contre le mur"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent deux forfaits de téléphone par un tableau » ?", options:["Patron et volume d'un prisme", "Développer et factoriser avec des aires", "Deux abonnements, un point d'intersection", "Comparer 3/4 et 5/8 avec des bandes"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide de rectangles découpés » ?", options:["Enquête : la main de la classe", "Développer et factoriser avec des aires", "Cent lancers contre la théorie", "Deux abonnements, un point d'intersection"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Mesurer la hauteur de l'école", "Deux abonnements, un point d'intersection", "Budget d'une sortie de classe", "Le puzzle de Pythagore"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Sur un problème ouvert » ?", options:["Patron et volume d'un prisme", "Rédiger une résolution complète", "Développer et factoriser avec des aires", "Enquête : la main de la classe"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MATHS_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MATHS_11E = QUIZ_SEQ_MATHS_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
