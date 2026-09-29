// SALLE SÉQUENCES — CHIMIE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS = [
  { id:"chimie_1_1", tier:"court", emoji:"🧪", label:"Étape 1 — Sépare un mélange et justifie ta méthode",
    text:"Face à un mélange concret (sable et eau), choisis et justifie la méthode de séparation adaptée à ses propriétés physiques, avant de la tester réellement.",
    fact:"Choisir une méthode de séparation en fonction des propriétés physiques est un objectif explicite du programme.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"chimie_1_2", tier:"court", emoji:"🔬", label:"Étape 2 — Mène ton enquête dans le tableau périodique",
    text:"En petit groupe, retrouve trois éléments cachés dans le tableau périodique à partir d'indices donnés (nombre d'électrons, position).",
    fact:"Exploiter activement le tableau périodique, plutôt que de le consulter passivement, en fait un vrai outil de travail.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"chimie_1_3", tier:"court", emoji:"🧫", label:"Étape 3 — Observe les états de la matière",
    text:"Observe le passage d'un état à un autre (fusion de glace, évaporation d'eau) et note à quelle température chaque changement se produit.",
    fact:"Reconnaître les états de la matière est un préalable à toute étude chimique plus poussée.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"chimie_1_4", tier:"moyen", emoji:"⚗️", label:"Étape 4 — Équilibre une réaction par tâtonnement",
    text:"Face à une équation chimique non équilibrée, trouve les bons coefficients par essais successifs justifiés, en vérifiant la conservation du nombre d'atomes.",
    fact:"Formaliser et équilibrer des réactions chimiques simples est un objectif explicite de cette année.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"chimie_1_5", tier:"moyen", emoji:"📝", label:"Étape 5 — Mesure un pH et rédige un compte rendu",
    text:"Mesure le pH de plusieurs solutions du quotidien, note les résultats, et rédige un court compte rendu de ce que tu observes.",
    fact:"La rédaction de comptes rendus est une compétence transversale que tu retrouveras dans toutes les sciences.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"chimie_1_6", tier:"long", emoji:"🔬", label:"Étape 6 — Mène une expérience complète de A à Z",
    text:"Choisis un phénomène chimique simple et mène une expérience complète : hypothèse, protocole, résultats, analyse.",
    fact:"Cette démarche complète prépare directement aux exigences des années suivantes.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"chimie_1_7", tier:"long", emoji:"📊", label:"Étape 7 — Présente tes résultats et leurs limites",
    text:"Présente ton expérience de l'étape 6 à la classe en identifiant toi-même une limite de ton protocole.",
    fact:"Identifier soi-même une limite de son travail est une marque de rigueur scientifique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqChimie1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS=MUSEE_SEQ_CHIMIE_1_COLLEGE_OBJECTS;
window.getSeqChimie1CollegeObjectsForParcours=getSeqChimie1CollegeObjectsForParcours;
