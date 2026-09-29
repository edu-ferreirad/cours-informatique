// SALLE OSP MUSIQUE — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_1_ECG_OBJECTS = [
  { id:"musique_1_1", tier:"court", emoji:"👂", label:"Étape 1 — Reconnais un instrument sans le voir",
    text:"Écoute trois extraits sonores (sans regarder d'image) et note pour chacun l'instrument entendu et une émotion qu'il te procure. Vérifie ensuite tes réponses.",
    fact:"S'appuyer uniquement sur l'écoute, sans image, entraîne vraiment l'oreille plutôt que la seule reconnaissance visuelle.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_1_2", tier:"court", emoji:"🎤", label:"Étape 2 — Chante un canon simple",
    text:"Avec ta classe, chante un canon en trois groupes décalés. Concentre-toi sur ta propre voix sans te laisser déstabiliser par les autres groupes qui chantent une partie différente.",
    fact:"Tenir sa partie dans un canon développe l'écoute et l'indépendance vocale, deux bases du travail musical.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_1_3", tier:"court", emoji:"🥁", label:"Étape 3 — Reproduis un rythme frappé",
    text:"Ton enseignant frappe un rythme court dans ses mains ; reproduis-le exactement, puis invente le tien pour qu'un camarade le reproduise à son tour.",
    fact:"Reproduire un rythme avant de le lire sur une partition prépare naturellement à la notation musicale.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_1_4", tier:"moyen", emoji:"🎼", label:"Étape 4 — Déchiffre un rythme écrit",
    text:"Sur une courte partition rythmique simple, déchiffre et frappe le rythme écrit, d'abord seul puis avec la classe.",
    fact:"Passer du son entendu au symbole écrit, puis l'inverse, relie l'oreille et la lecture musicale.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_1_5", tier:"moyen", emoji:"🎹", label:"Étape 5 — Invente un motif répété (ostinato)",
    text:"En petit groupe, invente une courte figure musicale répétée (ostinato) de quatre temps, avec la voix ou un objet sonore, et superpose-la à celle d'un autre groupe.",
    fact:"Superposer des ostinatos différents fait entendre concrètement ce qu'est une polyphonie simple.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_1_6", tier:"long", emoji:"🎶", label:"Étape 6 — Prépare une courte présentation musicale",
    text:"En groupe, assemble ce que tu as créé (canon, rythme, ostinato) en une courte présentation de trente secondes à une minute, avec un début et une fin clairs.",
    fact:"Structurer une présentation musicale, même très courte, avec un début et une fin, est la base de toute performance.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_1_7", tier:"long", emoji:"👏", label:"Étape 7 — Présente-toi et reçois un retour ciblé",
    text:"Présente ta production à la classe. Chaque auditeur note une chose réussie et une piste d'amélioration précise, pas une impression générale.",
    fact:"Recevoir un retour précis après une performance, même courte, est une pratique constante chez les musiciens.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_1_ECG_OBJECTS = MUSEE_MUSIQUE_1_ECG_OBJECTS;
window.getMusique1EcgObjectsForParcours = getMusique1EcgObjectsForParcours;
