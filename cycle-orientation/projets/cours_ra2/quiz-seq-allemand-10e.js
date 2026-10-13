// QUIZ — SÉQUENCES ALLEMAND 10e
const QUIZ_SEQ_ALLEMAND_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves complètent un plan de semaine avec activités et jours » ?", options:["Mein Wochenplan", "Wegbeschreibung", "Im Supermarkt : jeu de rôle", "Eine Reise planen"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir de cartes météo » ?", options:["Hobbys : une interview", "Im Supermarkt : jeu de rôle", "Kleidung und Wetter", "Kurze Präsentation"], correct:2 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur un plan de ville » ?", options:["Meine Familie", "Wegbeschreibung", "Sich vorstellen : le jeu de présentation", "Hobbys : une interview"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves jouent une commande au restaurant en utilisant un menu et des formules de politesse » ?", options:["Im Restaurant", "Kleidung und Wetter", "Mein Wochenplan", "Un texte court, cinq questions"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève rédige une lettre de présentation à un correspondant fictif » ?", options:["Meine Familie", "Hobbys : une interview", "Brief an einen Brieffreund", "Un mini-dialogue enregistré"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En groupes » ?", options:["Kleidung und Wetter", "Meine Familie", "Projekt : eine Schweizer Stadt", "Mein Tagesablauf"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ALLEMAND_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ALLEMAND_10E = QUIZ_SEQ_ALLEMAND_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
