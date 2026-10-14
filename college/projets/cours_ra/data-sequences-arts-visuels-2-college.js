// SALLE SÉQUENCES — ARTS VISUELS — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS = [
  { id:"arts_visuels_2_1", tier:"court", emoji:"📷", label:"Étape 1 — Cadre la même scène de trois façons",
    text:"Photographie ou dessine un même petit espace en variant seulement le cadrage : de très près, de loin, en hauteur.",
    fact:"Le cadrage seul change complètement ce qu'une image raconte, sans changer le sujet lui-même.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_visuels_2_2", tier:"court", emoji:"🔤", label:"Étape 2 — Choisis une typographie pour un message",
    text:"Écris un mot avec trois polices très différentes et explique laquelle correspond le mieux au sens du mot.",
    fact:"Une typographie porte un message avant même d'être lue.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_visuels_2_3", tier:"court", emoji:"🧱", label:"Étape 3 — Construis en volume avec une contrainte",
    text:"Avec seulement du papier et de la colle, construis une structure qui doit tenir debout seule, sans base large.",
    fact:"Travailler en trois dimensions révèle des contraintes que le dessin à plat ne montre jamais.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_visuels_2_4", tier:"moyen", emoji:"🖼️", label:"Étape 4 — Analyse une interface numérique",
    text:"Observe l'écran d'accueil d'une application et repère trois choix de design qui la rendent facile ou difficile à utiliser.",
    fact:"Le design numérique suit les mêmes principes visuels que l'affiche, appliqués à un écran.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_visuels_2_5", tier:"moyen", emoji:"🗨️", label:"Étape 5 — Reçois une critique constructive",
    text:"Présente un travail en cours à un camarade qui doit dire une chose qui fonctionne et une chose à améliorer, avec un exemple précis.",
    fact:"Recevoir une critique précise permet vraiment d'améliorer un travail artistique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_visuels_2_6", tier:"long", emoji:"🖼️", label:"Étape 6 — Élabore un projet en trois étapes visibles",
    text:"Développe un projet personnel en trois étapes visibles : croquis d'intention, essai de matière, version presque finale.",
    fact:"Garder une trace de chaque étape permet d'expliquer, à la fin, un vrai cheminement.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_visuels_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton cheminement",
    text:"Présente à la classe les trois étapes de ton projet en expliquant ce qui a changé entre chacune.",
    fact:"Un jury d'art évalue autant le cheminement que le résultat final.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqArtsVisuels2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS=MUSEE_SEQ_ARTS_VISUELS_2_COLLEGE_OBJECTS;
window.getSeqArtsVisuels2CollegeObjectsForParcours=getSeqArtsVisuels2CollegeObjectsForParcours;
