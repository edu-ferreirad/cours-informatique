const QUIZ_HISTOIRE_4_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves confrontent un témoignage oral ou écrit d'un événement du XXe siècle à un travail d'historien sur le même événement » ?", options:["Histoire du temps présent : comparer mémoire et histoire", "Points de vue croisés sur une révolution", "Analyse d'image : lire un portrait de pouvoir", "Frise annotée : ruptures et continuités"], correct:0 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur un sujet contemporain de leur choix en lien avec le programme » ?", options:["Points de vue croisés sur une révolution", "Frise annotée : ruptures et continuités", "Mini-dossier de recherche en autonomie", "Séquence croisée histoire-géographie : où s'industrialise-t-on ?"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « À partir de sources d'actualité récentes et contradictoires » ?", options:["Analyse d'image : lire un portrait de pouvoir", "Débat : un enjeu géopolitique du XXIe siècle", "Points de vue croisés sur une révolution", "Méthode : trier source primaire et interprétation"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_4_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_4_COLLEGE = QUIZ_HISTOIRE_4_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
