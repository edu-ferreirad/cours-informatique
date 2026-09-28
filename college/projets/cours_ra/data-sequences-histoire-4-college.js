// SALLE SÉQUENCES — HISTOIRE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS = [
  { id:"hi4_memoire_temoignage_contemporain", tier:"court", emoji:"🎙️", label:"Histoire du temps présent : comparer mémoire et histoire",
    text:"Les élèves confrontent un témoignage oral ou écrit d'un événement du XXe siècle à un travail d'historien sur le même événement, puis identifient précisément où et pourquoi les deux récits divergent (émotion, distance temporelle, sources disponibles).",
    fact:"Cette confrontation directe entre mémoire vécue et travail scientifique de l'historien touche un enjeu central des grands problèmes des sociétés contemporaines que le plan d'études demande d'aborder en fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"hi4_dossier_recherche_travail_maturite", tier:"moyen", emoji:"🗂️", label:"Mini-dossier de recherche en autonomie",
    text:"Sur un sujet contemporain de leur choix en lien avec le programme, les élèves constituent seuls un dossier documentaire d'une dizaine de sources variées, en distinguant sources fiables et sources douteuses, avant une courte présentation orale de leurs conclusions.",
    fact:"Ce format de recherche autonome, proche de ce qu'exige un travail de maturité, mobilise directement les méthodes de travail visées par le plan d'études : établir une bibliographie, prendre des notes, classer l'information.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"hi4_debat_geopolitique_actuel", tier:"long", emoji:"🌐", label:"Débat : un enjeu géopolitique du XXIe siècle",
    text:"À partir de sources d'actualité récentes et contradictoires, la classe débat d'un grand problème géopolitique contemporain en s'appuyant explicitement sur des racines historiques identifiées dans les cours précédents des quatre années.",
    fact:"Ce débat final relie directement le passé étudié pendant tout le cursus au présent, illustrant la mission civique du programme : former des citoyens responsables capables de prendre de la distance par rapport au présent et au passé.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];
function getSeqHistoire4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS = MUSEE_SEQ_HISTOIRE_4_COLLEGE_OBJECTS;
window.getSeqHistoire4CollegeObjectsForParcours = getSeqHistoire4CollegeObjectsForParcours;
