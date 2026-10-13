// QUIZ — SÉQUENCES ALLEMAND 11e
const QUIZ_SEQ_ALLEMAND_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écoutent un court enregistrement » ?", options:["Hörverstehen : un fait divers", "Eine Reise planen", "Im Restaurant", "Mein Tagesablauf"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves lisent un court texte adapté » ?", options:["Rollenspiel : ein Telefongespräch", "Un texte court, cinq questions", "Hobbys : une interview", "Meine Familie"], correct:1 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « À l'aide d'horaires de train fictifs » ?", options:["Eine Reise planen", "Un texte court, cinq questions", "Mein Tagesablauf", "Wegbeschreibung"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par deux » ?", options:["Im Restaurant", "Wegbeschreibung", "Projekt : eine Schweizer Stadt", "Hobbys : une interview"], correct:3 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève présente pendant deux minutes un sujet de son choix avec un support visuel et répond à une question » ?", options:["Brief an einen Brieffreund", "Sich vorstellen : le jeu de présentation", "Meine Familie", "Kurze Präsentation"], correct:3 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves jouent un appel téléphonique (réservation » ?", options:["Brief an einen Brieffreund", "Rollenspiel : ein Telefongespräch", "Hörverstehen : un fait divers", "Hobbys : une interview"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ALLEMAND_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ALLEMAND_11E = QUIZ_SEQ_ALLEMAND_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
