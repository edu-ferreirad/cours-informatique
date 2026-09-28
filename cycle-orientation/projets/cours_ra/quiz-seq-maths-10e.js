// QUIZ — SÉQUENCES MATHÉMATIQUES 10e
const QUIZ_SEQ_MATHS_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur une balance dessinée avec des inconnues et des masses » ?", options:["Mesurer la hauteur de l'école", "L'échelle contre le mur", "L'équation comme balance", "Le puzzle de Pythagore"], correct:2 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Avec des bandes de papier pliées » ?", options:["L'équation comme balance", "Comparer 3/4 et 5/8 avec des bandes", "Construire un triangle… ou pas", "Patron et volume d'un prisme"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves mesurent la distance parcourue lors d'une marche à vitesse constante » ?", options:["Développer et factoriser avec des aires", "Rédiger une résolution complète", "Une marche, un graphique, une formule", "Comparer 3/4 et 5/8 avec des bandes"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève construit un prisme en carton à partir d'un patron » ?", options:["Budget d'une sortie de classe", "Une marche, un graphique, une formule", "Patron et volume d'un prisme", "Même périmètre, même aire ?"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Construire un triangle… ou pas", "Enquête : la main de la classe", "Deux abonnements, un point d'intersection", "Budget d'une sortie de classe"], correct:3 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves lancent un dé cent fois » ?", options:["L'équation comme balance", "Patron et volume d'un prisme", "Comparer 3/4 et 5/8 avec des bandes", "Cent lancers contre la théorie"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MATHS_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MATHS_10E = QUIZ_SEQ_MATHS_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
