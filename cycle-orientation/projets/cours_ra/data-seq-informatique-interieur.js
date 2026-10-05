// SALLE SÉQUENCES — VISITE DE L'INTÉRIEUR D'UN ORDINATEUR — 12 composants
// Toutes les 12 photos sont réelles, libres de droits, sourcées sur Wikimedia Commons.
// Détail des licences et auteurs : voir credits.html, section « Intérieur d'un ordinateur ».
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_INTERIEUR_OBJECTS = [
  {
    id: "seq_info_interieur_1",
    tier: "court",
    emoji: "🔲",
    label: "La carte mère — le squelette qui relie tout",
    text: "C'est la grande plaque verte (ou noire) sur laquelle tous les autres composants viennent se brancher : processeur, mémoire, cartes, câbles. Elle sert de système nerveux central : chaque composant lui envoie et reçoit des informations par de minuscules pistes électriques gravées dessus, que tu peux voir à l'œil nu si tu regardes de près. Repère sur une photo les différents connecteurs : lesquels te semblent faits pour une carte, lesquels pour un câble ?",
    fact: "Une carte mère de taille standard (format ATX) mesure environ 30,5 × 24,4 cm — à peu près la taille d'une feuille A4, mais deux fois plus large.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ASRock_K7VT4A_Pro_Mainboard.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_2",
    tier: "court",
    emoji: "🧠",
    label: "Le processeur (CPU) — le cerveau qui calcule tout",
    text: "C'est une petite puce carrée, pas plus grande qu'un timbre-poste, mais c'est elle qui exécute littéralement chaque instruction d'un programme, des milliards de fois par seconde. Elle calcule en manipulant des 0 et des 1 à une vitesse telle que tout te semble instantané. Elle chauffe énormément en fonctionnant : c'est pour ça qu'elle est presque toujours cachée sous un gros bloc de refroidissement. Compare la taille d'un processeur à celle de ton ongle de pouce.",
    fact: "Un processeur moderne contient plusieurs milliards de transistors, chacun plus petit qu'un virus — invisibles même au meilleur microscope optique.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Intel_i5-2500.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_3",
    tier: "court",
    emoji: "💾",
    label: "La mémoire vive (RAM) — le bloc-notes ultra-rapide",
    text: "Ce sont les longues barrettes fines, souvent debout, plantées dans des connecteurs à côté du processeur. Elles stockent temporairement les informations dont l'ordinateur a besoin là, maintenant, pour aller plus vite que s'il devait tout relire sur le disque dur à chaque fois. Dès que tu éteins l'ordinateur, tout ce qui est dans la RAM disparaît — c'est un bloc-notes, pas un carnet. Compte le nombre de barrettes visibles sur une photo de carte mère.",
    fact: "Le mot RAM vient de l'anglais Random Access Memory : l'ordinateur peut aller chercher n'importe quelle information dedans directement, sans devoir tout parcourir dans l'ordre.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/RAM_module_SDRAM_1GiB.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_4",
    tier: "court",
    emoji: "💿",
    label: "Le disque dur / SSD — la mémoire qui n'oublie jamais",
    text: "C'est là que sont stockés durablement tes fichiers, tes photos, le système d'exploitation — même une fois l'ordinateur éteint. Un disque dur classique (HDD) contient des disques magnétiques qui tournent très vite, lus par une tête mobile, un peu comme un tourne-disque miniature. Un SSD, plus récent, n'a aucune pièce mobile : il stocke l'information directement dans des puces électroniques, ce qui le rend plus rapide et plus silencieux. Devine, avant de vérifier, lequel des deux te semble le plus fragile en cas de choc.",
    fact: "Un SSD n'a aucune pièce mécanique en mouvement, contrairement au disque dur classique : c'est pourquoi il résiste bien mieux aux chocs et aux chutes.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hard_disk_platters_and_head.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_5",
    tier: "moyen",
    emoji: "🔌",
    label: "L'alimentation (PSU) — le cœur qui pompe l'électricité",
    text: "C'est souvent une boîte métallique assez lourde, à l'arrière du boîtier, avec un gros ventilateur et une multitude de câbles colorés qui en sortent. Elle transforme le courant électrique de ta prise murale (qui n'irait pas du tout aux composants tel quel) en plusieurs tensions précises et stables que chaque pièce de l'ordinateur peut utiliser sans griller. Repère sur une photo les différents câbles : penses-tu qu'ils vont tous vers le même composant ?",
    fact: "Une alimentation de bonne qualité est cruciale : une tension mal stabilisée peut, à la longue, endommager silencieusement tous les autres composants qu'elle alimente.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ATX_power_supply_unit-open.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_6",
    tier: "moyen",
    emoji: "🎮",
    label: "La carte graphique (GPU) — l'artiste qui dessine l'écran",
    text: "C'est souvent la plus grande carte à l'intérieur du boîtier, avec ses propres ventilateurs. Elle calcule chaque pixel de ce que tu vois à l'écran, en particulier pour les jeux vidéo ou la vidéo en haute définition, des tâches que le processeur seul ferait beaucoup trop lentement. Elle contient en fait son propre petit processeur, spécialisé uniquement dans ce type de calcul visuel. Observe une photo et compte combien de ventilateurs elle possède.",
    fact: "Une carte graphique peut effectuer des milliers de calculs en même temps (en parallèle), là où un processeur classique en fait beaucoup moins à la fois mais chacun plus vite.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/RTX_3090_Founders_Edition!.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_7",
    tier: "moyen",
    emoji: "🌬️",
    label: "Le système de refroidissement — pour ne jamais surchauffer",
    text: "Ce sont les ventilateurs et les blocs métalliques à ailettes (dissipateurs) posés sur le processeur et parfois sur la carte graphique. La chaleur produite par les calculs électriques doit être évacuée en permanence, sinon les composants se mettent à ralentir volontairement pour se protéger, ou pire, s'endommagent. Le dissipateur capte la chaleur et l'étale sur une grande surface métallique, que le ventilateur souffle ensuite vers l'extérieur du boîtier. Touche (doucement, à froid) un dissipateur en métal et explique pourquoi sa forme en ailettes aide à refroidir plus vite qu'un simple bloc plein.",
    fact: "Certains ordinateurs puissants utilisent même un liquide de refroidissement, exactement comme le circuit de refroidissement d'un moteur de voiture.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/CPU-cooler-02_hg.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_8",
    tier: "moyen",
    emoji: "📶",
    label: "La carte réseau — la porte vers Internet",
    text: "C'est une petite carte, parfois intégrée directement à la carte mère, qui permet à l'ordinateur d'envoyer et de recevoir des données par câble Ethernet ou par Wi-Fi. Elle transforme les informations numériques de l'ordinateur en signaux électriques ou en ondes radio compréhensibles par le reste du réseau, et fait l'inverse pour ce qu'elle reçoit. Compare le port Ethernet (rectangulaire) à un port USB sur une photo : lequel te semble plus large ?",
    fact: "Chaque carte réseau possède une adresse unique au monde, un peu comme un numéro de plaque d'immatriculation, appelée adresse MAC.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethernet_NIC_100Mbit_PCI.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_9",
    tier: "long",
    emoji: "🖥️",
    label: "Le boîtier — la maison qui protège tout",
    text: "C'est l'enveloppe métallique ou plastique qui contient et protège tous les composants, tout en les laissant suffisamment ventilés pour ne pas surchauffer. Son design n'est pas qu'esthétique : l'emplacement et le sens des ventilateurs du boîtier créent un vrai courant d'air qui fait entrer l'air frais d'un côté et ressortir l'air chaud de l'autre. Observe une photo de boîtier ouvert : d'après toi, par où l'air frais entre-t-il, et par où ressort-il chaud ?",
    fact: "Un boîtier mal ventilé peut faire fonctionner tous les composants plus lentement qu'ils ne le pourraient, simplement à cause de la chaleur qui s'accumule à l'intérieur.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ATX_computer_case.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_10",
    tier: "long",
    emoji: "🔗",
    label: "Les ports et connecteurs — les portes vers l'extérieur",
    text: "Ce sont les prises visibles à l'arrière (et parfois à l'avant) du boîtier : USB, HDMI, jack audio, Ethernet. Chacune a une forme différente exprès, pour qu'on ne puisse pas se tromper de câble en la branchant. Elles relient l'ordinateur à tout ce qui est extérieur à lui : écran, clavier, souris, Internet, enceintes. Compte, sur une photo de l'arrière d'un boîtier, combien de ports différents tu arrives à identifier.",
    fact: "Le port USB-C, de plus en plus courant, a l'avantage de pouvoir se brancher dans les deux sens — contrairement à l'ancien USB-A, qu'il fallait souvent essayer deux fois.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Back_Panel_Connectors_PCChips_M925LR_Motherboard.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_11",
    tier: "long",
    emoji: "🔋",
    label: "La pile CMOS — la mémoire minuscule qui ne dort jamais",
    text: "C'est une toute petite pile ronde, plate, posée directement sur la carte mère, qui ressemble à une pile de montre. Elle alimente en permanence une mémoire minuscule qui garde en mémoire la date, l'heure, et certains réglages de base de l'ordinateur, même quand il est complètement débranché du secteur. Si cette pile s'épuise après plusieurs années, l'ordinateur « oublie » la date à chaque redémarrage. Cherche sur une photo de carte mère cette petite pile ronde argentée : à côté de quel autre composant se trouve-t-elle généralement ?",
    fact: "Cette pile dure en général de 3 à 5 ans ; un ordinateur qui redemande sans arrêt l'heure et la date au démarrage a presque toujours une pile CMOS à changer.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Battery-lithium-cr2032.jpg?width=1000"
  },
  {
    id: "seq_info_interieur_12",
    tier: "long",
    emoji: "🔀",
    label: "Les câbles internes — les routes de l'information et de l'énergie",
    text: "Ce sont les câbles plats ou ronds qui relient les différents composants entre eux : câbles SATA pour les disques, câbles d'alimentation qui partent du bloc d'alimentation vers chaque pièce. Certains transportent uniquement de l'énergie électrique, d'autres uniquement des données, et il ne faut jamais confondre les deux. Sur une photo de l'intérieur d'un boîtier, essaie de repérer un câble qui part clairement du bloc d'alimentation, et un autre qui relie deux composants entre eux sans passer par l'alimentation.",
    fact: "Un montage d'ordinateur mal câblé, avec des câbles qui bloquent la circulation de l'air, peut à lui seul faire grimper la température de plusieurs degrés à l'intérieur du boîtier.",
    anchor: { distance: 3.1, angle: 160, height: WALL_H },
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SATA-cable.jpg?width=1000"
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqInformatiqueInterieurObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_INTERIEUR_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_INFORMATIQUE_INTERIEUR_OBJECTS = MUSEE_SEQ_INFORMATIQUE_INTERIEUR_OBJECTS;
window.getSeqInformatiqueInterieurObjectsForParcours = getSeqInformatiqueInterieurObjectsForParcours;
