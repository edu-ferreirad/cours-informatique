// SALLE SÉQUENCES — ÉCONOMIE ET DROIT — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS = [
  { id:"economie_droit_1_1", tier:"court", emoji:"🍞", label:"Étape 1 — Simule la rareté des ressources",
    text:"Reçois une quantité limitée de jetons à répartir entre plusieurs besoins concurrents avec ton groupe. Négocie une répartition, puis compare avec les autres groupes.",
    fact:"Cette simulation rend immédiatement concrète la notion économique de rareté des ressources.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"economie_droit_1_2", tier:"court", emoji:"⚖️", label:"Étape 2 — Distingue règle morale et règle de droit",
    text:"Face à une situation fictive simple (un objet prêté et cassé), distingue ce qui relève d'une règle morale de ce qui relève d'une règle de droit.",
    fact:"Cette distinction est un objectif explicite du cours d'introduction à l'économie et au droit.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"economie_droit_1_3", tier:"court", emoji:"🏪", label:"Étape 3 — Suis le parcours d'un produit",
    text:"Choisis un produit du quotidien et retrace son parcours de la production à la vente, en identifiant qui gagne de l'argent à chaque étape.",
    fact:"Suivre un produit concret rend visible les mécanismes économiques de production et d'échange.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"economie_droit_1_4", tier:"moyen", emoji:"📊", label:"Étape 4 — Calcule un budget simple",
    text:"Construis le budget d'un petit projet (sortie de classe) en listant dépenses et recettes, et vérifie qu'il est équilibré.",
    fact:"Manipuler un vrai budget, même petit, rend concrets les mécanismes de consommation étudiés en cours.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"economie_droit_1_5", tier:"moyen", emoji:"⚖️", label:"Étape 5 — Résous un petit cas juridique",
    text:"Face à une situation fictive simple, propose une résolution en t'appuyant sur une règle de droit que tu recherches toi-même.",
    fact:"Chercher soi-même la règle applicable, plutôt que de la recevoir, ancre mieux la compréhension du droit.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"economie_droit_1_6", tier:"long", emoji:"🗳️", label:"Étape 6 — Débats un choix économique de société",
    text:"Choisis un sujet économique d'actualité simple et débats-en en classe en identifiant les valeurs qui sous-tendent chaque position.",
    fact:"Reconnaître les valeurs derrière une position économique développe ton esprit critique face aux débats de société.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"economie_droit_1_7", tier:"long", emoji:"🎯", label:"Étape 7 — Prépare ton choix d'option",
    text:"Recherche ce qu'implique l'option spécifique économie et droit (horaires, contenu) pour t'aider à décider si elle te correspond.",
    fact:"Bien se renseigner avant de choisir une option évite les mauvaises surprises l'année suivante.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEconomieDroit1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS=MUSEE_SEQ_ECONOMIE_DROIT_1_COLLEGE_OBJECTS;
window.getSeqEconomieDroit1CollegeObjectsForParcours=getSeqEconomieDroit1CollegeObjectsForParcours;
