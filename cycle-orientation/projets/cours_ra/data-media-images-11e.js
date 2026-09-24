// ============================================================================
// SALLE MÉDIA-IMAGES 11e — "Éducation aux médias et à l'image"
// Contenu reformulé à partir des 14 chapitres du manuel officiel EdMI 11e
// (Genève) : économie de l'attention, désinformation, presse écrite,
// réseaux sociaux, IA, réalités virtuelles, cinéma, analyse filmique,
// jeux vidéo, publicité et stéréotypes. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MEDIA_IMAGES_11E_OBJECTS = [
  {
    id: "economie_attention",
    tier: "court",
    emoji: "👁️",
    label: "L'économie de l'attention",
    text: "De nombreuses applications et plateformes en ligne sont conçues, dès leur interface, pour capter et retenir le plus longtemps possible l'attention de leurs utilisateurs — non pas par accident, mais parce que ce temps d'attention est ce qui génère leurs revenus publicitaires. On parle d'\"économie de l'attention\" pour décrire ce modèle.",
    fact: "Des mécanismes comme le défilement infini (qui ne montre jamais de \"fin\" de page) ou les notifications répétées sont volontairement conçus par des équipes spécialisées pour maximiser le temps passé sur une application, selon des principes proches de ceux utilisés dans la conception des jeux d'argent.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "desinformation",
    tier: "court",
    emoji: "❌",
    label: "Reconnaître la désinformation",
    text: "Une fausse information peut être diffusée par erreur (la mésinformation) ou de façon volontaire, dans une intention de manipuler (la désinformation) — une distinction essentielle, même si l'effet sur celui qui la reçoit peut être identique dans les deux cas.",
    fact: "Une information fausse mais choquante ou surprenante se propage généralement bien plus vite et bien plus largement sur les réseaux sociaux qu'une information vraie mais moins spectaculaire sur le même sujet — un phénomène documenté par plusieurs études sur la circulation de l'information en ligne.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "medias_sinformer",
    tier: "court",
    emoji: "📰",
    label: "Choisir ses médias pour s'informer",
    text: "Presse écrite, télévision, radio, sites d'actualité, réseaux sociaux : chaque média a ses propres méthodes de vérification, ses délais de publication et ses contraintes économiques, qui influencent directement la fiabilité et la profondeur de l'information qu'il propose — croiser plusieurs sources reste la meilleure protection contre une information biaisée ou incomplète.",
    fact: "Contrairement à une publication instantanée sur un réseau social, un article de presse écrite traditionnelle passe généralement par plusieurs étapes de vérification (journaliste, rédacteur en chef, parfois service juridique) avant sa publication — un processus plus lent, mais qui réduit le risque d'erreur.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "presse_ecrite",
    tier: "court",
    emoji: "🗞️",
    label: "La presse écrite, un modèle économique fragile",
    text: "Le modèle économique traditionnel de la presse écrite, longtemps basé sur la vente de journaux papier et la publicité imprimée, a été profondément bouleversé par le passage massif de l'information en ligne — obligeant de nombreux journaux à trouver de nouveaux équilibres entre gratuité, abonnements payants et publicité numérique.",
    fact: "De nombreux titres de presse historiques ont dû réduire drastiquement leurs équipes de journalistes, voire disparaître complètement, faute d'avoir réussi à transformer à temps leur modèle économique pour l'ère numérique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "reseaux_sociaux_medias",
    tier: "moyen",
    emoji: "📱",
    label: "Les réseaux sociaux, entre lien et algorithme",
    text: "Les réseaux sociaux permettent de rester en contact avec ses proches et de découvrir du contenu, mais ce que chaque utilisateur voit réellement défiler est sélectionné par un algorithme, pensé avant tout pour maximiser l'engagement (likes, commentaires, temps passé) — pas nécessairement pour informer le plus justement possible.",
    fact: "Deux personnes qui suivent les mêmes comptes sur un même réseau social peuvent voir des contenus très différents dans leur fil d'actualité, l'algorithme personnalisant en permanence ce qu'il pense être le plus susceptible de retenir chaque utilisateur.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "ia_dans_les_medias",
    tier: "moyen",
    emoji: "🤖",
    label: "L'intelligence artificielle dans les médias",
    text: "L'intelligence artificielle intervient aujourd'hui à plusieurs niveaux dans la production et la diffusion de l'information : rédaction automatique de courts articles, génération d'images ou de vidéos, sélection algorithmique des contenus recommandés — des usages qui posent de nouvelles questions sur l'authenticité de ce qu'on voit et lit en ligne.",
    fact: "Une image ou une vidéo hyperréaliste générée par IA (parfois appelée \"deepfake\") peut aujourd'hui représenter une personne réelle en train de dire ou faire quelque chose qui n'a jamais eu lieu, rendant certains contenus de plus en plus difficiles à distinguer d'un enregistrement authentique sans vérification technique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "numerique_environnement",
    tier: "moyen",
    emoji: "🌍",
    label: "Le coût environnemental du numérique",
    text: "Regarder une vidéo en streaming, stocker des fichiers dans le \"cloud\" ou simplement faire une recherche en ligne consomme de l'énergie électrique, dans des centres de données bien réels qui ont besoin d'être alimentés et refroidis — un impact environnemental souvent invisible pour l'utilisateur, mais loin d'être négligeable à l'échelle mondiale.",
    fact: "Le streaming vidéo à très haute définition consomme sensiblement plus de données et donc d'énergie que le même contenu regardé en définition standard — un choix de qualité d'image qui a un impact environnemental concret et mesurable.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "realites_virtuelles",
    tier: "moyen",
    emoji: "🥽",
    label: "Réalité virtuelle et réalité augmentée",
    text: "La réalité virtuelle plonge son utilisateur dans un environnement entièrement numérique, coupé du monde réel via un casque immersif, tandis que la réalité augmentée superpose des éléments numériques au monde réel visible autour de soi — deux technologies aux usages différents, du jeu vidéo à la formation professionnelle.",
    fact: "La réalité augmentée est déjà utilisée dans des domaines très concrets comme la chirurgie (superposer des informations médicales sur le corps du patient en direct) ou la maintenance industrielle (afficher des instructions directement sur une machine à réparer).",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "publicite_stereotypes",
    tier: "long",
    emoji: "📢",
    label: "Ce que révèlent les publicités",
    text: "Analyser une campagne publicitaire (cadrage, choix des personnages, slogan, musique) révèle souvent, au-delà du simple produit vendu, les représentations et les stéréotypes (de genre notamment) que la publicité choisit de mobiliser ou de renforcer pour toucher un besoin humain précis — appartenance, désir, réussite sociale.",
    fact: "Comparer plusieurs campagnes publicitaires d'une même marque sur plusieurs années permet souvent d'observer une évolution progressive des représentations qu'elle choisit de mettre en scène, reflétant en partie les changements plus larges de la société qui l'entoure.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "images_documentaires",
    tier: "long",
    emoji: "📷",
    label: "Une image documentaire n'est jamais neutre",
    text: "Même sans aucune manipulation ni trucage, une photographie ou une image dite \"documentaire\" implique toujours des choix : le cadrage, l'instant précis choisi, l'angle de vue — autant de décisions qui orientent, souvent sans mensonge, l'interprétation que le spectateur fera de la scène représentée.",
    fact: "Une même scène réelle, photographiée sous un angle légèrement différent ou à un instant à peine plus tôt ou plus tard, peut raconter une histoire visuelle complètement différente, alors même que rien n'a été retouché numériquement.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "cinema_industrie_culturelle",
    tier: "long",
    emoji: "🎬",
    label: "Le cinéma, un art et une industrie",
    text: "Un film n'est jamais seulement une œuvre artistique : c'est aussi le produit d'une industrie culturelle entière, avec ses studios de production, ses stratégies de distribution mondiale et ses impératifs commerciaux — des contraintes économiques qui influencent directement les choix artistiques faits en amont, du scénario jusqu'au montage final.",
    fact: "Le budget de production d'un grand film international peut aujourd'hui dépasser plusieurs centaines de millions de dollars, une somme qui explique en grande partie pourquoi les studios cherchent des histoires jugées \"sûres\" commercialement, comme les suites ou les adaptations déjà connues du public.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "analyse_filmique",
    tier: "long",
    emoji: "🎞️",
    label: "Décoder le langage du cinéma",
    text: "Un plan large, un gros plan, un mouvement de caméra, un choix de musique : chaque décision technique d'un réalisateur porte un sens précis et oriente volontairement l'émotion et la compréhension du spectateur — apprendre à repérer ces choix, c'est apprendre à \"lire\" un film au-delà de sa seule histoire racontée.",
    fact: "Un gros plan sur le visage d'un personnage, en resserrant brutalement le cadrage, est un des outils les plus efficaces du cinéma pour forcer l'identification émotionnelle du spectateur à ce personnage précis, à un instant clé de l'histoire.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
  {
    id: "jeux_video_medias",
    tier: "long",
    emoji: "🎮",
    label: "Le jeu vidéo, un média à part entière",
    text: "Contrairement à un film ou un livre, un jeu vidéo se caractérise par son interactivité : le joueur n'est pas seulement spectateur, il agit et influence directement le déroulement de l'histoire ou du gameplay — une différence fondamentale qui fait du jeu vidéo un média avec ses propres codes narratifs et techniques, distincts du cinéma dont il s'inspire pourtant souvent.",
    fact: "L'industrie mondiale du jeu vidéo génère aujourd'hui un chiffre d'affaires supérieur à celui du cinéma et de la musique enregistrée réunis, un rapport de force économique largement méconnu du grand public.",
    anchor: { distance: 1.6, angle: 280, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMediaImages11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MEDIA_IMAGES_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MEDIA_IMAGES_11E_OBJECTS = MUSEE_MEDIA_IMAGES_11E_OBJECTS;
window.getMediaImages11eObjectsForParcours = getMediaImages11eObjectsForParcours;
