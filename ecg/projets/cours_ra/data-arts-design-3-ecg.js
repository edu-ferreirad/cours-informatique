// SALLE OSP ARTS ET DESIGN — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_3_ECG_OBJECTS = [
  { id:"arts_design_3_1", tier:"court", emoji:"🔍", label:"Étape 1 — Compare une œuvre ancienne et une œuvre actuelle",
    text:"Choisis une œuvre classique et une œuvre contemporaine traitant d'un sujet proche (le portrait, le paysage). Note ce que l'œuvre contemporaine remet en question par rapport à l'ancienne.",
    fact:"Confronter deux époques sur un même sujet révèle ce qui a changé dans le regard de l'artiste, pas seulement dans la technique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_design_3_2", tier:"court", emoji:"🎨", label:"Étape 2 — Analyse une palette de couleurs",
    text:"Prélève cinq couleurs dans une œuvre donnée et reproduis-les en mélangeant toi-même la peinture. Note les proportions utilisées pour chaque mélange.",
    fact:"Reproduire une palette exige de vraiment observer les nuances, bien plus qu'un simple coup d'œil.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_design_3_3", tier:"court", emoji:"📐", label:"Étape 3 — Repère une règle de composition",
    text:"Trace sur une reproduction d'œuvre les lignes de force de sa composition (règle des tiers, diagonale) et explique comment elles guident le regard.",
    fact:"Une composition efficace guide l'œil du spectateur presque sans qu'il s'en rende compte ; la rendre visible aide à la comprendre.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_design_3_4", tier:"moyen", emoji:"🖌️", label:"Étape 4 — Avance sur ton projet personnel",
    text:"Reprends ton projet personnel commencé en 2e année (ou démarre un nouveau projet) et fixe-toi un objectif précis pour cette séance : une seule chose à améliorer ou à terminer.",
    fact:"Se fixer un objectif précis par séance, plutôt que « avancer un peu », est ce qui fait vraiment progresser un projet artistique long.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_design_3_5", tier:"moyen", emoji:"🗨️", label:"Étape 5 — Reçois une critique constructive",
    text:"Présente ton projet en cours à un camarade qui doit dire une chose qui fonctionne et une chose à améliorer, avec un exemple précis pour chacune, jamais une impression vague.",
    fact:"Recevoir une critique précise, pas juste « c'est joli », est ce qui permet vraiment d'améliorer un travail artistique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_design_3_6", tier:"long", emoji:"🏛️", label:"Étape 6 — Visite active un lieu d'exposition",
    text:"Lors d'une visite (musée, galerie ou en ligne), remplis une grille d'observation sur trois œuvres : ce qu'elles montrent, comment, et ce que tu en retiens personnellement.",
    fact:"Une visite active, avec une grille précise, fait retenir bien plus qu'une visite libre sans objectif.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_design_3_7", tier:"long", emoji:"🎓", label:"Étape 7 — Finalise et présente ton parcours de projet",
    text:"Finalise ton projet personnel et présente-le à la classe en expliquant la cohérence entre ton intention de départ et le résultat final, en citant un moment où tu as changé d'avis en cours de route.",
    fact:"Expliquer un changement d'avis en cours de projet montre une vraie réflexion artistique, pas juste l'exécution d'un plan figé.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_3_ECG_OBJECTS = MUSEE_ARTS_DESIGN_3_ECG_OBJECTS;
window.getArtsDesign3EcgObjectsForParcours = getArtsDesign3EcgObjectsForParcours;
