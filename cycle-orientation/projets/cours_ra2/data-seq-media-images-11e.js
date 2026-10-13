// SALLE SÉQUENCES — MÉDIA-IMAGES 11e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_MEDIA_IMAGES_11E_OBJECTS = [
  {
    id: "seq_media_images_11_1",
    tier: "court",
    emoji: "📸",
    label: "Décrire ou interpréter une photo ?",
    text: "Les élèves séparent dans une photographie ce qui est visible de ce qui est supposé, en écrivant deux colonnes.",
    fact: "PER FG (EdMI) : distinguer description et interprétation est la base de la lecture d'image.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_media_images_11_2",
    tier: "court",
    emoji: "🔍",
    label: "Vérifier une image",
    text: "Les élèves utilisent la recherche d'image inversée sur une photo virale pour retrouver sa source et son contexte.",
    fact: "La vérification est un geste essentiel de l'éducation aux médias.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_media_images_11_3",
    tier: "moyen",
    emoji: "📰",
    label: "Trois unes, un même jour",
    text: "La classe compare les unes de trois journaux sur le même jour et relève choix, hiérarchie et vocabulaire.",
    fact: "Comparer révèle que l'information est construite.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_media_images_11_4",
    tier: "moyen",
    emoji: "🎥",
    label: "Analyser un plan de publicité",
    text: "Les élèves observent un court spot, relèvent cadrage, musique et message, puis identifient la cible visée.",
    fact: "Décoder la publicité forme l'esprit critique.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_media_images_11_5",
    tier: "long",
    emoji: "🖼️",
    label: "Un photomontage et ses risques",
    text: "Chaque élève crée un photomontage et le présente à un camarade pour voir s'il repère la manipulation.",
    fact: "Produire soi-même fait comprendre comment on trompe.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_media_images_11_6",
    tier: "long",
    emoji: "⚖️",
    label: "Charte du droit à l'image",
    text: "La classe rédige une charte de règles pour publier des images de camarades, avec exemples de cas problématiques.",
    fact: "Le droit à l'image est un enjeu de citoyenneté numérique.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqMediaImages11ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MEDIA_IMAGES_11E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_MEDIA_IMAGES_11E_OBJECTS = MUSEE_SEQ_MEDIA_IMAGES_11E_OBJECTS;
window.getSeqMediaImages11ObjectsForParcours = getSeqMediaImages11ObjectsForParcours;
