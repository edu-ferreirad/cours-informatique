// SALLE SÉQUENCES — PHYSIQUE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS = [
  { id:"physique_2_1", tier:"court", emoji:"📊", label:"Étape 1 — Refais la même mesure cinq fois",
    text:"Refais cinq fois la même mesure simple (longueur, temps de chute) et calcule l'écart entre les résultats obtenus.",
    fact:"Une seule mesure ne suffit jamais en physique : l'incertitude fait partie intégrante du résultat.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"physique_2_2", tier:"court", emoji:"📈", label:"Étape 2 — Reconstruis l'expérience à partir du graphique seul",
    text:"Face à un graphique de résultats sans légende ni texte, reconstruis seul l'expérience probable qui a produit ces données.",
    fact:"Partir du graphique seul muscle ta lecture, plutôt que de seulement produire des courbes.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"physique_2_3", tier:"court", emoji:"🔬", label:"Étape 3 — Compare deux protocoles pour la même mesure",
    text:"Propose deux façons différentes de mesurer une même grandeur (par exemple une longueur) et compare leur précision respective.",
    fact:"Comparer deux protocoles développe ton sens critique sur la fiabilité d'une mesure.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"physique_2_4", tier:"moyen", emoji:"🧮", label:"Étape 4 — Calcule une incertitude simple",
    text:"Reprends une mesure faite en classe et calcule l'incertitude associée selon la méthode vue en cours.",
    fact:"Estimer la précision et l'incertitude d'une mesure est un objectif explicite de cette année.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"physique_2_5", tier:"moyen", emoji:"⚗️", label:"Étape 5 — Relie un phénomène physique à la chimie",
    text:"En lien avec le cours de chimie, explique un même phénomène (la dissolution, la dilatation) du point de vue physique et du point de vue chimique.",
    fact:"Physique et chimie s'éclairent mutuellement sur beaucoup de phénomènes du quotidien.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"physique_2_6", tier:"long", emoji:"🧪", label:"Étape 6 — Mène une expérience avec calcul d'incertitude",
    text:"Mène une expérience complète en calculant l'incertitude de chaque mesure, jusqu'à estimer son impact sur le résultat final.",
    fact:"Ce travail complet prépare directement aux exigences de l'option spécifique en physique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"physique_2_7", tier:"long", emoji:"📝", label:"Étape 7 — Présente ton expérience et ses limites",
    text:"Présente ton expérience de l'étape 6 à la classe en identifiant toi-même une limite de ton protocole.",
    fact:"Identifier soi-même une limite de son travail est une marque de rigueur scientifique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhysique2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS=MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS;
window.getSeqPhysique2CollegeObjectsForParcours=getSeqPhysique2CollegeObjectsForParcours;
