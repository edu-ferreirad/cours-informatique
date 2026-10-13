// ============================================================================
// SALLE MUSIQUE 9e-10e
// Contenu original construit à partir des grands axes du Plan d'études
// romand pour la Musique et des prescriptions cantonales GE (Musique
// 9e-10e, 1 période/semaine chacune, pas d'enseignement en 11e) : voix et
// chant, rythme, écoute et culture musicale, instruments, création.
// Aucun moyen d'enseignement officiel détaillé (type "Planète musique")
// n'a pu être consulté : contenu rédigé pour rester fidèle aux grands
// objectifs du PER, à compléter avec plaisir avec vos propres partitions
// et écoutes de classe.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_MUSIQUE_OBJECTS = [
  {
    id: "voix_chant",
    tier: "court",
    emoji: "🎤",
    label: "La voix, premier instrument",
    text: "Avant tout instrument, la voix est le premier instrument de musique disponible pour chacun. Chanter en groupe développe l'écoute, la justesse et le placement du souffle — les mêmes bases que celles travaillées en expression orale, mais mises cette fois au service de la musique.",
    fact: "Chanter en chœur, même sans formation musicale poussée, aide à synchroniser naturellement sa respiration à celle du groupe — un phénomène observé aussi dans d'autres pratiques collectives comme l'aviron.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "rythme_pulsation",
    tier: "court",
    emoji: "🥁",
    label: "La pulsation, le battement caché",
    text: "Sous presque toute musique se cache une pulsation régulière, un battement de fond que le corps ressent souvent avant même de le comprendre intellectuellement — c'est elle qui donne envie de taper du pied ou de hocher la tête en rythme.",
    fact: "Le tempo d'une musique se mesure en battements par minute (BPM) : la plupart des morceaux de danse actuels se situent généralement entre 120 et 130 BPM, une vitesse proche du rythme naturel de la marche rapide.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "familles_instruments",
    tier: "court",
    emoji: "🎻",
    label: "Les familles d'instruments",
    text: "Les instruments de musique se classent en grandes familles selon la façon dont ils produisent le son : les cordes (violon, guitare), les vents (flûte, trompette), les percussions (tambour, xylophone) et les claviers (piano) — chaque famille ayant son propre timbre caractéristique.",
    fact: "Le piano, souvent classé à part, est en réalité un instrument à cordes frappées : chaque touche actionne un petit marteau qui vient percuter une corde tendue à l'intérieur de l'instrument.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "ecoute_active",
    tier: "court",
    emoji: "👂",
    label: "Écouter activement une musique",
    text: "Écouter activement, c'est repérer volontairement des éléments précis dans un morceau : quel instrument joue, la musique accélère-t-elle ou ralentit-elle, devient-elle plus forte ou plus douce — une écoute qui transforme un simple fond sonore en une véritable analyse musicale.",
    fact: "Repérer un seul instrument précis dans un orchestre complet demande un entraînement de l'oreille comparable, par bien des aspects, à celui qu'on développe en apprenant à repérer un mot précis dans une conversation en langue étrangère.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "notation_musicale",
    tier: "moyen",
    emoji: "🎼",
    label: "Lire la musique sur une portée",
    text: "La portée musicale (les cinq lignes horizontales) et les notes qui s'y placent permettent de fixer par écrit une mélodie, exactement comme l'écriture fixe la parole — un même morceau peut ainsi être rejoué à l'identique des siècles plus tard, n'importe où dans le monde.",
    fact: "Le système de notation musicale actuel, avec ses cinq lignes, s'est stabilisé progressivement à partir du Moyen Âge — avant cela, la musique se transmettait presque uniquement à l'oral, de génération en génération.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "epoques_styles",
    tier: "moyen",
    emoji: "🕰️",
    label: "Des époques, des styles",
    text: "La musique occidentale a traversé de grandes périodes aux styles bien distincts — baroque, classique, romantique — avant l'explosion, au XXe siècle, d'une diversité de styles populaires (jazz, rock, musiques électroniques) qui continuent d'évoluer aujourd'hui.",
    fact: "Une même mélodie peut sonner radicalement différente selon l'époque et le style dans lesquels elle est arrangée — un exercice de comparaison souvent utilisé en classe pour faire entendre l'influence du style sur la perception d'un même air.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "creation_musicale",
    tier: "moyen",
    emoji: "🎹",
    label: "Créer sa propre courte pièce",
    text: "Composer, même très simplement, une courte suite rythmique ou mélodique permet de comprendre la musique \"de l'intérieur\" : choisir un tempo, répéter un motif, introduire une variation — les mêmes décisions que prend, à plus grande échelle, n'importe quel compositeur.",
    fact: "De nombreux compositeurs célèbres ont construit des œuvres entières à partir d'un tout petit motif de quelques notes répété, transformé et développé — une technique de composition accessible dès les premiers essais de création en classe.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "musique_emotion",
    tier: "moyen",
    emoji: "😢",
    label: "La musique qui fait ressentir",
    text: "Un simple changement de mode (majeur ou mineur), de tempo ou de volume peut transformer radicalement l'émotion ressentie à l'écoute d'une même mélodie — un pouvoir que la musique de film exploite volontairement pour orienter les émotions du spectateur sans un seul mot.",
    fact: "Une mélodie identique, jouée en mode majeur, est généralement perçue comme joyeuse ou apaisante, alors que la même mélodie jouée en mode mineur est le plus souvent ressentie comme triste ou inquiétante — un effet observé dans presque toutes les cultures musicales du monde.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "musiques_du_monde",
    tier: "long",
    emoji: "🌍",
    label: "Des musiques du monde entier",
    text: "Chaque culture a développé ses propres gammes, rythmes et instruments traditionnels — du gamelan indonésien au djembé ouest-africain, en passant par le raga indien — révélant que la musique occidentale n'est qu'une des nombreuses façons possibles d'organiser le son.",
    fact: "Certaines traditions musicales, comme la musique indienne classique, utilisent des divisions de la gamme bien plus fines que les demi-tons occidentaux — des micro-intervalles qui n'existent simplement pas dans le système musical enseigné en Europe.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "musique_et_technologie",
    tier: "long",
    emoji: "🎧",
    label: "La musique transformée par la technologie",
    text: "De l'enregistrement analogique aux instruments électroniques, en passant par les logiciels de composition assistée par ordinateur, chaque avancée technologique a ouvert de nouvelles possibilités sonores et a transformé, en retour, les styles musicaux eux-mêmes.",
    fact: "Le synthétiseur, capable de créer des sons qui n'existent dans aucun instrument acoustique traditionnel, a rendu possibles des genres musicaux entiers qui n'auraient tout simplement pas pu exister sans cette technologie.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "musique_ensemble",
    tier: "long",
    emoji: "🎶",
    label: "Jouer ou chanter ensemble",
    text: "Faire de la musique en groupe (chœur, orchestre, petit ensemble) demande une écoute constante des autres musiciens, un ajustement permanent de son propre volume, de son tempo et de sa justesse pour que l'ensemble sonne comme une seule voix collective plutôt qu'une addition de sons individuels.",
    fact: "Dans un grand chœur, chaque chanteur adapte inconsciemment sa voix à celle de ses voisins immédiats — un phénomène d'ajustement collectif qui permet à des centaines de voix de sonner, au final, comme une seule masse sonore homogène.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "metier_musicien",
    tier: "long",
    emoji: "🎬",
    label: "Composer pour un film ou un jeu",
    text: "Composer une musique de film ou de jeu vidéo est un métier à part entière, qui demande de synchroniser précisément la musique à l'image ou à l'action, tout en renforçant l'émotion voulue par le réalisateur ou le créateur du jeu — une musique pensée pour servir une histoire plus que pour être écoutée seule.",
    fact: "Certains thèmes musicaux de films ou de jeux vidéo sont devenus tellement identifiables que les entendre suffit, seuls, à évoquer immédiatement une scène ou une émotion précise chez des millions de personnes qui les ont entendus.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getMusiqueObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_MUSIQUE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_MUSIQUE_OBJECTS = MUSEE_MUSIQUE_OBJECTS;
window.getMusiqueObjectsForParcours = getMusiqueObjectsForParcours;
