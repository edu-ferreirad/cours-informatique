// SALLE SÉQUENCES — INFORMATIQUE 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_10E_OBJECTS = [
  {
    id: "seq_informatique_10_1",
    tier: "court",
    emoji: "⌨️",
    label: "Le défi de frappe",
    text: "Les élèves mesurent leur vitesse de frappe au clavier, s'entraînent dix minutes par séance et tracent leur progression.",
    fact: "PER MITIC : maîtriser le clavier est un outil de travail. La courbe rend l'effort visible.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_informatique_10_2",
    tier: "court",
    emoji: "📄",
    label: "Une affiche avec des styles",
    text: "Les élèves composent une affiche en traitement de texte en utilisant styles de titres, listes et images, sans mise en forme manuelle.",
    fact: "Les styles rendent les documents cohérents et modifiables.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_informatique_10_3",
    tier: "moyen",
    emoji: "📊",
    label: "Le budget de la classe au tableur",
    text: "Les élèves construisent un budget avec formules d'addition et de pourcentage et vérifient ce qui change quand on modifie une cellule.",
    fact: "Le tableur fait comprendre la logique de la formule.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_informatique_10_4",
    tier: "moyen",
    emoji: "🖼️",
    label: "Diaporama lisible ou illisible ?",
    text: "Les élèves analysent deux diaporamas, dégagent des règles de lisibilité, puis refont le mauvais en appliquant leurs règles.",
    fact: "Critiquer avant de produire ancre les bonnes pratiques.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_informatique_10_5",
    tier: "long",
    emoji: "📚",
    label: "Un dossier avec sources citées",
    text: "Les élèves rédigent un dossier de deux pages avec sommaire automatique, images légendées et sources citées.",
    fact: "Citer ses sources est une base de l'intégrité numérique.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_informatique_10_6",
    tier: "long",
    emoji: "🤝",
    label: "Netiquette : cas pratiques",
    text: "À partir de mini-scènes de messagerie, les élèves identifient ce qui est acceptable ou non, et rédigent une charte de classe.",
    fact: "La citoyenneté numérique s'appuie sur des situations réalistes.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqInformatique10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_INFORMATIQUE_10E_OBJECTS = MUSEE_SEQ_INFORMATIQUE_10E_OBJECTS;
window.getSeqInformatique10ObjectsForParcours = getSeqInformatique10ObjectsForParcours;
