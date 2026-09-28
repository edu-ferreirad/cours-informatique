const QUIZ_MATHS_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Après chaque nouvelle technique de calcul littéral » ?", options:["MA2 (niveau avancé) : le sujet à choix", "Analyse : chasser le contre-exemple", "Algèbre : construire sa « boîte à outils »", "Esprit scientifique : conjecturer avant de prouver"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par binômes » ?", options:["Analyse : l'étude complète, de A à Z", "Fonctions : modéliser une situation concrète", "Fonctions : le jeu du va-et-vient graphique", "Esprit scientifique : conjecturer avant de prouver"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Après une démonstration classique » ?", options:["Fonctions : le jeu du va-et-vient graphique", "Analyse : l'étude complète, de A à Z", "Révisions maturité : l'atelier des erreurs classiques", "Géométrie : que se passe-t-il si on change une hypothèse ?"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_1_COLLEGE = QUIZ_MATHS_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
