// SALLE SÉQUENCES — ALLEMAND — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS = [
  { id:"allemand_1_1", tier:"court", emoji:"👋", label:"Étape 1 — Présente-toi et enquête",
    text:"Présente-toi en allemand (Ich heiße…, Ich komme aus…), puis interroge trois camarades pour compléter une fiche d'identité avec leurs réponses.",
    fact:"Un jeu d'enquête te donne un vrai besoin de parler, plus motivant qu'un dialogue mémorisé sans but.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"allemand_1_2", tier:"court", emoji:"🔢", label:"Étape 2 — Joue au bingo des nombres et de l'heure",
    text:"Joue au bingo avec des nombres puis des heures annoncées en allemand. Coche ta grille dès que tu entends le bon nombre ou la bonne heure.",
    fact:"Répéter en jouant fixe durablement les nombres, bien plus qu'une liste récitée seule.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"allemand_1_3", tier:"court", emoji:"🎭", label:"Étape 3 — Joue une scène de la vie courante",
    text:"Avec un camarade, joue une scène courte (acheter, demander son chemin) en tirant au sort une contrainte de ton (politesse excessive, urgence).",
    fact:"Changer le ton, sans changer le vocabulaire, t'oblige à sortir du dialogue appris par cœur.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"allemand_1_4", tier:"moyen", emoji:"👨‍👩‍👧", label:"Étape 4 — Présente ta famille",
    text:"Présente une famille, réelle ou inventée, à l'aide d'un arbre généalogique dessiné et de phrases simples en allemand.",
    fact:"Un support visuel t'aide à structurer ton expression orale quand tu débutes dans une langue.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"allemand_1_5", tier:"moyen", emoji:"🎧", label:"Étape 5 — Repère l'essentiel d'un document sonore",
    text:"Après une seule écoute, note uniquement l'essentiel d'un court reportage (qui, quoi, où), puis compare avec un camarade avant une deuxième écoute.",
    fact:"Trier l'essentiel sans tout transcrire est une vraie compétence de compréhension orale.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"allemand_1_6", tier:"long", emoji:"🕗", label:"Étape 6 — Décris ta journée type",
    text:"Décris ta journée avec des heures précises et des verbes simples, à l'écrit puis à l'oral devant un camarade.",
    fact:"Décrire sa routine réinvestit naturellement heures et verbes vus en classe.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"allemand_1_7", tier:"long", emoji:"🏙️", label:"Étape 7 — Prépare une mini-présentation sur une ville",
    text:"En groupe, choisis une ville de Suisse alémanique et prépare une courte présentation (sites, transports) avec une affiche simple.",
    fact:"Ce petit projet t'ouvre à la culture de la Suisse plurilingue au-delà des seuls mots de vocabulaire.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAllemand1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS=MUSEE_SEQ_ALLEMAND_1_COLLEGE_OBJECTS;
window.getSeqAllemand1CollegeObjectsForParcours=getSeqAllemand1CollegeObjectsForParcours;
