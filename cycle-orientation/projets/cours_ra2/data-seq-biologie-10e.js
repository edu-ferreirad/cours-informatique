// SALLE SÉQUENCES — BIOLOGIE 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_10E_OBJECTS = [
  {
    id: "seq_biologie_10_1",
    tier: "court",
    emoji: "❤️",
    label: "Le pouls avant et après l'effort",
    text: "Les élèves mesurent leur pouls au repos puis après un effort, tracent un graphique et expliquent la variation.",
    fact: "PER MSN : fonctionnement du corps. La mesure rend visible une adaptation.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_biologie_10_2",
    tier: "court",
    emoji: "🫁",
    label: "Un modèle de la respiration",
    text: "Avec une bouteille, un ballon et une membrane, les élèves construisent un modèle du thorax et l'utilisent pour expliquer l'inspiration.",
    fact: "Un modèle aide à expliquer un phénomène invisible, et à en voir les limites.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_biologie_10_3",
    tier: "moyen",
    emoji: "🍎",
    label: "Lire une étiquette alimentaire",
    text: "Les élèves comparent la quantité de sucre de plusieurs produits et discutent des choix alimentaires.",
    fact: "L'éducation à la santé passe par la lecture critique d'informations.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_biologie_10_4",
    tier: "moyen",
    emoji: "🦴",
    label: "Le squelette et les muscles",
    text: "Avec un modèle de squelette, les élèves associent os, articulations et muscles à des mouvements concrets.",
    fact: "Relier structure et fonction est un principe de la biologie.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_biologie_10_5",
    tier: "long",
    emoji: "🥣",
    label: "Enquête sur le petit-déjeuner",
    text: "Les élèves recueillent des données, les organisent et proposent une conclusion sur les habitudes alimentaires de la classe.",
    fact: "Mener une enquête relie biologie, mathématiques et santé.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_biologie_10_6",
    tier: "long",
    emoji: "🩺",
    label: "Projet de prévention",
    text: "En groupes, les élèves conçoivent une affiche de prévention (sommeil, alimentation, mouvement) avec des données fiables.",
    fact: "Produire un message de santé fait travailler la rigueur scientifique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqBiologie10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_BIOLOGIE_10E_OBJECTS = MUSEE_SEQ_BIOLOGIE_10E_OBJECTS;
window.getSeqBiologie10ObjectsForParcours = getSeqBiologie10ObjectsForParcours;
