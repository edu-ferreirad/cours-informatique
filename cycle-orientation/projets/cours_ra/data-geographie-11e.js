// ============================================================================
// SALLE GÉOGRAPHIE 11e — "Eau, énergie, information"
// Contenu reformulé à partir des dossiers du manuel 11e. Aucun énoncé
// n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_GEOGRAPHIE_11E_OBJECTS = [
  {
    id: "ou_eau_se_cache",
    tier: "court",
    emoji: "💧",
    label: "Où l'eau douce se cache-t-elle ?",
    text: "L'eau recouvre la majeure partie de la planète, mais l'eau douce directement accessible n'en représente qu'une infime fraction : la plus grande partie est prisonnière des calottes glaciaires ou enfouie dans des nappes souterraines profondes.",
    fact: "Moins de 1 % de toute l'eau présente sur Terre est à la fois douce et facilement accessible pour les usages humains — le reste est salé, gelé ou trop profond pour être exploité simplement.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "usages_eau_douce",
    tier: "court",
    emoji: "🚿",
    label: "À quoi sert l'eau douce ?",
    text: "L'agriculture, l'industrie et la consommation domestique se partagent l'eau douce disponible, mais très inégalement : l'irrigation des cultures représente, à l'échelle mondiale, de très loin le premier usage de l'eau douce prélevée.",
    fact: "Produire un seul kilogramme de bœuf peut nécessiter plusieurs milliers de litres d'eau, en comptant l'irrigation nécessaire à toute la chaîne alimentaire de l'animal.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "conflits_eau",
    tier: "court",
    emoji: "⚔️",
    label: "L'eau, source de conflits ?",
    text: "De nombreux grands fleuves traversent plusieurs pays, ce qui rend leur gestion politiquement délicate : un barrage construit en amont peut priver d'eau les populations situées en aval, transformant une ressource naturelle en enjeu diplomatique.",
    fact: "Plusieurs dizaines de grands fleuves dans le monde sont partagés entre trois pays ou plus, rendant tout accord de gestion particulièrement complexe à négocier.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "colorado_mer",
    tier: "court",
    emoji: "🏜️",
    label: "Le fleuve qui n'atteint plus la mer",
    text: "Le fleuve Colorado, aux États-Unis, est si intensément prélevé pour l'irrigation et l'alimentation des villes tout au long de son parcours qu'il n'atteint plus, la plupart du temps, son embouchure naturelle dans le golfe de Californie.",
    fact: "Le delta du Colorado, autrefois une vaste zone humide riche en biodiversité, s'est transformé en grande partie en désert asséché depuis que le fleuve n'y parvient presque plus.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "sources_energie",
    tier: "moyen",
    emoji: "⚡",
    label: "D'où vient l'énergie que l'on consomme ?",
    text: "Charbon, pétrole, gaz naturel, énergie nucléaire, hydraulique, solaire, éolienne : chaque source d'énergie a ses propres avantages, coûts, disponibilités et impacts environnementaux, et la plupart des pays combinent plusieurs sources plutôt que de dépendre d'une seule.",
    fact: "Malgré des décennies d'investissement dans les énergies renouvelables, les énergies fossiles (charbon, pétrole, gaz) représentent encore aujourd'hui la majorité de l'énergie consommée dans le monde.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "energie_mondialisee",
    tier: "moyen",
    emoji: "🛢️",
    label: "Une ressource, un marché mondial",
    text: "Le pétrole et le gaz naturel s'échangent sur des marchés mondiaux, où leur prix dépend autant de la production réelle que des décisions politiques, des tensions géopolitiques ou de la spéculation financière — un baril extrait au Moyen-Orient peut alimenter une voiture à l'autre bout du monde.",
    fact: "Une poignée de pays exportateurs de pétrole peut, en modifiant volontairement ses niveaux de production, influencer le prix de l'essence à la pompe dans des pays qui n'en produisent pas une seule goutte.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "impacts_energies_fossiles",
    tier: "moyen",
    emoji: "🏭",
    label: "Le coût caché des énergies fossiles",
    text: "Au-delà de leur prix affiché, les énergies fossiles ont un coût environnemental et sanitaire souvent invisible : pollution de l'air, émissions de gaz à effet de serre, marées noires, conflits liés à leur extraction — des impacts qui ne figurent pas directement sur la facture d'essence.",
    fact: "La pollution de l'air liée en partie à la combustion d'énergies fossiles est associée, selon les estimations sanitaires mondiales, à plusieurs millions de décès prématurés chaque année.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "avenir_energetique_suisse",
    tier: "moyen",
    emoji: "🇨🇭",
    label: "L'avenir énergétique de la Suisse",
    text: "Sans gisement de pétrole ni de gaz sur son territoire, la Suisse s'appuie historiquement sur l'hydraulique et le nucléaire pour produire son électricité, tout en développant progressivement le solaire — un choix énergétique directement façonné par sa géographie de montagnes et de lacs.",
    fact: "Grâce à ses nombreux barrages en montagne, la Suisse produit une part importante de son électricité par voie hydraulique, une proportion bien plus élevée que la moyenne de ses pays voisins.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "pole_touristique",
    tier: "long",
    emoji: "🏖️",
    label: "Comment naît un pôle touristique ?",
    text: "Un lieu devient une destination touristique par la combinaison d'un attrait naturel ou culturel, d'infrastructures d'accueil et de transport, et d'une image véhiculée par les médias et les réseaux sociaux — un processus qui peut transformer un village discret en destination mondiale en quelques décennies.",
    fact: "Certaines destinations touristiques doivent aujourd'hui limiter volontairement le nombre de visiteurs autorisés par jour, afin de protéger un site naturel ou patrimonial menacé par sa propre popularité.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "flux_information",
    tier: "long",
    emoji: "🌐",
    label: "Le monde relié par des câbles",
    text: "La quasi-totalité du trafic internet mondial — courriels, appels vidéo, réseaux sociaux — transite non pas par satellite comme on l'imagine souvent, mais par un immense réseau de câbles sous-marins posés au fond des océans, reliant les continents entre eux.",
    fact: "Les câbles sous-marins de télécommunication totalisent aujourd'hui plus d'un million de kilomètres posés au fond des océans du globe — de quoi faire plusieurs fois le tour de la Terre.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "impact_environnemental_numerique",
    tier: "long",
    emoji: "💻",
    label: "L'empreinte cachée du numérique",
    text: "Chaque recherche en ligne, chaque vidéo regardée ou fichier stocké dans le \"cloud\" repose sur d'immenses centres de données qui consomment de l'électricité et de l'eau pour leur refroidissement — un impact environnemental réel, bien que souvent invisible pour l'utilisateur final.",
    fact: "Le secteur numérique mondial (appareils, réseaux, centres de données) est responsable d'une part significative des émissions mondiales de gaz à effet de serre — un ordre de grandeur comparable à celui de certains secteurs industriels entiers.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "menaces_information",
    tier: "long",
    emoji: "🕵️",
    label: "Les menaces qui pèsent sur l'information",
    text: "Désinformation volontaire, censure d'État, manipulation algorithmique des contenus qu'on nous montre : l'accès à une information fiable n'est jamais garanti nulle part, et vérifier ses sources devient une compétence essentielle pour naviguer dans un flux d'information mondial et permanent.",
    fact: "Certaines études montrent qu'une fausse information se propage en moyenne bien plus vite et bien plus loin sur les réseaux sociaux qu'une information vraie sur le même sujet.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getGeographie11eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_GEOGRAPHIE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_GEOGRAPHIE_11E_OBJECTS = MUSEE_GEOGRAPHIE_11E_OBJECTS;
window.getGeographie11eObjectsForParcours = getGeographie11eObjectsForParcours;
