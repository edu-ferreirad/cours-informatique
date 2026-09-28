// SALLE SÉQUENCES — LATIN — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS = [
  { id:"la4_etude_autonome_auteur", tier:"court", emoji:"🔎", label:"Étudier seul un texte d'auteur",
    text:"Chaque élève choisit un court texte d'un auteur latin étudié, le prépare seul (traduction, analyse), puis le présente à la classe qui pose ensuite des questions sur le contexte et le style.",
    fact:"Étudier seul un texte d'auteur et le présenter est cité par le plan d'études comme objectif spécifique de la 3e-4e année en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"la4_heritage_droit_romain", tier:"moyen", emoji:"⚖️", label:"L'héritage romain dans le droit suisse",
    text:"En lien avec le cours d'économie et droit, les élèves identifient dans un texte de loi suisse actuel des notions ou termes hérités directement du droit romain étudié en classe.",
    fact:"Le plan d'études signale explicitement l'héritage culturel, politique et juridique de la romanité, en particulier son empreinte sur la Suisse — un lien interdisciplinaire concret en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqLatin4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS = MUSEE_SEQ_LATIN_4_COLLEGE_OBJECTS;
window.getSeqLatin4CollegeObjectsForParcours = getSeqLatin4CollegeObjectsForParcours;
