// SALLE SÉQUENCES — LATIN — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS = [
  { id:"latin_4_1", tier:"court", emoji:"🔎", label:"Étape 1 — Étudie un texte d'auteur en autonomie",
    text:"Choisis un texte d'un auteur latin étudié, prépare-le seul (traduction, analyse) en vue d'une présentation à la classe.",
    fact:"Étudier seul un texte d'auteur et le présenter est un objectif explicite de cette dernière année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"latin_4_2", tier:"court", emoji:"⚖️", label:"Étape 2 — Trouve l'héritage romain dans le droit suisse",
    text:"En lien avec le cours d'économie et droit, identifie dans un texte de loi suisse actuel des notions héritées du droit romain.",
    fact:"L'empreinte du droit romain sur la Suisse est un lien interdisciplinaire explicite en fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"latin_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Passe un oral blanc de maturité",
    text:"Tire un texte du programme, prépare-toi en temps limité, puis présente-le devant un petit jury de camarades.",
    fact:"S'entraîner en conditions réelles réduit l'écart avec la pression du jour de l'examen.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"latin_4_4", tier:"moyen", emoji:"📖", label:"Étape 4 — Compare deux œuvres du programme",
    text:"Compare deux œuvres latines étudiées cette année sur un thème commun et identifie une différence de traitement entre les auteurs.",
    fact:"Comparer deux œuvres développe une vision plus large de la littérature latine qu'une étude isolée.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"latin_4_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Présente ton texte d'auteur",
    text:"Présente le texte préparé à l'étape 1 à la classe, qui pose ensuite des questions sur le contexte et le style.",
    fact:"Répondre à des questions après ta présentation vérifie une vraie maîtrise, pas une simple récitation.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"latin_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare ta fiche de révision finale",
    text:"Prépare une fiche de révision reprenant les textes et auteurs latins étudiés sur les quatre années, avec un exemple précis pour chacun.",
    fact:"Une fiche construite par toi-même, à partir de tes propres exemples, est plus utile qu'une fiche toute faite.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"latin_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Passe ton oral blanc final",
    text:"Passe un dernier oral blanc complet en conditions réelles d'examen, puis compare ta performance à celle de ton premier oral blanc de l'année.",
    fact:"Comparer tes deux performances rend tes progrès concrets et te donne confiance avant l'examen réel.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqLatin4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS=MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS;
window.getSeqLatin4CollegeObjectsForParcours=getSeqLatin4CollegeObjectsForParcours;
