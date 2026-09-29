// SALLE SÉQUENCES — HISTOIRE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS = [
  { id:"histoire_3_1", tier:"court", emoji:"👥", label:"Étape 1 — Incarne un acteur social d'une révolution",
    text:"Choisis un acteur social du XIXe siècle (ouvrier, bourgeois, femme sans droit de vote) face à un événement révolutionnaire donné. Rédige un court témoignage fictif mais plausible, confronté à ceux des autres élèves.",
    fact:"Multiplier les points de vue sur un même événement met en pratique la pluralité des interprétations historiques.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"histoire_3_2", tier:"court", emoji:"📊", label:"Étape 2 — Formule deux hypothèses à partir de statistiques",
    text:"À partir d'un tableau réel de données du XIXe siècle, formule deux hypothèses explicatives différentes pour la même évolution chiffrée, puis évalue laquelle est la mieux soutenue par les documents.",
    fact:"Travailler sur des chiffres t'habitue à traiter l'histoire comme une science qui croise plusieurs types de sources.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"histoire_3_3", tier:"court", emoji:"🗺️", label:"Étape 3 — Croise deux cartes",
    text:"Superpose une carte des ressources naturelles à une carte des foyers industriels de la même époque et explique les corrélations visibles.",
    fact:"Croiser plusieurs cartes fait apparaître des liens que chaque carte, prise séparément, ne montre pas.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"histoire_3_4", tier:"moyen", emoji:"🎙️", label:"Étape 4 — Confronte témoignage et travail d'historien",
    text:"Compare un témoignage oral ou écrit d'un événement à un travail d'historien sur ce même événement. Identifie précisément où et pourquoi les deux récits divergent.",
    fact:"Confronter mémoire vécue et travail scientifique est un enjeu central de l'histoire du temps présent.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"histoire_3_5", tier:"moyen", emoji:"🗂️", label:"Étape 5 — Constitue un dossier de recherche autonome",
    text:"Sur un sujet de ton choix lié au programme, constitue seul un dossier documentaire d'une dizaine de sources en distinguant sources fiables et sources douteuses.",
    fact:"Distinguer les sources fiables des sources douteuses est une compétence de recherche qui te servira bien au-delà du cours d'histoire.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"histoire_3_6", tier:"long", emoji:"📣", label:"Étape 6 — Analyse une affiche de propagande",
    text:"Face à une affiche de propagande, réponds précisément : qui parle, à qui, avec quels moyens visuels, pour obtenir quoi ?",
    fact:"Analyser la propagande développe un esprit critique directement utile face aux images que tu vois aujourd'hui.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"histoire_3_7", tier:"long", emoji:"🌐", label:"Étape 7 — Débats d'un enjeu géopolitique actuel",
    text:"À partir de sources d'actualité contradictoires, débats d'un enjeu géopolitique contemporain en t'appuyant explicitement sur des racines historiques identifiées dans les cours précédents.",
    fact:"Relier le passé étudié au présent est la meilleure façon de montrer que l'histoire sert vraiment à comprendre aujourd'hui.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqHistoire3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS=MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS;
window.getSeqHistoire3CollegeObjectsForParcours=getSeqHistoire3CollegeObjectsForParcours;
