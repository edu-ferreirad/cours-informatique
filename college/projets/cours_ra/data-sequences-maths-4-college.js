// SALLE SÉQUENCES — MATHÉMATIQUES — 4e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS = [
  { id:"ma4_probabilite_modele_reel", tier:"court", emoji:"🎲", label:"Probabilités : choisir le bon modèle",
    text:"Face à une situation aléatoire réelle décrite en une phrase (file d'attente, contrôle qualité), les élèves doivent d'abord identifier quel modèle probabiliste simple s'applique avant même de commencer le moindre calcul.",
    fact:"Le plan d'études met l'accent sur la capacité à identifier une situation aléatoire pour la relier à un modèle probabiliste simple — une compétence de reconnaissance souvent négligée au profit du seul calcul une fois le modèle déjà donné.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ma4_etude_fonction_complete", tier:"moyen", emoji:"📊", label:"Analyse : l'étude complète, de A à Z",
    text:"En temps limité et sans correction intermédiaire, les élèves mènent seuls une étude complète d'une fonction (domaine, dérivée, variations, courbe) puis comparent leur courbe finale à celle d'un camarade avant la correction commune.",
    fact:"Enchaîner toutes les étapes d'une étude de fonction sans étayage intermédiaire reproduit fidèlement les conditions de l'examen de maturité, où aucune aide progressive n'est fournie entre les différentes parties d'un exercice.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
  { id:"ma4_atelier_erreurs_frequentes", tier:"long", emoji:"❌", label:"Révisions maturité : l'atelier des erreurs classiques",
    text:"L'enseignant présente une copie fictive contenant plusieurs erreurs typiques accumulées au fil des quatre années (signe oublié, confusion de dérivée, mauvaise lecture d'un graphique) ; les élèves doivent les repérer et rédiger la correction exacte.",
    fact:"Revoir des erreurs caractéristiques accumulées sur quatre ans, plutôt que de refaire uniquement des exercices neufs, cible directement les pièges qui reviennent le plus souvent le jour de l'examen final.",
    anchor:{distance:4.4, angle:185, height:DESK_H} },
];
function getSeqMaths4CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS = MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS;
window.getSeqMaths4CollegeObjectsForParcours = getSeqMaths4CollegeObjectsForParcours;
