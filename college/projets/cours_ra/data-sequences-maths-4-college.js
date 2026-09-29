// SALLE SÉQUENCES — MATHÉMATIQUES — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS = [
  { id:"maths_4_1", tier:"court", emoji:"🎲", label:"Étape 1 — Identifie le bon modèle avant de calculer",
    text:"Face à une situation aléatoire décrite en une phrase (file d'attente, contrôle qualité), identifie d'abord quel modèle probabiliste s'applique, avant même de commencer le moindre calcul.",
    fact:"Se tromper de modèle rend tout calcul suivant inutile, même s'il est fait parfaitement bien.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"maths_4_2", tier:"court", emoji:"📊", label:"Étape 2 — Mène une étude de fonction sans aide intermédiaire",
    text:"En temps limité et sans correction intermédiaire, mène seul une étude complète d'une fonction. Compare ta courbe finale à celle d'un camarade avant la correction commune.",
    fact:"Cette absence d'aide intermédiaire reproduit fidèlement les conditions réelles de l'examen de maturité.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"maths_4_3", tier:"court", emoji:"❌", label:"Étape 3 — Repère les erreurs classiques dans une copie fictive",
    text:"Ton enseignant te donne une copie fictive contenant des erreurs typiques (signe oublié, mauvaise lecture de graphique). Repère-les et rédige la correction exacte pour chacune.",
    fact:"Revoir des erreurs caractéristiques cible directement les pièges qui reviennent le plus souvent le jour de l'examen.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"maths_4_4", tier:"moyen", emoji:"🧮", label:"Étape 4 — Résous un problème de probabilités en contexte réel",
    text:"Choisis une situation réelle simple (tirage, sondage) et calcule une probabilité en expliquant clairement chaque étape de ton raisonnement, pas seulement le résultat final.",
    fact:"Expliquer chaque étape, pas seulement donner le résultat, est ce que les correcteurs cherchent vraiment à l'examen.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"maths_4_5", tier:"moyen", emoji:"📈", label:"Étape 5 — Compare données réelles et prédiction théorique",
    text:"Effectue cent tirages aléatoires (dé, pièce) et compare les fréquences observées aux probabilités théoriques. Explique les écarts observés.",
    fact:"Comparer l'expérience à la théorie prépare à l'idée de convergence vers la probabilité théorique sur un grand nombre d'essais.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"maths_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare ta fiche de révision personnelle",
    text:"Reprends tes quatre années de mathématiques et prépare une fiche d'une page listant les cinq techniques que tu maîtrises le moins bien, avec un exemple corrigé pour chacune.",
    fact:"Une fiche construite à partir de tes propres faiblesses est bien plus efficace qu'une fiche générique de révision.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"maths_4_7", tier:"long", emoji:"⏱️", label:"Étape 7 — Passe un examen blanc en conditions réelles",
    text:"Passe un examen blanc de mathématiques dans les conditions réelles de l'examen (temps, matériel autorisé). Corrige-toi ensuite avec le corrigé officiel et note tes trois erreurs principales.",
    fact:"S'entraîner en conditions réelles, avec une vraie correction après coup, est la meilleure préparation possible à l'examen final.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqMaths4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS=MUSEE_SEQ_MATHS_4_COLLEGE_OBJECTS;
window.getSeqMaths4CollegeObjectsForParcours=getSeqMaths4CollegeObjectsForParcours;
