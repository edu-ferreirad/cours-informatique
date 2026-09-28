// ============================================================================
// SALLE GÉOGRAPHIE — COLLÈGE DE GENÈVE (DF, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Géographie p. 43-44. Aucun énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_GEOGRAPHIE_COLLEGE_OBJECTS = [
  {
    id: "ecriture_surface_terre",
    tier: "court",
    emoji: "🗺️",
    label: "Lire l'écriture de la surface de la Terre",
    text: "Le plan d'études définit la géographie, en citant le géographe Retaille, comme une \"tentative d'interprétation de l'écriture de la surface de la Terre par les sociétés qui l'occupent\" — une définition qui place d'emblée les sociétés humaines, et pas seulement le relief ou le climat, au centre de la discipline.",
    fact: "Cette définition renverse une idée reçue fréquente : la géographie du collège ne se limite pas à localiser des lieux sur une carte, elle interroge d'abord comment les sociétés humaines transforment et donnent du sens à l'espace qu'elles habitent.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "territoire_homme_espace",
    tier: "court",
    emoji: "📐",
    label: "L'homme, l'espace et le territoire",
    text: "L'objet central de la géographie est l'étude des relations entre l'homme, l'espace et les territoires qu'il y découpe : un territoire n'est jamais un simple morceau de terrain neutre, mais un espace modelé, organisé et aménagé par l'action humaine, à étudier à différentes échelles.",
    fact: "Le plan d'études insiste sur le fait que ce territoire doit être analysé \"dans une perspective tendant à expliciter ses enjeux, riches de signification\" — un même territoire pouvant révéler des tensions économiques, politiques ou sociales très différentes selon l'échelle à laquelle on l'observe.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "echelles_local_mondial",
    tier: "court",
    emoji: "🔎",
    label: "Du local au mondial, changer d'échelle",
    text: "La connaissance de l'espace local, régional, national et mondial, et de la façon dont les hommes y vivent, participe à la fois au développement d'un esprit d'ouverture et à la construction des identités culturelles — un même phénomène pouvant s'expliquer très différemment selon l'échelle choisie pour l'observer.",
    fact: "Changer d'échelle en géographie révèle souvent des réalités contradictoires : un phénomène qui semble positif à l'échelle mondiale (la croissance économique globale) peut masquer des inégalités criantes à l'échelle locale, et inversement.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "guider_action_avenir",
    tier: "court",
    emoji: "🧭",
    label: "Comprendre pour agir demain",
    text: "L'enseignement de la géographie conduit à s'interroger sur les processus qui structurent le territoire, à les analyser pour mieux les comprendre et, surtout, à guider l'action dans l'avenir — la géographie n'est donc jamais purement descriptive, elle vise aussi à éclairer des décisions à venir.",
    fact: "Cette orientation vers l'action future explique pourquoi la géographie collabore souvent avec l'économie et le droit au collège : comprendre un territoire aujourd'hui sert directement à anticiper ou orienter son aménagement de demain.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "interactions_ecosystemes_facteurs",
    tier: "moyen",
    emoji: "🌐",
    label: "Écosystèmes et facteurs humains, une interaction constante",
    text: "L'enseignement vise à saisir les interactions entre les écosystèmes et les facteurs économiques, politiques et socioculturels, ainsi qu'entre les différents territoires diversement articulés entre eux — aucun territoire n'existant réellement de façon isolée du reste du monde.",
    fact: "Le plan d'études rappelle explicitement que toute action se situe toujours dans un milieu concret, précis et différencié : toute décision, tout problème a nécessairement une dimension spatiale, même lorsqu'on n'y pense pas immédiatement.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "se_situer_soi_meme",
    tier: "moyen",
    emoji: "📍",
    label: "Se situer soi-même dans le monde",
    text: "La géographie permet progressivement à l'élève de se situer lui-même avec précision et de construire une vision conceptuelle qui rend compte de la complexité du monde — comprendre le monde passe aussi par comprendre sa propre position, concrète et symbolique, à l'intérieur de celui-ci.",
    fact: "Cette capacité à se situer précisément dans l'espace mondial est présentée comme progressive : elle se construit patiemment sur les quatre années du collège, à mesure que l'élève accumule des repères géographiques à toutes les échelles.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "territoire_produit_homme",
    tier: "moyen",
    emoji: "🏗️",
    label: "Le territoire, un produit des choix humains",
    text: "En considérant progressivement le territoire comme un produit de l'homme, où les enjeux et les intérêts en présence sont multiples, l'élève développe sa faculté d'agir en acteur conscient et responsable — et, par là même, son sens civique face aux décisions d'aménagement du territoire.",
    fact: "Cette idée que le territoire est \"un produit\" et non une donnée naturelle immuable est centrale : un fleuve, une frontière ou une ville ne sont jamais de simples faits géographiques neutres, mais le résultat de choix, de conflits et de compromis humains successifs.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "conscience_planetaire",
    tier: "moyen",
    emoji: "🌏",
    label: "Vers une conscience planétaire",
    text: "En apprenant à connaître d'autres peuples et d'autres cultures (leurs manières communes de sentir, d'agir et de penser), l'élève prend conscience de la relativité de ses propres valeurs — la géographie contribue ainsi au développement d'une attitude de respect, de tolérance et de solidarité à l'échelle planétaire.",
    fact: "Le plan d'études qualifie explicitement cette dimension de \"l'humanisme le plus large\" : la géographie y est présentée comme un regard porté sur certains aspects fondamentaux de la condition humaine, pas seulement comme une science de l'espace.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "geographie_facteurs_multiples",
    tier: "long",
    emoji: "🧩",
    label: "La science qui prend tout en compte",
    text: "Parmi les sciences sociales, la géographie se distingue par sa prétention à prendre en compte l'ensemble des facteurs et des relations qui caractérisent la vie des groupes humains dans leurs territoires — l'espace disponible, ses contraintes, son aménagement, les activités humaines et leurs conséquences.",
    fact: "Cette ambition de croiser des facteurs aussi variés que le climat, l'économie, la politique et la culture pour comprendre un même territoire distingue nettement la géographie d'autres sciences sociales, plus souvent centrées sur un seul type de facteur explicatif.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "collaboration_histoire_geo",
    tier: "long",
    emoji: "🔗",
    label: "Un duo pédagogique avec l'histoire",
    text: "Comme le précise également la section Histoire du plan d'études, l'histoire et la géographie collaborent au collège selon des modalités variées : partage du temps d'enseignement, cours en duo, ou intégration complète — les sociétés humaines se comprenant rarement sans croiser leur dimension temporelle et spatiale.",
    fact: "Cette collaboration institutionnalisée entre histoire et géographie, explicitement prévue par le plan d'études, illustre bien l'idée que comprendre une société exige toujours de savoir à la fois \"quand\" et \"où\" les événements se sont déroulés.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "espace_local_identite_culturelle",
    tier: "long",
    emoji: "🏔️",
    label: "L'espace local, socle d'une identité",
    text: "La connaissance de l'espace local participe directement à la construction des identités culturelles : comprendre son propre territoire de vie (son relief, son histoire d'aménagement, ses spécificités) aide l'élève à mieux se situer culturellement avant même d'élargir son regard vers l'échelle mondiale.",
    fact: "Cette articulation entre échelle locale et construction identitaire explique pourquoi de nombreux programmes de géographie commencent volontairement par l'étude du territoire proche (le canton, la région) avant de s'ouvrir progressivement aux dynamiques mondiales.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "geographie_action_civique",
    tier: "long",
    emoji: "🏛️",
    label: "De la compréhension à l'action civique",
    text: "En développant la capacité de l'élève à considérer le territoire comme le produit de choix humains multiples et parfois contradictoires, la géographie forme progressivement sa faculté d'agir comme un acteur conscient et responsable de son propre environnement — un objectif directement civique, pas seulement académique.",
    fact: "Cette dimension civique de la géographie rejoint directement les objectifs de l'histoire et de l'économie-droit au collège : les trois disciplines des sciences humaines partagent l'ambition commune de former des citoyens capables d'agir en connaissance de cause.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getGeographieCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_GEOGRAPHIE_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_GEOGRAPHIE_COLLEGE_OBJECTS = MUSEE_GEOGRAPHIE_COLLEGE_OBJECTS;
window.getGeographieCollegeObjectsForParcours = getGeographieCollegeObjectsForParcours;
