const QUIZ_FRANCAIS_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Des mots comme \"peut-être\" ou \"certainement\", qui indiquent le degré de certitude du locuteur, relèvent de quoi ?", options:["De la conjugaison", "De la modalisation", "Du champ lexical", "De la ponctuation"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Des mots comme \"cependant\" ou \"donc\", qui articulent les idées entre elles, s'appellent des...", options:["Adjectifs qualificatifs", "Connecteurs logiques", "Déterminants", "Pronoms relatifs"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"Une technique littéraire qui restitue les pensées d'un personnage sans marque grammaticale explicite s'appelle le discours indirect...", answers:["libre", "indirect libre"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle figure de style atténue volontairement une idée pour mieux la suggérer (ex. \"je ne te déteste pas\") ?", options:["L'hyperbole", "La litote", "La métaphore", "L'antithèse"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Le sens premier et objectif d'un mot, défini dans le dictionnaire, s'appelle sa...", options:["Connotation", "Dénotation", "Modalisation", "Antonymie"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Explorer les différents sens que peut prendre un même mot selon le contexte relève du champ...", answers:["semantique", "champ semantique"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Par quels mots une proposition subordonnée relative est-elle le plus souvent introduite ?", options:["Mais, ou, et", "Qui, que, dont, où", "Donc, car, ni", "Comme, tel que"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"L'adjectif \"bon\" a un comparatif irrégulier hérité du latin. Lequel ?", options:["Plus bon", "Meilleur", "Le plus bon", "Bonnier"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Un monologue de théâtre doit surtout être pensé pour être...", options:["Lu silencieusement", "Dit à voix haute", "Chanté", "Mimé sans un mot"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Même les correcteurs orthographiques automatiques se trompent parfois sur les cas les plus complexes de quelle règle ?", options:["Les accords de couleur", "L'accord du participe passé", "La conjugaison du présent", "Les pluriels réguliers"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_11E = QUIZ_FRANCAIS_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
