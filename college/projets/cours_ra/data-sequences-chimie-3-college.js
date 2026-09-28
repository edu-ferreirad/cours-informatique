// SALLE SÉQUENCES — CHIMIE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS = [
  { id:"ch3_reaction_organique_os", tier:"court", emoji:"🧬", label:"OS uniquement — Prévoir une réaction organique",
    text:"Les élèves de l'option spécifique reçoivent la formule d'une molécule organique simple et doivent prévoir le produit d'une réaction courante avant de vérifier leur prédiction avec l'enseignant.",
    fact:"Prévoir et décrire les principales réactions de chimie organique est un objectif explicite de l'option spécifique, plus exigeant que la discipline fondamentale qui s'arrête à la chimie minérale de base.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"ch3_lien_biochimie_os", tier:"moyen", emoji:"🔗", label:"OS uniquement — De la molécule à la fonction biologique",
    text:"En coordination avec le cours de biologie de l'option, les élèves relient une structure moléculaire étudiée en chimie à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"Le plan d'études signale que le lien entre chimie et biologie est spécialement renforcé dans l'option spécifique biologie-chimie par rapport à la discipline fondamentale.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
];
function getSeqChimie3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS = MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS;
window.getSeqChimie3CollegeObjectsForParcours = getSeqChimie3CollegeObjectsForParcours;
