// SALLE SÉQUENCES — LATIN — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS = [
  { id:"la2_civilisation_dossier", tier:"court", emoji:"🏛️", label:"Petit dossier de civilisation romaine",
    text:"Par groupes, les élèves constituent un court dossier sur un aspect de la civilisation romaine (bains, forum, légions) à partir de plusieurs documents fournis, présenté ensuite en 3 minutes à la classe.",
    fact:"Le plan d'études laisse une part de liberté dans le choix des sujets de civilisation en discipline fondamentale — ce dossier en donne une forme concrète et autonome.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"la2_traduction_comparee", tier:"moyen", emoji:"🔍", label:"Comparer deux traductions d'un même texte",
    text:"Les élèves reçoivent deux traductions différentes d'un même court passage latin et doivent identifier les choix d'interprétation qui les distinguent, avant de proposer leur propre version.",
    fact:"Comparer des traductions rend visible qu'une version n'est jamais unique — un pas vers l'analyse et l'interprétation d'une œuvre visée par le plan d'études.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqLatin2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS = MUSEE_SEQ_LATIN_2_COLLEGE_OBJECTS;
window.getSeqLatin2CollegeObjectsForParcours = getSeqLatin2CollegeObjectsForParcours;
