// SALLE SÉQUENCES — INFORMATIQUE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS = [
  { id:"informatique_2_1", tier:"court", emoji:"📋", label:"Étape 1 — Choisis la bonne structure pour tes données",
    text:"Face à un petit jeu de données réel (les élèves de la classe et leurs notes), compare deux façons de les organiser en mémoire et discute laquelle rend certaines opérations plus faciles.",
    fact:"Le choix d'une structure de données a de vraies conséquences pratiques, pas seulement théoriques.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"informatique_2_2", tier:"court", emoji:"🌐", label:"Étape 2 — Fais voyager un message sur un réseau",
    text:"Sur un schéma simplifié de réseau, trace à la main le chemin le plus court qu'emprunterait un message d'une machine à une autre.",
    fact:"Tracer le chemin à la main rend concret un fonctionnement autrement invisible et abstrait.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"informatique_2_3", tier:"court", emoji:"📦", label:"Étape 3 — Devine ce que fait une fonction",
    text:"Utilise d'abord une fonction toute faite sans voir son code, en observant seulement ses entrées et sorties, pour deviner ce qu'elle fait. Ouvre ensuite le code pour vérifier ton hypothèse.",
    fact:"Deviner le comportement d'une fonction avant de voir son code développe une lecture fonctionnelle du programme.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"informatique_2_4", tier:"moyen", emoji:"🔍", label:"Étape 4 — Compare recherche triée et désordonnée",
    text:"Cherche un nombre dans une liste désordonnée puis dans la même liste triée, en comptant à chaque fois le nombre de comparaisons nécessaires.",
    fact:"Comparer le coût d'une recherche avant et après tri montre concrètement l'impact du choix d'un algorithme.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"informatique_2_5", tier:"moyen", emoji:"🗄️", label:"Étape 5 — Construis une mini base de données",
    text:"En groupe, construis une petite base de données structurée sur un sujet de ton choix, puis écris des questions précises que cette base permettrait de répondre facilement, ou pas.",
    fact:"Concevoir soi-même une base de données simple fait toucher du doigt l'organisation réelle des données.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"informatique_2_6", tier:"long", emoji:"🧮", label:"Étape 6 — Programme une mini-calculatrice",
    text:"En binôme, programme une petite calculatrice avec un menu de choix (addition, soustraction, multiplication) en réutilisant fonctions et structures de données vues en classe.",
    fact:"Ce mini-projet combine plusieurs briques déjà vues dans un seul programme cohérent.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"informatique_2_7", tier:"long", emoji:"🐞", label:"Étape 7 — Fais tester ton programme pour le faire planter",
    text:"Fais tester ta calculatrice de l'étape 6 par un autre binôme qui cherche activement à la faire planter. Note ce qu'ils trouvent et corrige.",
    fact:"Se faire tester par quelqu'un qui cherche à casser ton programme t'habitue à l'idée qu'un programme doit résister à l'imprévu.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqInformatique2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS=MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS;
window.getSeqInformatique2CollegeObjectsForParcours=getSeqInformatique2CollegeObjectsForParcours;
