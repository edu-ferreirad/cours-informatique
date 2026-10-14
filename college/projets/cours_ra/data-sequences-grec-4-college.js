// SALLE SÉQUENCES — GREC — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS = [
  { id:"grec_4_1", tier:"court", emoji:"🔎", label:"Étape 1 — Poursuis ton étude d'auteur en autonomie",
    text:"Choisis un nouveau texte d'un auteur grec étudié, prépare-le seul (traduction, analyse) en vue d'une présentation à la classe.",
    fact:"Ce travail d'autonomie se poursuit et s'approfondit en dernière année du cursus.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"grec_4_2", tier:"court", emoji:"🗂️", label:"Étape 2 — Mène une recherche personnelle ou en groupe",
    text:"Choisis un thème lié à la civilisation grecque étudiée sur les quatre années et mène une recherche restituée sous forme d'exposé illustré par des extraits traduits.",
    fact:"Ce travail de recherche est explicitement cité par le programme comme activité de fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"grec_4_3", tier:"court", emoji:"📚", label:"Étape 3 — Lis en traduction et compare à l'héritage occidental",
    text:"Compare un extrait grec traduit à un texte français d'inspiration antique (théâtre, philosophie) pour identifier ce que la culture occidentale en a hérité.",
    fact:"L'étude du grec permet de comprendre une des sources de la culture occidentale, pas seulement une langue ancienne.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"grec_4_4", tier:"moyen", emoji:"🗣️", label:"Étape 4 — Présente ton texte d'auteur",
    text:"Présente le texte préparé à l'étape 1 à la classe, qui pose ensuite des questions sur le contexte et le style.",
    fact:"Répondre à des questions après ta présentation vérifie une vraie maîtrise, pas une simple récitation.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"grec_4_5", tier:"moyen", emoji:"📖", label:"Étape 5 — Compare deux œuvres du programme",
    text:"Compare deux œuvres grecques étudiées cette année sur un thème commun et identifie une différence de traitement entre les auteurs.",
    fact:"Comparer deux œuvres développe une vision plus large de la littérature grecque qu'une étude isolée.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"grec_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare ta fiche de révision finale",
    text:"Prépare une fiche de révision reprenant les textes et auteurs grecs étudiés sur les quatre années, avec un exemple précis pour chacun.",
    fact:"Une fiche construite par toi-même, à partir de tes propres exemples, est plus utile qu'une fiche toute faite.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"grec_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Présente ta recherche finale",
    text:"Présente ta recherche de l'étape 2 à la classe en cinq minutes, en reliant la civilisation grecque à un aspect actuel qui t'a marqué.",
    fact:"Relier l'Antiquité à aujourd'hui est la meilleure façon de clore quatre années d'étude du grec.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGrec4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS=MUSEE_SEQ_GREC_4_COLLEGE_OBJECTS;
window.getSeqGrec4CollegeObjectsForParcours=getSeqGrec4CollegeObjectsForParcours;
