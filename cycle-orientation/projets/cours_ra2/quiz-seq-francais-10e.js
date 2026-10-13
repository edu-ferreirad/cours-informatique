// QUIZ — SÉQUENCES FRANÇAIS 10e
const QUIZ_SEQ_FRANCAIS_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves comparent titres et chapeaux d'une même brève dans trois journaux » ?", options:["Le paragraphe remis en ordre", "Un titre, un chapeau", "Opinion, arguments, exemple", "La lettre de lecteur, de l'analyse à la réécriture"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Sur un paragraphe littéraire » ?", options:["Opinion, arguments, exemple", "Qui parle, à qui, dans quelle situation ?", "Nouvelle à chute : lire puis écrire", "Verbes et propositions en couleurs"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Sur une question de vie scolaire (le portable en classe) » ?", options:["Le paragraphe remis en ordre", "Lecture à voix haute d'un extrait", "Opinion, arguments, exemple", "Texte argumentatif en temps limité"], correct:2 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Par groupes de quatre » ?", options:["Lecture à voix haute d'un extrait", "Texte argumentatif en temps limité", "Cercle de lecture", "Verbes et propositions en couleurs"], correct:2 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Séquence en quatre séances : analyse de deux lettres réelles » ?", options:["Un titre, un chapeau", "La lettre de lecteur, de l'analyse à la réécriture", "Le paragraphe remis en ordre", "Du dialogue au discours rapporté"], correct:1 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève tient un carnet où il note ses trois erreurs d'orthographe les plus fréquentes » ?", options:["Le récit d'aventure en trois temps", "Le carnet d'erreurs personnel", "Le paragraphe remis en ordre", "Chasse aux déterminants"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_FRANCAIS_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_FRANCAIS_10E = QUIZ_SEQ_FRANCAIS_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
