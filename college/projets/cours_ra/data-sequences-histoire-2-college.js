// SALLE SÉQUENCES — HISTOIRE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS = [
  { id:"histoire_2_1", tier:"court", emoji:"📏", label:"Étape 1 — Place un événement sur la frise ruptures/continuités",
    text:"Sur une frise longue de l'époque moderne, place l'événement donné et classe-le comme rupture ou continuité, avec une justification d'une phrase.",
    fact:"Étudier les ruptures et continuités est explicitement une des lignes de force du programme d'histoire.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"histoire_2_2", tier:"court", emoji:"🖼️", label:"Étape 2 — Lis un portrait de pouvoir",
    text:"Face à un portrait officiel d'un souverain de l'époque moderne, relève chaque détail visuel et déduis-en le message de pouvoir voulu, avant de comparer avec un second portrait d'un contexte différent.",
    fact:"Analyser et synthétiser des informations iconographiques est aussi important en histoire que la lecture de texte.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"histoire_2_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Débats d'une grande réforme",
    text:"En groupe tiré au sort, prépare puis débats des arguments pour ou contre une réforme majeure de l'époque moderne, avant un vote final basé uniquement sur les arguments entendus.",
    fact:"Ce format de débat développe l'écoute d'autrui et le travail en équipe, deux compétences citoyennes fondamentales.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"histoire_2_4", tier:"moyen", emoji:"👥", label:"Étape 4 — Incarne un point de vue historique",
    text:"Choisis un acteur social d'une révolution étudiée (ouvrier, bourgeois, aristocrate) et rédige un court témoignage fictif mais historiquement plausible. Confronte-le à ceux des autres groupes.",
    fact:"Multiplier les points de vue sur un même événement fait comprendre la pluralité des interprétations historiques.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"histoire_2_5", tier:"moyen", emoji:"📊", label:"Étape 5 — Explique des statistiques d'industrialisation",
    text:"À partir d'un tableau de données démographiques ou économiques, formule deux hypothèses explicatives différentes pour une même évolution chiffrée, puis évalue laquelle est la mieux soutenue.",
    fact:"L'histoire croise sources textuelles et sources quantitatives ; ne pas se limiter aux textes est essentiel.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"histoire_2_6", tier:"long", emoji:"🗺️", label:"Étape 6 — Croise histoire et géographie sur l'industrialisation",
    text:"Superpose une carte des ressources naturelles du XIXe siècle à une carte des foyers industriels de la même époque, et explique les corrélations que tu observes.",
    fact:"Histoire et géographie collaborent souvent : ce croisement de cartes en est un exemple direct et concret.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"histoire_2_7", tier:"long", emoji:"🎨", label:"Étape 7 — Compare une peinture médiévale et une peinture de la Renaissance",
    text:"Avec une grille d'observation, repère perspective, personnages et symboles dans un tableau de la Renaissance, puis compare avec une peinture médiévale.",
    fact:"Ce changement dans la façon de peindre traduit un changement plus profond dans la vision du monde de l'époque.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqHistoire2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS=MUSEE_SEQ_HISTOIRE_2_COLLEGE_OBJECTS;
window.getSeqHistoire2CollegeObjectsForParcours=getSeqHistoire2CollegeObjectsForParcours;
