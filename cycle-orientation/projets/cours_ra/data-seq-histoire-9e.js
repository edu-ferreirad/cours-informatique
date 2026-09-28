// SALLE SÉQUENCES — HISTOIRE 9e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_9E_OBJECTS = [
  {
    id: "seq_histoire_9_1",
    tier: "court",
    emoji: "🏺",
    label: "La fouille archéologique de la classe",
    text: "Une boîte d'objets fictifs (tessons, pièces, outils) est remise à chaque groupe, qui doit déduire le mode de vie de la population qui les a utilisés et justifier chaque hypothèse.",
    fact: "PER SHS : lire des traces du passé. Distinguer ce que l'objet prouve de ce que l'on suppose est la base du raisonnement historique.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_histoire_9_2",
    tier: "court",
    emoji: "🗺️",
    label: "La frise du couloir",
    text: "La classe construit une frise chronologique collective de l'Antiquité au Moyen Âge, chaque groupe plaçant et illustrant trois événements avec leur date.",
    fact: "Situer les événements dans le temps est une compétence de base de l'histoire.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_histoire_9_3",
    tier: "moyen",
    emoji: "🏛️",
    label: "Une assemblée athénienne",
    text: "Les élèves rejouent une assemblée : un orateur propose une loi, d'autres argumentent, on vote à main levée, puis on compare avec nos institutions actuelles.",
    fact: "Rejouer une institution fait comprendre le fonctionnement d'une démocratie ancienne.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_histoire_9_4",
    tier: "moyen",
    emoji: "⚔️",
    label: "Un jour dans une seigneurie",
    text: "Des cartes de rôles (seigneur, paysan, moine, artisan) guident un jeu où chacun doit décrire ses obligations et ses droits envers les autres.",
    fact: "Les jeux de rôles font saisir les liens sociaux de la société médiévale.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_histoire_9_5",
    tier: "long",
    emoji: "📜",
    label: "Deux récits, un même événement",
    text: "Les élèves comparent deux récits contemporains d'un événement médiéval, relèvent ce qui diffère et cherchent qui parle, pourquoi et pour qui.",
    fact: "Confronter des sources contradictoires est au cœur de la démarche historique.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_histoire_9_6",
    tier: "long",
    emoji: "⛪",
    label: "Affiche : une cathédrale et sa construction",
    text: "En groupes, les élèves préparent une affiche sur la construction d'une cathédrale (métiers, financement, techniques) à partir de documents sélectionnés.",
    fact: "La recherche documentaire structurée prépare à la production d'une synthèse.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqHistoire9ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_9E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_HISTOIRE_9E_OBJECTS = MUSEE_SEQ_HISTOIRE_9E_OBJECTS;
window.getSeqHistoire9ObjectsForParcours = getSeqHistoire9ObjectsForParcours;
