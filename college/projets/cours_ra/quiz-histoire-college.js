const QUIZ_HISTOIRE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"L'histoire contribue à atténuer quoi, selon le plan d'études ?", options:["La curiosité", "L'ethnocentrisme", "La mémoire", "Le débat"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"L'histoire est présentée comme une façon d'interroger le passé pour mieux comprendre quoi ?", options:["L'avenir uniquement", "Le présent", "Rien de précis", "Une autre discipline"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"L'histoire participe à la formation de quoi, selon le texte, en lien avec la mémoire collective ?", answers:["identite humaine", "identite", "lidentite humaine"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'étude de la pluralité des interprétations d'un même fait relève de quelle réflexion ?", options:["La réflexion sur l'histoire elle-même", "La géographie", "La chimie", "Rien de spécifique"], correct:0 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Les débats en classe, par exemple pour préparer des votations en blanc, développent quoi ?", options:["Uniquement la mémorisation", "Écoute d'autrui et travail en équipe", "Le calcul mental", "Rien de social"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quelles notions de société l'histoire fait-elle réfléchir, entre autorité qui s'installe et celle qui la conteste ?", answers:["pouvoir et contre-pouvoir", "pouvoir contre pouvoir"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le plan d'études qualifie l'histoire de discipline...", options:["Technique par excellence", "Humaniste par excellence", "Artistique uniquement", "Sans lien avec la citoyenneté"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Avec quelle autre discipline des sciences humaines l'histoire collabore-t-elle particulièrement, selon des modalités variées (duo, intégration...) ?", options:["Les mathématiques", "La géographie", "La chimie", "Le sport"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"Établir une problématique, c'est surtout savoir formuler quoi ?", options:["Une réponse toute faite", "La bonne question à poser", "Une date précise", "Un résumé"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"L'histoire emprunte à d'autres disciplines non seulement des connaissances, mais aussi quoi ?", options:["Leur vocabulaire uniquement", "Leurs façons de raisonner (méthodes)", "Rien d'autre", "Leurs professeurs"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_HISTOIRE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_HISTOIRE_COLLEGE = QUIZ_HISTOIRE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
