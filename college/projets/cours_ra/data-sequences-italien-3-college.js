// SALLE SÉQUENCES — ITALIEN — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS = [
  { id:"italien_3_1", tier:"court", emoji:"🖼️", label:"Étape 1 — Associe un extrait à son mouvement littéraire",
    text:"En groupe, associe un court extrait à un courant littéraire italien étudié, en justifiant ton choix par deux indices précis relevés dans le texte.",
    fact:"Identifier les grands courants littéraires à partir d'indices concrets est un objectif de cette année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"italien_3_2", tier:"court", emoji:"🗣️", label:"Étape 2 — Débats un texte d'actualité",
    text:"À partir d'un article italien récent, prépare un avis argumenté puis débats-en en classe en citant une phrase précise du texte à l'appui.",
    fact:"Citer une phrase précise, plutôt que de paraphraser vaguement, renforce la crédibilité de ton argument.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"italien_3_3", tier:"court", emoji:"📖", label:"Étape 3 — Lis et compare deux extraits",
    text:"Compare deux extraits d'un même auteur italien et identifie une caractéristique de style qui les relie.",
    fact:"Comparer deux extraits d'un même auteur fait ressortir sa manière d'écrire propre.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"italien_3_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Commente un texte d'actualité",
    text:"Rédige un commentaire structuré sur un texte italien d'actualité, en distinguant différents niveaux de langue et en les utilisant de manière adéquate.",
    fact:"Distinguer les niveaux de langue est un objectif explicite du programme à ce stade.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"italien_3_5", tier:"moyen", emoji:"🎭", label:"Étape 5 — Présente un aspect de la civilisation italienne",
    text:"Recherche et présente un aspect de la civilisation italophone (histoire, société) à la classe en deux minutes.",
    fact:"Découvrir les spécificités d'une région ou d'un pays fait partie des objectifs culturels du programme.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"italien_3_6", tier:"long", emoji:"🔎", label:"Étape 6 — Analyse un texte littéraire en profondeur",
    text:"Choisis un extrait plus complexe qu'auparavant et analyse-le en profondeur : structure, thème, procédés stylistiques.",
    fact:"Lire des textes plus difficiles et plus exigeants est un objectif progressif de l'option spécifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"italien_3_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Défends une interprétation personnelle",
    text:"Présente ton interprétation d'un texte étudié et défends-la face aux questions et avis différents de tes camarades.",
    fact:"Défendre une interprétation face à la contradiction prépare à l'exigence critique de la fin du cursus.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqItalien3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS=MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS;
window.getSeqItalien3CollegeObjectsForParcours=getSeqItalien3CollegeObjectsForParcours;
