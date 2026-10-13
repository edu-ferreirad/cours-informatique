// SALLE SÉQUENCES — FRANÇAIS 10e — activités de classe (séquences), en parallèle de la salle de contenu/prescriptions
const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_10E_OBJECTS = [
  {
    id: "seq_francais_10_1",
    tier: "court",
    emoji: "📰",
    label: "Un titre, un chapeau",
    text: "Les élèves comparent titres et chapeaux d'une même brève dans trois journaux, puis rédigent leur propre titre et chapeau pour un fait divers fictif en respectant une limite de mots.",
    fact: "PER L1 : textes informatifs. Condenser une information en peu de mots oblige à hiérarchiser ce qui est essentiel.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "seq_francais_10_2",
    tier: "court",
    emoji: "🧩",
    label: "Verbes et propositions en couleurs",
    text: "Sur un paragraphe littéraire, les élèves surlignent chaque verbe conjugué d'une couleur et rattachent chacun à sa proposition, pour distinguer phrases simples et complexes.",
    fact: "Rendre visible la structure de la phrase par un code couleur aide les élèves qui ne « voient » pas les limites entre propositions.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "seq_francais_10_3",
    tier: "moyen",
    emoji: "🗳️",
    label: "Opinion, arguments, exemple",
    text: "Sur une question de vie scolaire (le portable en classe), chaque élève écrit une opinion, deux arguments et un exemple, puis les défend oralement face à un camarade qui a pris la position inverse.",
    fact: "L'argumentation est un genre de texte explicitement travaillé au cycle 3 ; défendre la position inverse évite l'opinion toute faite.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "seq_francais_10_4",
    tier: "moyen",
    emoji: "📚",
    label: "Cercle de lecture",
    text: "Par groupes de quatre, les élèves lisent le même roman et se répartissent des rôles tournants : résumeur, questionneur, chercheur de mots, illustrateur. Chaque rôle prépare sa contribution avant la discussion.",
    fact: "Les rôles tournants garantissent que chacun a quelque chose à apporter à la discussion et soutiennent la lecture suivie d'une œuvre intégrale.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "seq_francais_10_5",
    tier: "long",
    emoji: "✉️",
    label: "La lettre de lecteur, de l'analyse à la réécriture",
    text: "Séquence en quatre séances : analyse de deux lettres réelles, construction d'un plan, rédaction, puis relecture croisée avec grille avant publication dans le journal de l'école.",
    fact: "Écrire pour un vrai destinataire donne un enjeu de communication authentique à l'écriture argumentative.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "seq_francais_10_6",
    tier: "long",
    emoji: "📒",
    label: "Le carnet d'erreurs personnel",
    text: "Chaque élève tient un carnet où il note ses trois erreurs d'orthographe les plus fréquentes, cherche la règle correspondante et rédige une phrase-modèle, revue chaque mois.",
    fact: "Individualiser le travail d'orthographe à partir des erreurs réelles de l'élève est plus efficace que des listes de règles communes à tous.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getSeqFrancais10ObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_SEQ_FRANCAIS_10E_OBJECTS = MUSEE_SEQ_FRANCAIS_10E_OBJECTS;
window.getSeqFrancais10ObjectsForParcours = getSeqFrancais10ObjectsForParcours;
