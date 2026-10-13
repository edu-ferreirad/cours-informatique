// SALLE SÉQUENCES — HISTOIRE 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_10E_OBJECTS = [
  {
    id: "seq_histoire_10_1",
    tier: "court",
    emoji: "📖",
    label: "Copier à la main ou imprimer ?",
    text: "Les élèves recopient une phrase à la plume, puis la reproduisent avec des tampons de lettres, et comparent temps, coût et fidélité pour comprendre l'impact de l'imprimerie.",
    fact: "PER SHS : mesurer un changement technique par une expérience concrète.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_histoire_10_2",
    tier: "court",
    emoji: "🧭",
    label: "Tracer les routes des explorateurs",
    text: "Sur un planisphère, les élèves reportent les routes de plusieurs navigateurs, notent dates et motivations, et relèvent les régions rencontrées.",
    fact: "Croiser espace et temps est un objectif du cycle 3 en histoire et géographie.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_histoire_10_3",
    tier: "moyen",
    emoji: "🎨",
    label: "Lire un tableau de la Renaissance",
    text: "Avec une grille d'observation, les élèves repèrent la perspective, les personnages et les symboles dans un tableau, puis comparent avec une peinture médiévale.",
    fact: "Comparer deux images de deux époques fait percevoir un changement de vision du monde.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_histoire_10_4",
    tier: "moyen",
    emoji: "⛪",
    label: "Calvin et la Réforme : deux points de vue",
    text: "À partir de courts documents, deux groupes défendent l'un le point de vue d'un réformateur, l'autre celui de l'Église catholique, avant un bilan collectif.",
    fact: "Prendre la place de l'autre permet de comprendre des conflits religieux sans jugement anachronique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_histoire_10_5",
    tier: "long",
    emoji: "🏙️",
    label: "Genève au XVIe siècle, enquête locale",
    text: "Les élèves explorent des sources sur l'arrivée de réfugiés à Genève et rédigent un court texte : qui vient, pourquoi, avec quelles conséquences ?",
    fact: "L'histoire locale relie le programme à l'environnement proche des élèves.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_histoire_10_6",
    tier: "long",
    emoji: "📚",
    label: "Un article d'Encyclopédie fictif",
    text: "En s'inspirant d'extraits du siècle des Lumières, les élèves rédigent un article défendant une idée (tolérance, éducation) avec deux arguments.",
    fact: "Écrire dans le style d'une époque oblige à comprendre ses idées.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqHistoire10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_HISTOIRE_10E_OBJECTS = MUSEE_SEQ_HISTOIRE_10E_OBJECTS;
window.getSeqHistoire10ObjectsForParcours = getSeqHistoire10ObjectsForParcours;
