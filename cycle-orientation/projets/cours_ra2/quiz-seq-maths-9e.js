// QUIZ — SÉQUENCES MATHÉMATIQUES 9e
const QUIZ_SEQ_MATHS_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves cherchent de combien de façons on peut écrire 15 comme somme de nombres consécutifs » ?", options:["Un problème ouvert, sans méthode imposée", "Développer et factoriser avec des aires", "Cent lancers contre la théorie", "Rédiger une résolution complète"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves adaptent une recette pour un nombre différent de personnes en utilisant un tableau de proportionnalité » ?", options:["Mesurer la hauteur de l'école", "Une recette pour 4, une fête pour 10", "Rédiger une résolution complète", "L'échelle contre le mur"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir de trois longueurs données » ?", options:["Le puzzle de Pythagore", "Une marche, un graphique, une formule", "Construire un triangle… ou pas", "Comparer 3/4 et 5/8 avec des bandes"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur une droite graduée » ?", options:["L'échelle contre le mur", "Zoomer sur la droite graduée", "Comparer 3/4 et 5/8 avec des bandes", "Rédiger une résolution complète"], correct:1 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves mesurent la longueur de leur main » ?", options:["Enquête : la main de la classe", "Un problème ouvert, sans méthode imposée", "Mesurer la hauteur de l'école", "Comparer 3/4 et 5/8 avec des bandes"], correct:0 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Avec un cordon de longueur fixe » ?", options:["Deux abonnements, un point d'intersection", "L'échelle contre le mur", "Même périmètre, même aire ?", "Le puzzle de Pythagore"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_MATHS_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_MATHS_9E = QUIZ_SEQ_MATHS_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
