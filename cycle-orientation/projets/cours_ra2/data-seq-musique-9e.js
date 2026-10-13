// SALLE SÉQUENCES — MUSIQUE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_9E_OBJECTS = [
  {
    id: "seq_musique_9_1",
    tier: "court",
    emoji: "🎤",
    label: "Échauffement vocal",
    text: "La classe s'échauffe par respiration, vocalises et articulation avant de chanter à l'unisson une chanson courte.",
    fact: "PER Arts (Musique) : pratiquer la voix. L'échauffement prépare et protège la voix.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_musique_9_2",
    tier: "court",
    emoji: "🥁",
    label: "Percussions corporelles en canon",
    text: "Les élèves reproduisent un rythme frappé et chanté, puis le jouent en canon à deux ou trois groupes.",
    fact: "Le canon développe l'écoute et la coordination.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_musique_9_3",
    tier: "moyen",
    emoji: "🎼",
    label: "Lire un rythme simple",
    text: "Les élèves déchiffrent une courte partition rythmique et la frappent, puis en écrivent une à faire déchiffrer.",
    fact: "Écrire et lire un rythme relie notation et son.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_musique_9_4",
    tier: "moyen",
    emoji: "🎧",
    label: "Écoute active",
    text: "Les élèves écoutent un extrait plusieurs fois avec des consignes différentes (instruments, tempo, émotion) et notent leurs observations.",
    fact: "Écouter avec un objectif précis affine l'oreille.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_musique_9_5",
    tier: "long",
    emoji: "🎹",
    label: "Composer un ostinato",
    text: "En groupes, les élèves inventent une courte figure répétée (ostinato) et la superposent à celles des autres groupes.",
    fact: "La création collective développe l'écoute mutuelle.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_musique_9_6",
    tier: "long",
    emoji: "🎶",
    label: "Mini-concert de classe",
    text: "Les groupes présentent leur travail à la classe ; chaque auditeur note une chose réussie et une piste d'amélioration.",
    fact: "Se produire et recevoir un retour fait partie de la pratique musicale.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMusique9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MUSIQUE_9E_OBJECTS = MUSEE_SEQ_MUSIQUE_9E_OBJECTS;
window.getSeqMusique9ObjectsForParcours = getSeqMusique9ObjectsForParcours;
