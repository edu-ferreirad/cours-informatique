const QUIZ_MATHS_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Face à une propriété géométrique nouvelle » ?", options:["Esprit scientifique : conjecturer avant de prouver", "Révisions maturité : l'atelier des erreurs classiques", "Géométrie vectorielle : résoudre sans mesurer", "Analyse : chasser le contre-exemple"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un relevé réel (température sur une journée » ?", options:["Fonctions : modéliser une situation concrète", "Esprit scientifique : conjecturer avant de prouver", "Algèbre : construire sa « boîte à outils »", "Géométrie vectorielle : résoudre sans mesurer"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves de niveau avancé reçoivent en 2e année un court sujet supplémentaire hors programme normal (déterminé par… » ?", options:["Analyse : la dérivée comme vitesse instantanée", "Analyse : l'étude complète, de A à Z", "Fonctions : le jeu du va-et-vient graphique", "MA2 (niveau avancé) : le sujet à choix"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_MATHS_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_MATHS_2_COLLEGE = QUIZ_MATHS_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
