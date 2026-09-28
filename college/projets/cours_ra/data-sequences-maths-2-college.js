// SALLE SÉQUENCES — MATHÉMATIQUES — 2e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS = [
  { id:"ma2_conjecture_avant_preuve", tier:"court", emoji:"🔎", label:"Esprit scientifique : conjecturer avant de prouver",
    text:"Face à une propriété géométrique nouvelle, les élèves testent d'abord plusieurs cas concrets avec des mesures pour formuler une conjecture par écrit, avant seulement ensuite de chercher — ou de recevoir — une démonstration rigoureuse.",
    fact:"Le plan d'études précise que la 2e année met l'accent sur l'exercice de l'esprit scientifique et le développement de l'aptitude à la démonstration ; séparer la phase d'exploration de la phase de preuve rend cette distinction concrète et vécue.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ma2_modele_situation_reelle", tier:"moyen", emoji:"🌡️", label:"Fonctions : modéliser une situation concrète",
    text:"À partir d'un relevé réel (température sur une journée, remplissage d'une piscine), les élèves doivent choisir le type de fonction le plus adapté, justifier leur choix, puis évaluer les limites de leur modèle face aux données qui s'en écartent.",
    fact:"Mathématiser une situation concrète, avec ses écarts et ses limites, prépare directement à l'esprit du cours d'applications des mathématiques disponible dès la 3e — une continuité voulue par le programme.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ma2_niveau_avance_sujet_choix", tier:"long", emoji:"⭐", label:"MA2 (niveau avancé) : le sujet à choix",
    text:"Les élèves de niveau avancé reçoivent en 2e année un court sujet supplémentaire hors programme normal (déterminé par l'établissement), qu'ils explorent en autonomie sur deux semaines avant une présentation orale de 5 minutes à la classe.",
    fact:"Le plan d'études prévoit explicitement, pour le niveau avancé, l'adjonction possible de sujets à choix qui n'empiètent pas sur le programme de l'année suivante — cette séquence rend concrète cette marge de manœuvre propre au MA2.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
];
function getSeqMaths2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS = MUSEE_SEQ_MATHS_2_COLLEGE_OBJECTS;
window.getSeqMaths2CollegeObjectsForParcours = getSeqMaths2CollegeObjectsForParcours;
