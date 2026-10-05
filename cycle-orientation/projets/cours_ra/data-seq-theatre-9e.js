// SALLE SÉQUENCES — THÉÂTRE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_THEATRE_9E_OBJECTS = [
  {
    id: "seq_theatre_9_1",
    tier: "court",
    emoji: "🫁",
    label: "Respirer et articuler",
    text: "La classe pratique respiration abdominale et virelangues, puis lit une phrase à voix haute en cherchant la clarté.",
    fact: "Le travail du souffle et de l'articulation est à la base de l'expression orale.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_theatre_9_2",
    tier: "court",
    emoji: "🎭",
    label: "Marcher avec le masque neutre",
    text: "Les élèves marchent, s'arrêtent et regardent avec un masque neutre pour découvrir un corps disponible sans expression particulière.",
    fact: "Le masque neutre concentre l'attention sur le corps.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_theatre_9_3",
    tier: "moyen",
    emoji: "🎲",
    label: "Improvisation à contrainte",
    text: "Par groupes, les élèves improvisent une scène de deux minutes avec un lieu et une contrainte tirés au sort.",
    fact: "La contrainte libère l'imagination.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_theatre_9_4",
    tier: "moyen",
    emoji: "📜",
    label: "Trois intentions pour une réplique de Molière",
    text: "Une même réplique est dite avec trois intentions différentes (convaincre, séduire, ordonner) et la classe identifie l'intention.",
    fact: "Jouer avec l'intention révèle l'importance de l'interprétation.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_theatre_9_5",
    tier: "long",
    emoji: "🎬",
    label: "Mettre en scène une scène de deux minutes",
    text: "Chaque groupe met en scène une courte scène avec espace, déplacements et voix, et la répète avec retours.",
    fact: "Créer une scène mobilise tout le vocabulaire théâtral.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_theatre_9_6",
    tier: "long",
    emoji: "👏",
    label: "Représentation et retour",
    text: "Chaque groupe présente sa scène ; le public donne un retour selon deux critères (voix, espace) avant un bilan collectif.",
    fact: "Regarder et commenter fait partie de l'expression théâtrale.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqTheatre9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_THEATRE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_THEATRE_9E_OBJECTS = MUSEE_SEQ_THEATRE_9E_OBJECTS;
window.getSeqTheatre9ObjectsForParcours = getSeqTheatre9ObjectsForParcours;
