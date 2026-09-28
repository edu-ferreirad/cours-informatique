// SALLE SÉQUENCES — ANGLAIS — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS = [
  { id:"an4_expose_recherche_documentee", tier:"court", emoji:"🔍", label:"Exposé de recherche documentée",
    text:"Chaque élève choisit un sujet lié au monde anglophone et mène une recherche documentaire en anglais sur deux à trois semaines, avant une présentation orale d'exposé d'actualité devant la classe, suivie de questions improvisées des camarades.",
    fact:"Le plan d'études mentionne présenter des exposés d'actualité comme objectif spécifique de l'option spécifique en 4e année ; les questions improvisées à la fin évitent que l'exposé ne se réduise à une récitation apprise par cœur.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"an4_oral_blanc_maturite_anglais", tier:"moyen", emoji:"🎓", label:"Oral blanc de maturité en conditions réelles",
    text:"En condition d'examen, l'élève tire au sort un support (image, court texte) et dispose d'un temps de préparation limité avant un oral filmé de quelques minutes, revisionné ensuite individuellement pour identifier ses propres tics de langage et hésitations.",
    fact:"Se revoir soi-même à l'oral, plutôt que de recevoir uniquement un retour de l'enseignant, permet à l'élève de repérer concrètement ses propres points faibles avant l'épreuve réelle de maturité — un usage pédagogique simple de la vidéo.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"an4_essai_academique_structure", tier:"long", emoji:"📝", label:"Essai académique structuré (introduction-corps-conclusion)",
    text:"Les élèves rédigent un essai académique complet sur un sujet culturel ou de société en respectant une structure anglo-saxonne stricte (thesis statement, paragraphes à idée unique, conclusion) évaluée avec une grille explicite communiquée à l'avance.",
    fact:"Ce format d'essai académique, différent de la dissertation à la française, correspond au registre de langue plus élaboré et plus précis attendu en option spécifique de 4e année, et prépare aux exigences des études supérieures anglophones.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];
function getSeqAnglais4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS = MUSEE_SEQ_ANGLAIS_4_COLLEGE_OBJECTS;
window.getSeqAnglais4CollegeObjectsForParcours = getSeqAnglais4CollegeObjectsForParcours;
