// SALLE SÉQUENCES — HISTOIRE — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS = [
  { id:"hi1_source_ou_interpretation", tier:"court", emoji:"📜", label:"Méthode : trier source primaire et interprétation",
    text:"Les élèves reçoivent un lot mélangé de documents sur un même événement antique (extrait d'un historien ancien, reconstitution moderne, manuel scolaire) et doivent les classer en distinguant ce qui est une trace directe de l'époque de ce qui est une interprétation postérieure.",
    fact:"Cette compétence de tri est un préalable indispensable avant toute analyse historique plus poussée : le plan d'études attend explicitement des élèves qu'ils sachent interpréter et critiquer des sources diverses, pas seulement les lire.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"hi1_carte_mentale_feodalite", tier:"moyen", emoji:"🏰", label:"Moyen Âge : la carte mentale du pouvoir féodal",
    text:"En groupe, les élèves construisent une carte mentale reliant seigneurs, vassaux, paysans et clergé par des flèches légendées (protection, travail, impôt, loyauté) à partir d'un court texte de synthèse, avant de la confronter à celle d'un autre groupe.",
    fact:"Représenter visuellement un système de pouvoir complexe aide à saisir des notions de contre-pouvoir bien avant que le vocabulaire politique moderne ne soit introduit, en repartant d'un exemple concret et hiérarchisé.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"hi1_proces_fictif_antiquite", tier:"long", emoji:"⚖️", label:"Antiquité : le procès fictif d'une décision historique",
    text:"La classe rejoue, sous forme de procès simplifié, une décision politique controversée de l'Antiquité (par exemple une conquête ou une réforme) : des élèves accusent, d'autres défendent, en s'appuyant uniquement sur des faits attestés par les documents distribués.",
    fact:"Le format du procès oblige à construire une argumentation entièrement fondée sur des preuves documentaires plutôt que sur une opinion personnelle, ce qui est la démarche même de l'historien face à un fait controversé.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },
];
function getSeqHistoire1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS = MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS;
window.getSeqHistoire1CollegeObjectsForParcours = getSeqHistoire1CollegeObjectsForParcours;
