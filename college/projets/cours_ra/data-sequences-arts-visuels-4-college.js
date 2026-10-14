// SALLE SÉQUENCES — ARTS VISUELS — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS = [
  { id:"arts_visuels_4_1", tier:"court", emoji:"🖌️", label:"Étape 1 — Finalise ton projet de synthèse (OS)",
    text:"Reprends ton projet personnel des années précédentes et fixe-toi les dernières étapes précises pour le terminer.",
    fact:"Terminer un projet mené sur plusieurs années demande de savoir se fixer une échéance claire.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_visuels_4_2", tier:"court", emoji:"🏛️", label:"Étape 2 — Prépare ton dossier de fin de cursus (OS)",
    text:"Rassemble tes meilleures productions des quatre années dans un dossier organisé, avec une courte note pour chacune.",
    fact:"Ce dossier final synthétise ton parcours artistique complet au Collège.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_visuels_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Prépare ton oral de présentation",
    text:"Prépare une présentation orale de cinq minutes de ton parcours artistique, avec un fil conducteur clair entre tes différents projets.",
    fact:"Trouver un fil conducteur entre plusieurs projets développe ta capacité de synthèse.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"arts_visuels_4_4", tier:"moyen", emoji:"🗨️", label:"Étape 4 — Fais relire ton dossier par un camarade",
    text:"Fais relire ton dossier de l'étape 2 par un camarade qui doit dire ce qui ressort le plus de ton parcours.",
    fact:"Un regard extérieur révèle parfois une cohérence dans ton travail que tu n'avais pas remarquée toi-même.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"arts_visuels_4_5", tier:"moyen", emoji:"🖼️", label:"Étape 5 — Compare ton premier et ton dernier travail",
    text:"Compare ton tout premier travail de 1ère année à ton travail le plus récent et note trois progrès précis.",
    fact:"Voir sa propre évolution sur quatre ans rend les progrès concrets, pas seulement ressentis.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"arts_visuels_4_6", tier:"long", emoji:"🎓", label:"Étape 6 — Présente ton dossier final à la classe",
    text:"Présente ton dossier final complet à la classe en expliquant la cohérence de ton parcours sur les quatre années.",
    fact:"Cette présentation finale synthétise et clôt ton parcours en arts visuels au Collège.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"arts_visuels_4_7", tier:"long", emoji:"🎯", label:"Étape 7 — Prépare ta suite si tu continues en art",
    text:"Si tu envisages de continuer dans le domaine artistique, recherche une formation qui t'intéresse et note ses conditions d'admission.",
    fact:"Anticiper les conditions d'admission d'une future formation t'aide à préparer ton dossier dès maintenant.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqArtsVisuels4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS=MUSEE_SEQ_ARTS_VISUELS_4_COLLEGE_OBJECTS;
window.getSeqArtsVisuels4CollegeObjectsForParcours=getSeqArtsVisuels4CollegeObjectsForParcours;
