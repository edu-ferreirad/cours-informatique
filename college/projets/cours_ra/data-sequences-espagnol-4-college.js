// SALLE SÉQUENCES — ESPAGNOL — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS = [
  { id:"es4_redaction_argumentative", tier:"court", emoji:"✍️", label:"Rédiger un texte argumentatif complet",
    text:"Les élèves rédigent un texte argumentatif structuré sur un sujet de société hispanophone, avec une exigence explicite de nuancer leur position par un contre-argument, corrigé selon une grille précise.",
    fact:"Rédiger progressivement des textes argumentatifs est un objectif explicite de fin de cursus pour l'option spécifique d'espagnol.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"es4_oral_maturite_es", tier:"moyen", emoji:"🎓", label:"Oral blanc de maturité",
    text:"En conditions d'examen, l'élève tire un extrait du programme, prépare un commentaire en temps limité, puis le présente devant un petit jury de camarades avec une grille de notation simplifiée.",
    fact:"S'entraîner dans des conditions proches de l'examen réel réduit l'écart entre la pratique habituelle en classe et la pression du jour J.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEspagnol4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS = MUSEE_SEQ_ESPAGNOL_4_COLLEGE_OBJECTS;
window.getSeqEspagnol4CollegeObjectsForParcours = getSeqEspagnol4CollegeObjectsForParcours;
