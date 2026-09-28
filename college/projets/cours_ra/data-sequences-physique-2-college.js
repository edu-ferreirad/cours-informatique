// SALLE SÉQUENCES — PHYSIQUE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS = [
  { id:"py2_incertitude_mesure", tier:"court", emoji:"📊", label:"La mesure qui ne tombe jamais deux fois pareil",
    text:"Les élèves refont cinq fois la même mesure simple (longueur, temps de chute) et doivent calculer l'écart entre les résultats avant de comprendre pourquoi une seule mesure ne suffit jamais en physique.",
    fact:"Estimer la précision et l'incertitude inhérentes aux mesures est un objectif explicite du cours d'introduction à la démarche scientifique et de la discipline fondamentale.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"py2_graphique_interpretation", tier:"moyen", emoji:"📈", label:"Lire un graphique sans le texte",
    text:"Face à un graphique de résultats expérimentaux sans légende ni texte d'accompagnement, les élèves doivent reconstruire seuls l'expérience probable qui a produit ces données, avant de comparer avec l'énoncé réel.",
    fact:"Tracer et interpréter les graphiques est cité comme outil quotidien des sciences expérimentales ; partir du graphique seul muscle la lecture plutôt que la seule production de courbes.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
];
function getSeqPhysique2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS = MUSEE_SEQ_PHYSIQUE_2_COLLEGE_OBJECTS;
window.getSeqPhysique2CollegeObjectsForParcours = getSeqPhysique2CollegeObjectsForParcours;
