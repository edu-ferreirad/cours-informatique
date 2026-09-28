// SALLE SÉQUENCES — ITALIEN — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS = [
  { id:"it4_recherche_personnelle_oeuvre", tier:"court", emoji:"🔍", label:"Recherche personnelle sur une œuvre",
    text:"Chaque élève choisit une œuvre italienne du programme et mène une recherche personnelle sur son contexte socio-politique et artistique, avant une présentation orale de 5 minutes suivie de questions.",
    fact:"Le plan d'études prévoit explicitement que les élèves soient conduits à effectuer des recherches personnelles sur les œuvres étudiées, situées dans leur contexte.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"it4_oral_maturite_it", tier:"moyen", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un extrait du programme, prépare un commentaire en temps limité, puis le présente devant un petit jury de camarades qui note selon une grille simplifiée.",
    fact:"S'entraîner en conditions réelles réduit l'écart entre la pratique habituelle en classe et la pression du jour de l'examen de maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqItalien4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS = MUSEE_SEQ_ITALIEN_4_COLLEGE_OBJECTS;
window.getSeqItalien4CollegeObjectsForParcours = getSeqItalien4CollegeObjectsForParcours;
