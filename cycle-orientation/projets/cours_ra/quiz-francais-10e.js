const QUIZ_FRANCAIS_10E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Quel type de texte fait avancer une histoire dans le temps ?", options:["Le texte descriptif", "Le texte narratif", "Le texte explicatif", "Le texte argumentatif"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quel type de texte cherche à faire adhérer le lecteur à une opinion ?", options:["Le texte narratif", "Le texte descriptif", "Le texte argumentatif", "Le texte explicatif"], correct:2 },
  { id:"q3", tier:"court", type:"texte", prompt:"Comment appelle-t-on le niveau de langue qu'on adapte selon la situation (familier, courant, soutenu) ?", answers:["registre de langue", "le registre de langue", "registre"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Quelle figure de style compare deux éléments SANS utiliser de mot-outil comme \"comme\" ?", options:["La comparaison", "La métaphore", "La personnification", "L'antonyme"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Décrire les mêmes faits avec un vocabulaire valorisant ou dévalorisant, sans changer les faits, relève de quoi ?", options:["Du vocabulaire mélioratif et péjoratif", "De la conjugaison", "De l'orthographe", "De la ponctuation"], correct:0 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Le mot \"salaire\" vient du latin \"salarium\", qui désignait la ration donnée aux soldats romains de quel aliment ?", answers:["sel", "le sel", "du sel"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Un groupe nominal se construit autour de quel mot central ?", options:["Le verbe", "Le nom", "L'adverbe", "La préposition"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Combien de verbes conjugués contient une phrase complexe, par définition ?", options:["Un seul", "Plusieurs", "Aucun", "Toujours trois"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"\"Ces\", \"ses\", \"c'est\", \"s'est\" sont un exemple de quoi ?", options:["Synonymes", "Homophones grammaticaux", "Antonymes", "Mots invariables"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Quels adjectifs de couleur issus d'un nom (comme \"orange\") restent invariables ?", options:["Tous les adjectifs de couleur", "Ceux issus d'un nom", "Aucun", "Seulement au pluriel"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_FRANCAIS_10E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_FRANCAIS_10E = QUIZ_FRANCAIS_10E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
