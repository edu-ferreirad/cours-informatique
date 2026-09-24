const QUIZ_PHYSIQUE_11E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Le rapport entre la masse et le volume d'une substance s'appelle ?", options:["Le rendement", "La masse volumique", "La température", "L'énergie primaire"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Dans quel état de la matière les molécules sont-elles très dispersées et libres de se déplacer ?", options:["Solide", "Liquide", "Gazeux", "Aucun"], correct:2 },
  { id:"q3", tier:"court", type:"texte", prompt:"Tant qu'un glaçon fond dans l'eau, à quelle température reste l'eau qui l'entoure (en °C) ?", answers:["0", "0 degres", "0°c", "zero"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Faire fondre un glaçon est une transformation... ", options:["Chimique", "Physique", "Ni l'une ni l'autre", "Les deux à la fois"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quel symbole chimique international désigne l'élément fer ?", options:["Fr", "Fe", "F", "Fer"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quel chimiste français a formulé le principe \"rien ne se perd, rien ne se crée, tout se transforme\" ?", answers:["lavoisier", "antoine lavoisier"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Le principe de conservation de l'énergie affirme que l'énergie totale d'un système isolé...", options:["Diminue toujours", "Reste toujours constante", "Augmente toujours", "Disparaît progressivement"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Pourquoi aucun appareil réel n'atteint-il un rendement de 100 % ?", options:["C'est faux, certains y arrivent", "Une partie de l'énergie se perd toujours, surtout en chaleur", "L'énergie disparaît complètement", "Cela dépend uniquement du prix de l'appareil"], correct:1 },
  { id:"q9", tier:"long", type:"qcm", prompt:"À l'échelle moléculaire, qu'est-ce que la température mesure réellement ?", options:["La couleur des molécules", "L'intensité du mouvement des molécules", "Le poids des molécules", "Le nombre de molécules"], correct:1 },
  { id:"q10", tier:"long", type:"qcm", prompt:"Le zéro absolu correspond approximativement à quelle température ?", options:["0 °C", "-100 °C", "-273,15 °C", "-500 °C"], correct:2 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_PHYSIQUE_11E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_PHYSIQUE_11E = QUIZ_PHYSIQUE_11E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
