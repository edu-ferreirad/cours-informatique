// SALLE SÉQUENCES — HISTOIRE 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_11E_OBJECTS = [
  {
    id: "seq_histoire_11_1",
    tier: "court",
    emoji: "🚂",
    label: "L'usine d'hier et d'aujourd'hui",
    text: "Les élèves comparent une photographie d'usine de 1900 à une photo actuelle et relèvent trois changements dans le travail, les techniques et la vie ouvrière.",
    fact: "PER SHS : analyser des changements sociaux et techniques.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_histoire_11_2",
    tier: "court",
    emoji: "🎖️",
    label: "La lettre d'un soldat",
    text: "Les élèves lisent une lettre d'un soldat de 1914-1918, relèvent ce qu'elle dit et ce qu'elle tait, puis discutent de sa valeur comme source.",
    fact: "Une source personnelle informe autant par ses silences que par son contenu.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_histoire_11_3",
    tier: "moyen",
    emoji: "📣",
    label: "Deux affiches de propagande",
    text: "Deux affiches de guerre sont comparées avec une grille (qui parle, à qui, avec quels moyens, pour obtenir quoi) pour comprendre la persuasion.",
    fact: "Analyser la propagande développe l'esprit critique face aux images.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_histoire_11_4",
    tier: "moyen",
    emoji: "🕊️",
    label: "Genève, ville des organisations internationales",
    text: "À l'aide d'une carte mentale, les élèves relient la Société des Nations, la Croix-Rouge et l'ONU à leurs missions et à leur place à Genève.",
    fact: "Le lien avec l'actualité locale donne sens à un thème global.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_histoire_11_5",
    tier: "long",
    emoji: "👵",
    label: "Interviewer un témoin du XXe siècle",
    text: "Les élèves préparent un guide d'entretien, interrogent un proche ou un témoin et présentent une restitution en distinguant souvenir personnel et faits vérifiés.",
    fact: "L'histoire orale montre comment se construisent mémoire et histoire.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_histoire_11_6",
    tier: "long",
    emoji: "🧱",
    label: "Débat : la chute du Mur",
    text: "À partir de sources contrastées, deux camps préparent un débat sur les causes de la fin de la guerre froide avant une synthèse chronologique.",
    fact: "Confronter des explications concurrentes est un objectif du cycle 3.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqHistoire11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_HISTOIRE_11E_OBJECTS = MUSEE_SEQ_HISTOIRE_11E_OBJECTS;
window.getSeqHistoire11ObjectsForParcours = getSeqHistoire11ObjectsForParcours;
