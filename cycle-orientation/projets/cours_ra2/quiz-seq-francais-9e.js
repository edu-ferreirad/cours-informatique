// QUIZ — SÉQUENCES FRANÇAIS 9e
const QUIZ_SEQ_FRANCAIS_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « Les élèves reçoivent quatre phrases isolées (« Tu viens ? » » ?", options:["Verbes et propositions en couleurs", "Un titre, un chapeau", "Lecture à voix haute d'un extrait", "Qui parle, à qui, dans quelle situation ?"], correct:3 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quelle activité correspond à : « À partir d'un dialogue de bande dessinée » ?", options:["Verbes et propositions en couleurs", "Nouvelle à chute : lire puis écrire", "Le carnet d'erreurs personnel", "Du dialogue au discours rapporté"], correct:3 },
  { id:"q3", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Après lecture de trois débuts de romans jeunesse » ?", options:["Trois débuts de roman, une situation initiale", "Chasse aux déterminants", "Roman et adaptation", "Le paragraphe remis en ordre"], correct:0 },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle activité correspond à : « Dans un court texte » ?", options:["Chasse aux déterminants", "Roman et adaptation", "Le paragraphe remis en ordre", "Cercle de lecture"], correct:0 },
  { id:"q5", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Séquence complète : lecture d'un modèle » ?", options:["Exposé de trois minutes sur un auteur", "Texte argumentatif en temps limité", "Le récit d'aventure en trois temps", "La lettre de lecteur, de l'analyse à la réécriture"], correct:2 },
  { id:"q6", tier:"long", type:"qcm", prompt:"Quelle activité correspond à : « Chaque élève prépare la lecture d'un extrait de roman en marquant pauses et intonations » ?", options:["Exposé de trois minutes sur un auteur", "Un titre, un chapeau", "Lecture à voix haute d'un extrait", "Trois débuts de roman, une situation initiale"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_SEQ_FRANCAIS_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_SEQ_FRANCAIS_9E = QUIZ_SEQ_FRANCAIS_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
