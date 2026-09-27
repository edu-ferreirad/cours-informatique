// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — enseignée les 3 premières
// années (2h/2h/2h) ; en 4e année, seul le "Sport" en option complémentaire
// subsiste pour les élèves qui le choisissent.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_EPS_COLLEGE_OBJECTS = [
  { id:"eps1_decouverte_sports_varies", degree:"1", emoji:"🏀", label:"Un carrousel de sports pour découvrir ses goûts",
    text:"Sur plusieurs semaines, les élèves testent des sports collectifs et individuels variés (jeux de balle, athlétisme, gymnastique) et notent après chaque séance une seule chose : ce qu'ils aimeraient refaire et pourquoi.",
    fact:"Le plan d'études cite la variété des activités comme moyen d'inciter l'élève à occuper sainement ses loisirs et à découvrir les nombreuses formes de mouvement et de sport qui se présentent à lui.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"eps1_regles_securite", degree:"1", emoji:"🛡️", label:"Devenir arbitre pour comprendre les règles",
    text:"À tour de rôle, chaque élève arbitre une partie de son propre camp lors d'un jeu collectif simple, ce qui l'oblige à connaître et faire respecter précisément les règles avant de simplement les suivre en tant que joueur.",
    fact:"Respecter les règles spécifiques (de jeu, de sécurité) des sports pratiqués est un objectif explicite des attitudes visées par le plan d'études.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"eps2_auto_evaluation_progres", degree:"2", emoji:"📈", label:"Suivre ses propres progrès sur un test simple",
    text:"Les élèves refont un même test physique simple (souplesse, équilibre) à plusieurs semaines d'intervalle et comparent leurs résultats personnels, sans jamais les comparer publiquement à ceux des autres.",
    fact:"Le plan d'études demande d'apprendre à se connaître soi-même en maîtrisant ses capacités et ses limites — un objectif individuel, pas une compétition entre élèves.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"eps2_gestion_agressivite", degree:"2", emoji:"🤝", label:"Nommer la frustration plutôt que la jouer",
    text:"Après un jeu collectif compétitif, chaque équipe doit exprimer verbalement, en cercle, un moment de frustration ressenti pendant le jeu et comment elle a été gérée sur le moment, avant tout débriefing technique.",
    fact:"Maîtriser les problèmes de rivalité et d'agressivité lors de la pratique sportive est un objectif explicite du plan d'études, aussi important que la performance elle-même.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"eps3_activite_nature", degree:"3", emoji:"🏔️", label:"Une activité en lien avec un élément naturel",
    text:"Lors d'une sortie ou d'un module spécifique (eau, neige selon la saison), les élèves doivent adapter une compétence déjà acquise en salle à un environnement naturel nouveau et en identifier les contraintes propres.",
    fact:"Appréhender et utiliser les éléments naturels (l'eau, la neige, la glace) est un objectif explicite du plan d'études qui dépasse le seul cadre de la salle de sport.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"eps3_sport_societe_debat", degree:"3", emoji:"📰", label:"Débattre d'un enjeu du sport contemporain",
    text:"À partir d'un article d'actualité sportive, les élèves discutent d'un enjeu de société lié au sport (dopage, sponsoring, médiatisation) en confrontant des points de vue différents.",
    fact:"Discerner l'importance du sport dans la société actuelle et observer son évolution d'un œil critique est un objectif explicite du plan d'études, au même titre que la pratique physique elle-même.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"eps4_sport_oc_autonomie", degree:"4", emoji:"🏃", label:"Sport (OC) — concevoir sa propre séance",
    text:"Les élèves ayant choisi l'option complémentaire Sport conçoivent, en petit groupe, une séance complète d'entraînement pour le reste de la classe, avec échauffement, activité principale et retour au calme, puis l'animent eux-mêmes.",
    fact:"Agir de façon autonome dans l'apprentissage et l'entraînement sportif est un objectif explicite du plan d'études ; concevoir et animer sa propre séance en est l'aboutissement concret.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"eps4_sport_oc_interdisciplinaire", degree:"4", emoji:"🔗", label:"Sport (OC) — le sport vu par une autre discipline",
    text:"Les élèves de l'option complémentaire Sport analysent, en lien avec une autre discipline (biologie ou économie), un aspect du sport (physiologie de l'effort, industrie sportive) à partir d'un dossier documentaire fourni.",
    fact:"Le plan d'études signale les interactions entre le sport et son environnement, notamment les relations entre sport, économie et médecine, comme objectif explicite de fin de cursus.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqEpsCollegeObjectsForDegree(degree){ return MUSEE_SEQ_EPS_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_EPS_COLLEGE_OBJECTS = MUSEE_SEQ_EPS_COLLEGE_OBJECTS;
window.getSeqEpsCollegeObjectsForDegree = getSeqEpsCollegeObjectsForDegree;
