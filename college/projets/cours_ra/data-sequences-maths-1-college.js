// SALLE SÉQUENCES — MATHÉMATIQUES — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS = [
  { id:"maths_1_1", tier:"court", emoji:"🧰", label:"Étape 1 — Commence ta boîte à outils",
    text:"Après chaque nouvelle technique de calcul, ajoute une fiche dans ton classeur : la méthode, un exemple, et un piège fréquent que tu as toi-même repéré. Tu pourras la consulter librement pendant les exercices, jamais pendant les contrôles.",
    fact:"Avoir un repère visuel concret aide bien plus qu'une règle apprise par cœur sans exemple qui l'accompagne.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"maths_1_2", tier:"court", emoji:"📈", label:"Étape 2 — Décris un graphique sans le montrer",
    text:"Avec un camarade, décris-lui oralement un graphique de fonction (croissance, point d'intersection) sans le lui montrer. Il doit le dessiner uniquement à partir de ta description, puis tu compares les deux versions.",
    fact:"Ce va-et-vient entre les mots et le dessin t'entraîne à passer du langage au graphique, et inversement.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"maths_1_3", tier:"court", emoji:"📏", label:"Étape 3 — Change une hypothèse et prédis la suite",
    text:"Reprends une démonstration vue en classe. Change une seule hypothèse de départ (un angle, une longueur) et prédis si la conclusion reste vraie, devient fausse, ou reste indéterminée — avant de vérifier.",
    fact:"Prédire avant de vérifier développe un vrai réflexe de raisonnement, pas seulement une mémorisation de la démonstration.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"maths_1_4", tier:"moyen", emoji:"🔍", label:"Étape 4 — Teste une propriété avant de la démontrer",
    text:"Face à une propriété géométrique nouvelle, teste-la d'abord sur plusieurs cas concrets avec de vraies mesures, et écris ta conjecture. Ce n'est qu'ensuite que tu chercheras — ou recevras — la démonstration rigoureuse.",
    fact:"Séparer explorer et prouver rend visible la différence entre les deux étapes du travail mathématique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"maths_1_5", tier:"moyen", emoji:"🌡️", label:"Étape 5 — Modélise un relevé réel",
    text:"À partir d'un relevé de température sur une journée, choisis le type de fonction le plus adapté pour le représenter, justifie ton choix, puis note où ton modèle s'écarte des données réelles.",
    fact:"Un modèle mathématique a toujours des limites ; les identifier fait partie du travail, pas seulement de trouver la formule.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"maths_1_6", tier:"long", emoji:"🧩", label:"Étape 6 — Explore un sujet en autonomie sur deux semaines (niveau avancé)",
    text:"Si tu es en mathématiques niveau avancé, choisis avec ton enseignant un petit sujet hors programme normal. Explore-le seul sur deux semaines, puis présente-le en cinq minutes à la classe.",
    fact:"Cette marge d'exploration personnelle est propre au niveau avancé — elle n'existe pas de la même façon en niveau normal.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"maths_1_7", tier:"long", emoji:"📊", label:"Étape 7 — Range tes techniques par famille",
    text:"Reprends tous les exercices faits ce trimestre et regroupe-les par technique commune (proportionnalité, résolution d'équation). Compte combien de familles différentes tu as utilisées.",
    fact:"Voir ses propres techniques regroupées par famille aide à retenir plus durablement qu'une liste d'exercices isolés.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMaths1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS=MUSEE_SEQ_MATHS_1_COLLEGE_OBJECTS;
window.getSeqMaths1CollegeObjectsForParcours=getSeqMaths1CollegeObjectsForParcours;
