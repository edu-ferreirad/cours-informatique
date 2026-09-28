const QUIZ_MATHS_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à une situation aléatoire réelle décrite en une phrase (file d'attente » ?", options:["Analyse : l'étude complète, de A à Z", "Probabilités : choisir le bon modèle", "Algèbre : construire sa « boîte à outils »", "Esprit scientifique : conjecturer avant de prouver"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En temps limité et sans correction intermédiaire » ?", options:["Géométrie vectorielle : résoudre sans mesurer", "Analyse : chasser le contre-exemple", "Analyse : l'étude complète, de A à Z", "Fonctions : modéliser une situation concrète"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « L'enseignant présente une copie fictive contenant plusieurs erreurs typiques accumulées au fil des quatre années (signe oublié » ?", options:["Révisions maturité : l'atelier des erreurs classiques", "Fonctions : le jeu du va-et-vient graphique", "Analyse : l'étude complète, de A à Z", "Probabilités : choisir le bon modèle"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_4_COLLEGE = QUIZ_MATHS_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
