// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS = [
  { id:"ed1_besoin_ressource_rare", tier:"court", emoji:"🍞", label:"Simuler la rareté des ressources",
    text:"La classe reçoit une quantité limitée d'un « bien » fictif (jetons) à répartir entre plusieurs besoins concurrents ; les élèves doivent négocier une répartition, puis comparer les résultats obtenus par différents groupes.",
    fact:"Le plan d'études du cours d'introduction (IED) vise à sensibiliser aux problèmes économiques de consommation, production et répartition des richesses — cette simulation rend la notion de rareté immédiatement concrète.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ed1_cas_juridique_famille", tier:"moyen", emoji:"⚖️", label:"Un petit cas juridique du quotidien",
    text:"Face à une situation fictive simple (un objet prêté et cassé), les élèves doivent d'abord distinguer ce qui relève d'une règle morale de ce qui relève d'une règle de droit, avant de proposer une résolution du cas.",
    fact:"Le plan d'études cite explicitement une approche ponctuelle de diverses réalités juridiques dans le cadre de la famille comme objectif de l'introduction au droit.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqEconomieDroit1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS = MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS;
window.getSeqEconomieDroit1CollegeObjectsForParcours = getSeqEconomieDroit1CollegeObjectsForParcours;
