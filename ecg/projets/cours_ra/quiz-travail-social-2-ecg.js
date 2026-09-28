const QUIZ_TRAVAIL_SOCIAL_ECG_2 = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Dans l'activité de cartographie, que doivent recenser les élèves ?", options:["Les commerces d'un quartier", "Les lieux d'aide et de lien social", "Les monuments historiques", "Les restaurants"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Dans l'exercice d'écoute active, qu'est-il interdit de faire en reformulant ?", answers:["donner un conseil", "conseiller", "juger"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans la simulation de conseil municipal, que représentent les différents groupes d'élèves ?", options:["Des pays différents", "Des intérêts différents (habitants, commerçants, associations)", "Des équipes sportives", "Rien de précis"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Dans l'exercice sur les préjugés, à quoi chaque préjugé est-il confronté ?", answers:["donnees sociologiques reelles", "des donnees reelles", "donnees reelles"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Dans la simulation d'urgence sociale, quelles ressources les élèves doivent-ils mobiliser ?", options:["N'importe lesquelles", "Uniquement celles identifiées lors du travail de cartographie", "Aucune ressource", "Des ressources imaginaires"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Le débat sur les limites de l'intervention sociale se conclut-il par une réponse unique ?", options:["Oui, toujours", "Non, il reste volontairement ouvert", "Il n'y a pas de débat", "Uniquement par vote"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_TRAVAIL_SOCIAL_ECG_2.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_TRAVAIL_SOCIAL_ECG_2 = QUIZ_TRAVAIL_SOCIAL_ECG_2; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
