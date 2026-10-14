// SALLE SÉQUENCES — ITALIEN — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS = [
  { id:"italien_1_1", tier:"court", emoji:"🔊", label:"Étape 1 — Chasse les sons difficiles",
    text:"En groupe, classe une liste de mots italiens selon des sons proches à distinguer (gli/gn, doubles consonnes), en t'enregistrant pour vérifier ta prononciation.",
    fact:"Reconnaître et reproduire les sons de l'italien est le tout premier objectif de cette année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"italien_1_2", tier:"court", emoji:"🖼️", label:"Étape 2 — Décris une image que ton camarade ne voit pas",
    text:"Décris oralement en italien simple une image que toi seul vois. Ton camarade doit la dessiner uniquement à partir de ta description.",
    fact:"Si le dessin ressemble à l'original, c'est la preuve que ta description était vraiment précise.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"italien_1_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Résume un court récit",
    text:"Écoute un court récit en italien simple et résume-le oralement en trois phrases à un camarade.",
    fact:"Comprendre et résumer un bref texte narratif est un objectif explicite de cette première année.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"italien_1_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Décris un lieu ou un portrait",
    text:"Écris un texte court décrivant un lieu ou une personne, en réutilisant le vocabulaire vu en classe.",
    fact:"Décrire par écrit consolide le vocabulaire vu à l'oral en le fixant dans une forme durable.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"italien_1_5", tier:"moyen", emoji:"📖", label:"Étape 5 — Comprends un texte argumentatif simple",
    text:"Lis un article ou texte argumentatif simple et résume son idée principale en deux phrases.",
    fact:"Comprendre et résumer un texte argumentatif simple est un objectif de fin de tronc commun.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"italien_1_6", tier:"long", emoji:"🎭", label:"Étape 6 — Joue une scène de vie courante",
    text:"Avec un camarade, joue une scène de vie courante (demander une information, faire des courses) en utilisant les formules apprises.",
    fact:"Le jeu de rôle prépare aux vraies situations que tu rencontreras en Italie ou en Suisse italienne.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"italien_1_7", tier:"long", emoji:"🇨🇭", label:"Étape 7 — Découvre la Suisse italienne",
    text:"Recherche un fait culturel sur la Suisse italienne (une fête, un lieu) et présente-le en deux phrases à la classe.",
    fact:"S'intéresser à la Suisse italienne, pas seulement à l'Italie, fait partie des objectifs du programme.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqItalien1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS=MUSEE_SEQ_ITALIEN_1_COLLEGE_OBJECTS;
window.getSeqItalien1CollegeObjectsForParcours=getSeqItalien1CollegeObjectsForParcours;
