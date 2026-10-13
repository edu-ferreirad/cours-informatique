// SALLE SÉQUENCES — ANGLAIS 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_9E_OBJECTS = [
  {
    id: "seq_anglais_9_1",
    tier: "court",
    emoji: "🔤",
    label: "Greetings et alphabet game",
    text: "Les élèves se saluent, épellent leur nom en anglais et complètent une fiche d'identité en interrogeant leurs camarades.",
    fact: "PER Langues (L2) : interagir dans des situations simples. Épeler est une compétence utile au quotidien.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_anglais_9_2",
    tier: "court",
    emoji: "🕒",
    label: "Numbers and time bingo",
    text: "Un bingo de nombres et d'heures en anglais entraîne la compréhension orale.",
    fact: "La répétition ludique fixe les bases.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_anglais_9_3",
    tier: "moyen",
    emoji: "🏠",
    label: "My house and rooms",
    text: "Les élèves décrivent leur logement ou leur chambre idéale avec des phrases simples et un plan dessiné.",
    fact: "Un support visuel soutient l'expression.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_anglais_9_4",
    tier: "moyen",
    emoji: "🛍️",
    label: "Shopping role-play",
    text: "Par deux, les élèves jouent un achat (prix, tailles, couleurs) avec des étiquettes.",
    fact: "Les jeux de rôles préparent aux situations réelles.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_anglais_9_5",
    tier: "long",
    emoji: "📅",
    label: "Describe your day",
    text: "Les élèves décrivent une journée type avec heures et verbes usuels, à l'oral puis à l'écrit.",
    fact: "Le récit d'une journée réinvestit temps et verbes.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_anglais_9_6",
    tier: "long",
    emoji: "🎙️",
    label: "Recorded mini-dialogue",
    text: "Les élèves écrivent, enregistrent et réécoutent un dialogue court pour corriger la prononciation.",
    fact: "Se réécouter développe l'autocorrection.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAnglais9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ANGLAIS_9E_OBJECTS = MUSEE_SEQ_ANGLAIS_9E_OBJECTS;
window.getSeqAnglais9ObjectsForParcours = getSeqAnglais9ObjectsForParcours;
