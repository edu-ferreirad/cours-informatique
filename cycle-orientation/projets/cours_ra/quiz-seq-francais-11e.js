// QUIZ — SÉQUENCES FRANÇAIS 11e
const QUIZ_SEQ_FRANCAIS_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Après lecture d'un poème » ?", options:["Le récit d'aventure en trois temps", "Chasse aux déterminants", "Verbes et propositions en couleurs", "Trois procédés dans un poème"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les phrases d'un paragraphe argumentatif sont découpées et mélangées ; les élèves les remettent en ordre en justifiant… » ?", options:["Le paragraphe remis en ordre", "Trois débuts de roman, une situation initiale", "Un titre, un chapeau", "La lettre de lecteur, de l'analyse à la réécriture"], correct:0 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après la lecture d'un chapitre et le visionnage de la scène correspondante d'une adaptation » ?", options:["Qui parle, à qui, dans quelle situation ?", "Roman et adaptation", "Nouvelle à chute : lire puis écrire", "Un titre, un chapeau"], correct:1 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève prépare une fiche à mots-clés » ?", options:["Le carnet d'erreurs personnel", "Nouvelle à chute : lire puis écrire", "Exposé de trois minutes sur un auteur", "Trois procédés dans un poème"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Étude de deux nouvelles à chute » ?", options:["Opinion, arguments, exemple", "Trois procédés dans un poème", "Nouvelle à chute : lire puis écrire", "Chasse aux déterminants"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « En conditions proches de l'évaluation de fin d'année » ?", options:["Roman et adaptation", "Lecture à voix haute d'un extrait", "Texte argumentatif en temps limité", "Un titre, un chapeau"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_FRANCAIS_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_FRANCAIS_11E = QUIZ_SEQ_FRANCAIS_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
