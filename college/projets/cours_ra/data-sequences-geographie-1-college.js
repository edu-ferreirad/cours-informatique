// SALLE SÉQUENCES — GÉOGRAPHIE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS = [
  { id:"geographie_1_1", tier:"court", emoji:"ℹ️", label:"Étape 1 — Comprends pourquoi il n'y a pas de géographie cette année",
    text:"Cherche dans la grille horaire officielle du Collège à partir de quelle année la géographie commence. Note l'écart avec l'histoire, enseignée dès la 1ère année.",
    fact:"La géographie ne démarre qu'en 2e année ; ce n'est pas un oubli, c'est une organisation propre à chaque discipline.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"geographie_1_2", tier:"court", emoji:"🗺️", label:"Étape 2 — Observe une carte de ton quotidien",
    text:"Prends une carte de ton quartier et note trois éléments qui te semblent importants pour comprendre comment il est organisé.",
    fact:"Observer une carte familière prépare en douceur à l'analyse géographique plus poussée qui viendra l'an prochain.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"geographie_1_3", tier:"court", emoji:"🌍", label:"Étape 3 — Repère où tu vis à trois échelles",
    text:"Situe-toi successivement à l'échelle de ta rue, de ta ville et de ton canton sur trois cartes différentes.",
    fact:"Changer d'échelle est un des concepts fondamentaux que tu retrouveras dès l'an prochain en géographie.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"geographie_1_4", tier:"moyen", emoji:"🧭", label:"Étape 4 — Explore les liens entre histoire et géographie",
    text:"Choisis un événement historique étudié cette année et identifie le lieu où il s'est déroulé sur une carte, en expliquant pourquoi ce lieu était important.",
    fact:"Situer un événement historique dans l'espace est un premier pas vers le raisonnement géographique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"geographie_1_5", tier:"moyen", emoji:"🚶", label:"Étape 5 — Observe les déplacements autour de toi",
    text:"Note pendant une journée tous tes déplacements (maison-école, activités) et représente-les sur un petit croquis.",
    fact:"Représenter ses propres déplacements est une première approche concrète de la mobilité, un thème géographique important.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"geographie_1_6", tier:"long", emoji:"🌳", label:"Étape 6 — Imagine un aménagement pour ton quartier",
    text:"Propose une amélioration simple pour ton quartier (plus d'espaces verts, meilleurs transports) et explique en quelques phrases pourquoi elle te semble utile.",
    fact:"Imaginer un aménagement, même simple, prépare aux notions d'aménagement du territoire vues plus tard.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"geographie_1_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ta proposition d'aménagement",
    text:"Présente ta proposition de l'étape 6 à la classe en une minute, en expliquant qui en bénéficierait le plus.",
    fact:"Identifier qui bénéficie d'une décision d'aménagement est une question centrale de la géographie.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGeographie1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS=MUSEE_SEQ_GEOGRAPHIE_1_COLLEGE_OBJECTS;
window.getSeqGeographie1CollegeObjectsForParcours=getSeqGeographie1CollegeObjectsForParcours;
