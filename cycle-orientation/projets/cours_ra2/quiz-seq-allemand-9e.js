// QUIZ — SÉQUENCES ALLEMAND 9e
const QUIZ_SEQ_ALLEMAND_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves se présentent en allemand (Ich heiße… » ?", options:["Sich vorstellen : le jeu de présentation", "Bingo des nombres et de l'heure", "Mein Wochenplan", "Im Supermarkt : jeu de rôle"], correct:0 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Un bingo d'abord avec des nombres puis avec des heures annoncées en allemand entraîne la compréhension orale de base » ?", options:["Meine Familie", "Hörverstehen : un fait divers", "Un mini-dialogue enregistré", "Bingo des nombres et de l'heure"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève présente une famille (réelle ou fictive) à l'aide d'un arbre généalogique et de phrases simples » ?", options:["Hobbys : une interview", "Wegbeschreibung", "Meine Familie", "Kleidung und Wetter"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par deux » ?", options:["Meine Familie", "Un texte court, cinq questions", "Projekt : eine Schweizer Stadt", "Im Supermarkt : jeu de rôle"], correct:3 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves écrivent et enregistrent un mini-dialogue de six répliques » ?", options:["Projekt : eine Schweizer Stadt", "Kurze Präsentation", "Hobbys : une interview", "Un mini-dialogue enregistré"], correct:3 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves décrivent leur journée avec heures et verbes séparables simples » ?", options:["Mein Tagesablauf", "Un texte court, cinq questions", "Bingo des nombres et de l'heure", "Wegbeschreibung"], correct:0 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_ALLEMAND_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_ALLEMAND_9E = QUIZ_SEQ_ALLEMAND_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
