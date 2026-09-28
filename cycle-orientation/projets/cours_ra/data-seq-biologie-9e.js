// SALLE SÉQUENCES — BIOLOGIE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_9E_OBJECTS = [
  {
    id: "seq_biologie_9_1",
    tier: "court",
    emoji: "🔬",
    label: "L'oignon au microscope",
    text: "Les élèves préparent une lame de peau d'oignon, l'observent et dessinent ce qu'ils voient en identifiant paroi, noyau et cytoplasme.",
    fact: "PER MSN : observer et représenter le vivant. Le dessin d'observation oblige à regarder.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_biologie_9_2",
    tier: "court",
    emoji: "🌿",
    label: "La clé de détermination des feuilles",
    text: "À l'aide d'une clé simple, les élèves identifient des feuilles ramassées dans la cour en répondant à une série de questions.",
    fact: "Une clé de détermination enseigne la logique de la classification.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_biologie_9_3",
    tier: "moyen",
    emoji: "🐞",
    label: "Un mètre carré de cour",
    text: "Les élèves délimitent un mètre carré, y inventorient les êtres vivants, les classent et notent les relations entre eux.",
    fact: "L'écosystème se comprend en l'observant en petit.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_biologie_9_4",
    tier: "moyen",
    emoji: "🧬",
    label: "Construire un arbre de parenté",
    text: "À partir d'un tableau de caractères, les élèves construisent un arbre de parenté entre cinq animaux et justifient leurs regroupements.",
    fact: "Classer par caractères partagés est la logique actuelle de la classification.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_biologie_9_5",
    tier: "long",
    emoji: "🌱",
    label: "Germination : un protocole complet",
    text: "Les élèves formulent une hypothèse sur l'effet de la lumière ou de l'eau sur des graines, conçoivent le protocole, suivent deux semaines et concluent.",
    fact: "La démarche expérimentale est l'objectif central du cycle 3 en sciences.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_biologie_9_6",
    tier: "long",
    emoji: "🏞️",
    label: "Exposé sur un écosystème local",
    text: "En groupes, les élèves présentent un écosystème proche (mare, forêt, rivière) avec chaînes alimentaires et menaces.",
    fact: "La synthèse orale relie observation et culture scientifique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqBiologie9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_BIOLOGIE_9E_OBJECTS = MUSEE_SEQ_BIOLOGIE_9E_OBJECTS;
window.getSeqBiologie9ObjectsForParcours = getSeqBiologie9ObjectsForParcours;
