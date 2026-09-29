// SALLE SÉQUENCES — LATIN — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS = [
  { id:"latin_3_1", tier:"court", emoji:"📖", label:"Étape 1 — Analyse un texte dans son contexte",
    text:"Face à un texte d'auteur latin étudié, relie un passage précis à son contexte historique et culturel avant de le commenter à l'oral.",
    fact:"Analyser un texte dans son contexte historique est un objectif explicite de l'option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"latin_3_2", tier:"court", emoji:"✍️", label:"Étape 2 — Exerce-toi au thème avancé",
    text:"Traduis une phrase française plus complexe qu'en 2e année en latin, puis compare les structures des deux langues.",
    fact:"L'exercice du thème, plus exigeant, aide à mieux maîtriser le fonctionnement de ta propre langue.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"latin_3_3", tier:"court", emoji:"🔍", label:"Étape 3 — Repère un genre littéraire latin",
    text:"Face à un extrait latin, identifie à quel genre littéraire il appartient (épopée, satire, lettre) à partir d'indices formels précis.",
    fact:"Reconnaître les genres littéraires latins enrichit ta compréhension de la diversité de cette littérature.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"latin_3_4", tier:"moyen", emoji:"📜", label:"Étape 4 — Traduis un texte plus exigeant",
    text:"Traduis un texte latin plus difficile qu'en discipline fondamentale, en mobilisant méthodiquement la méthode pas à pas déjà vue.",
    fact:"Les textes abordés en option spécifique sont plus exigeants et plus denses qu'en discipline fondamentale.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"latin_3_5", tier:"moyen", emoji:"🏛️", label:"Étape 5 — Approfondis la civilisation romaine",
    text:"Choisis un aspect approfondi de la civilisation romaine (droit, religion, politique) et prépare une courte présentation avec plusieurs sources.",
    fact:"Approfondir un sujet de civilisation, plutôt que de le survoler, est attendu en option spécifique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"latin_3_6", tier:"long", emoji:"🔎", label:"Étape 6 — Étudie un texte d'auteur en autonomie",
    text:"Choisis un court texte d'un auteur latin étudié, prépare-le seul (traduction, analyse), en vue de le présenter à la classe.",
    fact:"Étudier seul un texte d'auteur est un objectif spécifique de cette étape du cursus.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"latin_3_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton texte d'auteur",
    text:"Présente le texte préparé à l'étape 6 à la classe, qui pose ensuite des questions sur le contexte et le style.",
    fact:"Répondre aux questions de la classe après ta présentation vérifie que tu maîtrises vraiment ton texte.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqLatin3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS=MUSEE_SEQ_LATIN_3_COLLEGE_OBJECTS;
window.getSeqLatin3CollegeObjectsForParcours=getSeqLatin3CollegeObjectsForParcours;
