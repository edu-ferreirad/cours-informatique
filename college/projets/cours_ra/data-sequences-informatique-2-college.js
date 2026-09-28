// ============================================================================
// SALLE SÉQUENCES — INFORMATIQUE — 2e ANNÉE (1h/semaine)
// Réforme genevoise 2021 : approfondissement après les bases de 1ère —
// organisation des données (structures, réseaux) et algorithmique plus
// avancée. Contenu original.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS = [
  { id:"in2c_structure_donnees_liste", degree:"2", tier:"court", emoji:"📋", label:"Choisir la bonne structure pour ranger des données",
    text:"Face à un petit jeu de données réel (les élèves de la classe et leurs notes), les élèves comparent deux façons de les organiser en mémoire (liste simple vs liste de paires) et discutent laquelle rend certaines opérations plus faciles ou plus difficiles.",
    fact:"Organiser l'information est le deuxième axe du programme genevois ; comparer deux structures sur un même jeu de données concret rend visible que le choix d'une structure a de vraies conséquences pratiques.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"in2c_reseau_schema", degree:"2", tier:"court", emoji:"🌐", label:"Faire voyager un message sur un réseau schématisé",
    text:"Sur un schéma simplifié de réseau (quelques ordinateurs reliés par des câbles), les élèves tracent à la main le chemin le plus court qu'emprunterait un message d'une machine à une autre, avant de comparer avec le fonctionnement réel d'internet expliqué en classe.",
    fact:"Comprendre l'organisation en réseaux est un axe explicite du programme ; le tracé manuel du chemin rend concret un fonctionnement autrement invisible et abstrait pour l'élève.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"in2m_fonction_boite_noire", degree:"2", tier:"moyen", emoji:"📦", label:"Une fonction comme une boîte noire",
    text:"Les élèves utilisent d'abord une fonction toute faite sans en voir le code (entrée → sortie observée uniquement) pour deviner ce qu'elle fait, avant d'ouvrir la boîte et de découvrir le code réel pour vérifier leur hypothèse.",
    fact:"Deviner le comportement d'une fonction à partir de ses seules entrées-sorties avant de voir son code développe une lecture fonctionnelle du programme, complémentaire à la seule lecture ligne par ligne.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"in2m_recherche_tri_simple", degree:"2", tier:"moyen", emoji:"🔍", label:"Chercher plus vite dans une liste triée",
    text:"Les élèves cherchent un nombre dans une liste désordonnée puis dans la même liste triée, en comptant à chaque fois le nombre de comparaisons nécessaires, avant de comprendre pourquoi trier au préalable peut accélérer une recherche.",
    fact:"Comparer concrètement le coût d'une recherche avant et après tri initie, sans formalisme complexe, à une idée centrale de l'algorithmique : le choix d'un algorithme a un impact mesurable sur la performance.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"in2l_base_donnees_mini", degree:"2", tier:"long", emoji:"🗄️", label:"Construire une mini base de données de classe",
    text:"En groupe, les élèves construisent une petite base de données structurée (un tableau de fiches) sur un sujet de leur choix (jeux vidéo, films) puis doivent écrire des questions précises que cette base permettrait de répondre facilement, ou pas.",
    fact:"Concevoir soi-même une base de données simple, même sans langage de requête formel, fait toucher du doigt l'axe « organisation des données » du programme de façon concrète et personnelle.",
    anchor:{distance:1.8, angle:210, height:DESK_H} },
  { id:"in2l_projet_calculatrice", degree:"2", tier:"long", emoji:"🧮", label:"Projet : une mini-calculatrice avec menu",
    text:"En binôme, les élèves programment une petite calculatrice avec un menu de choix (addition, soustraction, multiplication) en réutilisant fonctions et structures de données vues en classe, testée ensuite par un autre binôme qui cherche à la faire planter.",
    fact:"Faire tester son programme par un camarade qui cherche activement à le faire échouer habitue tôt les élèves à l'idée qu'un programme doit résister à des usages imprévus, pas seulement au cas normal.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
];
function getSeqInformatique2CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS = MUSEE_SEQ_INFORMATIQUE_2_COLLEGE_OBJECTS;
window.getSeqInformatique2CollegeObjectsForParcours = getSeqInformatique2CollegeObjectsForParcours;
