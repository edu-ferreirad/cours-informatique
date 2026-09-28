// SALLE SÉQUENCES — BIOLOGIE — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS = [
  { id:"bio3_arbre_genealogique_genetique", tier:"court", emoji:"🧬", label:"OS uniquement — Génétique : résoudre un arbre généalogique",
    text:"Face à un arbre généalogique fictif présentant la transmission d'un caractère sur plusieurs générations, les élèves de l'option spécifique doivent déterminer le mode de transmission le plus probable et prédire la probabilité d'apparition du caractère chez une future génération.",
    fact:"Cette séquence n'existe que pour les élèves ayant choisi l'option spécifique biologie-chimie, puisque la biologie ne fait plus partie du tronc commun dès la 3e année selon la grille horaire officielle de l'ECG.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"bio3_etude_ecosysteme_terrain", tier:"moyen", emoji:"🌿", label:"OS uniquement — Écologie : inventaire de terrain",
    text:"Lors d'une sortie sur le terrain, les élèves de l'option relèvent méthodiquement les espèces observées dans une zone délimitée et construisent un schéma simplifié des interactions probables entre elles (prédation, compétition, symbiose) avant validation en classe.",
    fact:"Ce travail de terrain répond à l'objectif du plan d'études de comprendre les interactions et l'équilibre entre les espèces et leur environnement — un aspect de l'écologie générale et appliquée difficile à saisir uniquement en classe.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"bio3_lien_chimie_biomolecules", tier:"long", emoji:"⚗️", label:"OS uniquement — Séquence croisée avec la chimie : les biomolécules",
    text:"En coordination avec le cours de chimie de l'option, les élèves relient explicitement une structure moléculaire étudiée en chimie (une protéine simple) à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"L'option spécifique biologie-chimie est construite précisément pour renforcer ce lien entre les deux sciences ; le plan d'études indique que ce lien y est spécialement renforcé par rapport à la discipline fondamentale.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqBiologie3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS = MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS;
window.getSeqBiologie3CollegeObjectsForParcours = getSeqBiologie3CollegeObjectsForParcours;
