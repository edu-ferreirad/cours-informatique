// SALLE SÉQUENCES — CHIMIE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS = [
  { id:"chimie_4_1", tier:"court", emoji:"🌠", label:"Étape 1 — Explore le big-bang et la naissance des atomes (OS)",
    text:"Présente en groupe, sous forme de frise commentée, les grandes étapes de la formation des premiers atomes après le big-bang.",
    fact:"Décrire l'évolution de la matière dans l'univers est un objectif explicite de fin de cursus en option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"chimie_4_2", tier:"court", emoji:"☢️", label:"Étape 2 — Comprends la radioactivité (OS)",
    text:"Recherche et explique un usage réel de la radioactivité (médical, énergétique) en identifiant les phénomènes chimiques en jeu.",
    fact:"Comprendre et formaliser les phénomènes radioactifs et leurs utilisations est un objectif de cette année.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"chimie_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Passe un oral blanc de maturité",
    text:"Prépare la présentation d'une réaction ou d'un phénomène chimique du programme en temps limité, puis présente-le devant un petit jury de camarades.",
    fact:"S'entraîner en conditions réelles réduit l'écart avec la pression du jour de l'examen.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"chimie_4_4", tier:"moyen", emoji:"🗂️", label:"Étape 4 — Finalise ton dossier de recherche (OS)",
    text:"Finalise un dossier de recherche personnelle en chimie, avec introduction, méthode, résultats et conclusion, en citant toutes tes sources.",
    fact:"Ce format complet est un vrai entraînement à la structure attendue d'un travail de maturité scientifique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"chimie_4_5", tier:"moyen", emoji:"🧪", label:"Étape 5 — Mène ton projet expérimental final (OS)",
    text:"Mène un projet expérimental complet sur un phénomène chimique de ton choix, avec analyse critique des résultats.",
    fact:"Ce projet final mobilise l'ensemble des compétences développées en option spécifique sur les quatre années.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"chimie_4_6", tier:"long", emoji:"🎤", label:"Étape 6 — Présente et défends ton projet final (OS)",
    text:"Présente ton projet de l'étape 5 à la classe et réponds à des questions critiques sur tes choix méthodologiques.",
    fact:"Défendre son travail face à des questions critiques est une étape réelle de toute recherche scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"chimie_4_7", tier:"long", emoji:"🔗", label:"Étape 7 — Relie chimie et physique en synthèse finale (OS)",
    text:"Choisis un phénomène qui relie chimie et physique (énergie, changement d'état) et explique-le en croisant les deux points de vue.",
    fact:"Ce lien final entre chimie et physique clôt ton parcours scientifique en option spécifique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqChimie4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS=MUSEE_SEQ_CHIMIE_4_COLLEGE_OBJECTS;
window.getSeqChimie4CollegeObjectsForParcours=getSeqChimie4CollegeObjectsForParcours;
