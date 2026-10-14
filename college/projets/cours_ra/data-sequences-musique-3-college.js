// SALLE SÉQUENCES — MUSIQUE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS = [
  { id:"musique_3_1", tier:"court", emoji:"🎻", label:"Étape 1 — Improvise sur une contrainte (OS)",
    text:"Sur ton instrument ou avec ta voix, improvise huit temps en respectant une seule contrainte donnée, puis recommence en changeant la contrainte.",
    fact:"Improviser sur une contrainte simple aide à démarrer sans peur de la page blanche.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_3_2", tier:"court", emoji:"🎼", label:"Étape 2 — Écris une courte mélodie (OS)",
    text:"Compose une mélodie de quatre mesures sur un rythme donné, puis fais-la jouer par un camarade.",
    fact:"Faire jouer sa mélodie révèle immédiatement si l'écriture était vraiment claire.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_3_3", tier:"court", emoji:"🌍", label:"Étape 3 — Compare deux traditions musicales (OS)",
    text:"Écoute un extrait occidental et un extrait d'une autre tradition sur un thème proche et note deux différences de structure.",
    fact:"Comparer deux traditions élargit ce qu'on considère comme normal en musique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_3_4", tier:"moyen", emoji:"🎹", label:"Étape 4 — Développe ton improvisation (OS)",
    text:"Reprends ton improvisation de l'étape 1 et développe-la sur seize temps en gardant une cohérence avec ton idée de départ.",
    fact:"Développer une idée musicale dans la durée est plus exigeant que la trouver une première fois.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_3_5", tier:"moyen", emoji:"🎧", label:"Étape 5 — Analyse une œuvre en détail (OS)",
    text:"Écoute une œuvre trois fois avec trois angles différents (mélodie, rythme, structure) et rédige un commentaire structuré.",
    fact:"Analyser sous plusieurs angles donne une compréhension plus complète qu'une seule écoute.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_3_6", tier:"long", emoji:"🎭", label:"Étape 6 — Prépare ton projet musical final (OS)",
    text:"En petit groupe, prépare une production originale combinant improvisation, écriture, et éventuellement une inspiration d'une autre tradition.",
    fact:"Combiner plusieurs compétences dans un seul projet est l'aboutissement d'une année d'option.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton projet et explique tes choix (OS)",
    text:"Présente ta production finale à la classe et explique un choix artistique précis que tu as fait, et pourquoi.",
    fact:"Expliquer un choix artistique précis montre une vraie réflexion musicale.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMusique3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS=MUSEE_SEQ_MUSIQUE_3_COLLEGE_OBJECTS;
window.getSeqMusique3CollegeObjectsForParcours=getSeqMusique3CollegeObjectsForParcours;
