// SALLE SÉQUENCES — ALLEMAND — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS = [
  { id:"allemand_3_1", tier:"court", emoji:"🎧", label:"Étape 1 — Écoute et compare tes réponses",
    text:"Écoute un enregistrement, relève qui, quoi, où, quand, et compare tes réponses avec un camarade avant la deuxième écoute.",
    fact:"La compréhension orale se travaille par écoutes successives avec des objectifs différents à chaque fois.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"allemand_3_2", tier:"court", emoji:"📖", label:"Étape 2 — Utilise des stratégies de lecture",
    text:"Lis un court texte adapté en utilisant des stratégies (mots transparents, contexte) pour répondre à des questions de compréhension.",
    fact:"Ces stratégies rendent un texte apparemment difficile bien plus accessible que tu ne le penses.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"allemand_3_3", tier:"court", emoji:"🚆", label:"Étape 3 — Planifie un voyage",
    text:"À l'aide d'horaires de train fictifs, planifie un voyage en Suisse alémanique et présente ton itinéraire à la classe.",
    fact:"Une tâche authentique comme planifier un voyage mobilise heures, lieux et politesse ensemble.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"allemand_3_4", tier:"moyen", emoji:"🎨", label:"Étape 4 — Interviewe et présente un camarade",
    text:"Interviewe un camarade sur ses loisirs, puis présente-le en trois phrases à la classe en utilisant le discours rapporté.",
    fact:"Passer de l'interview à la présentation t'entraîne au discours rapporté de façon naturelle.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"allemand_3_5", tier:"moyen", emoji:"🎤", label:"Étape 5 — Présente un sujet en deux minutes",
    text:"Présente un sujet de ton choix pendant deux minutes avec un support visuel, puis réponds à une question de la classe.",
    fact:"Cette présentation te prépare directement aux épreuves orales de fin de cycle.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"allemand_3_6", tier:"long", emoji:"📞", label:"Étape 6 — Joue un appel téléphonique",
    text:"Avec un camarade, joue un appel téléphonique (réservation, renseignement) avec des cartes de rôle et une part d'improvisation.",
    fact:"Sans support visuel, le téléphone t'oblige à vraiment comprendre à l'oreille, sans aide du contexte visuel.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"allemand_3_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Explique un texte littéraire court",
    text:"Face à un court extrait littéraire, explique-le à l'oral en trois minutes en citant un passage précis qui illustre ton propos.",
    fact:"Expliquer un texte littéraire à l'oral est un objectif propre à cette année du programme.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAllemand3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS=MUSEE_SEQ_ALLEMAND_3_COLLEGE_OBJECTS;
window.getSeqAllemand3CollegeObjectsForParcours=getSeqAllemand3CollegeObjectsForParcours;
