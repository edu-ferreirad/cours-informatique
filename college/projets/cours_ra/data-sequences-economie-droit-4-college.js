// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS = [
  { id:"ed4_strategie_entreprise_os", tier:"court", emoji:"📈", label:"OS uniquement — Évaluer la stratégie d'une entreprise",
    text:"Sur un cas d'entreprise réelle et récente, les élèves de l'option évaluent sa stratégie économique dans le contexte national et international, avant de proposer une alternative argumentée.",
    fact:"Évaluer et critiquer les objectifs, stratégies et politiques des entreprises est un objectif explicite de fin de cursus en option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ed4_institutions_suisses_os", tier:"moyen", emoji:"🇨🇭", label:"OS uniquement — Simuler une votation fédérale",
    text:"Les élèves de l'option préparent puis simulent le débat d'une votation fédérale fictive, en s'appuyant sur leur connaissance des institutions politiques suisses pour construire des arguments réalistes.",
    fact:"Connaître les institutions politiques en général, suisses en particulier, est un objectif explicite du plan d'études pour l'option spécifique de fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEconomieDroit4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS = MUSEE_SEQ_ECONOMIE_DROIT_4_COLLEGE_OBJECTS;
window.getSeqEconomieDroit4CollegeObjectsForParcours = getSeqEconomieDroit4CollegeObjectsForParcours;
