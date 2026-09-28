// SALLE SÉQUENCES — PHYSIQUE — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS = [
  { id:"py4_physique_xxe_os", tier:"court", emoji:"🌌", label:"OS uniquement — Un paradoxe du XXe siècle",
    text:"Les élèves de l'option présentent, par petits groupes, un paradoxe ou une expérience célèbre de la physique du XXe siècle (relativité, quantique) à la classe, en devant l'expliquer sans aucune formule mathématique.",
    fact:"Le plan d'études prévoit l'étude de quelques éléments de la physique du XXe siècle en complément des domaines classiques, en option spécifique de fin de cursus.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"py4_lien_interdisciplinaire_os", tier:"moyen", emoji:"🔗", label:"OS uniquement — Un lien physique-biologie",
    text:"En lien avec la biologie, les élèves de l'option expliquent un phénomène physiologique (vision, audition) uniquement par des lois physiques déjà étudiées, sans recourir au vocabulaire biologique.",
    fact:"Le plan d'études cite explicitement l'étude de l'œil et des couleurs comme lien entre physique et biologie — un exemple concret de collaboration interdisciplinaire en fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqPhysique4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS = MUSEE_SEQ_PHYSIQUE_4_COLLEGE_OBJECTS;
window.getSeqPhysique4CollegeObjectsForParcours = getSeqPhysique4CollegeObjectsForParcours;
