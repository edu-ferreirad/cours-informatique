// SALLE SÉQUENCES — GREC — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS = [
  { id:"grec_1_1", tier:"court", emoji:"🔤", label:"Étape 1 — Déchiffre avant de traduire",
    text:"Face à un mot grec inconnu écrit en capitales, déchiffre-le lettre à lettre à voix haute avant même de chercher son sens.",
    fact:"Maîtriser l'alphabet et la lecture est un préalable absolu avant toute traduction.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"grec_1_2", tier:"court", emoji:"🏺", label:"Étape 2 — Raconte un mythe à ta façon",
    text:"Après la lecture d'un mythe grec simple en traduction, raconte-le oralement en changeant un seul élément (le lieu, l'objet magique) sans trahir la structure du récit.",
    fact:"Changer un détail sans trahir la structure prouve que tu as vraiment compris le récit, pas juste mémorisé les mots.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"grec_1_3", tier:"court", emoji:"🔠", label:"Étape 3 — Reconnais les lettres qui ressemblent au français",
    text:"Repère dans un court texte grec les lettres qui ressemblent visuellement à des lettres latines mais se prononcent différemment, et note les pièges à éviter.",
    fact:"Ce repérage évite une confusion fréquente au début de l'apprentissage du grec.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"grec_1_4", tier:"moyen", emoji:"📜", label:"Étape 4 — Traduis en groupe ton premier texte",
    text:"En groupe, traduis phrase par phrase un très court extrait d'auteur grec facile, en t'appuyant sur les acquis morphologiques déjà vus.",
    fact:"Traduire en groupe permet de mutualiser ce que chacun a compris différemment d'une même phrase.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grec_1_5", tier:"moyen", emoji:"🎤", label:"Étape 5 — Prépare un exposé de culture grecque",
    text:"En groupe, prépare un exposé de trois minutes sur un aspect de la culture grecque (archéologie, institutions) à partir de documents fournis.",
    fact:"Préparer un exposé sans notes t'entraîne à vraiment t'approprier l'information plutôt qu'à la réciter.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"grec_1_6", tier:"long", emoji:"🏛️", label:"Étape 6 — Explore la mythologie en profondeur",
    text:"Choisis un mythe grec et recherche deux versions différentes de ce mythe selon les auteurs anciens, en notant une différence entre les deux.",
    fact:"Les mythes grecs existent souvent en plusieurs versions : le savoir évite de croire qu'il n'existe qu'une seule vérité mythologique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"grec_1_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton exposé de culture grecque",
    text:"Présente l'exposé préparé à l'étape 5 à la classe, sans notes, et réponds à une question posée par un camarade.",
    fact:"Répondre à une question improvisée montre que tu maîtrises vraiment ton sujet.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGrec1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS=MUSEE_SEQ_GREC_1_COLLEGE_OBJECTS;
window.getSeqGrec1CollegeObjectsForParcours=getSeqGrec1CollegeObjectsForParcours;
