// SALLE OSP OSP THÉÂTRE — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_THEATRE_ECG_1_OBJECTS = [
  { id:"theatre_1re_1", tier:"court", emoji:"🎭", label:"Découverte : une improvisation à contrainte",
    text:"Par groupes de trois, les élèves improvisent une scène de deux minutes avec une contrainte tirée au sort (un lieu, une émotion cachée).",
    fact:"L'OSP Théâtre repose sur l'atelier de jeu ; l'improvisation permet de sentir l'engagement du corps et de la voix.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"theatre_1re_2", tier:"moyen", emoji:"🎬", label:"Découverte : observer une répétition",
    text:"Les élèves observent une répétition ou un extrait filmé et notent ce que le metteur en scène corrige, en distinguant le texte, le mouvement et l'espace.",
    fact:"Comprendre les composantes d'un spectacle éclaire les disciplines de l'OSP : dramaturgie, mouvement et création de spectacle.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"theatre_1re_3", tier:"long", emoji:"🎟️", label:"Découverte : le chemin vers la formation de comédien",
    text:"Les élèves retracent le parcours possible depuis l'OSP Théâtre jusqu'aux formations professionnelles, en notant les admissions sur dossier, entretien ou concours.",
    fact:"La brochure indique que les formations de comédien admettent sur dossier, entretien, concours ou examen ; anticiper cette sélection fait partie de l'orientation.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTheatre1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_THEATRE_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_THEATRE_ECG_1_OBJECTS = MUSEE_THEATRE_ECG_1_OBJECTS;
window.getTheatre1EcgObjectsForParcours = getTheatre1EcgObjectsForParcours;
