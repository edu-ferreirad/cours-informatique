const QUIZ_COMMUNICATION_INFO_ECG = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'exercice \"une info, trois formats\", quels formats doivent être produits ?", options:["Tweet, chapeau d'article, message vocal", "Trois articles identiques", "Uniquement des vidéos", "Trois dessins"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans l'audit des traces numériques, que consulte chaque élève ?", options:["Ses notes scolaires", "Les paramètres de confidentialité de ses applications", "Un livre d'histoire", "Rien de personnel"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Quelle est la durée maximale imposée pour la capsule vidéo en multimédias ?", answers:["60 secondes", "60 sec", "une minute"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans la campagne marketing fictive, qui joue le rôle d'investisseurs à convaincre ?", options:["L'enseignant seul", "La classe", "Personne", "Un jury externe uniquement"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Dans l'exercice de comptabilité, qu'est-ce qui est volontairement glissé dans les données ?", options:["Rien de particulier", "Une erreur à repérer", "Un bonus", "Une image"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dans l'exercice de sociologie des médias, combien de unes de journaux différentes sont comparées ?", answers:["trois", "3"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le dossier de veille médiatique en langue étrangère prépare à quoi ?", options:["Un examen de maths", "La compréhension de l'actualité en immersion linguistique", "Rien de particulier", "Un concours artistique"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Dans la simulation de conférence de presse, comment le groupe doit-il répondre aux questions ?", options:["Avec des réponses préparées à l'avance", "En direct, sans préparation", "En refusant de répondre", "Par écrit uniquement"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Que note l'élève chaque jour durant son stage, en plus de la tâche observée ?", options:["Rien de plus", "Ce qui a demandé le plus de rigueur méthodologique", "Uniquement les horaires", "La météo"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Dans la revue de presse tournante, que doit justifier l'élève en plus du résumé ?", options:["Rien de plus", "Pourquoi il a choisi ces actualités plutôt que d'autres", "Le prix du journal", "La couleur de la page"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(p){ const m = QUIZ_TIER_ORDER[p] || 1; return QUIZ_COMMUNICATION_INFO_ECG.filter(q => QUIZ_TIER_ORDER[q.tier] <= m); }
window.QUIZ_COMMUNICATION_INFO_ECG = QUIZ_COMMUNICATION_INFO_ECG; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
