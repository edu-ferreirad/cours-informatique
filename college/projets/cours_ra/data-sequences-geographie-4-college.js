// SALLE SÉQUENCES — GÉOGRAPHIE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS = [
  { id:"geographie_4_1", tier:"court", emoji:"💧", label:"Étape 1 — Calcule ta consommation d'eau",
    text:"Estime ta consommation d'eau d'une journée, compare-la avec celle de pays à disponibilité différente et cherche des pistes d'économie.",
    fact:"Partir de sa propre consommation rend un sujet abstrait immédiatement concret.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"geographie_4_2", tier:"court", emoji:"🔌", label:"Étape 2 — Classe des sources d'énergie",
    text:"Classe des sources d'énergie (renouvelables, non renouvelables) en justifiant ton classement, puis note un avantage et un inconvénient de chacune.",
    fact:"Classer avec justification fait comprendre les enjeux énergétiques mieux qu'une liste apprise par cœur.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"geographie_4_3", tier:"court", emoji:"🛰️", label:"Étape 3 — Compare deux images satellites d'époques différentes",
    text:"À l'aide d'images satellites d'époques différentes d'un même lieu, relève les changements observables et cherche leurs causes probables.",
    fact:"L'imagerie satellitaire est un outil réel et actuel de la géographie contemporaine.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"geographie_4_4", tier:"moyen", emoji:"🌍", label:"Étape 4 — Analyse un problème planétaire à plusieurs échelles",
    text:"Sur un enjeu environnemental global, analyse ses manifestations à l'échelle locale, nationale et mondiale.",
    fact:"Le programme met l'accent sur la sensibilisation aux grands problèmes à des échelles différentes.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"geographie_4_5", tier:"moyen", emoji:"🏫", label:"Étape 5 — Fais le bilan énergétique de ton école",
    text:"Relève les usages de l'énergie de ton école, calcule un ordre de grandeur, et propose trois mesures d'amélioration.",
    fact:"Une enquête locale donne un enjeu réel à des notions autrement abstraites.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"geographie_4_6", tier:"long", emoji:"📢", label:"Étape 6 — Conçois une campagne de sensibilisation",
    text:"Conçois une affiche ou un court message pour sensibiliser tes camarades à un enjeu environnemental, avec un chiffre réel vérifié à l'appui.",
    fact:"Un message de sensibilisation efficace s'appuie toujours sur un vrai chiffre vérifié, jamais sur une impression.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"geographie_4_7", tier:"long", emoji:"🗣️", label:"Étape 7 — Présente ta campagne et défends ton message",
    text:"Présente ta campagne de l'étape 6 à la classe et réponds à une question critique sur la faisabilité de ta proposition.",
    fact:"Défendre son message face à une question critique renforce sa crédibilité et ta réflexion.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqGeographie4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS=MUSEE_SEQ_GEOGRAPHIE_4_COLLEGE_OBJECTS;
window.getSeqGeographie4CollegeObjectsForParcours=getSeqGeographie4CollegeObjectsForParcours;
