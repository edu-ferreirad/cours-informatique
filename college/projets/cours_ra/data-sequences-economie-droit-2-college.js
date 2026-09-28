// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS = [
  { id:"ed2_role_agents_economiques_os", tier:"court", emoji:"🏭", label:"OS uniquement — Le rôle des agents économiques",
    text:"Par groupes, les élèves de l'option spécifique construisent un schéma reliant ménages, entreprises et État par des flux (travail, salaires, impôts, services) à partir d'exemples concrets tirés de l'actualité suisse.",
    fact:"Comprendre le rôle des agents économiques dans la société et l'interdépendance de leurs mécanismes est un objectif explicite du plan d'études pour l'option spécifique.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ed2_hierarchie_droit_os", tier:"moyen", emoji:"📚", label:"OS uniquement — La hiérarchie des règles de droit",
    text:"Face à un conflit fictif entre deux règles de niveaux différents (loi cantonale contre loi fédérale), les élèves de l'option doivent déterminer laquelle prévaut en s'appuyant sur la hiérarchie des normes étudiée en cours.",
    fact:"Comprendre la hiérarchie des règles de droit est un objectif explicite du plan d'études en option spécifique dès la 2e année.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqEconomieDroit2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS = MUSEE_SEQ_ECONOMIE_DROIT_2_COLLEGE_OBJECTS;
window.getSeqEconomieDroit2CollegeObjectsForParcours = getSeqEconomieDroit2CollegeObjectsForParcours;
