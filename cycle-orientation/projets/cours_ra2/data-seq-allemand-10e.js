// SALLE SÉQUENCES — ALLEMAND 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_10E_OBJECTS = [
  {
    id: "seq_allemand_10_1",
    tier: "court",
    emoji: "📅",
    label: "Mein Wochenplan",
    text: "Les élèves complètent un plan de semaine avec activités et jours, puis le comparent avec celui d'un camarade en allemand.",
    fact: "Comparer des plans crée un vrai échange d'informations.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_allemand_10_2",
    tier: "court",
    emoji: "🧥",
    label: "Kleidung und Wetter",
    text: "À partir de cartes météo, les élèves choisissent des vêtements adaptés et justifient leur choix.",
    fact: "Relier vocabulaire et situation concrète facilite la mémorisation.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_allemand_10_3",
    tier: "moyen",
    emoji: "🗺️",
    label: "Wegbeschreibung",
    text: "Sur un plan de ville, un élève guide un camarade vers un lieu avec des indications de direction sans nommer la destination.",
    fact: "Le jeu d'orientation motive la production orale.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_allemand_10_4",
    tier: "moyen",
    emoji: "🍕",
    label: "Im Restaurant",
    text: "Les élèves jouent une commande au restaurant en utilisant un menu et des formules de politesse.",
    fact: "La politesse fait partie de la compétence communicative.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_allemand_10_5",
    tier: "long",
    emoji: "✉️",
    label: "Brief an einen Brieffreund",
    text: "Chaque élève rédige une lettre de présentation à un correspondant fictif, avec goûts, famille et ville, puis la relit avec une grille.",
    fact: "Écrire à un vrai destinataire donne un objectif de communication.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_allemand_10_6",
    tier: "long",
    emoji: "🏙️",
    label: "Projekt : eine Schweizer Stadt",
    text: "En groupes, les élèves présentent une ville suisse alémanique (sites, transports, spécialités) avec une affiche.",
    fact: "Le projet ouvre à la culture de la Suisse plurilingue.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAllemand10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ALLEMAND_10E_OBJECTS = MUSEE_SEQ_ALLEMAND_10E_OBJECTS;
window.getSeqAllemand10ObjectsForParcours = getSeqAllemand10ObjectsForParcours;
