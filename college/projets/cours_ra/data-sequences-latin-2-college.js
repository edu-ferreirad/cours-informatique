// SALLE SÉQUENCES — LATIN — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS = [
  { id:"latin_2_1", tier:"court", emoji:"🏛️", label:"Étape 1 — Approfondis un dossier de civilisation",
    text:"En groupe, constitue un dossier plus détaillé qu'en 1ère année sur un aspect de la civilisation romaine, à partir de plusieurs documents variés.",
    fact:"Le programme laisse une part de liberté dans le choix et l'approfondissement des sujets de civilisation.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"latin_2_2", tier:"court", emoji:"🔍", label:"Étape 2 — Compare deux traductions",
    text:"Compare deux traductions différentes d'un même court passage latin et identifie les choix d'interprétation qui les distinguent.",
    fact:"Comparer des traductions développe ton sens critique face à un texte traduit.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"latin_2_3", tier:"court", emoji:"📖", label:"Étape 3 — Traduis un texte narratif court",
    text:"Traduis un texte latin narratif court en identifiant d'abord les verbes conjugués qui structurent le récit.",
    fact:"Repérer les verbes en premier t'aide à comprendre l'enchaînement des actions avant les détails.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"latin_2_4", tier:"moyen", emoji:"✍️", label:"Étape 4 — Exerce-toi au thème",
    text:"Traduis une phrase française simple en latin (exercice de thème), puis compare les structures des deux langues.",
    fact:"Le thème t'aide à mieux comprendre le fonctionnement du français lui-même, pas seulement du latin.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"latin_2_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Présente ton dossier de civilisation",
    text:"Présente ton dossier de civilisation à la classe en trois minutes, avec un document à l'appui de ton propos.",
    fact:"Synthétiser un travail de groupe pour le présenter développe ta capacité à trier l'essentiel.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"latin_2_6", tier:"long", emoji:"📚", label:"Étape 6 — Lis une œuvre en traduction",
    text:"Lis un court passage d'une œuvre latine en traduction française et identifie un thème qui te semble encore actuel aujourd'hui.",
    fact:"Trouver un écho actuel dans un texte ancien montre que le latin n'est pas juste une langue morte.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"latin_2_7", tier:"long", emoji:"🔗", label:"Étape 7 — Relie latin et langues vivantes",
    text:"Trouve trois mots dans une langue vivante que tu étudies (allemand, anglais) qui ont une racine latine commune avec le français.",
    fact:"Ce lien entre plusieurs langues montre l'utilité du latin bien au-delà du seul cours de latin.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqLatin2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS=MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS;
window.getSeqLatin2CollegeObjectsForParcours=getSeqLatin2CollegeObjectsForParcours;
