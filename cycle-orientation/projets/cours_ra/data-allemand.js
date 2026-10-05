// ============================================================================
// SALLE ALLEMAND — "Alltag auf Deutsch — La vie quotidienne"
// Contenu original construit à partir des axes officiels du programme
// Allemand 9e-11e (DIP Genève, prescriptions cantonales PER, juin 2023) :
// vie quotidienne, thèmes variés, opinion personnelle — et de vocabulaire
// et repères culturels de connaissance générale. Le moyen d'enseignement
// officiel geni@l klick n'a pas pu être consulté (accès protégé par
// identifiant, chargement du contenu en JavaScript après connexion) :
// contenu rédigé indépendamment, à remplacer ou compléter avec plaisir
// par des captures ou extraits du manuel si vous souhaitez coller plus
// précisément aux chapitres réellement enseignés.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_ALLEMAND_OBJECTS = [
  {
    id: "sich_vorstellen",
    tier: "court",
    emoji: "👋",
    label: "Sich vorstellen — se présenter",
    text: "En allemand, se présenter passe par quelques structures de base : \"Ich heiße...\" (je m'appelle), \"Ich komme aus...\" (je viens de), \"Ich bin ... Jahre alt\" (j'ai ... ans). Ces phrases simples, apprises tôt, restent la porte d'entrée de toute conversation.",
    fact: "En allemand, le verbe se place presque toujours en deuxième position dans une phrase déclarative — même si le sujet n'est pas le premier mot : \"Heute komme ich aus Genf\" place le verbe juste après \"heute\" (aujourd'hui), pas après \"ich\".",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "familie_de",
    tier: "court",
    emoji: "👨‍👩‍👧",
    label: "Die Familie — la famille",
    text: "Der Vater, die Mutter, der Bruder, die Schwester : le vocabulaire de la famille est l'un des premiers appris, et il illustre bien un défi de l'allemand — chaque nom possède un genre (masculin, féminin ou neutre) qu'il faut mémoriser en même temps que le mot lui-même.",
    fact: "Contrairement au français, l'allemand possède un troisième genre grammatical, le neutre (\"das\") : \"das Mädchen\" (la fille) est neutre, malgré son sens évidemment féminin — un des pièges classiques pour les francophones.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "schule_de",
    tier: "court",
    emoji: "🎒",
    label: "Die Schule — l'école",
    text: "Der Stundenplan (l'horaire), die Hausaufgaben (les devoirs), die Pause (la récréation) : le vocabulaire scolaire est particulièrement utile puisqu'il correspond exactement au quotidien vécu par les élèves eux-mêmes, ce qui en facilite la mémorisation.",
    fact: "En Allemagne, en Autriche et en Suisse alémanique, l'année scolaire ne commence pas forcément à la même date qu'en Suisse romande, chaque Land ou canton fixant ses propres vacances scolaires.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "zahlen_uhrzeit",
    tier: "court",
    emoji: "🕐",
    label: "Zahlen und Uhrzeit — nombres et heure",
    text: "Dire l'heure en allemand réserve une petite surprise : \"halb neun\" ne signifie pas \"neuf heures et demie\" mais \"huit heures et demie\" (littéralement \"la moitié vers neuf heures\") — un système qui se compte vers l'heure suivante, pas depuis l'heure précédente.",
    fact: "\"Viertel vor zehn\" (un quart avant dix) et \"Viertel nach zehn\" (un quart après dix) fonctionnent, eux, exactement comme en français — seule la demi-heure suit cette logique inversée.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "essen_trinken",
    tier: "moyen",
    emoji: "🥨",
    label: "Essen und Trinken — nourriture",
    text: "Le Brot (le pain), le Frühstück (le petit-déjeuner) copieux à l'allemande, et des spécialités régionales bien connues (Brezel, Sauerkraut, Currywurst) permettent d'aborder le vocabulaire alimentaire tout en découvrant des habitudes culinaires parfois différentes des habitudes romandes.",
    fact: "Le mot \"Brezel\" (le bretzel) viendrait du latin \"brachiatus\" (qui a des bras repliés), en référence à sa forme torsadée caractéristique.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "wetter_jahreszeiten",
    tier: "moyen",
    emoji: "🌦️",
    label: "Das Wetter — la météo",
    text: "\"Es regnet\" (il pleut), \"es schneit\" (il neige), \"die Sonne scheint\" (le soleil brille) : parler du temps qu'il fait est l'une des conversations les plus universelles — et un excellent terrain d'entraînement pour les verbes impersonnels allemands.",
    fact: "En allemand, de nombreuses expressions météo utilisent le pronom impersonnel \"es\" (il), exactement comme en français (\"il pleut\"), ce qui en facilite l'apprentissage pour les francophones.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "hobbys_freizeit",
    tier: "moyen",
    emoji: "⚽",
    label: "Hobbys und Freizeit — loisirs",
    text: "\"Ich spiele Fußball\", \"ich lese gern\", \"ich höre Musik\" : parler de ses loisirs mobilise le verbe \"gern\" (volontiers), une particularité allemande qui exprime l'idée d'aimer faire quelque chose sans avoir besoin d'un verbe séparé comme \"aimer\".",
    fact: "Le football (\"Fußball\") reste, et de très loin, le sport le plus populaire dans l'ensemble des pays germanophones — un vocabulaire sportif particulièrement utile à connaître.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "wegbeschreibung",
    tier: "moyen",
    emoji: "🧭",
    label: "Die Wegbeschreibung — indiquer un chemin",
    text: "\"Geradeaus\" (tout droit), \"links\" (à gauche), \"rechts\" (à droite) : savoir demander et comprendre un itinéraire est une compétence de communication très concrète, directement utile lors d'un séjour dans un pays germanophone.",
    fact: "En Suisse alémanique, l'allemand parlé au quotidien (le \"Schwyzertütsch\") diffère fortement de l'allemand standard (\"Hochdeutsch\") appris en classe — au point qu'un francophone maîtrisant bien l'allemand standard peut avoir du mal à comprendre une conversation entre Zurichois.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "falsche_freunde",
    tier: "long",
    emoji: "⚠️",
    label: "Falsche Freunde — les faux amis",
    text: "\"Gift\" ne signifie pas \"cadeau\" mais \"poison\" ; \"bekommen\" ne signifie pas \"devenir\" mais \"recevoir\" ; \"das Rezept\" ne signifie pas \"reçu\" mais \"recette (de cuisine)\" ou \"ordonnance médicale\". Ces faux amis, qui ressemblent à un mot français ou anglais, sont un piège classique à repérer.",
    fact: "\"Gift\" signifie \"cadeau\" en anglais mais \"poison\" en allemand — un même mot, deux langues cousines, deux sens presque opposés, ce qui en fait l'un des faux amis les plus célèbres entre langues germaniques.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "brandenburger_tor",
    tier: "long",
    emoji: "🏛️",
    label: "Das Brandenburger Tor",
    text: "La porte de Brandebourg, à Berlin, est l'un des monuments les plus connus du monde germanophone. Symbole d'unité après avoir longtemps marqué la frontière entre Berlin-Est et Berlin-Ouest pendant la Guerre froide, elle reste aujourd'hui un lieu de rassemblement pour les grands événements de la capitale allemande.",
    fact: "Pendant près de trente ans, le mur de Berlin passait juste derrière la porte de Brandebourg, la rendant inaccessible aux habitants des deux côtés de la ville jusqu'à la chute du mur en 1989.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "deutschsprachige_laender",
    tier: "long",
    emoji: "🗺️",
    label: "Die deutschsprachigen Länder",
    text: "L'allemand n'est pas parlé que dans un seul pays : c'est une langue officielle en Allemagne, en Autriche, dans une grande partie de la Suisse, ainsi qu'au Liechtenstein — chacun avec ses propres expressions, accents et spécialités culturelles.",
    fact: "La Suisse compte quatre langues nationales (allemand, français, italien, romanche), mais l'allemand y est parlé, sous sa forme dialectale, par la majorité de la population du pays.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "oktoberfest",
    tier: "long",
    emoji: "🎪",
    label: "Das Oktoberfest",
    text: "La fête de la bière de Munich, en Bavière, est devenue l'une des fêtes populaires les plus connues au monde, avec ses tenues traditionnelles (Dirndl, Lederhosen), sa musique et ses immenses tentes de fête — une bonne occasion d'aborder le vocabulaire des fêtes et traditions régionales.",
    fact: "Malgré son nom, l'Oktoberfest commence en réalité mi-septembre et se termine début octobre — une tradition qui remonte à l'origine à un mariage princier célébré à Munich en 1810.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getAllemandObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_ALLEMAND_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_ALLEMAND_OBJECTS = MUSEE_ALLEMAND_OBJECTS;
window.getAllemandObjectsForParcours = getAllemandObjectsForParcours;
