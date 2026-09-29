// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS = [
  { id:"eps_2_1", tier:"court", emoji:"📈", label:"Étape 1 — Suis tes propres progrès",
    text:"Refais un test physique simple (souplesse, équilibre) et compare tes résultats à ceux d'il y a plusieurs semaines.",
    fact:"Apprendre à se connaître soi-même en maîtrisant ses capacités est un objectif explicite du programme.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"eps_2_2", tier:"court", emoji:"🤝", label:"Étape 2 — Nomme ta frustration plutôt que la jouer",
    text:"Après un jeu collectif compétitif, exprime en cercle un moment de frustration ressenti et comment il a été géré sur le moment.",
    fact:"Maîtriser les problèmes de rivalité et d'agressivité est un objectif explicite du programme.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"eps_2_3", tier:"court", emoji:"🛡️", label:"Étape 3 — Fais respecter une règle de sécurité",
    text:"Lors d'une activité, identifie une règle de sécurité importante et explique-la à un camarade avant de commencer.",
    fact:"Respecter les règles de sécurité est un objectif aussi important que la performance sportive elle-même.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"eps_2_4", tier:"moyen", emoji:"🏔️", label:"Étape 4 — Adapte une compétence à un nouvel environnement",
    text:"Lors d'une activité en extérieur ou avec un élément naturel, adapte une compétence déjà acquise en salle à ce nouvel environnement.",
    fact:"Appréhender et utiliser les éléments naturels est un objectif explicite du programme.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"eps_2_5", tier:"moyen", emoji:"📰", label:"Étape 5 — Débats un enjeu du sport contemporain",
    text:"À partir d'un article d'actualité sportive, discute d'un enjeu de société lié au sport (dopage, médiatisation) avec la classe.",
    fact:"Discerner l'importance du sport dans la société actuelle est un objectif du programme, autant que la pratique.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"eps_2_6", tier:"long", emoji:"🎯", label:"Étape 6 — Fixe-toi un nouvel objectif personnel",
    text:"Choisis une nouvelle compétence sportive à améliorer ce trimestre et planifie en trois étapes comment y arriver.",
    fact:"Se fixer ses propres objectifs développe ton autonomie dans l'apprentissage et l'entraînement sportif.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"eps_2_7", tier:"long", emoji:"📈", label:"Étape 7 — Fais le bilan de ton année sportive",
    text:"Compare tes résultats de tests physiques du début et de la fin de l'année, et identifie ton progrès le plus marquant.",
    fact:"Comparer ses propres résultats dans le temps est le meilleur indicateur de progrès personnel.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEps2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS=MUSEE_SEQ_EPS_2_COLLEGE_OBJECTS;
window.getSeqEps2CollegeObjectsForParcours=getSeqEps2CollegeObjectsForParcours;
