// SALLE SÉQUENCES — MUSIQUE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS = [
  { id:"musique_4_1", tier:"court", emoji:"🎓", label:"Étape 1 — Prépare ton oral blanc de maturité (OS)",
    text:"Prépare la présentation orale d'une œuvre ou d'un concept musical du programme, en temps limité, sans notes.",
    fact:"S'entraîner en conditions réelles réduit l'écart avec la pression du jour de l'examen.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"musique_4_2", tier:"court", emoji:"🎼", label:"Étape 2 — Finalise une composition plus longue (OS)",
    text:"Reprends une mélodie composée précédemment et développe-la sur huit mesures, avec une structure claire (début, développement, fin).",
    fact:"Développer une composition sur une structure plus longue est un objectif de fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"musique_4_3", tier:"court", emoji:"🌍", label:"Étape 3 — Approfondis une tradition musicale (OS)",
    text:"Choisis une tradition musicale du monde et prépare une courte présentation de ses caractéristiques principales.",
    fact:"Approfondir une tradition musicale enrichit ta culture musicale au-delà du seul répertoire occidental.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"musique_4_4", tier:"moyen", emoji:"🎭", label:"Étape 4 — Finalise ton projet musical de l'année (OS)",
    text:"Finalise, en groupe, ta production musicale de fin d'année en intégrant les retours reçus lors des répétitions précédentes.",
    fact:"Intégrer des retours reçus, plutôt que de les ignorer, est ce qui fait progresser un projet musical.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"musique_4_5", tier:"moyen", emoji:"🎧", label:"Étape 5 — Analyse une œuvre complexe (OS)",
    text:"Écoute une œuvre plus complexe qu'auparavant et analyse-la sous plusieurs angles (structure, harmonie, contexte historique).",
    fact:"Analyser des œuvres de plus en plus complexes est un objectif progressif du programme.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"musique_4_6", tier:"long", emoji:"🎤", label:"Étape 6 — Présente ton projet musical final (OS)",
    text:"Présente ta production finale à la classe, en expliquant le cheminement complet de ton projet depuis son idée de départ.",
    fact:"Ce projet final mobilise l'ensemble des compétences développées en option spécifique sur les quatre années.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"musique_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Fais le bilan de ton parcours musical",
    text:"Rédige un court bilan de ton parcours musical au Collège, en identifiant ce que tu as le plus progressé.",
    fact:"Ce bilan personnel clôt ton parcours en musique, que tu continues ensuite ou non.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMusique4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS=MUSEE_SEQ_MUSIQUE_4_COLLEGE_OBJECTS;
window.getSeqMusique4CollegeObjectsForParcours=getSeqMusique4CollegeObjectsForParcours;
