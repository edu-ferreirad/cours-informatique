// SALLE SÉQUENCES — GÉOGRAPHIE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_9E_OBJECTS = [
  {
    id: "seq_geographie_9_1",
    tier: "court",
    emoji: "🌋",
    label: "La carte des risques",
    text: "Les élèves placent séismes et volcans sur un planisphère, repèrent les zones les plus exposées et formulent une hypothèse sur leur répartition.",
    fact: "PER SHS : lire l'espace. Une hypothèse précède l'explication des plaques tectoniques.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_geographie_9_2",
    tier: "court",
    emoji: "🏙️",
    label: "Les fonctions de ma ville",
    text: "Sur un plan de ville, les élèves colorient habitat, commerces, industries et espaces verts, puis décrivent l'organisation du territoire.",
    fact: "Cartographier révèle la fonction des espaces urbains.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_geographie_9_3",
    tier: "moyen",
    emoji: "🌊",
    label: "Alerte inondation : plan d'évacuation",
    text: "Une alerte fictive est déclenchée. En groupes, les élèves tracent un itinéraire d'évacuation à partir de la carte d'un quartier et justifient leurs choix.",
    fact: "Situer un risque et les comportements à adopter relie géographie et sécurité.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_geographie_9_4",
    tier: "moyen",
    emoji: "📱",
    label: "De la mine au téléphone",
    text: "Les élèves suivent la trace des matières premières d'un smartphone sur une carte du monde et repèrent les pays concernés.",
    fact: "Suivre un objet du quotidien fait comprendre l'interdépendance des territoires.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_geographie_9_5",
    tier: "long",
    emoji: "🚶",
    label: "Enquête de mobilité devant l'école",
    text: "Les élèves comptent modes de transport et trajets de leurs camarades, organisent les résultats et proposent une amélioration.",
    fact: "Une enquête sur le terrain apprend à produire ses propres données.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_geographie_9_6",
    tier: "long",
    emoji: "🌳",
    label: "Un quartier durable à concevoir",
    text: "En groupes, les élèves conçoivent une affiche d'un quartier durable (transports, énergie, espaces verts) et défendent leurs choix.",
    fact: "Concevoir un territoire fait mobiliser les notions vues en aménageur.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqGeographie9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_GEOGRAPHIE_9E_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_9E_OBJECTS;
window.getSeqGeographie9ObjectsForParcours = getSeqGeographie9ObjectsForParcours;
