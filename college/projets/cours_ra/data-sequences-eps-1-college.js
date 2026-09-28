// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS = [
  { id:"eps1_decouverte_sports_varies", tier:"court", emoji:"🏀", label:"Un carrousel de sports pour découvrir ses goûts",
    text:"Sur plusieurs semaines, les élèves testent des sports collectifs et individuels variés (jeux de balle, athlétisme, gymnastique) et notent après chaque séance une seule chose : ce qu'ils aimeraient refaire et pourquoi.",
    fact:"Le plan d'études cite la variété des activités comme moyen d'inciter l'élève à occuper sainement ses loisirs et à découvrir les nombreuses formes de mouvement et de sport qui se présentent à lui.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"eps1_regles_securite", tier:"moyen", emoji:"🛡️", label:"Devenir arbitre pour comprendre les règles",
    text:"À tour de rôle, chaque élève arbitre une partie de son propre camp lors d'un jeu collectif simple, ce qui l'oblige à connaître et faire respecter précisément les règles avant de simplement les suivre en tant que joueur.",
    fact:"Respecter les règles spécifiques (de jeu, de sécurité) des sports pratiqués est un objectif explicite des attitudes visées par le plan d'études.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
];
function getSeqEps1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS = MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS;
window.getSeqEps1CollegeObjectsForParcours = getSeqEps1CollegeObjectsForParcours;
