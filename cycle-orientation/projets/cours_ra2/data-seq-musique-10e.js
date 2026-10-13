// SALLE SÉQUENCES — MUSIQUE 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MUSIQUE_10E_OBJECTS = [
  {
    id: "seq_musique_10_1",
    tier: "court",
    emoji: "🎶",
    label: "Chanter à deux voix",
    text: "La classe apprend une mélodie puis une deuxième voix simple, avant de les chanter ensemble en s'écoutant.",
    fact: "PER Arts (Musique) : chanter en polyphonie développe l'écoute.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_musique_10_2",
    tier: "court",
    emoji: "🎵",
    label: "Écoute comparative",
    text: "Les élèves écoutent deux extraits de styles ou d'époques différents et comparent instruments, rythmes et ambiance.",
    fact: "Comparer développe le vocabulaire musical.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_musique_10_3",
    tier: "moyen",
    emoji: "🎚️",
    label: "Un paysage sonore",
    text: "En groupes, les élèves créent un paysage sonore d'une minute avec voix, objets et une application de montage.",
    fact: "Créer avec des outils numériques prolonge la pratique musicale.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_musique_10_4",
    tier: "moyen",
    emoji: "✍️",
    label: "Écrire un couplet",
    text: "Les élèves écrivent un couplet sur un rythme donné, en veillant aux accents de la langue et à la rime.",
    fact: "Faire correspondre texte et rythme travaille la prosodie.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_musique_10_5",
    tier: "long",
    emoji: "🎸",
    label: "Arranger une chanson connue",
    text: "Les groupes réarrangent une chanson connue (instruments, tempo, ordre) et présentent leur version.",
    fact: "L'arrangement rend la création accessible.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_musique_10_6",
    tier: "long",
    emoji: "🎙️",
    label: "Enregistrer et s'écouter",
    text: "Les groupes enregistrent leur production, l'écoutent et notent trois améliorations à apporter.",
    fact: "S'écouter permet une autocritique précise.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMusique10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MUSIQUE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MUSIQUE_10E_OBJECTS = MUSEE_SEQ_MUSIQUE_10E_OBJECTS;
window.getSeqMusique10ObjectsForParcours = getSeqMusique10ObjectsForParcours;
