const QUIZ_FRANCAIS_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes » ?", options:["Oral soutenu : le flash-info de classe", "Dissertation : construire un plan à partir de deux plans faux", "Carnet de lecture : la page « réaction à chaud »", "Histoire littéraire : la frise vivante des mouvements"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « L'enseignant distribue deux plans de dissertation volontairement imparfaits sur le même sujet (l'un trop descriptif » ?", options:["Argumentation : le débat à contre-emploi", "Grammaire : la dictée négociée", "Préparation à l'oral de maturité : la question surprise", "Dissertation : construire un plan à partir de deux plans faux"], correct:3 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève reçoit une seule citation extraite d'un texte étudié (sans le reste du texte) et doit en tirer un axe d'analyse… » ?", options:["Préparation à l'oral de maturité : la question surprise", "Histoire littéraire : la frise vivante des mouvements", "Commentaire composé : l'atelier des citations isolées", "Argumentation : le débat à contre-emploi"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_3_COLLEGE = QUIZ_FRANCAIS_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
