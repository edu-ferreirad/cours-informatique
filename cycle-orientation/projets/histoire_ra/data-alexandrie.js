// ============================================================================
// SALLE ALEXANDRIE (ÉGYPTE HELLÉNISTIQUE) — données du musée
// Textes reformulés à partir du chapitre "ALEXANDRIE"
// (Hist_9e_LE_version_2024_TM.pdf, p.34-47) — aucune phrase copiée du livre.
// Cette salle couvre l'Égypte SOUS LES PTOLÉMÉES (fondée -331/-305), pas
// l'Égypte pharaonique plus ancienne (Toutankhamon) : voir la salle bonus
// séparée pour cette période-là.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_ALEXANDRIE_OBJECTS = [
  {
    id: "phare_alexandrie",
    tier: "court",
    emoji: "🗼",
    label: "Le phare d'Alexandrie",
    text: "Construit vers 280 avant notre ère, le phare d'Alexandrie est visible depuis 50 km en mer et compte parmi les Sept Merveilles du monde antique. Il sera détruit par des tremblements de terre plusieurs siècles plus tard.",
    fact: "Le mot « phare » vient directement du nom de l'île où il se trouvait : Pharos.",
    anchor: { distance: 2.4, angle: 15, height: SHELF_H }
  },
  {
    id: "fondation_alexandrie",
    tier: "court",
    emoji: "🏙️",
    label: "La fondation d'Alexandrie",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ptoleme2_Vincenzo_Camuccini_1813.jpg",
    text: "Après la mort d'Alexandre le Grand en 323 avant notre ère, ses généraux se partagent son empire. L'un d'eux, Ptolémée, devient roi d'Égypte en 305 av. J.-C. et fait d'Alexandrie la capitale du royaume des Ptolémées, le plus riche des royaumes hellénistiques.",
    fact: "Alexandre le Grand est mort à 32 ans, sans jamais avoir vu achevée la ville qui porte son nom.",
    anchor: { distance: 3.8, angle: 90, height: DESK_H }
  },
  {
    id: "mouseion",
    tier: "court",
    emoji: "📚",
    label: "Le Mouseîon, une université antique",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancientlibraryalex.jpg",
    text: "Le Mouseîon d'Alexandrie attire les plus grands savants du monde grec. On y fait progresser l'astronomie, les mathématiques, la géographie et la médecine — un peu comme une université avant l'heure, avec salle commune et lieu de conférence.",
    fact: "Le mot « musée » vient du grec Mouseion, « la maison des Muses » — exactement le nom de ce centre de recherche antique.",
    anchor: { distance: 1.7, angle: 175, height: DESK_H }
  },
  {
    id: "cleopatre",
    tier: "court",
    emoji: "👸",
    label: "Cléopâtre, dernière reine d'Égypte",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cleopatra_bust_in_the_British_Museum.jpg",
    text: "Cléopâtre VII est la dernière reine d'Égypte. Alliée successivement à Jules César puis à Marc-Antoine, elle est finalement vaincue par le futur empereur Auguste et se donne la mort en 30 avant notre ère.",
    fact: "Cléopâtre parlait au moins sept langues et aurait été la première de sa dynastie à apprendre l'égyptien, la langue de son propre peuple.",
    anchor: { distance: 4.6, angle: 265, height: WALL_H }
  },
  {
    id: "ptolemees_pharaons",
    tier: "standard",
    emoji: "👑",
    label: "Des rois grecs devenus pharaons",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ptolemy_I_Soter_Louvre_Ma849.jpg",
    text: "Pendant trois siècles, les Ptolémées règnent sur l'Égypte tout en reprenant les traditions pharaoniques : ils portent le titre de pharaon et sont honorés comme des dieux, mêlant ainsi coutumes grecques et égyptiennes.",
    fact: "Les Ptolémées pratiquaient souvent le mariage entre frères et sœurs, une coutume pharaonique égyptienne, pour garder le pouvoir dans la famille.",
    anchor: { distance: 2.9, angle: 315, height: DESK_H }
  },
  {
    id: "machine_anticythere",
    tier: "standard",
    emoji: "⚙️",
    label: "Les savants et leurs machines",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/NAMA_Machine_d'Anticyth%C3%A8re_1.jpg",
    text: "Les savants d'Alexandrie construisent des machines utilisant la vapeur et l'air comprimé, et développent des instruments d'une grande précision — certaines de leurs techniques ne seront redécouvertes qu'au XIXe siècle.",
    fact: "Découverte dans une épave en 1901, la machine d'Anticythère n'a été vraiment comprise qu'un siècle plus tard, grâce à des scanners à rayons X.",
    anchor: { distance: 5.5, angle: 50, height: DESK_H }
  },
  {
    id: "pierre_rosette",
    tier: "standard",
    emoji: "🪨",
    label: "La pierre de Rosette",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rosetta_Stone.JPG",
    text: "Cette stèle porte un même texte en trois écritures : hiéroglyphes, démotique et grec. Grâce à elle, l'égyptologue Jean-François Champollion parvient, au XIXe siècle, à déchiffrer pour la première fois l'écriture hiéroglyphique.",
    fact: "Champollion a mis plus de dix ans à déchiffrer les hiéroglyphes grâce à la pierre de Rosette, en comparant patiemment les trois écritures gravées.",
    anchor: { distance: 1.4, angle: 225, height: SHELF_H }
  },
  {
    id: "tombeau_alexandre",
    tier: "riche",
    emoji: "⚰️",
    label: "Le tombeau introuvable d'Alexandre",
    text: "Le Sôma, tombeau d'Alexandre le Grand à Alexandrie, est mentionné dans les sources anciennes mais n'a jamais été localisé avec certitude par les archéologues — un vrai mystère encore non résolu.",
    fact: "Des dizaines d'expéditions ont recherché le tombeau d'Alexandre depuis l'Antiquité — sans succès à ce jour.",
    anchor: { distance: 6.2, angle: 140, height: DESK_H }
  },
  {
    id: "sept_merveilles",
    tier: "riche",
    emoji: "🌍",
    label: "Les Sept Merveilles du monde",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kheops-Pyramid.jpg",
    text: "Le phare d'Alexandrie figure aux côtés de monuments bien plus anciens, comme la pyramide de Khéops à Gizeh (vers 2570 av. J.-C.), dans la liste antique des Sept Merveilles du monde — un rappel qu'Égypte pharaonique et Égypte hellénistique se séparent par près de 2000 ans d'histoire.",
    fact: "Sur les Sept Merveilles antiques, seule la grande pyramide de Gizeh existe encore aujourd'hui.",
    anchor: { distance: 3.3, angle:355, height: WALL_H }
  },
  {
    id: "ville_hellenistique",
    tier: "riche",
    emoji: "🏟️",
    label: "Une ville hellénistique",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Berlin_-_Pergamonmuseum_-_Altar_01.jpg",
    text: "Comme les autres grandes villes hellénistiques, Alexandrie compte des temples, un théâtre, des gymnases et des bains publics — un mélange d'architecture grecque et de cultures locales, typique de cette époque.",
    fact: "Des villes hellénistiques comme Alexandrie ou Pergame comptaient parfois plus de 200 000 habitants, des tailles considérables pour l'époque.",
    anchor: { distance: 4.2, angle: 70, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getAlexandrieObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_ALEXANDRIE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_ALEXANDRIE_OBJECTS = MUSEE_ALEXANDRIE_OBJECTS;
window.getAlexandrieObjectsForParcours = getAlexandrieObjectsForParcours;
