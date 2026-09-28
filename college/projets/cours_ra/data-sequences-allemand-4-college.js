// SALLE SÉQUENCES — ALLEMAND — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS = [
  { id:"al4_recherche_transdisciplinaire", tier:"court", emoji:"🔬", label:"Mini-recherche transdisciplinaire",
    text:"En lien avec une autre discipline (histoire ou sciences), les élèves de l'option spécifique mènent une courte recherche documentaire en allemand sur un sujet croisé, avant une restitution orale à la classe.",
    fact:"Le plan d'études évoque explicitement la conduite éventuelle de travaux de recherche transdisciplinaires en option spécifique de 4e année.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"al4_oral_maturite_blanc", tier:"moyen", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un texte du programme, dispose d'un temps de préparation, puis présente et commente l'extrait devant deux camarades jouant le rôle de jury avec une grille simplifiée.",
    fact:"S'entraîner avec un vrai chronométrage et une grille de notation réduit l'écart entre l'entraînement habituel en classe et la pression du jour de l'examen de maturité.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqAllemand4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS = MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS;
window.getSeqAllemand4CollegeObjectsForParcours = getSeqAllemand4CollegeObjectsForParcours;
