// SALLE SÉQUENCES — ALLEMAND — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS = [
  { id:"allemand_4_1", tier:"court", emoji:"🔬", label:"Étape 1 — Mène une mini-recherche transdisciplinaire",
    text:"En lien avec l'histoire ou les sciences, mène une courte recherche documentaire en allemand sur un sujet croisé, puis prépare une restitution orale.",
    fact:"Ce type de recherche transdisciplinaire est explicitement prévu en option spécifique de dernière année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"allemand_4_2", tier:"court", emoji:"🎓", label:"Étape 2 — Passe un oral blanc de maturité",
    text:"Tire un texte du programme, prépare-toi en temps limité, puis présente-le devant deux camarades jouant le jury avec une grille simplifiée.",
    fact:"S'entraîner face à un vrai jury simulé réduit l'écart avec la pression du jour de l'examen réel.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"allemand_4_3", tier:"court", emoji:"📖", label:"Étape 3 — Analyse un texte littéraire en profondeur",
    text:"Choisis un extrait littéraire du programme et analyse-le en profondeur : contexte, procédés, effet sur le lecteur, en préparant tes notes pour une présentation.",
    fact:"Cette analyse approfondie prépare directement à l'examen de maturité en langue seconde.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"allemand_4_4", tier:"moyen", emoji:"🗣️", label:"Étape 4 — Présente et défends un exposé",
    text:"Prépare un exposé sur un sujet culturel germanophone et défends-le face à des questions critiques posées par tes camarades.",
    fact:"Défendre son exposé face à des questions montre une vraie maîtrise, pas une simple récitation.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"allemand_4_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Rédige un texte argumentatif complet",
    text:"Rédige un texte argumentatif structuré sur un sujet culturel, avec une thèse claire et des exemples précis à l'appui de chaque argument.",
    fact:"La rédaction argumentative structurée est un objectif explicite de fin de cursus en langue seconde.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"allemand_4_6", tier:"long", emoji:"🌍", label:"Étape 6 — Prépare ton séjour linguistique",
    text:"Recherche les conditions d'un séjour linguistique en pays germanophone (durée, immersion) utile pour une future maturité spécialisée pédagogie ou communication.",
    fact:"Un séjour linguistique est parfois une condition d'admission à certaines maturités spécialisées : mieux vaut l'anticiper.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"allemand_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Passe ton oral blanc final",
    text:"Passe un dernier oral blanc complet en conditions réelles, puis compare ta performance à celle de ton premier oral blanc de l'année.",
    fact:"Comparer tes deux performances rend tes progrès concrets et visibles sur l'ensemble de l'année.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqAllemand4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS=MUSEE_SEQ_ALLEMAND_4_COLLEGE_OBJECTS;
window.getSeqAllemand4CollegeObjectsForParcours=getSeqAllemand4CollegeObjectsForParcours;
