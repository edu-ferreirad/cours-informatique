// SALLE SÉQUENCES — ALLEMAND 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_11E_OBJECTS = [
  {
    id: "seq_allemand_11_1",
    tier: "court",
    emoji: "🎧",
    label: "Hörverstehen : un fait divers",
    text: "Les élèves écoutent un court enregistrement, relèvent qui, quoi, où, quand, et comparent avec un camarade avant la deuxième écoute.",
    fact: "La compréhension orale se travaille par écoutes successives avec des consignes différentes.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_allemand_11_2",
    tier: "court",
    emoji: "📖",
    label: "Un texte court, cinq questions",
    text: "Les élèves lisent un court texte adapté, utilisent des stratégies (mots transparents, contexte) et répondent à des questions de compréhension.",
    fact: "Enseigner des stratégies rend le texte moins intimidant.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_allemand_11_3",
    tier: "moyen",
    emoji: "🚆",
    label: "Eine Reise planen",
    text: "À l'aide d'horaires de train fictifs, les élèves planifient un voyage en Suisse alémanique et présentent leur itinéraire.",
    fact: "Une tâche authentique mobilise heure, lieux et politesse.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_allemand_11_4",
    tier: "moyen",
    emoji: "🎨",
    label: "Hobbys : une interview",
    text: "Par deux, les élèves s'interviewent sur leurs loisirs, puis présentent leur partenaire en trois phrases.",
    fact: "Passer de l'interview à la présentation développe le discours rapporté.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_allemand_11_5",
    tier: "long",
    emoji: "🎤",
    label: "Kurze Präsentation",
    text: "Chaque élève présente pendant deux minutes un sujet de son choix avec un support visuel et répond à une question.",
    fact: "La présentation orale prépare aux épreuves de fin de cycle.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_allemand_11_6",
    tier: "long",
    emoji: "📞",
    label: "Rollenspiel : ein Telefongespräch",
    text: "Les élèves jouent un appel téléphonique (réservation, renseignement) avec cartes de rôles et improvisation.",
    fact: "Le téléphone demande de comprendre sans support visuel.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAllemand11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ALLEMAND_11E_OBJECTS = MUSEE_SEQ_ALLEMAND_11E_OBJECTS;
window.getSeqAllemand11ObjectsForParcours = getSeqAllemand11ObjectsForParcours;
