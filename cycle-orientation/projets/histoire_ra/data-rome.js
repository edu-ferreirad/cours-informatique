// ============================================================================
// SALLE ROME ANTIQUE — données du musée
// Textes reformulés à partir du chapitre "LA FONDATION DE ROME"
// (Hist_9e_LE_version_2024_TM.pdf, p.22-33) — aucune phrase copiée du livre.
// Mêmes conventions que data-grece.js (voir ce fichier pour le détail du
// système de positions RA et de paliers de parcours).
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_ROME_OBJECTS = [
  {
    id: "louve_capitoline",
    tier: "court",
    emoji: "🐺",
    label: "La louve et les jumeaux",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capitoline_she-wolf_Musei_Capitolini_MC1181.jpg",
    text: "Selon la légende, les jumeaux Romulus et Rémus, abandonnés, sont retrouvés et allaités par une louve au pied du mont Palatin. Ce mythe fondateur est représenté très tôt sur des pièces de monnaie et des mosaïques romaines.",
    fact: "La statue en bronze de la louve visible aujourd'hui daterait en réalité du Moyen Âge — seuls les deux bébés ont été ajoutés plus tard, à la Renaissance.",
    anchor: { distance: 2.2, angle: 30, height: SHELF_H }
  },
  {
    id: "palatin_aventin",
    tier: "court",
    emoji: "⛰️",
    label: "Le choix des collines",
    image: "assets/livre/rome-fondation-romulus.png",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Forum.jpg",
    text: "Devenus adultes, Romulus et Rémus veulent fonder une ville, mais ne s'entendent pas sur son emplacement : Romulus choisit le mont Palatin, Rémus préfère l'Aventin. Leur désaccord tourne mal et, selon le mythe, coûte la vie à Rémus.",
    fact: "Le mot « palais » vient directement du nom de la colline du Palatin, où les empereurs romains ont fini par construire leurs résidences.",
    anchor: { distance: 3.6, angle: 100, height: DESK_H }
  },
  {
    id: "fondation_753",
    tier: "court",
    emoji: "📜",
    label: "Rome, fondée en -753 ?",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Tiber_(II)_(4924152461).jpg",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Romolo_e_remo.jpg",
    text: "La tradition situe la fondation de Rome en 753 avant notre ère. Son emplacement, entre plusieurs collines, un fleuve navigable et une position proche de la mer Méditerranée, en fait un site stratégique qui favorise son développement.",
    fact: "La date légendaire du 21 avril 753 av. J.-C. est encore célébrée aujourd'hui à Rome comme le « Natale di Roma », l'anniversaire de la ville.",
    anchor: { distance: 1.5, angle: 170, height: DESK_H }
  },
  {
    id: "forum_capitole",
    tier: "court",
    emoji: "🏛️",
    label: "Le Forum et le Capitole",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Forum.jpg",
    text: "Au fil du temps, Rome se structure autour du Forum, place publique et cœur politique de la cité, et du Capitole, colline sacrée toute proche. Ces lieux deviennent le centre de la vie religieuse et politique romaine.",
    fact: "Le mot « forum » a donné son nom aux forums de discussion sur Internet : un lieu public pour échanger, 2000 ans plus tard.",
    anchor: { distance: 4.4, angle: 260, height: WALL_H }
  },
  {
    id: "republique_senat",
    tier: "standard",
    emoji: "⚖️",
    label: "La République et le Sénat",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Curia_Iulia.JPG",
    text: "La royauté romaine finit par être remplacée par un nouveau régime, la République : le pouvoir est alors partagé entre le Sénat, composé de grandes familles nobles, et le peuple romain.",
    fact: "Le mot « sénat » vient de senex, qui signifie « vieillard » : à l'origine, seuls des hommes âgés et expérimentés y siégeaient.",
    anchor: { distance: 2.8, angle: 310, height: DESK_H }
  },
  {
    id: "jules_cesar",
    tier: "standard",
    emoji: "🗡️",
    label: "Jules César",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Julius_Caesar.jpg",
    text: "Général et homme politique influent, Jules César cherche à concentrer un maximum de pouvoirs à la fin de la République. Accusé de vouloir devenir roi, il est assassiné ; son petit-neveu adoptif, Octavien, lui succède.",
    fact: "Le mois de juillet porte le nom de Jules César (Iulius) : c'est le mois de sa naissance.",
    anchor: { distance: 5.4, angle: 45, height: DESK_H }
  },
  {
    id: "auguste_empereur",
    tier: "standard",
    emoji: "👑",
    label: "Auguste, premier empereur",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue-Augustus.jpg",
    text: "Octavien reçoit à son tour l'ensemble des pouvoirs et devient le premier empereur romain sous le nom d'Auguste. Ce moment marque le passage de la République à l'Empire romain.",
    fact: "Le mois d'août porte le nom d'Auguste : le Sénat a renommé un mois du calendrier en son honneur, comme il l'avait fait pour César.",
    anchor: { distance: 1.3, angle: 220, height: SHELF_H }
  },
  {
    id: "mythe_enee",
    tier: "riche",
    emoji: "⚔️",
    label: "Énée, l'autre ancêtre légendaire",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aeneas'_Flight_from_Troy_by_Federico_Barocci.jpg",
    text: "Deux auteurs latins proches d'Auguste, Virgile et Tite-Live, relient l'histoire de Rome au héros troyen Énée, présenté comme l'ancêtre à la fois de Romulus et d'Auguste — reliant ainsi le nouvel empereur à un passé glorieux.",
    fact: "Virgile a passé dix ans à écrire l'Énéide et n'a jamais eu le temps de la relire et de la corriger entièrement avant sa mort.",
    anchor: { distance: 6.1, angle: 135, height: DESK_H }
  },
  {
    id: "propagande_auguste",
    tier: "riche",
    emoji: "🗿",
    label: "Le mythe au service du pouvoir",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ara_Pacis_Relief_Pax.jpg",
    text: "Auguste utilise activement le mythe de Romulus pour légitimer son pouvoir : statues, monuments et discours rappellent ce lien avec le fondateur légendaire de Rome. Le mythe devient un outil politique autant qu'une croyance.",
    fact: "L'Ara Pacis a été retrouvée en morceaux, enfouie sous plusieurs mètres de terre, puis reconstituée pièce par pièce au XXe siècle.",
    anchor: { distance: 3.1, angle: 350, height: WALL_H }
  },
  {
    id: "archeologie_lupercal",
    tier: "riche",
    emoji: "⛏️",
    label: "Le mythe face à l'archéologie",
    image: "assets/livre/rome-lupercal.png",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capitoline_she-wolf_Musei_Capitolini_MC1181.jpg",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Capitoline_she-wolf_Musei_Capitolini_MC1181.jpg",
    text: "Historiens et archéologues confrontent le mythe (comme la grotte dite du Lupercal, au pied du Palatin) aux traces réelles retrouvées sur le terrain — des cabanes anciennes découvertes sur le Palatin — pour distinguer légende et faits historiques.",
    fact: "La découverte du Lupercal en 2007 s'est faite presque par hasard, grâce à une caméra glissée dans un trou de forage de seulement 30 cm de diamètre.",
    anchor: { distance: 4.1, angle: 65, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getRomeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_ROME_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_ROME_OBJECTS = MUSEE_ROME_OBJECTS;
window.getRomeObjectsForParcours = getRomeObjectsForParcours;
