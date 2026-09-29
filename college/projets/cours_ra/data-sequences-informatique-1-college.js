// SALLE SÉQUENCES — INFORMATIQUE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS = [
  { id:"informatique_1_1", tier:"court", emoji:"🔢", label:"Étape 1 — Compte en binaire avec tes doigts",
    text:"Compte en binaire sur tes doigts (chaque doigt vaut une puissance de 2) jusqu'à atteindre le nombre cible donné par ton enseignant. Écris ensuite ce nombre en écriture binaire au tableau.",
    fact:"Le binaire est la première brique du programme : représenter l'information autrement qu'avec nos dix chiffres habituels.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"informatique_1_2", tier:"court", emoji:"🖼️", label:"Étape 2 — Code une image en 0 et en 1",
    text:"Sur une petite grille d'image en noir et blanc, code-la entièrement comme une suite de 0 et de 1 sur papier. Échange ta suite avec un camarade qui doit la redécoder et comparer son dessin au tien.",
    fact:"Si ton camarade retrouve la bonne image, c'est la preuve que ton codage était juste et complet.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"informatique_1_3", tier:"court", emoji:"🧮", label:"Étape 3 — Traduis ton prénom en binaire",
    text:"À l'aide du tableau de codage donné, traduis ton prénom en une suite de 0 et de 1, puis échange-la avec un camarade qui doit la décoder.",
    fact:"Coder l'information est l'un des concepts de base que tu retrouveras dans toute l'informatique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"informatique_1_4", tier:"moyen", emoji:"🧩", label:"Étape 4 — Écris ton algorithme avant de coder",
    text:"Face à un petit problème (trier trois nombres, deviner un nombre mystère), rédige d'abord ta solution en français structuré, étape par étape, et fais-la vérifier par un camarade avant de la traduire en code.",
    fact:"Séparer la réflexion de l'écriture du code évite de mélanger deux difficultés à la fois.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"informatique_1_5", tier:"moyen", emoji:"🐛", label:"Étape 5 — Traque l'erreur cachée",
    text:"Ce court programme contient une seule erreur volontaire. Localise-la en exécutant le code mentalement, ligne par ligne, avant de la corriger.",
    fact:"Déboguer un programme existant est une compétence aussi importante que d'en écrire un nouveau.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"informatique_1_6", tier:"long", emoji:"🔐", label:"Étape 6 — Teste des mots de passe",
    text:"Avec l'outil pédagogique donné, mesure combien de temps il faudrait pour deviner différents mots de passe (court, prévisible, long et aléatoire). Note tes observations.",
    fact:"Vivre l'attaque, même simulée, rend les règles de bonne pratique bien plus mémorables qu'une simple liste récitée.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"informatique_1_7", tier:"long", emoji:"🎮", label:"Étape 7 — Programme un mini-jeu",
    text:"En binôme, programme un très petit jeu (deviner un nombre, pierre-feuille-ciseaux) en réutilisant exactement les briques vues en classe. Présente-le en deux minutes devant la classe qui le teste en direct.",
    fact:"Réutiliser volontairement les mêmes briques déjà vues te permet de vraiment terminer un programme fonctionnel.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqInformatique1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS=MUSEE_SEQ_INFORMATIQUE_1_COLLEGE_OBJECTS;
window.getSeqInformatique1CollegeObjectsForParcours=getSeqInformatique1CollegeObjectsForParcours;
