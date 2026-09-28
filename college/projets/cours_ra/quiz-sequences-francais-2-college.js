const QUIZ_FRANCAIS_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un sujet tiré d'une œuvre étudiée » ?", options:["Dissertation : construire un plan à partir de deux plans faux", "Argumentation : le débat à contre-emploi", "Oral soutenu : le flash-info de classe", "Commentaire composé : l'atelier des citations isolées"], correct:1 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque semaine » ?", options:["Oral soutenu : le flash-info de classe", "Carnet de lecture : la page « réaction à chaud »", "Diction : jouer le sous-texte", "Histoire littéraire : la frise vivante des mouvements"], correct:0 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « L'élève doit résumer un texte argumentatif d'une page en exactement 80 mots » ?", options:["Écriture : le résumé à contrainte de mots", "Diction : jouer le sous-texte", "Synthèse : le fil rouge des quatre années", "Dissertation chronométrée en conditions d'examen"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_2_COLLEGE = QUIZ_FRANCAIS_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
