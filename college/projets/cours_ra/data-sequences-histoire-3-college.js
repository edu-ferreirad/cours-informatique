// SALLE SÉQUENCES — HISTOIRE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS = [
  { id:"hi3_points_vue_croises_revolution", tier:"court", emoji:"👥", label:"Points de vue croisés sur une révolution",
    text:"Chaque groupe incarne un acteur social différent face à un même événement révolutionnaire du XIXe siècle (ouvrier, bourgeois, aristocrate, femme sans droit de vote) et doit rédiger un court témoignage fictif mais historiquement plausible, confronté ensuite aux autres points de vue.",
    fact:"Multiplier les points de vue sur un même événement met en pratique l'objectif du plan d'études de souligner la pluralité des perceptions et des interprétations possibles d'un fait historique.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"hi3_enquete_statistiques_industrialisation", tier:"moyen", emoji:"📊", label:"Enquête : lire des statistiques d'industrialisation",
    text:"À partir d'un tableau réel de données démographiques ou économiques du XIXe siècle, les élèves doivent formuler deux hypothèses explicatives différentes pour la même évolution chiffrée, puis évaluer laquelle est la mieux soutenue par les documents disponibles.",
    fact:"Travailler sur des données chiffrées habitue les élèves à traiter l'histoire aussi comme une science qui croise sources textuelles et sources quantitatives, sans réduire la discipline à un seul type de document.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"hi3_lien_geographie_industrialisation", tier:"long", emoji:"🗺️", label:"Séquence croisée histoire-géographie : où s'industrialise-t-on ?",
    text:"En collaboration avec le cours de géographie, les élèves superposent une carte des ressources naturelles du XIXe siècle à une carte des foyers industriels de la même époque pour identifier et expliquer les corrélations visibles.",
    fact:"Le plan d'études signale une collaboration privilégiée entre histoire et géographie selon des modalités variées ; cette séquence en donne une forme concrète, directement liée au thème de l'industrialisation.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqHistoire3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS = MUSEE_SEQ_HISTOIRE_3_COLLEGE_OBJECTS;
window.getSeqHistoire3CollegeObjectsForParcours = getSeqHistoire3CollegeObjectsForParcours;
