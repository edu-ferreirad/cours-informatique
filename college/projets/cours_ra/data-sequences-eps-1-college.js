// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS = [
  { id:"eps_1_1", tier:"court", emoji:"🏀", label:"Étape 1 — Découvre plusieurs sports",
    text:"Teste un sport collectif et un sport individuel cette séance, et note après chacun ce que tu aimerais refaire et pourquoi.",
    fact:"Découvrir des sports variés t'aide à identifier tes goûts sportifs réels, pas supposés.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"eps_1_2", tier:"court", emoji:"🛡️", label:"Étape 2 — Deviens arbitre pour un jeu",
    text:"Arbitre une partie de ton propre camp lors d'un jeu collectif simple, ce qui t'oblige à connaître précisément les règles.",
    fact:"Arbitrer, plutôt que seulement jouer, t'oblige à vraiment connaître les règles pour les faire respecter.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"eps_1_3", tier:"court", emoji:"🤸", label:"Étape 3 — Teste ta souplesse et ton équilibre",
    text:"Effectue un test simple de souplesse et un test d'équilibre, et note tes résultats pour pouvoir les comparer plus tard.",
    fact:"Garder une trace de tes résultats te permettra de mesurer tes progrès dans les années suivantes.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"eps_1_4", tier:"moyen", emoji:"🏃", label:"Étape 4 — Prépare un petit parcours physique",
    text:"En groupe, conçois un parcours d'obstacles simples pour tes camarades, en pensant à la sécurité de chaque étape.",
    fact:"Penser à la sécurité en concevant une activité, pas seulement en la pratiquant, est une compétence importante.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"eps_1_5", tier:"moyen", emoji:"🤝", label:"Étape 5 — Gère la frustration dans un jeu compétitif",
    text:"Après un jeu collectif compétitif, exprime à voix haute un moment de frustration ressenti et comment tu l'as géré sur le moment.",
    fact:"Maîtriser les problèmes de rivalité et d'agressivité est un objectif explicite du programme.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"eps_1_6", tier:"long", emoji:"🎯", label:"Étape 6 — Fixe-toi un objectif personnel",
    text:"Choisis une compétence sportive que tu veux améliorer ce trimestre et note un plan simple en trois étapes pour y arriver.",
    fact:"Se fixer un objectif personnel, plutôt que de suivre uniquement le programme, développe ton autonomie sportive.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"eps_1_7", tier:"long", emoji:"📈", label:"Étape 7 — Vérifie tes progrès",
    text:"Refais le test de l'étape 3 et compare tes résultats à ceux du début, en notant ce qui a changé.",
    fact:"Comparer ses propres résultats dans le temps est plus motivant qu'une comparaison avec les autres.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEps1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS=MUSEE_SEQ_EPS_1_COLLEGE_OBJECTS;
window.getSeqEps1CollegeObjectsForParcours=getSeqEps1CollegeObjectsForParcours;
