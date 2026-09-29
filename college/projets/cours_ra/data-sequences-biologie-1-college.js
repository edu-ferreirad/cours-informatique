// SALLE SÉQUENCES — BIOLOGIE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS = [
  { id:"biologie_1_1", tier:"court", emoji:"🧩", label:"Étape 1 — Invente ta propre classification",
    text:"Avant de découvrir la classification scientifique officielle, tu reçois dix organismes en images. Invente tes propres critères de classement en petit groupe, puis compare ton système à la classification réelle.",
    fact:"Construire d'abord ton propre système te fait comprendre pourquoi la classification scientifique a été construite ainsi, et pas autrement.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"biologie_1_2", tier:"court", emoji:"🔬", label:"Étape 2 — Conçois un protocole avant de manipuler",
    text:"Face à une observation simple (des graines qui germent différemment), formule une hypothèse et conçois un protocole expérimental complet sur papier. Fais-le vérifier par ton enseignant avant toute manipulation réelle.",
    fact:"Concevoir le protocole avant de le réaliser développe ta capacité à formuler et tester une hypothèse, pas seulement à suivre une fiche.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"biologie_1_3", tier:"court", emoji:"📰", label:"Étape 3 — Décortique un article scientifique",
    text:"Lis un court article de vulgarisation sur un sujet biologique d'actualité. Sur une fiche, note le fait observé, l'explication proposée, et les limites ou incertitudes mentionnées par l'auteur.",
    fact:"Cette lecture développe une compétence spécifique : comprendre un texte scientifique, différente de la lecture littéraire.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"biologie_1_4", tier:"moyen", emoji:"🧫", label:"Étape 4 — Modélise une cellule et liste ses limites",
    text:"Construis une maquette simplifiée de cellule (pâte à modeler, matériaux de récupération). Liste ensuite explicitement ce que ta maquette représente fidèlement et ce qu'elle simplifie à l'excès.",
    fact:"Lister les limites de son propre modèle développe un regard critique sur les modèles scientifiques en général.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"biologie_1_5", tier:"moyen", emoji:"📝", label:"Étape 5 — Rédige un rapport d'expérience complet",
    text:"Après une manipulation en laboratoire, rédige seul un rapport complet (hypothèse, matériel, résultats, interprétation) suivant la structure imposée, puis échange-le avec un camarade pour relecture croisée.",
    fact:"Savoir rédiger un rapport d'expérience est une compétence transversale que tu retrouveras dans toutes les sciences.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"biologie_1_6", tier:"long", emoji:"🎯", label:"Étape 6 — Prépare ton choix d'option",
    text:"Si tu hésites à choisir l'option biologie-chimie, prépare trois questions à poser à des élèves de 3e-4e déjà dans cette option lors d'une rencontre d'orientation.",
    fact:"La biologie s'arrête en discipline fondamentale après la 2e année : bien choisir en connaissance de cause évite les regrets.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"biologie_1_7", tier:"long", emoji:"🌱", label:"Étape 7 — Mène une expérience de deux semaines",
    text:"Formule une hypothèse sur l'effet de la lumière ou de l'eau sur la germination de graines, suis ton expérience sur deux semaines avec des relevés réguliers, puis conclus par écrit.",
    fact:"Suivre une expérience dans la durée, avec de vrais relevés, est très différent d'une expérience faite en une seule séance.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqBiologie1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS=MUSEE_SEQ_BIOLOGIE_1_COLLEGE_OBJECTS;
window.getSeqBiologie1CollegeObjectsForParcours=getSeqBiologie1CollegeObjectsForParcours;
