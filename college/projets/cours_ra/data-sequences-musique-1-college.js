// SALLE SÉQUENCES — MUSIQUE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS = [
  { id:"musique_1_1", tier:"court", emoji:"🎻", label:"Étape 1 — Reconnais un instrument sans le voir",
    text:"Écoute trois extraits sans regarder d'image et note pour chacun l'instrument entendu et une émotion qu'il te procure.",
    fact:"S'appuyer uniquement sur l'écoute entraîne vraiment l'oreille plutôt que la reconnaissance visuelle.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_1_2", tier:"court", emoji:"🎤", label:"Étape 2 — Chante un canon simple",
    text:"Avec ta classe, chante un canon en trois groupes décalés en te concentrant sur ta propre voix sans te laisser déstabiliser.",
    fact:"Tenir sa partie dans un canon développe l'écoute et l'indépendance vocale.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_1_3", tier:"court", emoji:"🥁", label:"Étape 3 — Reproduis un rythme frappé",
    text:"Ton enseignant frappe un rythme court ; reproduis-le exactement, puis invente le tien pour qu'un camarade le reproduise à son tour.",
    fact:"Reproduire un rythme avant de le lire prépare naturellement à la notation musicale.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_1_4", tier:"moyen", emoji:"🎼", label:"Étape 4 — Déchiffre un rythme écrit",
    text:"Sur une courte partition rythmique, déchiffre et frappe le rythme écrit, d'abord seul puis avec la classe.",
    fact:"Passer du son entendu au symbole écrit relie l'oreille et la lecture musicale.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_1_5", tier:"moyen", emoji:"🎹", label:"Étape 5 — Invente un motif répété",
    text:"En petit groupe, invente une courte figure musicale répétée (ostinato) et superpose-la à celle d'un autre groupe.",
    fact:"Superposer des ostinatos différents fait entendre concrètement une polyphonie simple.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_1_6", tier:"long", emoji:"🎶", label:"Étape 6 — Prépare une courte présentation",
    text:"En groupe, assemble ce que tu as créé en une courte présentation d'une minute avec un début et une fin clairs.",
    fact:"Structurer une présentation musicale, même très courte, est la base de toute performance.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_1_7", tier:"long", emoji:"👏", label:"Étape 7 — Présente-toi et reçois un retour ciblé",
    text:"Présente ta production à la classe. Chaque auditeur note une chose réussie et une piste d'amélioration précise.",
    fact:"Recevoir un retour précis après une performance est une pratique constante chez les musiciens.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMusique1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS=MUSEE_SEQ_MUSIQUE_1_COLLEGE_OBJECTS;
window.getSeqMusique1CollegeObjectsForParcours=getSeqMusique1CollegeObjectsForParcours;
