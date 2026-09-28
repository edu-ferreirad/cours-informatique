// SALLE SÉQUENCES — FRANÇAIS — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS = [
  { id:"fr2_argumentation_deux_camps", tier:"court", emoji:"⚖️", label:"Argumentation : le débat à contre-emploi",
    text:"Sur un sujet tiré d'une œuvre étudiée, la classe se divise en deux camps — mais chaque élève doit défendre la position opposée à sa conviction personnelle, avec trois arguments et un exemple précis tiré du texte pour chacun.",
    fact:"Le plan d'études présente l'argumentation comme une forme d'écriture plus exigeante que les autres formes ; défendre une thèse qu'on ne partage pas force à construire un vrai raisonnement plutôt qu'à répéter une opinion déjà faite.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"fr2_oral_soutenu_journal", tier:"moyen", emoji:"🎙️", label:"Oral soutenu : le flash-info de classe",
    text:"Chaque semaine, un élève différent présente en 2 minutes, dans un registre oral soutenu, un fait d'actualité culturelle en lien avec le programme (sortie d'un livre, anniversaire d'un auteur) — la classe note un seul indicateur : la clarté de la construction, pas le contenu.",
    fact:"Se concentrer sur un seul critère (la clarté) à chaque prise de parole permet de travailler l'oral soutenu de façon répétée et peu stressante, plutôt que d'attendre un grand exposé noté en fin de semestre.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"fr2_resume_contrainte", tier:"long", emoji:"📝", label:"Écriture : le résumé à contrainte de mots",
    text:"L'élève doit résumer un texte argumentatif d'une page en exactement 80 mots, ni plus ni moins — un compteur de mots strict force à choisir l'essentiel plutôt que de paraphraser en réduisant vaguement la longueur.",
    fact:"La contrainte numérique stricte rend visible, mieux qu'une simple consigne de longueur approximative, la différence entre résumer (choisir l'essentiel) et raccourcir (couper au hasard).",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqFrancais2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS = MUSEE_SEQ_FRANCAIS_2_COLLEGE_OBJECTS;
window.getSeqFrancais2CollegeObjectsForParcours = getSeqFrancais2CollegeObjectsForParcours;
