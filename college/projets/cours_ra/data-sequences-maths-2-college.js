// SALLE SÉQUENCES — MATHÉMATIQUES — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS = [
  { id:"maths_2_1", tier:"court", emoji:"🔎", label:"Étape 1 — Conjecture avant de prouver",
    text:"Face à une nouvelle propriété géométrique, teste-la sur trois cas concrets avec de vraies mesures et note ta conjecture par écrit avant même d'en chercher la preuve.",
    fact:"Le programme de 2e met l'accent sur l'esprit scientifique : la conjecture d'abord, la preuve ensuite, jamais l'inverse.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"maths_2_2", tier:"court", emoji:"🌡️", label:"Étape 2 — Choisis le bon type de fonction",
    text:"Face à une situation concrète (remplissage d'une piscine, température), choisis parmi plusieurs types de fonctions celui qui la représente le mieux, et justifie ton choix en une phrase précise.",
    fact:"Choisir le bon modèle avant de calculer évite bien des erreurs qui viennent d'un modèle mal choisi au départ.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"maths_2_3", tier:"court", emoji:"⭐", label:"Étape 3 — Explore ton sujet à choix (niveau avancé)",
    text:"Si tu es en niveau avancé, ton enseignant te propose un court sujet supplémentaire. Explore-le seul sur deux semaines, puis prépare une présentation orale de cinq minutes.",
    fact:"Cette marge de manœuvre est explicitement prévue par le programme pour le niveau avancé, en plus du programme commun.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"maths_2_4", tier:"moyen", emoji:"📐", label:"Étape 4 — Prouve avec rigueur, pas à l'intuition",
    text:"Reprends ta conjecture de l'étape 1. Écris maintenant une démonstration rigoureuse, en distinguant clairement les hypothèses de la conclusion à chaque étape.",
    fact:"Passer de l'intuition à la preuve rigoureuse est l'objectif central du travail de démonstration en 2e année.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"maths_2_5", tier:"moyen", emoji:"🧮", label:"Étape 5 — Teste les limites de ton modèle",
    text:"Reprends ton modèle de l'étape 2. Trouve un exemple de données qui s'en écarte fortement et explique pourquoi ton modèle ne fonctionne plus dans ce cas.",
    fact:"Un bon élève de mathématiques sait où son modèle s'arrête de fonctionner, pas seulement comment il fonctionne.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"maths_2_6", tier:"long", emoji:"🖥️", label:"Étape 6 — Utilise un logiciel pour vérifier",
    text:"Reprends un exercice fait à la main et vérifie ton résultat avec un logiciel ou une calculatrice graphique. Note un endroit où l'outil t'a fait gagner du temps et un endroit où il t'a caché une étape importante.",
    fact:"L'outil numérique aide, mais ne remplace jamais la compréhension de ce qui se passe à chaque étape.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"maths_2_7", tier:"long", emoji:"📝", label:"Étape 7 — Rédige une solution complète et communicable",
    text:"Reprends un problème résolu ce trimestre et rédige une solution complète que quelqu'un d'autre pourrait suivre sans toi à côté pour expliquer oralement.",
    fact:"Savoir communiquer sa démarche par écrit est une compétence évaluée au même titre que le résultat final juste.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMaths2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS=MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS;
window.getSeqMaths2CollegeObjectsForParcours=getSeqMaths2CollegeObjectsForParcours;
