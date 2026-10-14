// SALLE SÉQUENCES — ÉDUCATION PHYSIQUE ET SPORTS — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS = [
  { id:"eps_3_1", tier:"court", emoji:"🏔️", label:"Étape 1 — Adapte-toi à un environnement naturel",
    text:"Lors d'une activité en extérieur, adapte une compétence déjà acquise en salle à un environnement naturel nouveau et identifie ses contraintes propres.",
    fact:"Utiliser les éléments naturels dépasse le seul cadre de la salle de sport, un objectif explicite du programme.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"eps_3_2", tier:"court", emoji:"📰", label:"Étape 2 — Débats un enjeu du sport contemporain",
    text:"À partir d'un article d'actualité sportive, discute d'un enjeu de société lié au sport en confrontant des points de vue différents.",
    fact:"Observer et juger l'évolution du sport d'un œil critique est un objectif du programme, pas seulement le pratiquer.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"eps_3_3", tier:"court", emoji:"🤸", label:"Étape 3 — Teste une nouvelle discipline sportive",
    text:"Découvre une discipline sportive que tu n'as jamais pratiquée et note ce qui t'a surpris, en bien ou en mal.",
    fact:"Sortir de ses habitudes sportives élargit ta palette de compétences et de plaisirs sportifs.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"eps_3_4", tier:"moyen", emoji:"🎯", label:"Étape 4 — Coache un camarade",
    text:"Aide un camarade à progresser sur une compétence précise en lui donnant deux conseils concrets, puis observe s'il progresse.",
    fact:"Expliquer une compétence à quelqu'un d'autre t'oblige à vraiment la comprendre toi-même.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"eps_3_5", tier:"moyen", emoji:"🩺", label:"Étape 5 — Comprends l'effort et la récupération",
    text:"Mesure ton pouls avant, pendant et après un effort, et explique en une phrase pourquoi ton corps réagit ainsi.",
    fact:"Comprendre les réactions de son corps à l'effort est une base pour gérer sa santé sportive à long terme.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"eps_3_6", tier:"long", emoji:"🎯", label:"Étape 6 — Prépare et anime une séance pour la classe",
    text:"En groupe, conçois et anime une courte séance sportive pour tes camarades, avec échauffement, activité principale et retour au calme.",
    fact:"Concevoir et animer une séance, pas seulement la suivre, développe ton autonomie sportive.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"eps_3_7", tier:"long", emoji:"📈", label:"Étape 7 — Fais le bilan de tes trois années",
    text:"Compare tes résultats de tests physiques sur les trois dernières années et identifie ton progrès le plus marquant.",
    fact:"Comparer ses propres résultats sur plusieurs années est le meilleur indicateur de progrès personnel durable.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqEps3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS=MUSEE_SEQ_EPS_3_COLLEGE_OBJECTS;
window.getSeqEps3CollegeObjectsForParcours=getSeqEps3CollegeObjectsForParcours;
