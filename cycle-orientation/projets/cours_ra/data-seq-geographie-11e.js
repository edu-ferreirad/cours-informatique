// SALLE SÉQUENCES — GÉOGRAPHIE 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_GEOGRAPHIE_11E_OBJECTS = [
  {
    id: "seq_geographie_11_1",
    tier: "court",
    emoji: "💧",
    label: "Ma consommation d'eau",
    text: "Les élèves estiment leur consommation d'eau d'une journée, comparent avec des pays de disponibilité différente et cherchent des économies.",
    fact: "PER SHS : ressources et développement durable.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_geographie_11_2",
    tier: "court",
    emoji: "🔌",
    label: "Sources d'énergie : renouvelables ou non ?",
    text: "Les élèves classent des cartes de sources d'énergie, justifient leur classement et relèvent avantages et inconvénients.",
    fact: "Classer avec justification fait comprendre les enjeux énergétiques.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_geographie_11_3",
    tier: "moyen",
    emoji: "🛰️",
    label: "Le Léman vu d'en haut, hier et aujourd'hui",
    text: "À l'aide d'images satellites d'époques différentes, les élèves relèvent les changements d'un territoire connu et en cherchent les causes.",
    fact: "L'imagerie satellitaire est un outil de la géographie actuelle.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_geographie_11_4",
    tier: "moyen",
    emoji: "🗺️",
    label: "Ma première carte de données",
    text: "Avec un outil de cartographie en ligne, les élèves placent des données (arrêts de bus, écoles) et interprètent la carte.",
    fact: "Produire une carte numérique articule géographie et informatique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_geographie_11_5",
    tier: "long",
    emoji: "🏫",
    label: "Le bilan énergétique de l'école",
    text: "Les élèves relèvent les usages de l'énergie de l'école, calculent un ordre de grandeur et proposent trois mesures.",
    fact: "Une enquête locale donne un enjeu réel à des notions abstraites.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_geographie_11_6",
    tier: "long",
    emoji: "📢",
    label: "Campagne de sensibilisation à l'eau",
    text: "Les groupes conçoivent une affiche ou un court message vidéo pour sensibiliser les élèves à l'eau, avec chiffres vérifiés.",
    fact: "Communiquer une donnée demande de l'avoir comprise.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqGeographie11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_GEOGRAPHIE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_GEOGRAPHIE_11E_OBJECTS = MUSEE_SEQ_GEOGRAPHIE_11E_OBJECTS;
window.getSeqGeographie11ObjectsForParcours = getSeqGeographie11ObjectsForParcours;
