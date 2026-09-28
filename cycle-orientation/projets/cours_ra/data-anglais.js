// ============================================================================
// SALLE ANGLAIS — "Everyday Life in English — La vie quotidienne"
// Contenu original construit à partir des axes officiels du programme
// Anglais 9e-11e (DIP Genève, prescriptions cantonales PER) : vie
// quotidienne, thèmes variés, opinion personnelle — et de vocabulaire et
// repères culturels de connaissance générale. Le moyen d'enseignement
// officiel (Cambridge IIP) n'a pas pu être consulté (accès protégé par
// identifiant, chargement du contenu en JavaScript après connexion) :
// contenu rédigé indépendamment, à remplacer ou compléter avec plaisir
// par des captures ou extraits du manuel si vous souhaitez coller plus
// précisément aux chapitres réellement enseignés.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_ANGLAIS_OBJECTS = [
  {
    id: "introducing_yourself",
    tier: "court",
    emoji: "👋",
    label: "Introducing yourself",
    text: "\"My name is...\", \"I come from...\", \"I am ... years old\" : ces structures de base permettent de se présenter en anglais dès les premiers cours. Contrairement à l'allemand, l'ordre des mots reste presque toujours identique au français : sujet, verbe, complément.",
    fact: "L'anglais est aujourd'hui la langue la plus étudiée comme langue étrangère dans le monde, en grande partie parce qu'elle sert de langue commune (\"lingua franca\") dans les affaires, la science et le tourisme international.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "family_vocabulary",
    tier: "court",
    emoji: "👨‍👩‍👧",
    label: "Family vocabulary",
    text: "Father, mother, brother, sister, grandparents : contrairement à l'allemand ou au français, les noms communs anglais n'ont pas de genre grammatical — un vrai soulagement pour les élèves, qui n'ont pas besoin de mémoriser \"le\" ou \"la\" devant chaque mot.",
    fact: "L'anglais distingue \"stepmother/stepfather\" (belle-mère/beau-père par remariage) de \"mother-in-law/father-in-law\" (belle-mère/beau-père par mariage) — deux liens familiaux que le français regroupe pourtant sous un même mot.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "school_subjects",
    tier: "court",
    emoji: "🎒",
    label: "School subjects",
    text: "Maths, English, Geography, PE (Physical Education), Art : le vocabulaire des matières scolaires ressemble souvent beaucoup au français grâce à des racines latines communes — un bon point de départ pour se sentir vite à l'aise en anglais.",
    fact: "Dans les écoles britanniques, la matière \"PE\" (Physical Education) est l'abréviation la plus couramment utilisée à l'oral, bien plus que la version complète du nom.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "numbers_time",
    tier: "court",
    emoji: "🕐",
    label: "Numbers and telling the time",
    text: "\"Half past eight\" (huit heures et demie), \"a quarter to nine\" (neuf heures moins le quart) : contrairement à l'allemand, l'anglais compte l'heure de façon très proche du français, ce qui en facilite l'apprentissage pour les élèves francophones.",
    fact: "Au Royaume-Uni comme aux États-Unis, l'heure s'exprime souvent sur 12 heures avec les mentions \"a.m.\" et \"p.m.\", plutôt que sur 24 heures comme c'est l'usage courant en Suisse.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "food_meals",
    tier: "moyen",
    emoji: "🫖",
    label: "Food and meals",
    text: "Breakfast, lunch, dinner, et la fameuse tradition britannique du \"afternoon tea\" : le vocabulaire des repas est l'occasion de découvrir des habitudes alimentaires parfois très différentes, comme le \"full English breakfast\" copieux, ou le \"fish and chips\" emblématique.",
    fact: "Le \"fish and chips\" (poisson frit et frites), aujourd'hui symbole culinaire britannique, aurait été popularisé à Londres au XIXe siècle grâce à des immigrants juifs originaires du Portugal et d'Espagne, qui avaient introduit la technique du poisson frit.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "weather_seasons",
    tier: "moyen",
    emoji: "🌦️",
    label: "Weather and seasons",
    text: "\"It's raining\", \"it's snowing\", \"it's sunny\" : parler de la météo est une conversation universelle, en anglais comme partout ailleurs — et un bon terrain pour pratiquer le présent progressif (\"it's raining\" plutôt que \"it rains\").",
    fact: "Parler de la météo est une véritable convention sociale au Royaume-Uni, souvent utilisée pour engager la conversation avec un inconnu — un réflexe culturel bien plus marqué qu'en Suisse romande.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "hobbies_freetime",
    tier: "moyen",
    emoji: "⚽",
    label: "Hobbies and free time",
    text: "\"I like playing football\", \"I enjoy reading\", \"I'm into music\" : plusieurs façons d'exprimer ses loisirs en anglais, chacune avec sa propre construction grammaticale (souvent suivie d'un verbe en \"-ing\"), à mémoriser comme des blocs de phrase entiers plutôt que mot à mot.",
    fact: "Le football (\"soccer\" aux États-Unis, pour le distinguer du \"football\" américain) porte deux noms différents selon le pays anglophone concerné — une source de confusion fréquente entre apprenants.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "giving_directions",
    tier: "moyen",
    emoji: "🧭",
    label: "Giving directions",
    text: "\"Go straight ahead\", \"turn left\", \"turn right\", \"it's next to...\" : savoir demander et donner un itinéraire en anglais est une compétence de communication très concrète, immédiatement utile lors d'un voyage dans un pays anglophone.",
    fact: "Au Royaume-Uni, contrairement à la Suisse, on roule à gauche — un détail qui influence directement le vocabulaire des indications routières (\"the first exit on the left\" peut désigner une manœuvre inversée par rapport aux habitudes suisses).",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "false_friends_en",
    tier: "long",
    emoji: "⚠️",
    label: "False friends",
    text: "\"Actually\" ne signifie pas \"actuellement\" mais \"en fait\" ; \"library\" ne signifie pas \"librairie\" mais \"bibliothèque\" ; \"eventually\" ne signifie pas \"éventuellement\" mais \"finalement\". Ces faux amis, qui ressemblent fortement à un mot français, sont un piège classique entre les deux langues.",
    fact: "\"Actually\" et \"actuellement\" viennent pourtant tous deux du même mot latin \"actualis\" — mais leur sens a évolué dans des directions complètement différentes en anglais et en français au fil des siècles.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "big_ben",
    tier: "long",
    emoji: "🕰️",
    label: "Big Ben",
    text: "Big Ben, à Londres, est en réalité le nom de la grande cloche du beffroi du Parlement britannique — pas de la tour elle-même, officiellement nommée Elizabeth Tower depuis 2012. Une confusion tellement répandue qu'elle est désormais tolérée dans le langage courant.",
    fact: "Big Ben sonne toutes les heures depuis 1859, avec une précision suffisamment fiable pour avoir longtemps servi de référence horaire officieuse pour toute la ville de Londres.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "statue_of_liberty",
    tier: "long",
    emoji: "🗽",
    label: "The Statue of Liberty",
    text: "La statue de la Liberté, à l'entrée du port de New York, a été offerte par la France aux États-Unis en 1886 pour célébrer leur amitié et l'idéal de liberté — un symbole si fort qu'elle reste, plus d'un siècle plus tard, l'une des images les plus associées aux États-Unis dans le monde entier.",
    fact: "La statue de la Liberté a été conçue en France, puis démontée en 350 pièces et transportée par bateau jusqu'à New York, où elle a ensuite été entièrement remontée sur son socle.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "english_speaking_countries",
    tier: "long",
    emoji: "🌍",
    label: "English-speaking countries",
    text: "L'anglais est une langue officielle dans des dizaines de pays répartis sur presque tous les continents — Royaume-Uni, États-Unis, Canada, Australie, Afrique du Sud, Inde... chacun avec son propre accent, ses expressions locales et parfois même son propre vocabulaire pour un même objet du quotidien.",
    fact: "Une \"biscuit\" au Royaume-Uni désigne ce qu'on appelle un \"cookie\" aux États-Unis, alors qu'un \"biscuit\" américain ressemble davantage à un petit pain moelleux — un même mot, deux réalités culinaires différentes selon le pays anglophone.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getAnglaisObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_ANGLAIS_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_ANGLAIS_OBJECTS = MUSEE_ANGLAIS_OBJECTS;
window.getAnglaisObjectsForParcours = getAnglaisObjectsForParcours;
