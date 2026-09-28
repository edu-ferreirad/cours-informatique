const QUIZ_HISTOIRE_3_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Chaque groupe incarne un acteur social différent face à un même événement révolutionnaire du XIXe siècle (ouvrier » ?", options:["Antiquité : le procès fictif d'une décision historique", "Enquête : lire des statistiques d'industrialisation", "Points de vue croisés sur une révolution", "Débat : un enjeu géopolitique du XXIe siècle"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un tableau réel de données démographiques ou économiques du XIXe siècle » ?", options:["Analyse d'image : lire un portrait de pouvoir", "Débat contradictoire sur une grande réforme", "Mini-dossier de recherche en autonomie", "Enquête : lire des statistiques d'industrialisation"], correct:3 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En collaboration avec le cours de géographie » ?", options:["Débat contradictoire sur une grande réforme", "Frise annotée : ruptures et continuités", "Moyen Âge : la carte mentale du pouvoir féodal", "Séquence croisée histoire-géographie : où s'industrialise-t-on ?"], correct:3 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_3_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_3_COLLEGE = QUIZ_HISTOIRE_3_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
