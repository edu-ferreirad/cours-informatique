// ============================================================================
// SALLE GÉOGRAPHIE 9e — "Risques, ressources, villes"
// Contenu reformulé à partir des 3 grands dossiers du manuel 9e
// (Les risques naturels liés à l'écorce terrestre / L'alimentation dans le
// monde / La ville). Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_GEOGRAPHIE_9E_OBJECTS = [
  {
    id: "quest_ce_risque",
    tier: "court",
    emoji: "⚠️",
    label: "Qu'est-ce qu'un risque ?",
    text: "Un risque naturel n'existe que si deux conditions se combinent : un aléa (un phénomène potentiellement dangereux, comme un séisme) et une vulnérabilité (des personnes ou des biens exposés). Un volcan qui gronde en plein désert, loin de tout, n'est pas un risque — il le devient dès qu'une ville s'installe à ses pieds.",
    fact: "C'est pour cette raison qu'un séisme de même magnitude peut faire des milliers de morts dans un pays et presque aucun dans un autre : la différence se joue sur la vulnérabilité, pas sur la force du phénomène.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "plaques_tectoniques",
    tier: "court",
    emoji: "🌍",
    label: "Des continents en mouvement",
    text: "La croûte terrestre est découpée en plaques tectoniques qui se déplacent lentement les unes par rapport aux autres — quelques centimètres par an, la vitesse à laquelle poussent les ongles. C'est aux frontières de ces plaques que se concentrent la plupart des séismes et des volcans actifs.",
    fact: "À ce rythme, dans plusieurs millions d'années, les continents actuels auront à nouveau une disposition totalement différente sur le globe.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "vivre_pres_volcan",
    tier: "court",
    emoji: "🌋",
    label: "Pourquoi vivre près d'un volcan ?",
    text: "Malgré le danger, des millions de personnes vivent volontairement près de volcans actifs : les cendres volcaniques enrichissent durablement les sols agricoles, et certaines régions volcaniques comptent parmi les plus fertiles et les plus peuplées du monde.",
    fact: "Autour du Vésuve, en Italie, plusieurs centaines de milliers de personnes vivent aujourd'hui dans la zone la plus exposée à une future éruption majeure.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "seismes_previsibles",
    tier: "court",
    emoji: "📉",
    label: "Peut-on prévoir un séisme ?",
    text: "Contrairement aux éruptions volcaniques, qui montrent souvent des signes avant-coureurs, les séismes restent aujourd'hui impossibles à prévoir avec précision. Les scientifiques savent où ils sont probables, mais pas encore quand ils se produiront.",
    fact: "Un tsunami, lui, peut être annoncé quelques minutes à quelques heures à l'avance grâce à des capteurs sous-marins — c'est ce système d'alerte qui a cruellement manqué dans l'océan Indien en 2004.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "produire_ici_ailleurs",
    tier: "moyen",
    emoji: "🌾",
    label: "Produire ici et ailleurs",
    text: "Selon le climat, le sol et les moyens techniques disponibles, une même surface agricole ne produit pas du tout la même chose ni la même quantité selon l'endroit du monde où elle se trouve — d'une agriculture familiale de subsistance à une exploitation mécanisée tournée vers l'exportation.",
    fact: "À surface égale, un champ intensif fortement mécanisé peut produire plusieurs fois plus de récolte qu'un champ cultivé avec des moyens traditionnels — mais souvent au prix d'un impact environnemental bien plus lourd.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "prix_cereales",
    tier: "moyen",
    emoji: "🌾",
    label: "Qui décide du prix du blé ?",
    text: "Le prix des céréales ne se fixe pas dans chaque village : il se négocie sur des marchés mondiaux, où une mauvaise récolte à l'autre bout de la planète peut faire grimper le prix du pain partout ailleurs.",
    fact: "Une sécheresse dans un grand pays exportateur de blé peut, en quelques semaines, faire monter le prix du pain dans des pays qui n'ont jamais cultivé un seul champ de blé.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "voyage_du_riz",
    tier: "moyen",
    emoji: "🍚",
    label: "Le long voyage du riz",
    text: "Entre le champ où il pousse et l'assiette où il est servi, le riz traverse souvent plusieurs pays, plusieurs transformations et plusieurs intermédiaires — chacun ajoutant une marge au prix final. Retracer ce trajet, c'est comprendre pourquoi un même aliment peut être bon marché ici et cher ailleurs.",
    fact: "Le riz nourrit plus de la moitié de la population mondiale, mais reste principalement consommé dans son propre pays de production : seule une petite partie de la récolte mondiale est réellement exportée.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "faim_dans_le_monde",
    tier: "moyen",
    emoji: "🍽️",
    label: "Assez pour tous, mais pas partout",
    text: "La planète produit aujourd'hui suffisamment de nourriture pour nourrir toute sa population. Si la faim persiste néanmoins dans certaines régions, la cause n'est donc pas un manque global de nourriture, mais des problèmes d'accès, de répartition, de prix ou de conflits.",
    fact: "Une part importante de la nourriture produite dans le monde est perdue ou gaspillée avant même d'arriver dans une assiette — du champ jusqu'au réfrigérateur.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "villes_grandissent",
    tier: "long",
    emoji: "🏙️",
    label: "Pourquoi les villes grandissent-elles ?",
    text: "Les villes attirent en promettant du travail, des écoles, des soins — un espoir de vie meilleure qui pousse des millions de personnes à quitter chaque année les campagnes. Cette croissance urbaine transforme profondément le paysage, parfois plus vite que les infrastructures ne peuvent suivre.",
    fact: "Pour la première fois dans l'histoire humaine, plus de la moitié de la population mondiale vit aujourd'hui en ville plutôt qu'à la campagne.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "bidonvilles",
    tier: "long",
    emoji: "🏚️",
    label: "Une ville dans la ville",
    text: "Quand la croissance urbaine dépasse la capacité des villes à loger tout le monde, des quartiers informels se construisent en marge, souvent sans accès légal à l'eau, à l'électricité ou à la propriété du terrain — tout en restant, pour leurs habitants, un point d'ancrage économique et social essentiel.",
    fact: "Certains de ces quartiers informels comptent aujourd'hui plus d'un million d'habitants — soit davantage que bien des capitales officielles.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "qui_vit_ou",
    tier: "long",
    emoji: "🗺️",
    label: "Qui vit où ?",
    text: "À l'intérieur d'une même ville, les quartiers se différencient fortement selon le niveau de revenu, l'origine ou le statut social de leurs habitants — un phénomène de ségrégation spatiale que l'on retrouve, sous des formes différentes, dans presque toutes les grandes villes du monde.",
    fact: "Le prix du logement peut varier de manière spectaculaire entre deux quartiers d'une même ville distants de seulement quelques stations de métro.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "se_deplacer_en_ville",
    tier: "long",
    emoji: "🚇",
    label: "Se déplacer en ville",
    text: "Plus une ville grandit, plus la question des déplacements devient centrale : transports en commun, pistes cyclables, voitures partagées... chaque solution a ses avantages, ses coûts et ses limites, et façonne en retour la forme que prendra la ville de demain.",
    fact: "Certaines villes ont choisi de rendre leurs transports en commun entièrement gratuits pour réduire la place de la voiture individuelle — un choix encore rare mais de plus en plus étudié ailleurs.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getGeographie9eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_GEOGRAPHIE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_GEOGRAPHIE_9E_OBJECTS = MUSEE_GEOGRAPHIE_9E_OBJECTS;
window.getGeographie9eObjectsForParcours = getGeographie9eObjectsForParcours;
