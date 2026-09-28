// SALLE SÉQUENCES — PHILOSOPHIE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS = [
  { id:"ph4_etude_auteur_ouvrage", tier:"court", emoji:"📚", label:"Suivre la continuité d'une pensée sur un ouvrage",
    text:"Les élèves lisent en autonomie plusieurs extraits successifs d'un même ouvrage philosophique et doivent reconstituer, sans aide, la progression de l'argumentation de l'auteur d'un extrait à l'autre.",
    fact:"Le plan d'études précise que l'étude par auteur, en lisant un ouvrage entier ou en partie, ouvre à la continuité d'une pensée et au détail de sa démarche.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ph4_lien_interdisciplinaire_philo", tier:"moyen", emoji:"🔗", label:"Un problème philosophique, plusieurs disciplines",
    text:"Sur un sujet contemporain (technologie et vie privée, bioéthique), les élèves croisent un texte philosophique avec un document d'une autre discipline (droit, biologie) pour construire une réflexion multidisciplinaire.",
    fact:"Le plan d'études cite explicitement que de nombreux sujets philosophiques peuvent être traités en relation avec d'autres disciplines, notamment dans le cadre de l'option complémentaire.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqPhilosophie4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS = MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS;
window.getSeqPhilosophie4CollegeObjectsForParcours = getSeqPhilosophie4CollegeObjectsForParcours;
