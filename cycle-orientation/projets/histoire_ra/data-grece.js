// ============================================================================
// SALLE GRÈCE ANTIQUE — données du musée
// Textes reformulés à partir du chapitre "LE MONDE GREC ANTIQUE"
// (Hist_9e_LE_version_2024_TM.pdf, p.8-21) — aucune phrase copiée du livre.
// Positions RA : mêmes repères de salle que le projet Escalade 1602
// (salle 6,8 m × 5,2 m, calibration au seuil de la porte près de l'armoire
// grise). Emplacements PLACEHOLDER à ajuster/valider en classe — ce sont des
// zones plausibles (bureaux, mur du fond, étagères), pas des mesures prises
// sur le terrain comme pour l'escape game.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

// tier: "court" (4 objets), "standard" (+3 = 7), "riche" (+3 = 10)
const MUSEE_GRECE_OBJECTS = [
  {
    id: "carte_cites",
    tier: "court",
    emoji: "🗺️",
    label: "Carte des cités grecques",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Griechenland_371-362.jpg",
    text: "La Grèce antique n'est pas un pays unique mais un monde de cités indépendantes — Athènes, Sparte, Corinthe, Delphes, Olympie — chacune avec ses propres lois. Ce qui les relie, c'est une langue, des dieux et des sanctuaires communs plutôt qu'un pouvoir central.",
    anchor: { distance: 2.0, angle: 20, height: DESK_H }
  },
  {
    id: "flamme_olympie",
    tier: "court",
    emoji: "🔥",
    label: "La flamme d'Olympie",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/20090725_olympia62.jpg",
    text: "Tous les quatre ans, des athlètes venus de toutes les cités grecques se retrouvent à Olympie pour des jeux consacrés à Zeus. Le lieu est sacré : le site abrite temples et statues, et la compétition sportive y a une dimension religieuse autant que physique.",
    anchor: { distance: 3.4, angle: 95, height: SHELF_H }
  },
  {
    id: "treve_sacree",
    tier: "court",
    emoji: "🕊️",
    label: "La trêve sacrée",
    text: "Pendant la durée des Jeux, une trêve sacrée suspend les guerres entre cités grecques : athlètes, spectateurs et messagers peuvent circuler sans danger jusqu'à Olympie. C'est une façon d'affirmer une identité grecque commune malgré les rivalités.",
    anchor: { distance: 1.6, angle: 160, height: DESK_H }
  },
  {
    id: "parthenon",
    tier: "court",
    emoji: "🏛️",
    label: "Le Parthénon sur l'Acropole",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Parthenon_from_south.jpg",
    text: "Sur la colline sacrée d'Athènes, l'Acropole, se dresse le Parthénon, temple dédié à la déesse Athéna. Construit au Ve siècle avant notre ère, il symbolise la puissance et la richesse d'Athènes à son apogée.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "agora_democratie",
    tier: "standard",
    emoji: "🗳️",
    label: "L'agora et la démocratie athénienne",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/AgoraAthens5thcentury.png",
    text: "À la fin du VIe siècle avant notre ère, Athènes met en place un régime où les citoyens décident eux-mêmes des lois, en se réunissant sur l'agora, la place publique. C'est une des premières expériences de démocratie de l'histoire — mais réservée à une partie seulement de la population.",
    anchor: { distance: 2.8, angle: 300, height: DESK_H }
  },
  {
    id: "athletes",
    tier: "standard",
    emoji: "🏃",
    label: "Les athlètes des Jeux",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Discobulus.jpg",
    text: "Les concurrents des Jeux antiques s'entraînent pendant des mois avant l'épreuve. Course, lutte, lancer de disque ou de javelot : les vainqueurs reçoivent une simple couronne d'olivier, mais gagnent surtout un immense prestige dans leur cité d'origine.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "zeus_mythologie",
    tier: "standard",
    emoji: "⚡",
    label: "Zeus et les dieux de l'Olympe",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Zeus.jpg",
    text: "Les Grecs partagent une mythologie commune : Zeus, maître du ciel et de la foudre, règne avec les autres dieux sur le mont Olympe. Ces récits expliquent le monde et la nature humaine, et sont représentés sur les temples, les vases et les sculptures.",
    anchor: { distance: 1.2, angle: 210, height: SHELF_H }
  },
  {
    id: "sparte",
    tier: "riche",
    emoji: "🛡️",
    label: "Sparte, la cité guerrière",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Helmed_Hoplite_Sparta.JPG",
    text: "Face à Athènes, Sparte incarne un autre modèle de cité grecque : une société tournée vers l'entraînement militaire dès l'enfance, où la discipline collective compte plus que les arts ou le débat politique.",
    anchor: { distance: 6.0, angle: 130, height: DESK_H }
  },
  {
    id: "theatre",
    tier: "riche",
    emoji: "🎭",
    label: "Le théâtre grec",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/07Epidaurus_Theater07.jpg",
    text: "Les cités grecques construisent de vastes théâtres en plein air où se jouent tragédies et comédies devant des milliers de spectateurs. Le théâtre fait partie de la vie civique et religieuse autant que de la culture.",
    anchor: { distance: 3.0, angle: 340, height: WALL_H }
  },
  {
    id: "alphabet",
    tier: "riche",
    emoji: "🔤",
    label: "L'alphabet grec",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dipylon_Inscription.JPG",
    text: "Les Grecs adaptent un alphabet venu des Phéniciens en y ajoutant des voyelles, ce qui facilite la lecture et l'écriture. Ce système influencera à son tour l'alphabet latin, encore utilisé aujourd'hui dans une grande partie du monde.",
    anchor: { distance: 4.0, angle: 60, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getGreceObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_GRECE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_GRECE_OBJECTS = MUSEE_GRECE_OBJECTS;
window.getGreceObjectsForParcours = getGreceObjectsForParcours;
