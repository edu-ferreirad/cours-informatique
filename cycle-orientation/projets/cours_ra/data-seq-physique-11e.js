// SALLE SÉQUENCES — PHYSIQUE 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_PHYSIQUE_11E_OBJECTS = [
  {
    id: "seq_physique_11_1",
    tier: "court",
    emoji: "⚖️",
    label: "Masse et volume par déplacement d'eau",
    text: "Les élèves mesurent la masse d'objets, leur volume par déplacement d'eau, et calculent leur masse volumique.",
    fact: "PER MSN : la masse volumique se mesure. Le déplacement d'eau est une méthode ancienne et accessible.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_physique_11_2",
    tier: "court",
    emoji: "🧊",
    label: "Jouer aux particules",
    text: "La classe joue le solide, le liquide et le gaz avec des élèves représentant des particules qui bougent plus ou moins.",
    fact: "Le modèle corpusculaire se comprend en le jouant.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_physique_11_3",
    tier: "moyen",
    emoji: "🌡️",
    label: "La courbe de chauffage de la glace",
    text: "Les élèves chauffent de la glace, relèvent la température chaque minute, tracent la courbe et repèrent les paliers.",
    fact: "Un palier de température ne se devine pas : il se mesure.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_physique_11_4",
    tier: "moyen",
    emoji: "🛢️",
    label: "Flotte ou coule ? Prédire puis tester",
    text: "Avant toute expérience, les élèves prédisent si des objets flottent, puis testent et confrontent leurs prévisions à la masse volumique.",
    fact: "Prédire avant de mesurer fait reconnaître ses conceptions initiales.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_physique_11_5",
    tier: "long",
    emoji: "🔎",
    label: "Identifier un métal inconnu",
    text: "Chaque groupe détermine la masse volumique d'un métal inconnu et le compare à un tableau pour proposer une identification.",
    fact: "La masse volumique est une carte d'identité de la matière.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_physique_11_6",
    tier: "long",
    emoji: "📝",
    label: "Le rapport d'expérience complet",
    text: "Les élèves rédigent un rapport avec hypothèse, matériel, protocole, résultats et conclusion, puis relisent celui d'un camarade.",
    fact: "Rédiger un rapport est une compétence scientifique à part entière.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqPhysique11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_PHYSIQUE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_PHYSIQUE_11E_OBJECTS = MUSEE_SEQ_PHYSIQUE_11E_OBJECTS;
window.getSeqPhysique11ObjectsForParcours = getSeqPhysique11ObjectsForParcours;
