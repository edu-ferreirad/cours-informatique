// ============================================================================
// SALLE GÉOGRAPHIE 10e — "Climat, industrie, migrations"
// Contenu reformulé à partir des 3 dossiers du manuel 10e. Aucun énoncé
// n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_GEOGRAPHIE_10E_OBJECTS = [
  {
    id: "quest_ce_climat",
    tier: "court",
    emoji: "🌡️",
    label: "Qu'est-ce qu'un climat ?",
    text: "Le climat n'est pas la météo du jour : c'est la moyenne des conditions atmosphériques observées sur une région, calculée sur plusieurs décennies. Une journée de neige exceptionnelle ne remet donc pas en cause, à elle seule, un climat qui se réchauffe globalement.",
    fact: "Pour définir un climat de référence, les scientifiques utilisent généralement des moyennes calculées sur trente années complètes.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "effet_de_serre",
    tier: "court",
    emoji: "🌫️",
    label: "L'effet de serre, naturel puis amplifié",
    text: "L'effet de serre naturel retient une partie de la chaleur du soleil dans l'atmosphère et rend la Terre habitable. Depuis l'ère industrielle, les activités humaines relâchent des quantités de gaz à effet de serre bien plus importantes, amplifiant ce phénomène et réchauffant le climat.",
    fact: "Sans aucun effet de serre naturel, la température moyenne à la surface de la Terre serait d'environ -18 °C, largement en dessous du point de congélation de l'eau.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "adapter_ou_partir",
    tier: "court",
    emoji: "🏝️",
    label: "S'adapter ou partir ?",
    text: "Face à la montée des eaux, aux sécheresses ou aux canicules extrêmes, les populations concernées doivent choisir entre adapter leur mode de vie (digues, nouvelles cultures, isolation des bâtiments) ou quitter des régions devenues trop difficiles à habiter.",
    fact: "Certains États insulaires du Pacifique envisagent sérieusement des plans de relocalisation complète de leur population vers d'autres pays, en cas de disparition de leur territoire sous les eaux.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "canicule_norme",
    tier: "court",
    emoji: "🥵",
    label: "La canicule, bientôt la norme ?",
    text: "Des vagues de chaleur autrefois considérées comme exceptionnelles deviennent statistiquement plus fréquentes et plus intenses avec le réchauffement climatique, posant de nouveaux défis pour la santé publique, l'agriculture et les infrastructures urbaines.",
    fact: "Lors d'une canicule, les villes sont souvent plusieurs degrés plus chaudes que la campagne environnante — un phénomène appelé \"îlot de chaleur urbain\", lié au bitume et au béton qui emmagasinent la chaleur.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "origine_objets",
    tier: "moyen",
    emoji: "📦",
    label: "D'où viennent mes objets ?",
    text: "Un objet du quotidien (téléphone, t-shirt, jouet) rassemble souvent des matières premières, des composants et une main-d'œuvre venus de plusieurs continents différents, avant d'être assemblé puis transporté jusqu'au magasin — un trajet mondial invisible derrière un geste d'achat banal.",
    fact: "Un smartphone courant peut contenir des matériaux extraits sur quatre continents différents avant d'être assemblé dans un seul pays.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "localisation_industrie",
    tier: "moyen",
    emoji: "🏭",
    label: "Où s'installe une usine ?",
    text: "Le choix d'implanter une usine dépend de nombreux critères combinés : coût de la main-d'œuvre, proximité des matières premières ou des marchés, qualité des infrastructures de transport, réglementations environnementales... aucun facteur ne suffit à lui seul à expliquer une localisation industrielle.",
    fact: "Certaines régions du monde concentrent une part disproportionnée d'une industrie précise (électronique, textile, automobile) simplement parce que les entreprises s'installent volontiers là où leurs concurrents et fournisseurs sont déjà présents.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "transport_produits",
    tier: "moyen",
    emoji: "🚢",
    label: "Transporter à travers le monde",
    text: "Bateaux porte-conteneurs, trains de marchandises, camions, avions-cargos : chaque mode de transport a un coût, une vitesse et un impact environnemental différents. Le choix du transport influence directement le prix final d'un produit fabriqué à l'autre bout du monde.",
    fact: "Le transport maritime par porte-conteneurs reste, à distance égale, l'un des modes de transport de marchandises les moins coûteux et les moins polluants par tonne transportée — bien plus que le transport aérien.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "impact_industrie_jouet",
    tier: "moyen",
    emoji: "🧸",
    label: "Un jouet, combien de frontières ?",
    text: "Retracer le parcours complet d'un jouet en plastique — de l'extraction du pétrole à sa fabrication, son emballage, son transport puis sa vente — révèle à quel point un objet apparemment simple peut traverser un très grand nombre de frontières avant d'arriver entre des mains d'enfant.",
    fact: "La majorité des jouets vendus dans le monde sont aujourd'hui fabriqués dans un tout petit nombre de pays fortement spécialisés dans cette industrie.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "sommes_nous_migrants",
    tier: "long",
    emoji: "🧳",
    label: "Sommes-nous tous des migrants ?",
    text: "Migrer, c'est changer durablement de lieu de vie — que ce soit entre pays ou à l'intérieur d'un même pays, pour le travail, les études, l'amour ou la sécurité. Vu sous cet angle large, la migration concerne, à un moment ou un autre, une part bien plus large de la population qu'on ne l'imagine souvent.",
    fact: "La plupart des migrations dans le monde ne traversent jamais de frontière internationale : elles se déroulent à l'intérieur d'un même pays, d'une campagne vers une ville par exemple.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "partir_de_force",
    tier: "long",
    emoji: "🚪",
    label: "Peut-on être forcé de partir ?",
    text: "Certains départs sont choisis, d'autres sont subis : conflits armés, catastrophes naturelles, persécutions ou effondrement économique peuvent contraindre des populations entières à quitter leur foyer sans réelle alternative — une distinction essentielle entre migration choisie et migration forcée.",
    fact: "Le droit international distingue juridiquement le \"réfugié\", contraint de fuir un danger précis reconnu par une convention, du \"migrant économique\", qui part de son plein gré chercher de meilleures conditions de vie.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "frontieres_ouvertes_fermees",
    tier: "long",
    emoji: "🚧",
    label: "Des frontières ouvertes ou fermées ?",
    text: "D'un pays à l'autre, et parfois d'une époque à l'autre pour un même pays, les politiques migratoires oscillent entre ouverture et fermeture des frontières — un choix politique qui a des conséquences économiques, démographiques et sociales très concrètes des deux côtés de la frontière.",
    fact: "Certains espaces, comme la zone Schengen en Europe, ont choisi de supprimer les contrôles aux frontières internes entre plusieurs pays tout en renforçant leurs frontières extérieures communes.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "qui_beneficie_migration",
    tier: "long",
    emoji: "🤝",
    label: "Qui bénéficie de la migration ?",
    text: "La migration n'a pas un effet unique : elle peut combler des besoins de main-d'œuvre dans le pays d'arrivée, mais aussi priver le pays de départ de compétences précieuses (un phénomène appelé \"fuite des cerveaux\") — tout en générant, via l'argent envoyé aux familles restées sur place, une ressource économique majeure pour de nombreux pays.",
    fact: "L'argent envoyé chaque année par les migrants à leur famille restée au pays (les \"transferts de fonds\") dépasse, à l'échelle mondiale, le montant total de l'aide publique au développement versée par tous les pays riches réunis.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getGeographie10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_GEOGRAPHIE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_GEOGRAPHIE_10E_OBJECTS = MUSEE_GEOGRAPHIE_10E_OBJECTS;
window.getGeographie10eObjectsForParcours = getGeographie10eObjectsForParcours;
