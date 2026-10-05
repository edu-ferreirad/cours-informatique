// ============================================================================
// SALLE BONUS — ÉGYPTE PHARAONIQUE
// Contenu classique et bien établi (Toutankhamon, pyramides, momification,
// hiéroglyphes). NE PROVIENT PAS du moyen d'enseignement fourni (dont le
// chapitre "Alexandrie" traite de l'Égypte HELLÉNISTIQUE, ~2000 ans plus
// tard) — d'où le statut "bonus hors livre", clairement affiché à l'écran.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_EGYPTE_PHARAONIQUE_OBJECTS = [
  {
    id: "tombe_toutankhamon",
    tier: "court",
    emoji: "⚰️",
    label: "La tombe de Toutankhamon",
    text: "Découverte en 1922 dans la Vallée des Rois, la tombe du jeune pharaon Toutankhamon est l'une des rares à avoir été retrouvée presque intacte, avec son mobilier funéraire quasiment complet.",
    fact: "Toutankhamon est monté sur le trône vers l'âge de 9 ans et serait mort vers 18-19 ans.",
    anchor: { distance: 2.1, angle: 25, height: SHELF_H }
  },
  {
    id: "pyramides_gizeh",
    tier: "court",
    emoji: "🔺",
    label: "Les pyramides de Gizeh",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kheops-Pyramid.jpg",
    text: "Construite vers 2570 avant notre ère, la grande pyramide de Khéops est le plus grand tombeau royal jamais bâti et l'une des Sept Merveilles du monde antique — bien plus ancienne que l'Alexandrie des Ptolémées.",
    fact: "La grande pyramide est restée le plus haut monument construit par l'être humain pendant près de 3800 ans, jusqu'à la construction de la tour Eiffel en 1889.",
    anchor: { distance: 3.7, angle: 105, height: DESK_H }
  },
  {
    id: "momification",
    tier: "court",
    emoji: "🧻",
    label: "La momification",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/WLANL_-_andrevanb_-_kist_uit_de_27-_31e_dynastie_(4).jpg",
    text: "Pour préparer le défunt à l'au-delà, les embaumeurs égyptiens retirent les organes (sauf le cœur), dessèchent le corps, puis l'enveloppent de longues bandelettes de lin. Le processus complet dure environ 70 jours.",
    fact: "Le cerveau était retiré par le nez à l'aide de crochets, car les Égyptiens le jugeaient sans importance — contrairement au cœur, siège de la pensée selon eux.",
    anchor: { distance: 1.6, angle: 185, height: DESK_H }
  },
  {
    id: "hieroglyphes",
    tier: "court",
    emoji: "𓂀",
    label: "L'écriture hiéroglyphique",
    text: "Les hiéroglyphes sont l'écriture sacrée de l'Égypte ancienne, utilisée pendant plus de trois mille ans. Longtemps indéchiffrable, elle a été percée grâce à la pierre de Rosette, bien plus tard, à l'époque hellénistique.",
    fact: "Il existe plus de 700 signes hiéroglyphiques différents, certains représentant des sons, d'autres des idées entières.",
    anchor: { distance: 4.5, angle: 270, height: WALL_H }
  },
  {
    id: "masque_or",
    tier: "standard",
    emoji: "👑",
    label: "Le masque funéraire en or",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tutanchamun_Maske.jpg",
    text: "Le célèbre masque funéraire de Toutankhamon, en or massif incrusté de pierres semi-précieuses, recouvrait le visage de la momie du pharaon. Il symbolise la nature divine attribuée au souverain égyptien.",
    fact: "Le masque funéraire de Toutankhamon pèse plus de 10 kg d'or massif.",
    anchor: { distance: 2.7, angle: 320, height: DESK_H }
  },
  {
    id: "livre_des_morts",
    tier: "standard",
    emoji: "📜",
    label: "Le Livre des Morts",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Papyrus_of_Ani.jpg",
    text: "Ce recueil de formules et de prières est censé guider et protéger le défunt lors de son voyage périlleux dans l'au-delà, notamment lors de la pesée de son cœur devant les dieux.",
    fact: "Chaque exemplaire du Livre des Morts était personnalisé avec le nom de son propriétaire, un peu comme un guide de voyage sur mesure pour l'au-delà.",
    anchor: { distance: 5.3, angle: 55, height: DESK_H }
  },
  {
    id: "dieux_egyptiens",
    tier: "standard",
    emoji: "☀️",
    label: "Les dieux de l'Égypte ancienne",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bas_relief_d'Osiris_Ounnefer_et_Isis_dans_le_naos.JPG",
    text: "Rê le dieu-soleil, Osiris le dieu des morts, Anubis à tête de chacal qui veille sur les momies, Isis la déesse protectrice : le panthéon égyptien organise toute la vision de la mort et de l'au-delà.",
    fact: "Les Égyptiens ont vénéré plus de 1500 divinités différentes au fil de leur histoire.",
    anchor: { distance: 1.2, angle: 230, height: SHELF_H }
  },
  {
    id: "howard_carter",
    tier: "riche",
    emoji: "🔍",
    label: "Howard Carter, l'archéologue",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tuts_Tomb_Opened.JPG",
    text: "C'est l'archéologue britannique Howard Carter, financé par Lord Carnarvon, qui découvre l'entrée de la tombe de Toutankhamon en novembre 1922, après des années de recherches infructueuses dans la Vallée des Rois.",
    fact: "Howard Carter a cherché la tombe de Toutankhamon pendant plus de cinq ans avant de la trouver, financé par un riche lord anglais.",
    anchor: { distance: 6.0, angle: 145, height: DESK_H }
  },
  {
    id: "vallee_des_rois",
    tier: "riche",
    emoji: "🏞️",
    label: "La Vallée des Rois",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cime_thebaine.JPG",
    text: "Ce site funéraire, situé près de l'antique Thèbes (aujourd'hui Louxor), abrite les tombeaux creusés dans la roche de nombreux pharaons du Nouvel Empire, dont celui de Toutankhamon.",
    fact: "Plus de 60 tombes ont été découvertes dans la Vallée des Rois, mais celle de Toutankhamon reste la seule retrouvée presque intacte.",
    anchor: { distance: 3.2, angle:0, height: WALL_H }
  },
  {
    id: "malediction",
    tier: "riche",
    emoji: "👻",
    label: "La « malédiction du pharaon »",
    text: "Après la mort de plusieurs personnes liées à l'expédition, une légende de « malédiction » entourant la tombe de Toutankhamon se répand dans la presse des années 1920 — un phénomène surtout médiatique, sans fondement historique établi.",
    fact: "Lord Carnarvon, qui a financé les fouilles, est mort quelques mois après l'ouverture de la tombe — d'une simple infection, mais la légende s'en est emparée.",
    anchor: { distance: 4.3, angle: 75, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getEgyptePharaoniqueObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_EGYPTE_PHARAONIQUE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_EGYPTE_PHARAONIQUE_OBJECTS = MUSEE_EGYPTE_PHARAONIQUE_OBJECTS;
window.getEgyptePharaoniqueObjectsForParcours = getEgyptePharaoniqueObjectsForParcours;
