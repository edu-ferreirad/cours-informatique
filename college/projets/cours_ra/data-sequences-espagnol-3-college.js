// SALLE SÉQUENCES — ESPAGNOL — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS = [
  { id:"espagnol_3_1", tier:"court", emoji:"🔍", label:"Étape 1 — Commente un texte littéraire",
    text:"Face à un texte littéraire hispanique, identifie un thème central et deux procédés d'écriture qui le servent, avant confrontation en petit groupe.",
    fact:"Commenter et interpréter des textes de façon cohérente et critique est un objectif de cette étape du cursus.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"espagnol_3_2", tier:"court", emoji:"🗂️", label:"Étape 2 — Mène une recherche personnelle approfondie",
    text:"Choisis un sujet culturel du monde hispanique et mène une recherche documentaire plus approfondie qu'en 2e année, restituée à l'oral.",
    fact:"La recherche personnelle devient plus exigeante à mesure que ton niveau de langue progresse.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"espagnol_3_3", tier:"court", emoji:"💬", label:"Étape 3 — Débats d'un sujet culturel",
    text:"Sur un sujet culturel hispanophone, prépare un avis et débats-en avec un camarade qui défend la position opposée.",
    fact:"Débattre en langue étrangère t'entraîne à mobiliser du vocabulaire sous une vraie pression de temps.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"espagnol_3_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Nuance un texte argumentatif",
    text:"Rédige un texte argumentatif structuré en distinguant différents niveaux de langue et en les utilisant de façon adéquate selon le contexte.",
    fact:"Distinguer les niveaux de langue est un objectif explicite du programme à ce stade du cursus.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"espagnol_3_5", tier:"moyen", emoji:"📖", label:"Étape 5 — Analyse un texte plus complexe",
    text:"Lis un texte littéraire plus complexe qu'auparavant et identifie sa structure, ses personnages principaux et son thème central.",
    fact:"Lire des textes de plus en plus complexes est un objectif progressif du programme d'espagnol.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"espagnol_3_6", tier:"long", emoji:"🗣️", label:"Étape 6 — Présente et défends une interprétation",
    text:"Présente ton interprétation d'un texte étudié à la classe et défends-la face à des questions ou avis différents de tes camarades.",
    fact:"Défendre une interprétation face à des avis différents prépare à l'exigence critique attendue en fin de cursus.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"espagnol_3_7", tier:"long", emoji:"🎓", label:"Étape 7 — Prépare ton dossier de fin d'année",
    text:"Rassemble tes meilleures productions de l'année (commentaire, recherche, texte argumentatif) dans un dossier et choisis celle que tu présenterais en priorité.",
    fact:"Choisir ta meilleure production développe ta capacité à t'auto-évaluer, une compétence transférable.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEspagnol3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS=MUSEE_SEQ_ESPAGNOL_3_COLLEGE_OBJECTS;
window.getSeqEspagnol3CollegeObjectsForParcours=getSeqEspagnol3CollegeObjectsForParcours;
