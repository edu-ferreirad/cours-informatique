// SALLE SÉQUENCES — HISTOIRE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS = [
  { id:"histoire_4_1", tier:"court", emoji:"🎙️", label:"Étape 1 — Compare mémoire et histoire",
    text:"Confronte un témoignage oral ou écrit d'un événement du XXe siècle à un travail d'historien sur ce même événement. Note où et pourquoi les deux récits divergent.",
    fact:"Cette confrontation touche un enjeu central de l'histoire du temps présent, en fin de cursus.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"histoire_4_2", tier:"court", emoji:"🗂️", label:"Étape 2 — Constitue ton dossier de recherche",
    text:"Sur un sujet contemporain de ton choix, constitue seul un dossier d'une dizaine de sources, en distinguant fiables et douteuses, avant une courte présentation orale de tes conclusions.",
    fact:"Ce format proche d'un travail de maturité mobilise les méthodes de travail attendues en fin de cursus.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"histoire_4_3", tier:"court", emoji:"🌐", label:"Étape 3 — Débats un enjeu géopolitique actuel",
    text:"À partir de sources contradictoires récentes, débats un enjeu géopolitique contemporain en t'appuyant explicitement sur des racines historiques vues dans tes cours précédents.",
    fact:"Relier le présent au passé étudié pendant quatre ans est l'aboutissement logique de ton parcours en histoire.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"histoire_4_4", tier:"moyen", emoji:"📣", label:"Étape 4 — Décode deux affiches de propagande",
    text:"Compare deux affiches de propagande de guerre avec une grille précise (qui parle, à qui, avec quels moyens) pour comprendre les mécanismes de persuasion utilisés.",
    fact:"Analyser la propagande d'hier aide à repérer les mécanismes de persuasion encore utilisés aujourd'hui.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"histoire_4_5", tier:"moyen", emoji:"🕊️", label:"Étape 5 — Relie Genève aux organisations internationales",
    text:"Construis une carte mentale reliant la Société des Nations, la Croix-Rouge et l'ONU à leurs missions et à leur présence à Genève.",
    fact:"Le lien avec ta ville donne une dimension concrète à un thème souvent perçu comme abstrait et lointain.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"histoire_4_6", tier:"long", emoji:"👵", label:"Étape 6 — Interviewe un témoin du XXe siècle",
    text:"Prépare un guide d'entretien, interroge un proche ou un témoin, puis restitue son témoignage en distinguant clairement souvenir personnel et faits vérifiables.",
    fact:"L'histoire orale montre concrètement comment se construisent, ensemble, mémoire individuelle et histoire collective.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"histoire_4_7", tier:"long", emoji:"🧱", label:"Étape 7 — Débats des causes de la fin de la guerre froide",
    text:"À partir de sources contrastées, prépare avec un groupe un débat sur les causes de la chute du Mur de Berlin, avant une synthèse chronologique collective en classe.",
    fact:"Confronter des explications concurrentes d'un même événement est un objectif central de fin de cursus en histoire.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqHistoire4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS=MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS;
window.getSeqHistoire4CollegeObjectsForParcours=getSeqHistoire4CollegeObjectsForParcours;
