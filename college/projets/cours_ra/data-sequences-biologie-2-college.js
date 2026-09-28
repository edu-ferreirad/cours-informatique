// SALLE SÉQUENCES — BIOLOGIE — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS = [
  { id:"bio2_modele_cellulaire_pate_a_modeler", tier:"court", emoji:"🧫", label:"Modéliser la cellule pour comprendre ses limites",
    text:"Par groupes, les élèves construisent une maquette simplifiée de cellule (pâte à modeler, matériaux de récupération) puis doivent explicitement lister ce que leur modèle représente fidèlement et ce qu'il déforme ou simplifie à l'excès.",
    fact:"Exiger une liste des limites du modèle, pas seulement sa construction, entraîne un regard critique sur les modèles scientifiques eux-mêmes — une posture que le plan d'études rattache à la compréhension de comment se construit le savoir scientifique.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"bio2_debat_choix_option_bio_chimie", tier:"moyen", emoji:"🧭", label:"Avant de choisir : rencontre avec l'option biologie-chimie",
    text:"En fin de 2e année, les élèves qui hésitent à choisir l'option spécifique biologie-chimie rencontrent des élèves de 3e-4e déjà engagés dans cette option, qui présentent concrètement un exemple de travail pratique mené en laboratoire.",
    fact:"Comme la biologie s'arrête en discipline fondamentale après la 2e année, ce moment de transition organisé et concret aide les élèves à choisir leur option en connaissance de cause plutôt que sur une simple impression du nom de la discipline.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"bio2_rapport_experience_redige", tier:"long", emoji:"📝", label:"Rédiger un vrai rapport d'expérience",
    text:"À l'issue d'une manipulation en laboratoire, les élèves rédigent seuls un rapport complet (hypothèse, matériel, résultats, interprétation) suivant une structure imposée, avant un échange de rapports entre élèves pour une relecture critique croisée.",
    fact:"Le plan d'études cite explicitement la rédaction de rapports comme aptitude à développer au terme de la discipline fondamentale ; c'est aussi la dernière compétence transversale que tous les élèves emportent, y compris ceux qui n'iront pas plus loin en biologie.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqBiologie2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS = MUSEE_SEQ_BIOLOGIE_2_COLLEGE_OBJECTS;
window.getSeqBiologie2CollegeObjectsForParcours = getSeqBiologie2CollegeObjectsForParcours;
