// ============================================================================
// SALLE MYTHOLOGIE — données du musée
// Textes reformulés à partir des mythes évoqués dans les manuels de latin
// Monstrum (Fascicules I et II, éd. 2024) — aucune phrase copiée du manuel.
// Mêmes conventions que data-grece.js (positions RA, paliers de parcours).
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MYTHOLOGIE_OBJECTS = [
  {
    id: "hercule_travaux",
    tier: "court",
    emoji: "💪",
    label: "Les douze travaux d'Hercule",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Herakles_Farnese_MAN_Napoli_Inv6001_n01.jpg",
    text: "Pour racheter une faute, Hercule doit accomplir douze travaux presque impossibles imposés par le roi Eurysthée : tuer le lion de Némée, vaincre l'hydre de Lerne, ou encore ramener Cerbère, le chien à trois têtes qui garde les Enfers.",
    anchor: { distance: 2.3, angle: 35, height: SHELF_H }
  },
  {
    id: "troie_cheval",
    tier: "court",
    emoji: "🐴",
    label: "Le cheval de Troie",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mykmm208.jpg",
    text: "Après dix ans de siège sans succès, les Grecs offrent aux Troyens un immense cheval de bois en cadeau. Des soldats grecs s'y cachent : la nuit venue, ils sortent et ouvrent les portes de la ville, ce qui scelle la chute de Troie.",
    anchor: { distance: 3.8, angle: 110, height: DESK_H }
  },
  {
    id: "jason_toison",
    tier: "court",
    emoji: "🐏",
    label: "Jason et la Toison d'or",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jason_and_the_Golden_Fleece.jpg",
    text: "Jason embarque avec ses compagnons à bord de l'Argo, un navire magique capable de parler et de prédire l'avenir, pour aller chercher la Toison d'or. Il est aidé dans sa quête par la magicienne Médée.",
    anchor: { distance: 1.6, angle: 180, height: DESK_H }
  },
  {
    id: "dieux_attributs",
    tier: "court",
    emoji: "⚡",
    label: "Les attributs des dieux",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Statue_of_Zeus.jpg",
    text: "Chaque dieu romain se reconnaît à ses attributs : l'aigle et la foudre pour Jupiter, le trident pour Neptune, la chouette et le casque pour Minerve, les ailes pour Mercure, la couronne de laurier pour Apollon.",
    anchor: { distance: 4.5, angle: 270, height: WALL_H }
  },
  {
    id: "persee_meduse",
    tier: "standard",
    emoji: "🐍",
    label: "Persée et la Gorgone Méduse",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Perseus_and_the_Graiae_1892_Edward_Burne-Jones.jpg",
    text: "La Gorgone Méduse a des serpents à la place des cheveux, et son regard change en pierre quiconque le croise. Pour la vaincre sans être pétrifié, Persée observe son reflet dans un bouclier poli, utilisé comme un miroir.",
    anchor: { distance: 2.9, angle: 315, height: DESK_H }
  },
  {
    id: "icare_dedale",
    tier: "standard",
    emoji: "🪶",
    label: "Icare et le labyrinthe de Dédale",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Gowy-icaro-prado.jpg",
    text: "Dédale, l'architecte qui a lui-même conçu le labyrinthe du Minotaure, fabrique des ailes de plumes et de cire pour s'en échapper avec son fils Icare. Mais celui-ci s'approche trop du soleil, qui fait fondre la cire de ses ailes.",
    anchor: { distance: 5.5, angle: 55, height: DESK_H }
  },
  {
    id: "pandore",
    tier: "standard",
    emoji: "📦",
    label: "La boîte de Pandore",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pandora_-_John_William_Waterhouse.jpg",
    text: "Pandore, dont le nom signifie « parée de tous les dons », reçoit une boîte qu'elle ne doit jamais ouvrir. Sa curiosité l'emporte : en l'ouvrant, elle laisse échapper pour toujours tous les malheurs du monde.",
    anchor: { distance: 1.4, angle: 225, height: SHELF_H }
  },
  {
    id: "narcisse_echo",
    tier: "riche",
    emoji: "🪞",
    label: "Narcisse et Écho",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/John_William_Waterhouse_-_Echo_and_Narcissus_-_Google_Art_Project.jpg",
    text: "Narcisse tombe amoureux de son propre reflet dans l'eau et ne parvient plus à s'en détacher. La nymphe Écho, qu'il a repoussée, se consume de chagrin jusqu'à ne devenir plus qu'une voix, qui répète sans fin les derniers mots qu'on lui adresse.",
    anchor: { distance: 6.1, angle: 145, height: DESK_H }
  },
  {
    id: "arachne_minerve",
    tier: "riche",
    emoji: "🕸️",
    label: "Arachné changée en araignée",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Les_fileuses.jpg",
    text: "Trop fière de son talent de tisseuse, Arachné défie la déesse Minerve dans un concours de tissage. Vaincue et humiliée, elle est transformée en araignée, condamnée à tisser sans fin de belles toiles.",
    anchor: { distance: 3.3, angle: 355, height: WALL_H }
  },
  {
    id: "sirenes_ulysse",
    tier: "riche",
    emoji: "🎶",
    label: "Ulysse et les Sirènes",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/WATERHOUSE_-_Ulises_y_las_Sirenas_(National_Gallery_of_Victoria,_Melbourne,_1891._%C3%93leo_sobre_lienzo,_100.6_x_202_cm).jpg",
    text: "Le chant des Sirènes est si envoûtant qu'il pousse les marins à se jeter contre les rochers. Pour l'entendre sans se mettre en danger, Ulysse bouche les oreilles de son équipage avec de la cire et se fait attacher au mât de son navire.",
    anchor: { distance: 4.3, angle: 75, height: DESK_H }
  },
  {
    id: "chevaliers_zodiaque",
    tier: "riche",
    emoji: "♈",
    label: "Les mythes aujourd'hui : les Chevaliers du Zodiaque",
    text: "Dans ce manga et dessin animé japonais, les guerriers portent des armures nommées d'après les constellations du zodiaque — elles-mêmes tirées de figures de la mythologie grecque (Persée, le Cygne, le Dragon...). Les noms et symboles antiques survivent, mais l'histoire racontée est entièrement nouvelle.",
    anchor: { distance: 2.5, angle: 200, height: DESK_H }
  },
  {
    id: "percy_jackson",
    tier: "riche",
    emoji: "📖",
    label: "Les mythes aujourd'hui : Percy Jackson",
    text: "Cette saga imagine que les dieux et héros grecs existent encore aujourd'hui : Poséidon, Hercule ou la Toison d'or sont transposés dans le monde contemporain. Une façon moderne de garder les mythes vivants, très différente du récit antique d'origine.",
    anchor: { distance: 5.0, angle: 290, height: SHELF_H }
  },
  {
    id: "choc_titans",
    tier: "riche",
    emoji: "🎬",
    label: "Les mythes aujourd'hui : Le Choc des Titans",
    text: "Ce film adapte librement la légende de Persée affrontant la Gorgone Méduse, en prenant de grandes libertés avec le mythe original (ajout d'un kraken, d'une histoire d'amour...). Comparer le film au mythe permet de repérer ce qui a été gardé, et ce qui a été inventé.",
    anchor: { distance: 1.8, angle: 130, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getMythologieObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MYTHOLOGIE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MYTHOLOGIE_OBJECTS = MUSEE_MYTHOLOGIE_OBJECTS;
window.getMythologieObjectsForParcours = getMythologieObjectsForParcours;
