// SALLE SÉQUENCES — FRANÇAIS — 1ère année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS = [
  { id:"fr1_diction_sous_texte", tier:"court", emoji:"🎭", label:"Diction : jouer le sous-texte",
    text:"En binôme, un élève dit une réplique banale (« Il fait beau aujourd'hui ») en devant faire deviner à la classe une émotion cachée imposée en secret (colère rentrée, mensonge, peur) — la classe doit deviner l'émotion sans connaître la consigne.",
    fact:"Cet exercice de diction travaille exactement ce que vise le programme de 1ère : l'écart entre ce qu'on dit et ce qu'on veut vraiment dire, c'est-à-dire le sous-texte.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"fr1_carnet_lecture_reaction", tier:"moyen", emoji:"📓", label:"Carnet de lecture : la page « réaction à chaud »",
    text:"Après chaque chapitre d'une œuvre étudiée, l'élève a 5 minutes chrono pour écrire une réaction spontanée (un ressenti, une question, un désaccord) avant toute analyse en classe — le carnet n'est jamais noté sur la « qualité » de la réaction, seulement sur sa sincérité.",
    fact:"Séparer la réaction spontanée de l'analyse experte évite un piège fréquent en 1ère année : l'élève qui récite ce qu'il pense qu'on attend de lui plutôt que ce qu'il ressent réellement en lisant.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"fr1_dictee_negociee", tier:"long", emoji:"✏️", label:"Grammaire : la dictée négociée",
    text:"Après une dictée courte, les élèves comparent leur texte par groupes de trois et doivent se mettre d'accord sur une version commune avant la correction collective — chaque désaccord doit être justifié par une règle, pas par un vote à la majorité.",
    fact:"Obliger à justifier chaque correction par une règle grammaticale plutôt que par l'intuition transforme un exercice souvent passif en un vrai travail de consolidation des bases du cycle d'orientation.",
    anchor:{distance:1.4, angle:160, height:DESK_H} },
];
function getSeqFrancais1CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS = MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS;
window.getSeqFrancais1CollegeObjectsForParcours = getSeqFrancais1CollegeObjectsForParcours;
