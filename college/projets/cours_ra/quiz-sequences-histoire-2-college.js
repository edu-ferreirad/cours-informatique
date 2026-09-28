const QUIZ_HISTOIRE_2_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur une frise chronologique longue de l'époque moderne » ?", options:["Points de vue croisés sur une révolution", "Analyse d'image : lire un portrait de pouvoir", "Débat : un enjeu géopolitique du XXIe siècle", "Frise annotée : ruptures et continuités"], correct:3 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes tirés au sort » ?", options:["Méthode : trier source primaire et interprétation", "Frise annotée : ruptures et continuités", "Mini-dossier de recherche en autonomie", "Débat contradictoire sur une grande réforme"], correct:3 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Face à un portrait officiel d'un souverain de l'époque moderne » ?", options:["Méthode : trier source primaire et interprétation", "Débat : un enjeu géopolitique du XXIe siècle", "Analyse d'image : lire un portrait de pouvoir", "Histoire du temps présent : comparer mémoire et histoire"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_2_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_2_COLLEGE = QUIZ_HISTOIRE_2_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
