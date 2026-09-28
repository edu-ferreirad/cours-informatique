// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS = [
  { id:"ed3_critique_politique_os", tier:"court", emoji:"🗳️", label:"OS uniquement — Évaluer une politique économique réelle",
    text:"À partir d'un article de presse récent sur une décision économique de l'État, les élèves de l'option évaluent et critiquent la mesure en identifiant les valeurs et intérêts qui la sous-tendent.",
    fact:"Évaluer et critiquer les politiques conjoncturelles et structurelles menées par l'État est un objectif explicite du plan d'études pour l'option spécifique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ed3_cas_pratique_droit_os", tier:"moyen", emoji:"⚖️", label:"OS uniquement — Résoudre un cas pratique",
    text:"Face à un cas pratique juridique de complexité moyenne (litige de travail), les élèves de l'option identifient les règles de droit applicables et rédigent une solution argumentée en citant les textes légaux pertinents.",
    fact:"Résoudre des cas pratiques simples en s'appuyant sur des textes légaux est un objectif explicite des aptitudes visées par le plan d'études en option spécifique.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqEconomieDroit3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS = MUSEE_SEQ_ECONOMIE_DROIT_3_COLLEGE_OBJECTS;
window.getSeqEconomieDroit3CollegeObjectsForParcours = getSeqEconomieDroit3CollegeObjectsForParcours;
