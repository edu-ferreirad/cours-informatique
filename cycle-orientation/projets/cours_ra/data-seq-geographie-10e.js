// SALLE SÉQUENCES — GÉOGRAPHIE 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_10E_OBJECTS = [
  {
    id: "seq_geographie_10_1",
    tier: "court",
    emoji: "🌡️",
    label: "Construire un climatogramme",
    text: "À partir de données mensuelles de deux villes, les élèves construisent leur climatogramme et comparent températures et précipitations.",
    fact: "PER SHS : lire et produire des graphiques climatiques.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_geographie_10_2",
    tier: "court",
    emoji: "🏞️",
    label: "Quel climat pour quel paysage ?",
    text: "Des photographies de paysages sont associées à des zones climatiques par les élèves, qui justifient chaque choix par un indice visible.",
    fact: "Associer image et climat développe l'observation.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_geographie_10_3",
    tier: "moyen",
    emoji: "👕",
    label: "La route d'un t-shirt",
    text: "Les élèves localisent les étapes de fabrication d'un t-shirt (coton, filage, couture, vente) et discutent des raisons des localisations.",
    fact: "La filière illustre la mondialisation de l'industrie.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_geographie_10_4",
    tier: "moyen",
    emoji: "🧳",
    label: "Migrer : pourquoi partir ?",
    text: "Avec une carte de flux et des données, les élèves classent des raisons de migrer en facteurs de départ et d'attraction.",
    fact: "Comprendre les causes évite les idées reçues sur les migrations.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_geographie_10_5",
    tier: "long",
    emoji: "🏭",
    label: "Débat : délocaliser ou non ?",
    text: "Les élèves incarnent entreprise, employés, habitants et État pour débattre d'une délocalisation fictive.",
    fact: "Les rôles font comprendre que les décisions territoriales ont des acteurs aux intérêts différents.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_geographie_10_6",
    tier: "long",
    emoji: "🗣️",
    label: "Portrait d'un parcours migratoire",
    text: "À partir d'un témoignage documenté, les élèves retracent un parcours sur une carte et rédigent un portrait en soulignant les difficultés.",
    fact: "Personnaliser humanise un sujet souvent abstrait.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqGeographie10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_GEOGRAPHIE_10E_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_10E_OBJECTS;
window.getSeqGeographie10ObjectsForParcours = getSeqGeographie10ObjectsForParcours;
