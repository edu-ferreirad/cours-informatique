const QUIZ_BIOLOGIE_9E = [
  { id:"q1", tier:"court", type:"qcm", prompt:"Qu'est-ce qui distingue un virus, un cas limite du vivant, des autres organismes vivants ?", options:["Il ne bouge jamais", "Il ne se reproduit qu'en détournant une autre cellule", "Il n'existe pas vraiment", "Il est toujours visible à l'œil nu"], correct:1 },
  { id:"q2", tier:"court", type:"qcm", prompt:"Quel est le plus petit niveau d'organisation du vivant listé ici ?", options:["L'organe", "L'écosystème", "La cellule", "L'organisme"], correct:2 },
  { id:"q3", tier:"court", type:"texte", prompt:"En plus de la structure commune avec une cellule animale, qu'est-ce qu'une cellule végétale possède en plus (2 mots : une paroi ... ) ?", answers:["rigide", "une paroi rigide", "paroi rigide"] },
  { id:"q4", tier:"moyen", type:"qcm", prompt:"Dans un réseau trophique, qui capte l'énergie du soleil pour la rendre disponible aux autres organismes ?", options:["Les décomposeurs", "Les producteurs (plantes)", "Les consommateurs", "Les prédateurs uniquement"], correct:1 },
  { id:"q5", tier:"moyen", type:"qcm", prompt:"Quelle reproduction produit un descendant génétiquement identique au parent ?", options:["La reproduction sexuée", "La reproduction asexuée", "Les deux également", "Aucune des deux"], correct:1 },
  { id:"q6", tier:"moyen", type:"texte", prompt:"Quelle partie du système locomoteur se contracte pour tirer sur les os et créer un mouvement ?", answers:["muscle", "les muscles", "muscles"] },
  { id:"q7", tier:"long", type:"qcm", prompt:"Les pinsons des îles Galápagos, célèbres exemples de sélection naturelle, se distinguent surtout par la forme de quoi ?", options:["Leurs ailes", "Leur bec", "Leurs pattes", "Leur couleur"], correct:1 },
  { id:"q8", tier:"long", type:"qcm", prompt:"Combien de cellules filles produit une cellule qui se divise par mitose ?", options:["Une", "Deux, identiques", "Quatre", "Trois"], correct:1 },
  { id:"q9", tier:"long", type:"texte", prompt:"Le canton de Genève a une stratégie officielle pour préserver quoi, à l'horizon 2030 ?", answers:["biodiversite", "la biodiversite"] },
  { id:"q10", tier:"long", type:"qcm", prompt:"Un réflexe (comme retirer la main d'une surface brûlante) passe-t-il d'abord par le cerveau ?", options:["Oui, toujours", "Non, il fait un raccourci via la moelle épinière", "Cela dépend de l'âge", "Seulement chez l'adulte"], correct:1 },
];
function normalizeAnswer(s){return (s||"").toString().trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g,"").replace(/\s+/g," ");}
const QUIZ_TIER_ORDER = { court:1, moyen:2, long:3 };
function getQuizForParcours(parcours){ const maxLevel = QUIZ_TIER_ORDER[parcours] || 1; return QUIZ_BIOLOGIE_9E.filter(q => QUIZ_TIER_ORDER[q.tier] <= maxLevel); }
window.QUIZ_BIOLOGIE_9E = QUIZ_BIOLOGIE_9E; window.getQuizForParcours = getQuizForParcours; window.normalizeAnswer = normalizeAnswer;
