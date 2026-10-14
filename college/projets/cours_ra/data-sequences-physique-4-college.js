// SALLE SÉQUENCES — PHYSIQUE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS = [
  { id:"physique_4_1", tier:"court", emoji:"🌌", label:"Étape 1 — Approfondis la physique du XXe siècle (OS)",
    text:"Choisis un sujet de physique du XXe siècle (relativité, quantique) et prépare une présentation qui l'explique sans formule mathématique complexe.",
    fact:"Le programme prévoit l'étude d'éléments de physique du XXe siècle en fin de cursus d'option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"physique_4_2", tier:"court", emoji:"🔗", label:"Étape 2 — Finalise un lien interdisciplinaire (OS)",
    text:"Choisis un phénomène qui relie la physique à une autre discipline (biologie, sciences humaines) et explique-le en croisant les deux points de vue.",
    fact:"Ce type de lien interdisciplinaire est explicitement encouragé en fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"physique_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Passe un oral blanc de maturité",
    text:"Prépare la présentation d'un phénomène physique du programme en temps limité, puis présente-la devant un petit jury de camarades.",
    fact:"S'entraîner en conditions réelles réduit l'écart avec la pression du jour de l'examen.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"physique_4_4", tier:"moyen", emoji:"🧪", label:"Étape 4 — Mène ton projet expérimental final",
    text:"Mène un projet expérimental complet sur un phénomène de ton choix, avec calcul d'incertitude et analyse critique des résultats.",
    fact:"Ce projet final mobilise l'ensemble des compétences développées en option spécifique sur les quatre années.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"physique_4_5", tier:"moyen", emoji:"💻", label:"Étape 5 — Utilise la simulation pour vérifier tes résultats",
    text:"Simule numériquement le phénomène étudié à l'étape 4 et compare les résultats simulés à tes mesures expérimentales réelles.",
    fact:"Comparer simulation et expérience réelle est une pratique courante de la physique moderne.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"physique_4_6", tier:"long", emoji:"📝", label:"Étape 6 — Rédige ton rapport final complet",
    text:"Rédige un rapport complet de ton projet de l'étape 4, avec introduction, méthode, résultats, analyse d'incertitude et conclusion.",
    fact:"Ce format complet est un vrai entraînement à la structure attendue d'un travail de maturité scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"physique_4_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente et défends ton projet final",
    text:"Présente ton projet final à la classe et réponds à des questions critiques sur tes choix méthodologiques et tes résultats.",
    fact:"Défendre son travail devant des questions critiques est une étape réelle de toute recherche scientifique, y compris à ton niveau.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhysique4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS=MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS;
window.getSeqPhysique4CollegeObjectsForParcours=getSeqPhysique4CollegeObjectsForParcours;
