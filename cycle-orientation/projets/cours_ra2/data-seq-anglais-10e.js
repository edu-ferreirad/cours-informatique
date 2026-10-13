// SALLE SÉQUENCES — ANGLAIS 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_10E_OBJECTS = [
  {
    id: "seq_anglais_10_1",
    tier: "court",
    emoji: "📖",
    label: "Past simple story chain",
    text: "Chaque élève ajoute une phrase au passé simple à une histoire collective, qui se construit sur les verbes réguliers et irréguliers.",
    fact: "La chaîne d'histoire rend la conjugaison vivante.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_anglais_10_2",
    tier: "court",
    emoji: "☔",
    label: "Weather and clothes",
    text: "À partir de prévisions, les élèves choisissent des vêtements et justifient en anglais.",
    fact: "Relier vocabulaire et situation concrète facilite la mémorisation.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_anglais_10_3",
    tier: "moyen",
    emoji: "🗺️",
    label: "Giving directions",
    text: "Sur un plan, un élève guide un camarade vers un lieu sans le nommer, à l'aide de directions.",
    fact: "Un jeu d'orientation motive l'oral.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_anglais_10_4",
    tier: "moyen",
    emoji: "🍔",
    label: "At the restaurant",
    text: "Par deux, les élèves jouent commande, demande de l'addition et formules de politesse.",
    fact: "La politesse est une compétence communicative.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_anglais_10_5",
    tier: "long",
    emoji: "✉️",
    label: "An email to a pen pal",
    text: "Chaque élève rédige un courriel de présentation à un correspondant fictif puis relit avec une grille.",
    fact: "Un vrai destinataire donne un objectif à l'écriture.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_anglais_10_6",
    tier: "long",
    emoji: "🗽",
    label: "Project : a trip to a city",
    text: "En groupes, les élèves préparent un itinéraire de voyage dans une ville anglophone et le présentent.",
    fact: "Un projet réunit lecture, recherche et expression orale.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAnglais10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ANGLAIS_10E_OBJECTS = MUSEE_SEQ_ANGLAIS_10E_OBJECTS;
window.getSeqAnglais10ObjectsForParcours = getSeqAnglais10ObjectsForParcours;
