const QUIZ_GEOGRAPHIE_COLLEGE = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Selon la définition citée (Retaille), la géographie est une tentative d'interprétation de quoi ?", options:["L'histoire humaine", "L'écriture de la surface de la Terre", "Les frontières politiques", "Le climat mondial"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"L'objet central de la géographie est l'étude des relations entre l'homme, l'espace et quoi ?", options:["Le climat uniquement", "Les territoires", "Les animaux", "Les monuments"], correct:1 },
  { id:"q3", tier:"court", type:"texte", prompt:"À quelles échelles la géographie étudie-t-elle l'espace, du plus petit au plus grand (citez la plus grande) ?", answers:["mondial", "mondiale", "le mondial"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"L'enseignement vise à saisir les interactions entre les écosystèmes et quels facteurs ?", options:["Uniquement climatiques", "Économiques, politiques et socioculturels", "Uniquement religieux", "Aucun facteur"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Selon le plan d'études, toute décision, tout problème a toujours quelle dimension ?", options:["Temporelle uniquement", "Spatiale", "Aucune dimension particulière", "Musicale"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Considérer le territoire comme un produit de quoi développe le sens civique de l'élève ?", answers:["lhomme", "l'homme", "de lhomme", "des choix humains"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Parmi les sciences sociales, la géographie se distingue en prenant en compte quoi ?", options:["Un seul facteur explicatif", "L'ensemble des facteurs et relations", "Uniquement l'économie", "Rien de spécifique"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Avec quelle discipline la géographie collabore-t-elle selon des modalités variées (duo, intégration) ?", options:["La chimie", "L'histoire", "La musique", "Le sport"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"La connaissance de l'espace local participe à la construction de quoi ?", options:["Des identités culturelles", "Rien de particulier", "Uniquement des compétences en calcul", "Des compétences sportives"], correct:0 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le plan d'études qualifie la dimension planétaire de la géographie comme une expression de quoi ?", options:["Le nationalisme", "L'humanisme le plus large", "Le protectionnisme", "L'individualisme"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_GEOGRAPHIE_COLLEGE.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_GEOGRAPHIE_COLLEGE = QUIZ_GEOGRAPHIE_COLLEGE; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
