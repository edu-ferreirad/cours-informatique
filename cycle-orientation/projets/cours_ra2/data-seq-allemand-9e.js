// SALLE SÉQUENCES — ALLEMAND 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_ALLEMAND_9E_OBJECTS = [
  {
    id: "seq_allemand_9_1",
    tier: "court",
    emoji: "👋",
    label: "Sich vorstellen : le jeu de présentation",
    text: "Les élèves se présentent en allemand (Ich heiße…, Ich komme aus…) puis interrogent trois camarades pour compléter une fiche d'identité.",
    fact: "PER Langues (L2) : communiquer dans des situations simples. Un jeu d'enquête donne un vrai besoin de parler.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_allemand_9_2",
    tier: "court",
    emoji: "🔢",
    label: "Bingo des nombres et de l'heure",
    text: "Un bingo d'abord avec des nombres puis avec des heures annoncées en allemand entraîne la compréhension orale de base.",
    fact: "Répéter en jouant fixe les nombres.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_allemand_9_3",
    tier: "moyen",
    emoji: "👨‍👩‍👧",
    label: "Meine Familie",
    text: "Chaque élève présente une famille (réelle ou fictive) à l'aide d'un arbre généalogique et de phrases simples.",
    fact: "Un support visuel soutient l'expression orale débutante.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_allemand_9_4",
    tier: "moyen",
    emoji: "🛒",
    label: "Im Supermarkt : jeu de rôle",
    text: "Par deux, les élèves jouent une scène d'achat en utilisant noms de produits et prix, avec une liste de courses.",
    fact: "Les jeux de rôles préparent aux situations de la vie réelle.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_allemand_9_5",
    tier: "long",
    emoji: "🎙️",
    label: "Un mini-dialogue enregistré",
    text: "Les élèves écrivent et enregistrent un mini-dialogue de six répliques, puis l'écoutent pour corriger prononciation et intonation.",
    fact: "S'enregistrer aide l'autocorrection.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_allemand_9_6",
    tier: "long",
    emoji: "🕗",
    label: "Mein Tagesablauf",
    text: "Les élèves décrivent leur journée avec heures et verbes séparables simples, à l'écrit puis à l'oral.",
    fact: "Décrire sa routine réinvestit heures et verbes.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqAllemand9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ALLEMAND_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_ALLEMAND_9E_OBJECTS = MUSEE_SEQ_ALLEMAND_9E_OBJECTS;
window.getSeqAllemand9ObjectsForParcours = getSeqAllemand9ObjectsForParcours;
