// SALLE SÉQUENCES — GREC — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS = [
  { id:"gr2_premiers_auteurs", tier:"court", emoji:"📜", label:"Premiers pas avec un texte d'auteur",
    text:"Les élèves traduisent en groupe un très court extrait d'un auteur grec facile, phrase par phrase, en s'appuyant sur les acquis morphologiques de l'année précédente avant une mise en commun collective.",
    fact:"Le plan d'études précise que dès la deuxième année, l'élève lit quelques textes d'auteurs faciles et acquiert des notions des dialectes littéraires.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"gr2_expose_culture", tier:"moyen", emoji:"🎤", label:"Petit exposé de culture grecque",
    text:"Par groupes, les élèves préparent un exposé de 3 minutes sur un aspect de la culture grecque (archéologie, institutions) à partir de documents fournis, restitué ensuite librement sans notes.",
    fact:"La préparation de petits exposés est citée par le plan d'études comme moyen d'initier progressivement l'élève aux aspects principaux de la culture grecque.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqGrec2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS = MUSEE_SEQ_GREC_2_COLLEGE_OBJECTS;
window.getSeqGrec2CollegeObjectsForParcours = getSeqGrec2CollegeObjectsForParcours;
