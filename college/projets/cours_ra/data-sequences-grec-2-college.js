// SALLE SÉQUENCES — GREC — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS = [
  { id:"grec_2_1", tier:"court", emoji:"📜", label:"Étape 1 — Traduis ton premier texte d'auteur",
    text:"En groupe, traduis phrase par phrase un très court extrait d'un auteur grec facile, en t'appuyant sur les acquis de l'année précédente.",
    fact:"Dès la deuxième année, tu commences à lire de vrais textes d'auteurs, même très simples.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"grec_2_2", tier:"court", emoji:"🎤", label:"Étape 2 — Prépare un exposé de culture grecque",
    text:"En groupe, prépare un exposé de trois minutes sur un aspect de la culture grecque à partir de documents fournis, restitué librement sans notes.",
    fact:"Préparer un exposé sans notes t'entraîne à vraiment t'approprier l'information.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"grec_2_3", tier:"court", emoji:"🔤", label:"Étape 3 — Repère les dialectes littéraires",
    text:"Dans un texte donné, repère des formes de mots qui diffèrent du grec standard appris et cherche à quel dialecte littéraire elles appartiennent.",
    fact:"Le grec ancien connaît plusieurs dialectes littéraires selon les genres et les régions.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"grec_2_4", tier:"moyen", emoji:"📖", label:"Étape 4 — Traduis un texte narratif court",
    text:"Traduis un texte narratif court en identifiant d'abord les verbes conjugués qui structurent le récit, avant les détails.",
    fact:"Repérer d'abord les verbes t'aide à comprendre l'enchaînement des actions du récit.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grec_2_5", tier:"moyen", emoji:"🏺", label:"Étape 5 — Relie un mythe à une œuvre d'art",
    text:"Choisis un mythe étudié et trouve une œuvre d'art (vase, sculpture, peinture) qui le représente, puis explique le lien entre les deux.",
    fact:"Relier texte et image enrichit ta compréhension de la place du mythe dans la culture grecque.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"grec_2_6", tier:"long", emoji:"🔎", label:"Étape 6 — Compare deux traductions d'un même texte",
    text:"Compare deux traductions différentes d'un même court passage grec et identifie les choix d'interprétation qui les distinguent.",
    fact:"Comparer des traductions développe ton sens critique face à un texte traduit.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"grec_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton analyse à la classe",
    text:"Présente à la classe ta comparaison de traductions de l'étape 6 et explique laquelle te semble la plus fidèle, avec un argument précis.",
    fact:"Justifier ton choix par un argument précis, pas une préférence vague, est ce qui distingue une vraie analyse.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGrec2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS=MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS;
window.getSeqGrec2CollegeObjectsForParcours=getSeqGrec2CollegeObjectsForParcours;
