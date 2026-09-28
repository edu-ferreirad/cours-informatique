const QUIZ_COMMUNICATION_INFO_ECG_2 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'exercice \"une info, trois formats\", quels formats doivent être produits ?", options:["Tweet, chapeau d'article, message vocal", "Trois articles identiques", "Uniquement des vidéos", "Trois dessins"], correct:0 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle est la durée maximale imposée pour la capsule vidéo en multimédias ?", answers:["60 secondes", "60 sec", "une minute"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans la campagne marketing fictive, qui joue le rôle d'investisseurs à convaincre ?", options:["L'enseignant seul", "La classe", "Personne", "Un jury externe uniquement"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dans l'exercice de sociologie des médias, combien de unes de journaux différentes sont comparées ?", answers:["trois", "3"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le dossier de veille médiatique en langue étrangère prépare à quoi ?", options:["Un examen de maths", "La compréhension de l'actualité en immersion linguistique", "Rien de particulier", "Un concours artistique"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que note l'élève chaque jour durant son stage, en plus de la tâche observée ?", options:["Rien de plus", "Ce qui a demandé le plus de rigueur méthodologique", "Uniquement les horaires", "La météo"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_COMMUNICATION_INFO_ECG_2.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_COMMUNICATION_INFO_ECG_2 = QUIZ_COMMUNICATION_INFO_ECG_2; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
