// SALLE SÉQUENCES — ANGLAIS 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_11E_OBJECTS = [
  {
    id: "seq_anglais_11_1",
    tier: "court",
    emoji: "🎧",
    label: "Listening : a short news item",
    text: "Les élèves écoutent un court reportage, notent les informations principales, puis comparent et réécoutent.",
    fact: "La compréhension orale se travaille par écoutes multiples.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_anglais_11_2",
    tier: "court",
    emoji: "📖",
    label: "Reading : strategies for a short text",
    text: "Avec un court article, les élèves utilisent des stratégies (mots transparents, titre, contexte) et répondent à des questions.",
    fact: "Les stratégies rendent la lecture autonome.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_anglais_11_3",
    tier: "moyen",
    emoji: "🧳",
    label: "Planning a trip",
    text: "Les élèves planifient un séjour (transport, hébergement, budget) et présentent leur plan.",
    fact: "Une tâche authentique mobilise plusieurs compétences.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_anglais_11_4",
    tier: "moyen",
    emoji: "🎨",
    label: "Hobbies and opinions : an interview",
    text: "Par deux, les élèves s'interviewent sur loisirs et opinions, puis présentent leur partenaire.",
    fact: "Exprimer une opinion est un objectif du cycle 3.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_anglais_11_5",
    tier: "long",
    emoji: "🎤",
    label: "A short presentation",
    text: "Chaque élève présente un sujet en deux minutes avec support visuel et répond à une question.",
    fact: "Prépare aux évaluations orales.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_anglais_11_6",
    tier: "long",
    emoji: "📞",
    label: "Role-play : a phone call",
    text: "Les élèves jouent un appel téléphonique (réservation, renseignement) avec cartes de rôle.",
    fact: "Sans support visuel, l'écoute devient plus exigeante.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAnglais11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ANGLAIS_11E_OBJECTS = MUSEE_SEQ_ANGLAIS_11E_OBJECTS;
window.getSeqAnglais11ObjectsForParcours = getSeqAnglais11ObjectsForParcours;
