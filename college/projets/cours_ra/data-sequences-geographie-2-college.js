// SALLE SÉQUENCES — GÉOGRAPHIE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS = [
  { id:"geographie_2_1", tier:"court", emoji:"🗺️", label:"Étape 1 — Observe une même carte à trois échelles",
    text:"À partir d'un même territoire (une ville), observe une carte à l'échelle du quartier, de la ville puis de la région, et note ce que chaque échelle révèle ou cache.",
    fact:"Le changement d'échelle est l'un des concepts fondamentaux de l'analyse géographique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"geographie_2_2", tier:"court", emoji:"📊", label:"Étape 2 — Décortique un document complexe",
    text:"Face à un document mêlant carte, statistiques et texte sur un même territoire, identifie ce que chaque type de document apporte spécifiquement.",
    fact:"Comprendre des documents de diverses natures est un objectif explicite du programme.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"geographie_2_3", tier:"court", emoji:"🌍", label:"Étape 3 — Localise un phénomène géographique",
    text:"Sur un planisphère, localise un phénomène géographique donné (séisme, courant marin) et formule une hypothèse sur sa répartition.",
    fact:"Formuler une hypothèse avant l'explication scientifique développe ton raisonnement géographique.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"geographie_2_4", tier:"moyen", emoji:"🏗️", label:"Étape 4 — Débats d'un projet d'aménagement",
    text:"Incarne un acteur différent (habitant, entreprise, collectivité) face à un projet d'aménagement fictif et débats-en avec tes camarades selon ton rôle.",
    fact:"Chaque territoire a des enjeux multiples selon les intérêts en présence : ce débat le rend concret.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"geographie_2_5", tier:"moyen", emoji:"➡️", label:"Étape 5 — Cartographie un flux",
    text:"Construis une carte simplifiée représentant un flux économique ou migratoire à partir de données chiffrées données.",
    fact:"Flux et polarisation sont des concepts fondamentaux pour analyser les phénomènes géographiques contemporains.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"geographie_2_6", tier:"long", emoji:"📈", label:"Étape 6 — Analyse une donnée géographique réelle",
    text:"Choisis une donnée géographique réelle (population, climat) et construis un graphique qui la représente, avant d'en tirer une conclusion.",
    fact:"Produire ses propres représentations graphiques ancre mieux les données qu'une lecture passive.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"geographie_2_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ton analyse territoriale",
    text:"Présente ton graphique de l'étape 6 à la classe en expliquant ce qu'il révèle sur le territoire étudié.",
    fact:"Savoir communiquer une analyse géographique à l'oral est aussi important que de savoir la construire.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGeographie2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS=MUSEE_SEQ_GEOGRAPHIE_2_COLLEGE_OBJECTS;
window.getSeqGeographie2CollegeObjectsForParcours=getSeqGeographie2CollegeObjectsForParcours;
