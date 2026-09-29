// SALLE SÉQUENCES — LATIN — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS = [
  { id:"latin_1_1", tier:"court", emoji:"📜", label:"Étape 1 — Traduis pas à pas",
    text:"Face à une phrase latine courte, identifie d'abord le verbe conjugué, puis le sujet, puis les compléments un par un, avant de proposer ta traduction complète.",
    fact:"Repérer d'abord la structure, plutôt que deviner un sens global, est la méthode qui marche vraiment en latin.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"latin_1_2", tier:"court", emoji:"🔤", label:"Étape 2 — Cherche les mots français dérivés du latin",
    text:"À partir d'une liste de mots latins simples, cherche des mots français qui en dérivent probablement, puis vérifie tes hypothèses dans un dictionnaire étymologique.",
    fact:"Ce lien entre latin et français t'aide aussi à mieux comprendre et orthographier des mots français complexes.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"latin_1_3", tier:"court", emoji:"🏛️", label:"Étape 3 — Découvre un aspect de la civilisation romaine",
    text:"Choisis un aspect de la civilisation romaine (habitat, alimentation, loisirs) et présente-le en deux phrases à la classe à partir d'un document donné.",
    fact:"Découvrir la civilisation romaine donne du sens aux textes que tu traduiras ensuite.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"latin_1_4", tier:"moyen", emoji:"🏛️", label:"Étape 4 — Prépare un mini-dossier de civilisation",
    text:"En groupe, constitue un court dossier sur un aspect de la civilisation romaine (bains, forum, légions) à partir de plusieurs documents.",
    fact:"Une part de liberté dans le choix des sujets de civilisation est explicitement prévue par le programme.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"latin_1_5", tier:"moyen", emoji:"🔍", label:"Étape 5 — Compare deux traductions",
    text:"Compare deux traductions différentes d'un même court passage latin et identifie les choix d'interprétation qui les distinguent.",
    fact:"Comparer deux traductions montre qu'une version n'est jamais la seule possible.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"latin_1_6", tier:"long", emoji:"📖", label:"Étape 6 — Traduis un texte plus long",
    text:"Traduis un texte latin un peu plus long que d'habitude, en réutilisant la méthode pas à pas vue à l'étape 1.",
    fact:"Traduire un texte plus long te fait sentir la différence entre déchiffrer une phrase isolée et suivre un vrai texte.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"latin_1_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton dossier de civilisation",
    text:"Présente ton dossier de l'étape 4 à la classe en trois minutes, avec au moins un document à l'appui.",
    fact:"Présenter un dossier construit en groupe t'entraîne à synthétiser un travail collectif.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqLatin1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS=MUSEE_SEQ_LATIN_1_COLLEGE_OBJECTS;
window.getSeqLatin1CollegeObjectsForParcours=getSeqLatin1CollegeObjectsForParcours;
