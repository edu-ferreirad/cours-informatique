// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS = [
  { id:"eps2_auto_evaluation_progres", tier:"court", emoji:"📈", label:"Suivre ses propres progrès sur un test simple",
    text:"Les élèves refont un même test physique simple (souplesse, équilibre) à plusieurs semaines d'intervalle et comparent leurs résultats personnels, sans jamais les comparer publiquement à ceux des autres.",
    fact:"Le plan d'études demande d'apprendre à se connaître soi-même en maîtrisant ses capacités et ses limites — un objectif individuel, pas une compétition entre élèves.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"eps2_gestion_agressivite", tier:"moyen", emoji:"🤝", label:"Nommer la frustration plutôt que la jouer",
    text:"Après un jeu collectif compétitif, chaque équipe doit exprimer verbalement, en cercle, un moment de frustration ressenti pendant le jeu et comment elle a été gérée sur le moment, avant tout débriefing technique.",
    fact:"Maîtriser les problèmes de rivalité et d'agressivité lors de la pratique sportive est un objectif explicite du plan d'études, aussi important que la performance elle-même.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqEps2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS = MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS;
window.getSeqEps2CollegeObjectsForParcours = getSeqEps2CollegeObjectsForParcours;
