// SALLE SÉQUENCES — ITALIEN — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS = [
  { id:"it3_frise_litteraire_italie", tier:"court", emoji:"📚", label:"Frise des courants littéraires italiens",
    text:"Par groupes, les élèves associent un court extrait à un courant littéraire italien étudié, en justifiant leur choix par deux indices précis relevés dans le texte, avant confrontation avec le reste de la classe.",
    fact:"Connaître les étapes principales de l'histoire littéraire italienne en identifiant les grands courants est un objectif fondamental de l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"it3_debat_actualite_it", tier:"moyen", emoji:"🗣️", label:"Débat sur un texte d'actualité italienne",
    text:"À partir d'un article italien récent, les élèves préparent un avis argumenté puis débattent en classe, avec obligation de citer précisément une phrase du texte à l'appui de chaque argument.",
    fact:"Commenter un texte d'actualité dans une langue correcte, en distinguant les niveaux de langue, est un objectif explicite de l'expression écrite et orale en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqItalien3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS = MUSEE_SEQ_ITALIEN_3_COLLEGE_OBJECTS;
window.getSeqItalien3CollegeObjectsForParcours = getSeqItalien3CollegeObjectsForParcours;
