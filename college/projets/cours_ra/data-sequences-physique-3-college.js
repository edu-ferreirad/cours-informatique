// SALLE SÉQUENCES — PHYSIQUE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS = [
  { id:"physique_3_1", tier:"court", emoji:"🎯", label:"Étape 1 — Calcule l'impact d'une incertitude (OS)",
    text:"Prends un calcul en plusieurs étapes et calcule comment une petite erreur de mesure au départ se propage jusqu'au résultat final.",
    fact:"Effectuer un calcul d'incertitude jusqu'à son impact final est un objectif explicite de l'option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"physique_3_2", tier:"court", emoji:"💻", label:"Étape 2 — Simule un phénomène physique (OS)",
    text:"À l'aide d'un outil informatique simple, simule un phénomène physique et fais varier un paramètre pour observer l'effet sur le résultat.",
    fact:"Utiliser l'informatique pour simuler un phénomène est un objectif propre à l'option spécifique.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"physique_3_3", tier:"court", emoji:"📐", label:"Étape 3 — Mène une expérience plus exigeante (OS)",
    text:"Mène une expérience complète en option spécifique, du choix des mesures jusqu'à l'analyse critique des résultats obtenus.",
    fact:"Mener complètement une expérience, du choix des mesures à l'analyse critique, est attendu en option spécifique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"physique_3_4", tier:"moyen", emoji:"🌌", label:"Étape 4 — Explore un paradoxe du XXe siècle (OS)",
    text:"En groupe, présente à la classe un paradoxe ou une expérience célèbre de la physique du XXe siècle, en l'expliquant sans aucune formule mathématique.",
    fact:"Le programme prévoit l'étude d'éléments de la physique du XXe siècle en option spécifique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"physique_3_5", tier:"moyen", emoji:"🔗", label:"Étape 5 — Relie physique et biologie (OS)",
    text:"Explique un phénomène physiologique (la vision, l'audition) uniquement par des lois physiques déjà étudiées, sans vocabulaire biologique.",
    fact:"Ce lien interdisciplinaire est explicitement mentionné par le programme, par exemple pour l'étude de l'œil.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"physique_3_6", tier:"long", emoji:"🧪", label:"Étape 6 — Mène un projet expérimental complet (OS)",
    text:"Choisis un phénomène physique de ton choix et mène un projet expérimental complet sur plusieurs séances, avec un rapport détaillé.",
    fact:"Ce projet plus long te prépare aux exigences d'un futur travail de maturité scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"physique_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton projet et défends tes résultats (OS)",
    text:"Présente ton projet de l'étape 6 à la classe et réponds à deux questions critiques sur la fiabilité de tes résultats.",
    fact:"Défendre son travail face à des questions critiques est une étape réelle de toute recherche scientifique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhysique3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS=MUSEE_SEQ_PHYSIQUE_3_COLLEGE_OBJECTS;
window.getSeqPhysique3CollegeObjectsForParcours=getSeqPhysique3CollegeObjectsForParcours;
