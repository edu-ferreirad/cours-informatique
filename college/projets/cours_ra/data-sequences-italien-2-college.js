// SALLE SÉQUENCES — ITALIEN — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS = [
  { id:"italien_2_1", tier:"court", emoji:"💬", label:"Étape 1 — Tiens une conversation minutée",
    text:"Avec un camarade, tiens une conversation de deux minutes sur un sujet donné sans préparation écrite, puis reçois un retour sur un seul point à améliorer.",
    fact:"Participer activement à un échange d'idées est l'objectif central de cette année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"italien_2_2", tier:"court", emoji:"📰", label:"Étape 2 — Compare trois types de textes",
    text:"Compare un article de presse, une chanson et une bande dessinée italiens sur un thème commun. Note ce que chaque type de texte permet de dire.",
    fact:"Ces trois supports font découvrir la diversité de la culture italienne bien mieux qu'un seul type de texte.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"italien_2_3", tier:"court", emoji:"🎧", label:"Étape 3 — Résume ce que tu entends",
    text:"Écoute un court extrait et résume-le oralement en respectant une structure simple : qui, où, quoi.",
    fact:"Résumer à l'oral, juste après l'écoute, muscle ta mémoire immédiate autant que ta compréhension.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"italien_2_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Rédige un texte de plusieurs types",
    text:"Rédige un court texte au choix (lettre, description, texte d'imagination) en réutilisant le vocabulaire et les structures vues en classe.",
    fact:"Varier les types de textes écrits développe ta souplesse dans la langue, pas seulement ton vocabulaire.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"italien_2_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Présente et commente un texte",
    text:"Présente un court texte à la classe et commente-le en donnant ton avis personnel en deux phrases.",
    fact:"Présenter et commenter un texte est un objectif explicite de cette année de discipline fondamentale.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"italien_2_6", tier:"long", emoji:"🎨", label:"Étape 6 — Découvre une œuvre italienne",
    text:"Choisis une œuvre (chanson, film, livre court) italienne et présente-la à la classe en expliquant pourquoi tu l'as choisie.",
    fact:"Découvrir des œuvres représentatives, même simples, nourrit ta connaissance de la culture italienne.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"italien_2_7", tier:"long", emoji:"📖", label:"Étape 7 — Analyse et compare deux textes",
    text:"Compare deux textes sur un même sujet (un article, un poème) et note deux différences dans leur façon de traiter ce sujet.",
    fact:"Comparer deux traitements d'un même sujet aiguise ton regard critique sur les textes que tu lis.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqItalien2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS=MUSEE_SEQ_ITALIEN_2_COLLEGE_OBJECTS;
window.getSeqItalien2CollegeObjectsForParcours=getSeqItalien2CollegeObjectsForParcours;
