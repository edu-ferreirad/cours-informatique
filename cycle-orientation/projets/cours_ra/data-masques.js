// ============================================================================
// SALLE DES MASQUES — bonus culture théâtrale
// Contenu original de culture générale sur l'histoire du théâtre (masques,
// comédie/tragédie grecques, Commedia dell'arte, mise en scène) —
// complément au PDF "Expression orale" déjà utilisé pour la salle Théâtre
// 9e. Aucun manuel spécifique ; connaissances généralement admises sur
// l'histoire du théâtre occidental.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MASQUES_OBJECTS = [
  {
    id: "quest_ce_quun_masque",
    tier: "court",
    emoji: "🎭",
    label: "Qu'est-ce qu'un masque de théâtre ?",
    text: "Un masque de théâtre ne sert pas seulement à cacher un visage : il transforme instantanément l'identité de celui qui le porte, aux yeux du public comme parfois à ses propres yeux, en fixant une expression, une émotion ou un caractère bien avant même le premier mot prononcé.",
    fact: "Le mot français \"personnage\" viendrait du latin \"persona\", qui désignait justement le masque de théâtre antique — le masque a littéralement donné son nom à l'idée même de personnage.",
    anchor: { distance: 0.9, angle: 305, height: SHELF_H }
  },
  {
    id: "masques_grecs",
    tier: "court",
    emoji: "🎭",
    label: "Les masques du théâtre grec",
    text: "Dans le théâtre de la Grèce antique, chaque acteur (toujours un homme, même pour les rôles féminins) portait un masque qui identifiait immédiatement son personnage au public, même assis très loin dans les gradins d'un amphithéâtre géant.",
    fact: "Le masque grec possédait souvent une forme de porte-voix intégrée à la bouche, pensée pour amplifier naturellement la voix de l'acteur jusqu'aux derniers rangs d'un théâtre pouvant accueillir des milliers de spectateurs.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "comedie_tragedie",
    tier: "court",
    emoji: "😄😢",
    label: "Comédie et tragédie, deux masques emblématiques",
    text: "Le masque souriant et le masque au visage tourmenté, aujourd'hui symboles universels du théâtre, représentent à l'origine deux genres bien distincts : la comédie, qui fait rire de situations et de personnages du quotidien, et la tragédie, qui met en scène la chute de personnages nobles face à un destin implacable.",
    fact: "Dans la tragédie grecque antique, la violence (meurtres, morts) se déroulait presque toujours hors scène, seulement racontée par un personnage ou un chœur — jamais montrée directement au public.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "le_choeur_grec",
    tier: "court",
    emoji: "🗣️",
    label: "Le chœur, la voix du peuple",
    text: "Dans le théâtre grec antique, un chœur de plusieurs comédiens chantait et commentait ensemble l'action en cours, exprimant souvent le point de vue du peuple ou une sagesse collective face aux décisions des personnages principaux de l'histoire.",
    fact: "À l'origine, le théâtre grec ne comportait qu'un chœur et aucun acteur individuel : c'est le poète Thespis qui aurait, selon la tradition, introduit le premier acteur capable de dialoguer seul face au chœur.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "commedia_dell_arte",
    tier: "moyen",
    emoji: "🃏",
    label: "La Commedia dell'arte",
    text: "Née en Italie à la Renaissance, la Commedia dell'arte reposait sur des personnages-types récurrents, reconnaissables à leur masque et leur costume (Arlequin, Pantalon, le Docteur), et sur des improvisations construites à partir d'un simple canevas plutôt qu'un texte entièrement écrit.",
    fact: "Les troupes de Commedia dell'arte voyageaient de ville en ville à travers l'Europe, jouant souvent en plein air sur des places publiques — une tradition de théâtre ambulant qui a durablement influencé la comédie occidentale, jusqu'à Molière lui-même.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "arlequin",
    tier: "moyen",
    emoji: "🔷",
    label: "Arlequin, le valet malicieux",
    text: "Reconnaissable à son costume à losanges colorés et à son demi-masque noir, Arlequin est l'un des personnages les plus célèbres de la Commedia dell'arte : un valet rusé, souvent affamé et maladroit, mais capable de retourner n'importe quelle situation à son avantage par des ruses improvisées.",
    fact: "Le costume à losanges d'Arlequin, aujourd'hui associé au raffinement, viendrait à l'origine d'un habit rapiécé de tissus mal assortis, symbolisant la pauvreté du personnage — un habit devenu, au fil du temps, un motif décoratif recherché.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "masque_neutre_bonus",
    tier: "moyen",
    emoji: "😐",
    label: "Le masque neutre, un outil pédagogique moderne",
    text: "Bien plus récent que les masques historiques, le masque neutre, sans expression aucune, est utilisé aujourd'hui dans la formation des acteurs pour apprendre à faire porter tout le sens par le corps et le geste, sans jamais pouvoir compter sur une expression du visage.",
    fact: "Le masque neutre a été particulièrement développé et popularisé au XXe siècle par le pédagogue français Jacques Lecoq, dans sa célèbre école internationale de théâtre à Paris.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "quatrieme_mur",
    tier: "moyen",
    emoji: "🧱",
    label: "Le quatrième mur",
    text: "On appelle \"quatrième mur\" la frontière invisible entre la scène et le public, comme si un mur transparent séparait les deux : les acteurs jouent en principe comme si ce mur existait vraiment, sans jamais s'adresser directement aux spectateurs.",
    fact: "\"Briser le quatrième mur\" — quand un personnage s'adresse soudain directement au public — est un procédé volontairement surprenant, utilisé aussi bien au théâtre qu'au cinéma pour créer un effet de complicité ou de rupture inattendue.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "mise_en_scene_moderne",
    tier: "long",
    emoji: "🎬",
    label: "Le metteur en scène, une invention récente",
    text: "Le rôle du metteur en scène — celui qui dirige l'ensemble de l'interprétation, des décors et de la mise en espace d'une pièce — n'est devenu une fonction artistique clairement identifiée qu'à partir du XIXe siècle : avant cela, les troupes s'organisaient souvent de façon beaucoup plus collective.",
    fact: "Une même pièce de théâtre, avec un texte pourtant identique mot pour mot, peut donner des spectacles radicalement différents selon les choix de mise en scène — costumes, décors, époque choisie, ton général — d'un metteur en scène à l'autre.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "theatre_kabuki",
    tier: "long",
    emoji: "🎴",
    label: "Le kabuki japonais",
    text: "Le théâtre kabuki, né au Japon au début du XVIIe siècle, associe danse, musique et jeu très stylisé, avec un maquillage spectaculaire (le kumadori) qui remplace souvent le masque pour indiquer instantanément le caractère d'un personnage — héroïque, malveillant ou comique.",
    fact: "À l'origine du kabuki se trouvaient des troupes exclusivement féminines ; les autorités japonaises ont ensuite interdit aux femmes de se produire sur scène, donnant naissance à la tradition, toujours vivante aujourd'hui, d'acteurs masculins spécialisés dans les rôles féminins (onnagata).",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "theatre_epique_brecht",
    tier: "long",
    emoji: "📢",
    label: "Le théâtre qui refuse de faire oublier qu'il est du théâtre",
    text: "Au XXe siècle, l'auteur et metteur en scène allemand Bertolt Brecht a développé un théâtre volontairement distancié, cherchant à empêcher le spectateur de \"s'oublier\" complètement dans l'histoire, pour qu'il garde un regard critique sur ce qui est représenté plutôt que de se laisser simplement émouvoir.",
    fact: "Pour créer cet effet de distanciation, Brecht faisait par exemple annoncer à l'avance la fin d'une scène par une pancarte, ou interrompre l'action par une chanson — des procédés volontairement destinés à rappeler au public qu'il regarde une construction théâtrale, pas une réalité.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "masques_africains_rituels",
    tier: "long",
    emoji: "🪘",
    label: "Les masques rituels, au-delà du théâtre occidental",
    text: "Dans de nombreuses cultures d'Afrique de l'Ouest, le masque ne sert pas seulement à divertir : porté lors de cérémonies rituelles, il est parfois considéré comme incarnant réellement un esprit ou un ancêtre pendant la durée du rite, bien au-delà d'un simple rôle de scène à interpréter.",
    fact: "Contrairement au masque de théâtre occidental, souvent conçu pour être vu de face par un public assis, certains masques rituels africains sont pensés pour être vus en mouvement, sous tous les angles, intégrés à une danse et un costume complet plutôt qu'à un simple visage recouvert.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMasquesObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MASQUES_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MASQUES_OBJECTS = MUSEE_MASQUES_OBJECTS;
window.getMasquesObjectsForParcours = getMasquesObjectsForParcours;
