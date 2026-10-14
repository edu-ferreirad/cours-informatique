// SALLE SÉQUENCES — ARTS VISUELS — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS = [
  { id:"arts_visuels_3_1", tier:"court", emoji:"🔍", label:"Étape 1 — Compare une œuvre ancienne et contemporaine (OS)",
    text:"Choisis une œuvre classique et une œuvre contemporaine traitant d'un sujet proche, et note ce que la contemporaine remet en question.",
    fact:"Confronter deux époques révèle ce qui a changé dans le regard de l'artiste.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_visuels_3_2", tier:"court", emoji:"🎨", label:"Étape 2 — Reproduis une palette de couleurs (OS)",
    text:"Prélève cinq couleurs dans une œuvre donnée et reproduis-les en mélangeant toi-même la peinture, en notant les proportions.",
    fact:"Reproduire une palette exige de vraiment observer les nuances.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_visuels_3_3", tier:"court", emoji:"📐", label:"Étape 3 — Repère une règle de composition (OS)",
    text:"Trace sur une reproduction d'œuvre les lignes de force de sa composition et explique comment elles guident le regard.",
    fact:"Une composition efficace guide l'œil du spectateur presque sans qu'il s'en rende compte.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_visuels_3_4", tier:"moyen", emoji:"🖌️", label:"Étape 4 — Avance sur ton projet personnel (OS)",
    text:"Fixe-toi un objectif précis pour ta séance sur ton projet personnel : une seule chose à améliorer ou à terminer.",
    fact:"Se fixer un objectif précis par séance fait vraiment progresser un projet artistique long.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_visuels_3_5", tier:"moyen", emoji:"🗨️", label:"Étape 5 — Reçois une critique précise (OS)",
    text:"Présente ton projet en cours à un camarade qui doit dire une chose qui fonctionne et une chose à améliorer, avec un exemple précis.",
    fact:"Recevoir une critique précise, pas juste « c'est joli », permet vraiment d'améliorer un travail.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_visuels_3_6", tier:"long", emoji:"🏛️", label:"Étape 6 — Visite activement un lieu d'exposition (OS)",
    text:"Lors d'une visite, remplis une grille d'observation sur trois œuvres : ce qu'elles montrent, comment, et ce que tu en retiens.",
    fact:"Une visite active, avec une grille précise, fait retenir bien plus qu'une visite libre.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_visuels_3_7", tier:"long", emoji:"🎓", label:"Étape 7 — Finalise et présente ton parcours (OS)",
    text:"Finalise ton projet personnel et présente-le en expliquant la cohérence entre ton intention de départ et le résultat final.",
    fact:"Expliquer un changement d'avis en cours de projet montre une vraie réflexion artistique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqArtsVisuels3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS=MUSEE_SEQ_ARTS_VISUELS_3_COLLEGE_OBJECTS;
window.getSeqArtsVisuels3CollegeObjectsForParcours=getSeqArtsVisuels3CollegeObjectsForParcours;
