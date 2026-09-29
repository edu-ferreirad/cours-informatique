// SALLE OSP ARTS ET DESIGN — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_2_ECG_OBJECTS = [
  { id:"arts_design_2_1", tier:"court", emoji:"📷", label:"Étape 1 — Cadre la même scène de trois façons",
    text:"Photographie ou dessine un même petit espace (un coin de la classe) en variant seulement le cadrage : de très près, de loin, en hauteur. Compare l'effet produit par chaque cadrage.",
    fact:"Le cadrage seul change complètement ce qu'une image raconte, sans changer le sujet lui-même.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_design_2_2", tier:"court", emoji:"🔤", label:"Étape 2 — Choisis une typographie pour un message",
    text:"Écris le mot « urgent » avec trois polices de caractères très différentes et explique laquelle correspond le mieux au sens du mot, et pourquoi.",
    fact:"Une typographie porte un message avant même d'être lue, c'est ce qu'étudie la communication visuelle.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_design_2_3", tier:"court", emoji:"🧱", label:"Étape 3 — Construis en volume avec une contrainte",
    text:"Avec seulement du papier et de la colle, construis une petite structure qui doit tenir debout seule, sans base large. Note combien d'essais tu as dû faire.",
    fact:"Travailler en trois dimensions révèle des contraintes physiques que le dessin à plat ne montre jamais.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_design_2_4", tier:"moyen", emoji:"🖥️", label:"Étape 4 — Analyse une interface numérique",
    text:"Observe l'écran d'accueil d'une application que tu utilises et repère trois choix de design (couleurs, boutons, hiérarchie de l'information) qui la rendent facile ou difficile à utiliser.",
    fact:"Le design numérique suit les mêmes principes visuels que l'affiche ou la peinture, appliqués à un écran.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_design_2_5", tier:"moyen", emoji:"🎭", label:"Étape 5 — Conçois un décor miniature",
    text:"Conçois en miniature (boîte à chaussures) le décor d'une scène de ton choix, en pensant à l'ambiance que tu veux créer par les couleurs et les objets choisis.",
    fact:"Concevoir un espace, même miniature, relie les arts visuels à la scénographie et au théâtre.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_design_2_6", tier:"long", emoji:"🖼️", label:"Étape 6 — Élabore ton mini-projet en trois étapes",
    text:"Choisis un thème personnel et développe un projet en trois étapes visibles : croquis d'intention, essai de matière ou couleur, version presque finale. Garde une trace de chaque étape.",
    fact:"Garder une trace de chaque étape d'un projet permet, à la fin, d'expliquer un vrai cheminement plutôt qu'un résultat sorti de nulle part.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_design_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton cheminement, pas seulement le résultat",
    text:"Présente à la classe les trois étapes de ton projet de l'étape 6 en expliquant ce qui a changé entre chacune et pourquoi.",
    fact:"Un jury d'art évalue autant le cheminement que le résultat final ; s'entraîner à l'expliquer prépare à ce regard.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_2_ECG_OBJECTS = MUSEE_ARTS_DESIGN_2_ECG_OBJECTS;
window.getArtsDesign2EcgObjectsForParcours = getArtsDesign2EcgObjectsForParcours;
