// SALLE OSP MUSIQUE — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_MUSIQUE_3_ECG_OBJECTS = [
  { id:"musique_3_1", tier:"court", emoji:"🎻", label:"Étape 1 — Improvise sur une contrainte simple",
    text:"Sur ton instrument ou avec ta voix, improvise huit temps en respectant une seule contrainte donnée (une gamme, trois notes imposées). Recommence trois fois en changeant la contrainte.",
    fact:"Improviser sur une contrainte simple, plutôt que sans limite, aide à démarrer sans peur de la page blanche.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_3_2", tier:"court", emoji:"🎼", label:"Étape 2 — Écris une courte mélodie",
    text:"Compose une mélodie de quatre mesures sur un rythme donné, en utilisant les bases d'écriture vues en classe, puis fais-la jouer ou chanter par un camarade.",
    fact:"Faire jouer sa mélodie par quelqu'un d'autre révèle immédiatement si l'écriture était vraiment claire.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_3_3", tier:"court", emoji:"🌍", label:"Étape 3 — Compare deux traditions musicales",
    text:"Écoute un extrait occidental et un extrait d'une autre tradition musicale du monde sur un thème proche (une fête, un deuil) et note deux différences de structure ou de gamme.",
    fact:"Comparer deux traditions musicales élargit ce qu'on considère comme « normal » en musique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_3_4", tier:"moyen", emoji:"🎹", label:"Étape 4 — Approfondis ton improvisation",
    text:"Reprends l'improvisation de l'étape 1 et développe-la sur seize temps cette fois, en gardant une cohérence avec ton idée de départ.",
    fact:"Développer une idée musicale dans la durée est plus exigeant que la trouver une première fois.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_3_5", tier:"moyen", emoji:"🎧", label:"Étape 5 — Analyse une œuvre en détail",
    text:"Écoute une œuvre étudiée en classe trois fois avec trois angles différents (mélodie, rythme, structure d'ensemble) et rédige un court commentaire structuré.",
    fact:"Analyser une œuvre sous plusieurs angles successifs donne une compréhension plus complète qu'une seule écoute globale.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_3_6", tier:"long", emoji:"🎭", label:"Étape 6 — Prépare ton projet musical final",
    text:"En petit groupe, prépare une courte production originale (interprétation ou composition) en combinant ce que tu as travaillé : improvisation, écriture, éventuellement une inspiration d'une autre tradition musicale.",
    fact:"Combiner plusieurs compétences travaillées séparément dans un seul projet est l'aboutissement logique d'une année d'option.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton projet et explique tes choix",
    text:"Présente ta production finale à la classe et explique en deux phrases un choix artistique précis que tu as fait et pourquoi.",
    fact:"Expliquer un choix artistique précis, plutôt que de dire « ça sonnait bien », montre une vraie réflexion musicale.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getMusique3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_MUSIQUE_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_MUSIQUE_3_ECG_OBJECTS = MUSEE_MUSIQUE_3_ECG_OBJECTS;
window.getMusique3EcgObjectsForParcours = getMusique3EcgObjectsForParcours;
