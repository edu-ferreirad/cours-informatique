// ============================================================================
// SALLE LATINE — « Chez les Nautius » — données du musée
// Textes reformulés à partir de l'histoire et des dossiers documentaires des
// manuels de latin Monstrum (Fascicules I et II, éd. 2024) — aucune phrase
// copiée du manuel. La famille Nautius (Titus, Flavia Gemella, Nautia,
// Lucius, le chien Monstrum) vit entre Rome et Genève, chez leur grand-oncle
// Publius Nautius Vetus.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_LATINE_OBJECTS = [
  {
    id: "maison_romaine",
    tier: "court",
    emoji: "🏠",
    label: "La maison romaine",
    image: "assets/livre/latine-maison-romaine.png",
    text: "Chez les Nautius, la maison s'organise autour de l'atrium et de l'impluvium, un bassin qui recueille l'eau de pluie tombée par une ouverture du toit (le compluvium). Plus loin se trouvent le péristyle, la salle à manger (triclinium) et les chambres (cubicula).",
    fact: "Le trou dans le toit au-dessus de l'impluvium (le compluvium) n'était jamais fermé : la pluie tombait directement dans le bassin, même en hiver.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "objets_quotidien",
    tier: "court",
    emoji: "🏺",
    label: "Les objets du quotidien",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient_Roman_amphoras_in_Pompeii.jpg",
    text: "Amphore pour le vin, lampe à huile pour s'éclairer, balsamaire pour le parfum, petit biberon en terre cuite pour le lait des nourrissons : ces objets témoignent de la vie de tous les jours dans une famille romaine.",
    fact: "Le mot « biberon » viendrait du latin bibere, « boire » : les tout premiers biberons en terre cuite existaient donc déjà il y a 2000 ans.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "gladiateurs",
    tier: "court",
    emoji: "⚔️",
    label: "Les gladiateurs de l'amphithéâtre",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Borghese_gladiator_1_mosaic_dn_r2_c2.jpg",
    text: "Tous les gladiateurs ne combattent pas avec les mêmes armes : le rétiaire se bat avec un trident et un filet, tandis que le mirmillon porte un glaive et un bouclier. Femmes et hommes ne sont pas assis ensemble dans les amphithéâtres romains.",
    fact: "Contrairement à une idée reçue, la plupart des combats ne se terminaient pas par la mort : un gladiateur bien entraîné coûtait cher à former.",
    anchor: { distance: 1.6, angle: 160, height: DESK_H }
  },
  {
    id: "voyage_geneve",
    tier: "court",
    emoji: "🗺️",
    label: "De Rome à Genève",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/TabulaPeutingeriana.jpg",
    text: "La famille Nautius voyage régulièrement de Rome jusqu'à Genève pour rendre visite à leur grand-oncle Publius Nautius Vetus. Le trajet, ponctué de villes comme Pise, Gênes, Turin et Martigny, représente plusieurs centaines de milles romains.",
    fact: "590 milles romains séparaient Rome de Genève, soit environ 870 km — un trajet qui pouvait prendre plusieurs semaines à pied ou à cheval.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "inscription_jupiter",
    tier: "standard",
    emoji: "🪨",
    label: "Une inscription retrouvée en Suisse",
    image: "assets/livre/latine-inscription-jupiter.png",
    text: "Une stèle dédiée à Jupiter Poeninus a été retrouvée dans les Alpes suisses, offerte par un marchand d'esclaves helvète. Ces inscriptions, écrites au datif pour honorer un dieu, montrent que la religion romaine s'était répandue jusque dans les régions alpines.",
    fact: "Le nom complet d'un citoyen romain comportait trois parties (les tria nomina) : c'est en partie grâce à ce système que les archéologues identifient encore qui a offert telle ou telle inscription.",
    anchor: { distance: 2.8, angle: 300, height: DESK_H }
  },
  {
    id: "villa_geneve",
    tier: "standard",
    emoji: "🏛️",
    label: "Une villa romaine près du Léman",
    image: "assets/livre/latine-villa-geneve.png",
    text: "Publius Nautius Vetus possède une grande villa sur la rive du Léman. Une maquette conservée au Musée d'art et d'histoire de Genève montre l'organisation de ce type de demeure romaine, avec son péristyle et son atrium.",
    fact: "Cette maquette, conservée au Musée d'art et d'histoire de Genève, a été réalisée en comparant les sources écrites antiques et les fouilles archéologiques réelles.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "mercure_voyage",
    tier: "standard",
    emoji: "🪽",
    label: "Mercure, protecteur des voyageurs",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Roman_-_Mercury_-_Walters_54605_-_Three_Quarter_Right.jpg",
    text: "Avant chaque long trajet, la famille Nautius adresse ses remerciements à Mercure, le dieu qui veille sur les voyageurs. On reconnaît sa statue à ses petites ailes, souvent fixées à la tête ou aux pieds.",
    fact: "Mercure est aussi le dieu du commerce et des voleurs — un point commun pas si innocent, puisque les voyageurs romains risquaient autant les intempéries que les bandits de grand chemin.",
    anchor: { distance: 1.2, angle: 210, height: SHELF_H }
  },
  {
    id: "vesuve_pompei",
    tier: "riche",
    emoji: "🌋",
    label: "L'éruption du Vésuve",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Composition_ruins_Pompeii.jpg",
    text: "Alors qu'il voyage à travers l'Italie, Publius Nautius Vetus se trouve à Pompéi lorsque le Vésuve entre en éruption : flammes, cendres et tremblements de terre poussent les habitants à fuir, mais beaucoup ne survivent pas à la catastrophe.",
    fact: "L'éruption du Vésuve en 79 apr. J.-C. est connue en détail grâce à une lettre authentique de Pline le Jeune, témoin oculaire, qui a vu mourir son oncle sur place.",
    anchor: { distance: 6.0, angle: 130, height: DESK_H }
  },
  {
    id: "cite_romaine_type",
    tier: "riche",
    emoji: "🏙️",
    label: "Le plan type d'une cité romaine",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Timgad10.JPG",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Udine_aquileia2.jpg",
    text: "Où qu'elles se trouvent dans l'Empire, les villes romaines partagent des points communs : un plan en grille avec deux grands axes (cardo et decumanus), un forum, des thermes, un amphithéâtre. Martigny et Aoste, aujourd'hui en Suisse et en Italie, en sont d'anciens exemples.",
    fact: "Deux villes romaines de la Suisse et de l'Italie actuelles, Martigny et Aoste, suivaient ce même plan en grille : elles s'appelaient alors Forum Claudii Vallensium et Augusta Praetoria Salassorum.",
    anchor: { distance: 3.0, angle: 340, height: WALL_H }
  },
  {
    id: "monstrum_presage",
    tier: "riche",
    emoji: "🐕",
    label: "Monstrum, le petit chien",
    text: "Monstrum, le chien de la famille, n'est pas un animal ordinaire : sa disparition soudaine au moment même où le Vésuve entre en éruption est interprétée par la famille comme un présage envoyé par les dieux.",
    fact: "Dans l'histoire, Monstrum le chien réapparaît à chaque moment important de l'intrigue — un indice que son nom (« monstre » en latin) cache peut-être un rôle plus grand que celui d'un simple animal de compagnie.",
    anchor: { distance: 4.0, angle: 60, height: DESK_H }
  },
];

const TIER_ORDER = { court: 1, standard: 2, riche: 3 };

function getLatineObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_LATINE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_LATINE_OBJECTS = MUSEE_LATINE_OBJECTS;
window.getLatineObjectsForParcours = getLatineObjectsForParcours;
