// SALLE SÉQUENCES — PHILOSOPHIE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS = [
  { id:"ph3_dialogue_texte_source", tier:"court", emoji:"📖", label:"Dialoguer directement avec un texte source",
    text:"Face à un court extrait d'un philosophe étudié, les élèves formulent d'abord leurs propres questions sur le texte avant même toute explication de l'enseignant, qui construit ensuite le cours à partir de ces questions réelles.",
    fact:"Le plan d'études insiste sur le recours prioritaire aux grands textes de la philosophie, dans un dialogue permanent avec les penseurs du passé — partir des questions des élèves rend ce dialogue authentique plutôt qu'imposé.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ph3_discussion_libre_encadree", tier:"moyen", emoji:"💬", label:"Discussion libre mais encadrée par la rigueur",
    text:"Sur une question philosophique simple (qu'est-ce que la liberté ?), les élèves débattent librement, mais chaque affirmation doit être immédiatement suivie d'une justification argumentée, sinon elle est écartée du débat par l'enseignant.",
    fact:"Le plan d'études exige une discussion soumise à examen critique et sans restriction, mais fondée sur la validité des raisonnements — la rigueur de la justification prime sur la liberté d'opinion seule.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqPhilosophie3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS = MUSEE_SEQ_PHILOSOPHIE_3_COLLEGE_OBJECTS;
window.getSeqPhilosophie3CollegeObjectsForParcours = getSeqPhilosophie3CollegeObjectsForParcours;
