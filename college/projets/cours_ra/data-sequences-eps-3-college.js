// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS = [
  { id:"eps3_activite_nature", tier:"court", emoji:"🏔️", label:"Une activité en lien avec un élément naturel",
    text:"Lors d'une sortie ou d'un module spécifique (eau, neige selon la saison), les élèves doivent adapter une compétence déjà acquise en salle à un environnement naturel nouveau et en identifier les contraintes propres.",
    fact:"Appréhender et utiliser les éléments naturels (l'eau, la neige, la glace) est un objectif explicite du plan d'études qui dépasse le seul cadre de la salle de sport.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"eps3_sport_societe_debat", tier:"moyen", emoji:"📰", label:"Débattre d'un enjeu du sport contemporain",
    text:"À partir d'un article d'actualité sportive, les élèves discutent d'un enjeu de société lié au sport (dopage, sponsoring, médiatisation) en confrontant des points de vue différents.",
    fact:"Discerner l'importance du sport dans la société actuelle et observer son évolution d'un œil critique est un objectif explicite du plan d'études, au même titre que la pratique physique elle-même.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqEps3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS = MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS;
window.getSeqEps3CollegeObjectsForParcours = getSeqEps3CollegeObjectsForParcours;
