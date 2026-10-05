// SALLE SÉQUENCES — MATHÉMATIQUES 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_11E_OBJECTS = [
  {
    id: "seq_maths_11_1",
    tier: "court",
    emoji: "🧩",
    label: "Le puzzle de Pythagore",
    text: "Les élèves découpent des carrés construits sur les côtés d'un triangle rectangle et montrent, par recomposition, que l'aire du grand carré est la somme des deux autres.",
    fact: "Une preuve par découpage donne du sens au théorème avant la formule a² + b² = c².",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_maths_11_2",
    tier: "court",
    emoji: "🪜",
    label: "L'échelle contre le mur",
    text: "Face à un problème d'échelle appuyée contre un mur, les élèves schématisent, repèrent le triangle rectangle et calculent la hauteur atteinte.",
    fact: "Modéliser un problème réel par un schéma est la première étape de la résolution.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_maths_11_3",
    tier: "moyen",
    emoji: "📱",
    label: "Deux abonnements, un point d'intersection",
    text: "Les élèves comparent deux forfaits de téléphone par un tableau, une formule et un graphique, et cherchent à partir de quand l'un devient plus avantageux.",
    fact: "La fonction affine devient un outil de décision dans une situation de vie courante.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_maths_11_4",
    tier: "moyen",
    emoji: "🔍",
    label: "Développer et factoriser avec des aires",
    text: "À l'aide de rectangles découpés, les élèves montrent que (a+b)(c+d) se développe en quatre aires, avant de généraliser l'écriture.",
    fact: "La représentation géométrique donne un sens visuel au calcul littéral.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_maths_11_5",
    tier: "long",
    emoji: "📏",
    label: "Mesurer la hauteur de l'école",
    text: "Par groupes, les élèves mesurent l'ombre d'un bâton et celle du bâtiment, puis calculent la hauteur par proportionnalité.",
    fact: "Les grandeurs proportionnelles permettent de mesurer l'inaccessible.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_maths_11_6",
    tier: "long",
    emoji: "📝",
    label: "Rédiger une résolution complète",
    text: "Sur un problème ouvert, les élèves rédigent démarche, calculs et réponse rédigée, puis échangent leurs copies pour évaluer avec une grille de critères de rédaction.",
    fact: "La communication de la démarche est une compétence évaluée à part entière au même titre que le résultat.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMaths11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MATHS_11E_OBJECTS = MUSEE_SEQ_MATHS_11E_OBJECTS;
window.getSeqMaths11ObjectsForParcours = getSeqMaths11ObjectsForParcours;
