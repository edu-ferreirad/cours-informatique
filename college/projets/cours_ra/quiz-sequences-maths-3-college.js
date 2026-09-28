const QUIZ_MATHS_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un graphique de position d'une voiture en fonction du temps » ?", options:["Esprit scientifique : conjecturer avant de prouver", "Géométrie vectorielle : résoudre sans mesurer", "Analyse : la dérivée comme vitesse instantanée", "Fonctions : modéliser une situation concrète"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent un problème de géométrie dans l'espace (alignement » ?", options:["Fonctions : le jeu du va-et-vient graphique", "Esprit scientifique : conjecturer avant de prouver", "Analyse : la dérivée comme vitesse instantanée", "Géométrie vectorielle : résoudre sans mesurer"], correct:3 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Face à une affirmation générale sur les fonctions (« si la dérivée est positive » ?", options:["Fonctions : modéliser une situation concrète", "Géométrie : que se passe-t-il si on change une hypothèse ?", "Analyse : chasser le contre-exemple", "Analyse : l'étude complète, de A à Z"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_3_COLLEGE = QUIZ_MATHS_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
