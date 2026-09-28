// SALLE SÉQUENCES — ESPAGNOL — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS = [
  { id:"es2_lecture_texte_varie", tier:"court", emoji:"📖", label:"Lire des textes de complexité croissante",
    text:"Les élèves comparent deux textes sur un même thème, l'un simple et l'autre plus littéraire, et identifient précisément ce qui rend le second plus difficile (vocabulaire, temps verbaux, structure).",
    fact:"Le plan d'études demande de lire, comprendre et analyser des textes de plus en plus complexes et variés — ce contraste direct rend visible la progression attendue.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"es2_discussion_echange_idees", tier:"moyen", emoji:"💬", label:"Discussion et échange d'idées encadré",
    text:"Sur un sujet culturel simple, les élèves échangent leurs idées en petit groupe, avec la consigne explicite de reformuler l'idée du camarade précédent avant d'ajouter la sienne.",
    fact:"Discuter et échanger des idées est un objectif explicite du plan d'études ; la reformulation imposée développe autant l'écoute que l'expression.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqEspagnol2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS = MUSEE_SEQ_ESPAGNOL_2_COLLEGE_OBJECTS;
window.getSeqEspagnol2CollegeObjectsForParcours = getSeqEspagnol2CollegeObjectsForParcours;
