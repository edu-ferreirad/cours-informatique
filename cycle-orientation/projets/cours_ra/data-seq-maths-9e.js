// SALLE SÉQUENCES — MATHÉMATIQUES 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_9E_OBJECTS = [
  {
    id: "seq_maths_9_1",
    tier: "court",
    emoji: "🔐",
    label: "Un problème ouvert, sans méthode imposée",
    text: "Les élèves cherchent de combien de façons on peut écrire 15 comme somme de nombres consécutifs. Aucune méthode n'est donnée : ils essaient, notent, conjecturent puis comparent leurs stratégies.",
    fact: "PER MSN : « Recherche et stratégie ». Le problème ouvert fait de l'élève un chercheur avant d'être un applicateur de règles.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_maths_9_2",
    tier: "court",
    emoji: "🍲",
    label: "Une recette pour 4, une fête pour 10",
    text: "Les élèves adaptent une recette pour un nombre différent de personnes en utilisant un tableau de proportionnalité, puis comparent les méthodes (coefficient, passage à l'unité).",
    fact: "La proportionnalité s'installe par des situations concrètes où plusieurs procédures coexistent, avant la formalisation.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_maths_9_3",
    tier: "moyen",
    emoji: "📐",
    label: "Construire un triangle… ou pas",
    text: "À partir de trois longueurs données, les élèves tentent de construire le triangle à la règle et au compas ; certains jeux de longueurs sont impossibles, ce qui conduit à formuler une conjecture.",
    fact: "L'inégalité triangulaire se découvre mieux en échouant à construire qu'en l'énonçant d'emblée.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_maths_9_4",
    tier: "moyen",
    emoji: "🔢",
    label: "Zoomer sur la droite graduée",
    text: "Sur une droite graduée, les élèves placent des nombres décimaux en zoomant successivement sur des intervalles de plus en plus petits, jusqu'à comparer 3,4 et 3,39.",
    fact: "Le zoom successif combat l'idée fausse qu'un nombre avec plus de chiffres est forcément plus grand.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_maths_9_5",
    tier: "long",
    emoji: "📊",
    label: "Enquête : la main de la classe",
    text: "Les élèves mesurent la longueur de leur main, organisent les données dans un tableau, calculent une moyenne, tracent un diagramme et formulent trois observations.",
    fact: "La statistique prend du sens quand les données viennent des élèves eux-mêmes.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_maths_9_6",
    tier: "long",
    emoji: "🧱",
    label: "Même périmètre, même aire ?",
    text: "Avec un cordon de longueur fixe, les élèves construisent plusieurs rectangles, calculent leurs aires et découvrent que périmètre et aire ne varient pas ensemble.",
    fact: "Confronter une intuition fausse à l'expérience est plus efficace qu'une correction magistrale.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMaths9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MATHS_9E_OBJECTS = MUSEE_SEQ_MATHS_9E_OBJECTS;
window.getSeqMaths9ObjectsForParcours = getSeqMaths9ObjectsForParcours;
