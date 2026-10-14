// SALLE SÉQUENCES — BIOLOGIE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS = [
  { id:"biologie_2_1", tier:"court", emoji:"🧫", label:"Étape 1 — Modélise une cellule et liste ses limites",
    text:"Construis une maquette simplifiée de cellule et liste explicitement ce qu'elle représente fidèlement et ce qu'elle simplifie à l'excès.",
    fact:"Un regard critique sur son propre modèle est ce qui distingue un bon scientifique d'un simple exécutant.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"biologie_2_2", tier:"court", emoji:"📝", label:"Étape 2 — Rédige un rapport d'expérience complet",
    text:"Après une manipulation en laboratoire, rédige seul un rapport complet suivant la structure imposée, puis échange-le avec un camarade pour une relecture critique.",
    fact:"C'est la dernière compétence commune de biologie que tous les élèves emportent, avant que la discipline ne devienne optionnelle.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"biologie_2_3", tier:"court", emoji:"🎯", label:"Étape 3 — Prépare ton choix d'option",
    text:"Prépare trois questions à poser à des élèves de 3e-4e déjà dans l'option biologie-chimie, lors d'une rencontre d'orientation organisée en classe.",
    fact:"Comme la biologie s'arrête en discipline fondamentale après cette année, bien choisir maintenant évite les regrets plus tard.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"biologie_2_4", tier:"moyen", emoji:"🔬", label:"Étape 4 — Conçois un protocole complet",
    text:"Face à une observation donnée, formule une hypothèse et conçois un protocole expérimental complet, en anticipant les résultats possibles avant de manipuler.",
    fact:"Anticiper les résultats possibles avant de manipuler t'entraîne à vraiment réfléchir avant d'agir, pas seulement après.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"biologie_2_5", tier:"moyen", emoji:"📰", label:"Étape 5 — Compare deux articles sur un même sujet",
    text:"Compare deux articles de vulgarisation sur le même sujet biologique et note une différence dans la façon dont ils présentent l'incertitude scientifique.",
    fact:"Deux articles sur le même sujet ne présentent jamais l'incertitude scientifique exactement de la même façon.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"biologie_2_6", tier:"long", emoji:"🌱", label:"Étape 6 — Mène une expérience de deux semaines",
    text:"Formule une hypothèse, suis une expérience sur deux semaines avec des relevés réguliers, puis conclus par écrit en expliquant si ton hypothèse était vérifiée ou non.",
    fact:"Une expérience suivie dans la durée t'apprend à gérer un protocole sur plusieurs séances, pas une seule.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"biologie_2_7", tier:"long", emoji:"🧬", label:"Étape 7 — Prépare ta transition vers l'option (ou vers autre chose)",
    text:"Rédige un court bilan personnel : ce que tu retiens de deux ans de biologie en discipline fondamentale, et si tu choisis ou non l'option biologie-chimie pour la suite, avec une raison précise.",
    fact:"Ce bilan personnel clôt ta discipline fondamentale de biologie, que tu continues ensuite en option ou non.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqBiologie2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS=MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS;
window.getSeqBiologie2CollegeObjectsForParcours=getSeqBiologie2CollegeObjectsForParcours;
