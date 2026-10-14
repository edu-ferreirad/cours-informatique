// SALLE SÉQUENCES — MATHÉMATIQUES — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS = [
  { id:"maths_3_1", tier:"court", emoji:"🚗", label:"Étape 1 — Découvre la dérivée par la vitesse",
    text:"À partir d'un graphique de position d'une voiture, calcule des vitesses moyennes sur des intervalles de plus en plus courts. Note ce qui se passe quand l'intervalle devient très petit.",
    fact:"Cette approche progressive te fait sentir intuitivement la notion de limite avant même que la dérivée ne soit formalisée.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"maths_3_2", tier:"court", emoji:"➡️", label:"Étape 2 — Résous sans mesurer, uniquement par le calcul",
    text:"Face à un problème de géométrie dans l'espace, résous-le uniquement par le calcul vectoriel, sans jamais dessiner à l'échelle ni mesurer. Ta solution doit reposer entièrement sur le raisonnement.",
    fact:"S'interdire la mesure directe t'oblige à vraiment utiliser le vecteur comme outil de démonstration.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"maths_3_3", tier:"court", emoji:"🧭", label:"Étape 3 — Cherche un contre-exemple",
    text:"Face à l'affirmation « si la dérivée est positive, la fonction croît toujours », cherche un contre-exemple graphique. Si tu n'en trouves pas, explique pourquoi l'affirmation résiste à tes essais.",
    fact:"Chercher activement un contre-exemple muscle ton esprit critique autant que ta capacité de calcul.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"maths_3_4", tier:"moyen", emoji:"📊", label:"Étape 4 — Étudie une fonction complète, étape par étape",
    text:"Mène une étude complète d'une fonction : domaine, dérivée, variations, courbe. Fais chaque étape avant de passer à la suivante, sans sauter.",
    fact:"Une étude de fonction complète, faite dans l'ordre, prépare directement aux exercices d'examen de maturité.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"maths_3_5", tier:"moyen", emoji:"🎯", label:"Étape 5 — Calcule l'impact d'une petite erreur",
    text:"Prends un calcul en plusieurs étapes et introduis volontairement une petite erreur au départ. Calcule comment cette erreur se propage jusqu'au résultat final.",
    fact:"Comprendre comment une erreur se propage t'aide à savoir où vérifier en priorité dans un calcul long.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"maths_3_6", tier:"long", emoji:"📐", label:"Étape 6 — Compare deux méthodes pour le même problème",
    text:"Résous un même problème géométrique par deux méthodes différentes (vectorielle et analytique) et compare leur longueur et leur facilité.",
    fact:"Comparer deux méthodes sur un même problème t'aide à choisir la bonne méthode plus vite la prochaine fois.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"maths_3_7", tier:"long", emoji:"🔬", label:"Étape 7 — Simule un phénomène et fais varier un paramètre",
    text:"À l'aide d'un tableur ou d'un logiciel, simule un phénomène physique modélisé par une fonction et fais varier un seul paramètre. Note l'effet observé sur le résultat.",
    fact:"Faire varier un seul paramètre à la fois te permet de vraiment comprendre son rôle isolé dans le modèle.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMaths3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS=MUSEE_SEQ_MATHS_3_COLLEGE_OBJECTS;
window.getSeqMaths3CollegeObjectsForParcours=getSeqMaths3CollegeObjectsForParcours;
