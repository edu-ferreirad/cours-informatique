// ============================================================================
// SALLE HISTOIRE — COLLÈGE DE GENÈVE (DF, 1ère-4e)
// Contenu reformulé à partir du Plan d'études du Collège de Genève,
// section Histoire p. 41-42 : objectifs généraux, connaissances,
// compétences et méthodes, liens avec d'autres disciplines. Aucun
// énoncé n'est copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_HISTOIRE_COLLEGE_OBJECTS = [
  {
    id: "comprendre_realite_humaine",
    tier: "court",
    emoji: "🌍",
    label: "Comprendre la complexité de l'humain",
    text: "L'histoire au collège vise l'étude et la compréhension de la diversité et de la complexité de la réalité humaine — pas seulement mémoriser des dates, mais saisir pourquoi les sociétés humaines, à travers les époques, ont fonctionné de manières si différentes les unes des autres.",
    fact: "Le plan d'études présente explicitement l'histoire comme une discipline qui contribue à atténuer l'ethnocentrisme, en luttant contre la tentation de réduire toute la complexité socio-historique à un modèle unique — qu'il soit culturel, politique, économique ou religieux.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "interroger_passe_present",
    tier: "court",
    emoji: "🔄",
    label: "Interroger le passé pour comprendre le présent",
    text: "L'histoire n'est pas un simple catalogue figé de faits anciens : c'est une façon d'interroger le passé pour mieux comprendre le présent, à travers des questions qui se renouvellent constamment selon les époques et les cultures qui les posent.",
    fact: "Le plan d'études qualifie explicitement l'histoire de \"matière vivante, ancrée dans les réalités quotidiennes\" — une discipline qui change de perspective à mesure que le présent lui-même évolue et pose de nouvelles questions à son propre passé.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "memoire_identite_collective",
    tier: "court",
    emoji: "🧭",
    label: "Se situer dans le temps, se construire une identité",
    text: "En permettant à chacun de se repérer par rapport au passé, l'histoire contribue à la reconstitution de la mémoire individuelle et collective — un rôle qui va au-delà du simple savoir académique, puisqu'il participe directement à la formation de l'identité humaine.",
    fact: "Le plan d'études relie explicitement cette construction identitaire à un double enracinement : tant culturel que social, associé à un sentiment d'appartenance à une collectivité et à un cadre de vie précis.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "lignes_de_force_continuites",
    tier: "court",
    emoji: "📊",
    label: "Repérer les continuités et les ruptures",
    text: "Plutôt que d'accumuler des généralités, l'enseignement de l'histoire cherche un équilibre entre panorama général et questions choisies à approfondir, pour fixer les notions de temps et d'espace et repérer les grandes lignes de force, les continuités et les ruptures qui traversent l'histoire humaine.",
    fact: "Le plan d'études attire aussi l'attention sur la genèse des concepts eux-mêmes : des idées comme la démocratie, la nation ou les droits humains n'ont pas toujours existé sous leur forme actuelle — elles se sont construites, définies et redéfinies au fil du temps.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "pluralite_interpretations",
    tier: "moyen",
    emoji: "🔍",
    label: "Un même fait, plusieurs interprétations possibles",
    text: "L'enseignement de l'histoire propose aussi une réflexion sur l'histoire elle-même : il met en relief la pluralité des perceptions et des interprétations possibles d'un même fait, selon qui l'a vécu, qui le raconte et à quelle époque on l'étudie.",
    fact: "Cette réflexion sur la nature même du savoir historique — comment on sait ce qu'on sait du passé — porte un nom propre en histoire des sciences : l'historiographie, l'étude de la manière dont l'histoire elle-même a été écrite au fil du temps.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "critique_sources_diverses",
    tier: "moyen",
    emoji: "📄",
    label: "Interpréter et critiquer des sources diverses",
    text: "Parmi les compétences centrales de l'historien en formation : analyser et synthétiser des informations sonores, écrites et iconographiques, puis interpréter et critiquer ces sources — jamais les prendre pour argent comptant sans questionner qui les a produites, pourquoi et dans quel contexte.",
    fact: "Le plan d'études précise que l'enseignement recourt aux \"outils habituels de l'histoire\" : textes écrits, documents sonores et iconographiques — une palette de sources bien plus large que le seul texte, incluant images, affiches ou enregistrements d'époque.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "pouvoir_contre_pouvoir",
    tier: "moyen",
    emoji: "⚖️",
    label: "Pouvoir et contre-pouvoir",
    text: "L'histoire favorise la réflexion sur les structures de société, et notamment sur les notions de pouvoir et de contre-pouvoir — comment une autorité s'installe, se maintient, se conteste ou se transforme au fil du temps, dans des contextes politiques très différents les uns des autres.",
    fact: "Le plan d'études porte une attention particulière aux grands problèmes des sociétés contemporaines, montrant que ces mécanismes de pouvoir et de contre-pouvoir étudiés dans le passé restent directement utiles pour analyser l'actualité politique.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "debats_votations_blanc",
    tier: "moyen",
    emoji: "🗳️",
    label: "Débattre pour préparer une votation",
    text: "Des débats organisés en classe, par exemple pour préparer des votations en blanc (une simulation du vote citoyen suisse), permettent de développer des compétences sociales fondamentales en démocratie : écouter les arguments d'autrui, structurer sa propre pensée, et travailler en équipe.",
    fact: "Cette pratique des votations en blanc, courante en Suisse, permet aux élèves de s'exercer concrètement au débat démocratique avant même d'avoir l'âge légal de voter — une manière très directe de relier l'histoire à la citoyenneté active.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "formation_citoyen_critique",
    tier: "long",
    emoji: "🏛️",
    label: "Former un citoyen critique",
    text: "L'histoire favorise la formation de citoyens responsables, capables de porter un regard critique sur les faits et de prendre de la distance par rapport au présent et au passé — une mission qui dépasse la simple transmission de connaissances pour viser une véritable posture intellectuelle face au monde.",
    fact: "Le plan d'études qualifie explicitement l'histoire de \"discipline humaniste par excellence\" — un terme qui souligne son ambition de former non pas seulement des spécialistes, mais des individus capables de réflexion autonome sur la condition humaine.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "collaboration_geographie",
    tier: "long",
    emoji: "🌐",
    label: "Histoire et géographie, une collaboration étroite",
    text: "L'histoire est plus particulièrement ouverte à la collaboration avec la philosophie, le droit, l'économie, et notamment la géographie — les deux disciplines historique et géographique collaborant selon des modalités variées : partage du temps d'enseignement, cours en duo, ou intégration complète des deux approches.",
    fact: "Cette proximité entre histoire et géographie n'est pas propre au collège genevois : dans de nombreux systèmes scolaires francophones, ces deux disciplines sont traditionnellement enseignées ensemble, tant leurs objets d'étude (les sociétés humaines dans le temps et dans l'espace) sont liés.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "problematique_argumentation",
    tier: "long",
    emoji: "🧩",
    label: "Établir une problématique, argumenter",
    text: "Au-delà de l'analyse des faits, l'histoire développe la capacité à établir une problématique — formuler la bonne question à poser à propos d'un événement — puis à réfléchir de façon indépendante, à nuancer sa pensée, et enfin à argumenter et restituer clairement ses réflexions.",
    fact: "Cette compétence à \"discerner et relier l'essentiel\" parmi une masse d'informations disparates est explicitement citée par le plan d'études, une aptitude directement transférable bien au-delà du seul cours d'histoire, jusque dans la vie professionnelle future.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "interdisciplinarite_sciences_humaines",
    tier: "long",
    emoji: "🔗",
    label: "L'histoire, ouverte à toutes les sciences humaines",
    text: "Pour comprendre des phénomènes complexes, l'histoire intègre naturellement des concepts, des approches et des éclairages empruntés à d'autres disciplines, notamment l'ensemble des sciences humaines — un même événement historique s'expliquant rarement par une seule cause ou un seul point de vue disciplinaire.",
    fact: "Le plan d'études précise que cette interdisciplinarité s'articule aussi bien au niveau des notions étudiées qu'à celui des méthodes et démarches mises en œuvre — l'histoire n'emprunte donc pas que des connaissances aux autres disciplines, mais aussi leurs façons de raisonner.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getHistoireCollegeObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_HISTOIRE_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_HISTOIRE_COLLEGE_OBJECTS = MUSEE_HISTOIRE_COLLEGE_OBJECTS;
window.getHistoireCollegeObjectsForParcours = getHistoireCollegeObjectsForParcours;
