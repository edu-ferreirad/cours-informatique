// ============================================================================
// SALLE FRANÇAIS — COLLÈGE DE GENÈVE (discipline fondamentale, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève (DIP,
// 2018-2019), section Français, p. 9-11 : objectifs généraux, lecture et
// interprétation, écriture, expression orale et diction, méthodes de
// travail, liens avec d'autres disciplines. Ce plan d'études décrit des
// objectifs pour l'ensemble du cycle (6h/4h/4h/4h de la 1ère à la 4e
// année), pas un chapitre par année comme un manuel : les 3 parcours
// (court/moyen/long) représentent donc une progression en profondeur,
// pas une répartition stricte par année. Aucun énoncé n'est copié tel
// quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_FRANCAIS_COLLEGE_OBJECTS = [
  {
    id: "francais_langue_expression",
    tier: "court",
    emoji: "🗣️",
    label: "Maîtriser la langue pour s'exprimer",
    text: "Au collège, le français vise avant tout la maîtrise de la langue comme moyen d'expression et de communication : comprendre et interpréter le discours d'autrui, et développer sa propre capacité d'expression, à l'écrit comme à l'oral — une base sur laquelle s'appuient ensuite toutes les autres disciplines.",
    fact: "Le français reste la discipline la plus dotée en heures dès la 1ère année du collège (6 heures hebdomadaires), avant de se stabiliser à 4 heures les années suivantes — un signe de son rôle central dans la formation gymnasiale genevoise.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "culture_litteraire_historique",
    tier: "court",
    emoji: "📚",
    label: "Une culture littéraire, du Moyen Âge à nos jours",
    text: "Le programme vise la connaissance de la littérature d'expression française — notamment romande — étudiée dans une perspective historique et critique, du Moyen Âge jusqu'à l'époque contemporaine, pour que l'élève construise un véritable savoir culturel au fil des quatre années.",
    fact: "Le plan d'études précise explicitement que la littérature romande fait partie intégrante du corpus étudié, aux côtés du reste de la littérature francophone — une manière d'ancrer la culture générale dans son contexte régional autant que national.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "lecture_interpretation_attitudes",
    tier: "court",
    emoji: "🔍",
    label: "Lire en profondeur, pas seulement lire",
    text: "La lecture approfondie d'œuvres d'époques, de genres et de sujets variés ne vise pas seulement à \"avoir lu\" un texte : elle cherche à éveiller et développer la sensibilité esthétique et le sens critique de l'élève, en le rendant capable de questionner ce qu'il lit plutôt que de le recevoir passivement.",
    fact: "Le plan d'études relie explicitement l'étude des œuvres littéraires à leur contexte socioculturel et aux grands mouvements artistiques de leur époque — lire un texte, ce n'est donc jamais le lire complètement isolé de son époque.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "diction_1ere_annee",
    tier: "court",
    emoji: "🎭",
    label: "Une année de diction, sous la direction d'un artiste",
    text: "En 1ère année, la dotation horaire du français comprend un enseignement de diction, dispensé sous la direction d'un artiste de théâtre : jeu de rôle, improvisation, travail du corps et de la voix, maîtrise du trac — une continuité directe avec l'expression orale déjà travaillée au cycle d'orientation, mais confiée cette fois à un professionnel de la scène.",
    fact: "Le plan d'études décrit un objectif de diction très précis : apprendre à formuler le \"non-dit\" ou le \"sous-texte\", c'est-à-dire l'écart entre ce que l'on exprime et ce que l'on veut réellement dire — une compétence de communication qui va bien au-delà de la seule articulation.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "ecriture_diversite_formes",
    tier: "moyen",
    emoji: "✍️",
    label: "Écrire dans des formes variées",
    text: "L'écriture au collège couvre une grande diversité de formes : écrits de circonstance, compositions d'imagination, narrations, textes poétiques et dramatiques, résumés, commentaires, dissertations — chaque forme demandant sa propre maîtrise des codes et des attentes spécifiques.",
    fact: "Le plan d'études insiste particulièrement sur l'argumentation, qu'il présente comme un objet d'apprentissage et de pratique à part, plus exigeant que les autres formes d'écriture, car il demande de construire un raisonnement convaincant, pas seulement de raconter ou décrire.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "oral_soutenu_situations",
    tier: "moyen",
    emoji: "🎙️",
    label: "L'oral soutenu, une place à part",
    text: "L'enseignement du français accorde une place privilégiée à l'oral soutenu — un registre de langue plus formel et construit que l'oral spontané du quotidien — en développant la capacité à identifier les particularités de la langue orale selon les situations d'élocution et les destinataires.",
    fact: "Le plan d'études précise que les mêmes objectifs généraux s'appliquent à l'oral et à l'écrit : la lecture, la récitation, le débat, les exposés et l'explication de texte forment un même ensemble de compétences orales attendues, plutôt que des exercices isolés les uns des autres.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "methodes_travail_autonomie",
    tier: "moyen",
    emoji: "🗂️",
    label: "Devenir autonome par la méthode",
    text: "Au-delà des contenus littéraires et linguistiques, le français vise à rendre l'élève autonome par l'acquisition de méthodes de travail : prise de notes, consultation d'ouvrages de référence, élaboration d'une bibliographie ou d'un dossier, apprentissage du travail individuel et du travail en groupe.",
    fact: "Le plan d'études présente explicitement le cours de français comme le \"lieu privilégié\" où s'acquièrent les méthodes d'analyse et de travail sur les textes — un rôle qui dépasse la seule discipline, puisque ces méthodes servent ensuite dans les autres matières.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "connaissance_soi_par_ecriture",
    tier: "moyen",
    emoji: "💭",
    label: "L'écriture, un exercice de créativité",
    text: "L'enseignement du français écrit ne se limite pas à transmettre des techniques : il exerce et développe activement la créativité de l'élève, en l'amenant à trouver et affiner sa propre voix à travers les différentes formes d'écriture pratiquées au fil des quatre années.",
    fact: "Le plan d'études range délibérément la créativité du côté des \"attitudes\" à développer, au même titre que la curiosité ou la sensibilité esthétique — pas seulement comme une compétence technique à acquérir.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "litterature_interdisciplinaire",
    tier: "long",
    emoji: "🔗",
    label: "Le français, appui de toutes les disciplines",
    text: "Le plan d'études qualifie l'enseignement du français de \"naturellement interdisciplinaire\" : il est en relation avec la plupart des autres disciplines dans les domaines de la lecture et des méthodes de travail, et constitue un appui direct dans les domaines de la parole et de l'écriture pour l'ensemble du parcours gymnasial.",
    fact: "Cette dimension interdisciplinaire explique pourquoi le français reste une discipline fondamentale obligatoire tout au long des quatre années du collège, quelle que soit l'orientation choisie par l'élève (option spécifique scientifique, littéraire ou artistique).",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "litteratures_etrangeres_comparaison",
    tier: "long",
    emoji: "🌍",
    label: "Comparer avec les littératures étrangères",
    text: "L'étude de la littérature française fait aussi appel, pour comparaison, à d'autres formes d'expression artistique et aux littératures étrangères — une ouverture qui permet à l'élève de mieux percevoir ce qui est spécifique à la littérature francophone en la mettant en regard d'autres traditions culturelles.",
    fact: "Cette mise en regard avec les littératures étrangères crée un pont naturel avec les cours de langues vivantes et anciennes du collège, qui étudient eux aussi des œuvres littéraires dans une perspective comparable, chacun dans sa propre langue.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "argumentation_pensee_discursive",
    tier: "long",
    emoji: "⚖️",
    label: "La pensée discursive, un objectif central",
    text: "Au-delà de la simple correction grammaticale, le français vise la maîtrise de la \"pensée discursive\" — c'est-à-dire la capacité à construire un raisonnement cohérent, à l'enchaîner logiquement et à le communiquer clairement, une compétence centrale pour la dissertation mais aussi pour l'ensemble des disciplines évaluées par un examen écrit argumenté.",
    fact: "Cette exigence d'argumentation structurée prépare directement les élèves à l'épreuve de dissertation de français, l'une des épreuves écrites emblématiques de l'examen de maturité gymnasiale suisse.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "discernement_jugement_citoyen",
    tier: "long",
    emoji: "🏛️",
    label: "Former un jugement indépendant",
    text: "En s'appuyant sur la loi genevoise sur l'instruction publique, le plan d'études rappelle que l'enseignement du français contribue à préparer chaque élève à participer à la vie sociale, culturelle, civique et politique du pays, en affermissant ses facultés de discernement et son indépendance de jugement.",
    fact: "Cette mission civique explicite — former des citoyens capables de discernement autonome — dépasse le seul cadre scolaire : elle inscrit l'enseignement du français dans les finalités générales de toute l'instruction publique genevoise, pas seulement dans celles du collège.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getFrancaisCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_FRANCAIS_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_FRANCAIS_COLLEGE_OBJECTS = MUSEE_FRANCAIS_COLLEGE_OBJECTS;
window.getFrancaisCollegeObjectsForParcours = getFrancaisCollegeObjectsForParcours;
