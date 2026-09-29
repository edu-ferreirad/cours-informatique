// SALLE SÉQUENCES — ITALIEN — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS = [
  { id:"italien_4_1", tier:"court", emoji:"🗂️", label:"Étape 1 — Mène une recherche personnelle approfondie",
    text:"Choisis une œuvre italienne du programme et mène une recherche sur son contexte socio-politique et artistique.",
    fact:"Le programme prévoit explicitement des recherches personnelles situant les œuvres dans leur contexte.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"italien_4_2", tier:"court", emoji:"🎓", label:"Étape 2 — Passe un oral blanc de maturité",
    text:"Tire un extrait du programme, prépare un commentaire en temps limité, puis présente-le devant un petit jury de camarades.",
    fact:"S'entraîner en conditions réelles réduit l'écart avec la pression du jour de l'examen.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"italien_4_3", tier:"court", emoji:"📖", label:"Étape 3 — Compare deux œuvres du programme",
    text:"Compare deux œuvres italiennes étudiées cette année sur un thème commun et identifie une différence de traitement entre les deux auteurs.",
    fact:"Comparer deux œuvres développe une vision plus large de la littérature italienne qu'une étude isolée.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"italien_4_4", tier:"moyen", emoji:"🗣️", label:"Étape 4 — Présente ta recherche à la classe",
    text:"Présente ta recherche de l'étape 1 en cinq minutes, puis réponds à une question posée par un camarade.",
    fact:"Répondre à une question improvisée montre que tu maîtrises vraiment ton sujet, pas seulement que tu l'as récité.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"italien_4_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Rédige un commentaire composé complet",
    text:"Rédige un commentaire composé complet sur un extrait du programme, en respectant la structure attendue à l'examen.",
    fact:"S'entraîner à la structure exacte de l'examen final est le meilleur moyen de s'y préparer sereinement.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"italien_4_6", tier:"long", emoji:"🔎", label:"Étape 6 — Prépare ta fiche de révision finale",
    text:"Prépare une fiche de révision reprenant les œuvres et auteurs étudiés sur les quatre années, avec un exemple précis pour chacun.",
    fact:"Une fiche construite par toi-même, à partir de tes propres exemples, est plus utile qu'une fiche toute faite.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"italien_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Passe ton oral blanc final",
    text:"Passe un dernier oral blanc complet en conditions réelles, puis compare ta performance à celle de ton premier oral blanc de l'année.",
    fact:"Comparer tes performances sur l'année rend tes progrès concrets et te donne confiance avant l'examen réel.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqItalien4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS=MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS;
window.getSeqItalien4CollegeObjectsForParcours=getSeqItalien4CollegeObjectsForParcours;
