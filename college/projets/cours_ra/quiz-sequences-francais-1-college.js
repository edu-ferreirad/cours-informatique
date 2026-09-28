const QUIZ_FRANCAIS_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « En binôme » ?", options:["Diction : jouer le sous-texte", "Oral soutenu : le flash-info de classe", "Grammaire : la dictée négociée", "Dissertation chronométrée en conditions d'examen"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après chaque chapitre d'une œuvre étudiée » ?", options:["Carnet de lecture : la page « réaction à chaud »", "Synthèse : le fil rouge des quatre années", "Argumentation : le débat à contre-emploi", "Histoire littéraire : la frise vivante des mouvements"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Après une dictée courte » ?", options:["Grammaire : la dictée négociée", "Histoire littéraire : la frise vivante des mouvements", "Oral soutenu : le flash-info de classe", "Argumentation : le débat à contre-emploi"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_1_COLLEGE = QUIZ_FRANCAIS_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
