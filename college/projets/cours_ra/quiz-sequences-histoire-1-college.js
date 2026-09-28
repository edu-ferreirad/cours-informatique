const QUIZ_HISTOIRE_1_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent un lot mélangé de documents sur un même événement antique (extrait d'un historien ancien » ?", options:["Points de vue croisés sur une révolution", "Analyse d'image : lire un portrait de pouvoir", "Méthode : trier source primaire et interprétation", "Débat : un enjeu géopolitique du XXIe siècle"], correct:2 },
  { id:"q2", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « En groupe » ?", options:["Points de vue croisés sur une révolution", "Enquête : lire des statistiques d'industrialisation", "Moyen Âge : la carte mentale du pouvoir féodal", "Séquence croisée histoire-géographie : où s'industrialise-t-on ?"], correct:2 },
  { id:"q3", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « La classe rejoue » ?", options:["Méthode : trier source primaire et interprétation", "Moyen Âge : la carte mentale du pouvoir féodal", "Antiquité : le procès fictif d'une décision historique", "Enquête : lire des statistiques d'industrialisation"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_1_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_1_COLLEGE = QUIZ_HISTOIRE_1_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
