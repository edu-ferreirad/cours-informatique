// SALLE SÉQUENCES — GÉOGRAPHIE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS = [
  { id:"geographie_3_1", tier:"court", emoji:"🏗️", label:"Étape 1 — Débats un aménagement du territoire",
    text:"Incarne un acteur (habitant, entreprise, État) face à un projet d'aménagement fictif mais réaliste et débats à partir de ses intérêts propres.",
    fact:"Toute décision, tout problème a une dimension spatiale et implique des acteurs aux intérêts multiples.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"geographie_3_2", tier:"court", emoji:"➡️", label:"Étape 2 — Cartographie un flux mondial",
    text:"Construis une carte simplifiée représentant un flux économique ou migratoire mondial à partir de données chiffrées, puis propose une explication géographique.",
    fact:"Flux, polarisation et diffusion sont des concepts fondamentaux du programme de cette année.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"geographie_3_3", tier:"court", emoji:"👕", label:"Étape 3 — Suis la route d'un objet du quotidien",
    text:"Localise les étapes de fabrication d'un objet courant (t-shirt, téléphone) et discute des raisons des localisations choisies.",
    fact:"Suivre un objet du quotidien fait comprendre concrètement l'interdépendance des territoires.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"geographie_3_4", tier:"moyen", emoji:"🧳", label:"Étape 4 — Analyse les causes d'une migration",
    text:"Avec une carte de flux et des données réelles, classe des raisons de migrer en facteurs de départ et facteurs d'attraction.",
    fact:"Comprendre les causes réelles évite les idées reçues sur les migrations.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"geographie_3_5", tier:"moyen", emoji:"🏭", label:"Étape 5 — Débats une délocalisation",
    text:"Incarne entreprise, employés ou habitants pour débattre d'une délocalisation fictive et de ses conséquences pour chaque acteur.",
    fact:"Les décisions territoriales ont toujours des acteurs aux intérêts différents, parfois contradictoires.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"geographie_3_6", tier:"long", emoji:"🗺️", label:"Étape 6 — Construis une carte de synthèse",
    text:"Sur un territoire de ton choix, construis une carte de synthèse combinant au moins trois types d'informations (relief, population, activités).",
    fact:"Combiner plusieurs informations sur une même carte est un exercice de synthèse géographique complet.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"geographie_3_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ta carte de synthèse",
    text:"Présente ta carte de l'étape 6 à la classe en expliquant les choix que tu as faits pour la construire.",
    fact:"Expliquer ses choix de représentation développe ta réflexion sur ce que montre vraiment une carte.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGeographie3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS=MUSEE_SEQ_GEOGRAPHIE_3_COLLEGE_OBJECTS;
window.getSeqGeographie3CollegeObjectsForParcours=getSeqGeographie3CollegeObjectsForParcours;
