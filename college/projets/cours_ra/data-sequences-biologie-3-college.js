// SALLE SÉQUENCES — BIOLOGIE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS = [
  { id:"biologie_3_1", tier:"court", emoji:"🧬", label:"Étape 1 — Résous un arbre généalogique (OS)",
    text:"Face à un arbre généalogique fictif sur plusieurs générations, détermine le mode de transmission le plus probable d'un caractère et prédis sa probabilité d'apparition chez une future génération.",
    fact:"Cette séquence n'existe que pour les élèves ayant choisi l'option biologie-chimie, puisque la biologie n'est plus en tronc commun dès la 3e année.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"biologie_3_2", tier:"court", emoji:"🌿", label:"Étape 2 — Fais un inventaire de terrain (OS)",
    text:"Lors d'une sortie, relève méthodiquement les espèces observées dans une zone délimitée et construis un schéma simplifié de leurs interactions probables (prédation, compétition).",
    fact:"Ce travail de terrain fait comprendre les interactions entre espèces d'une façon qu'aucun cours en classe ne permet seul.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"biologie_3_3", tier:"court", emoji:"⚗️", label:"Étape 3 — Relie une molécule à sa fonction (OS)",
    text:"En lien avec le cours de chimie, relie explicitement une structure moléculaire simple à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"L'option biologie-chimie est construite pour renforcer ce lien entre les deux sciences, plus qu'en discipline fondamentale.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"biologie_3_4", tier:"moyen", emoji:"🔬", label:"Étape 4 — Conçois une expérience de génétique simplifiée (OS)",
    text:"Conçois un protocole simple pour observer la transmission d'un caractère sur un organisme simple (plantes, levures) sur plusieurs générations rapides.",
    fact:"Observer une transmission génétique en direct, même simplifiée, ancre bien plus la notion qu'un schéma seul.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"biologie_3_5", tier:"moyen", emoji:"📊", label:"Étape 5 — Analyse des données écologiques réelles (OS)",
    text:"À partir de données réelles sur une population animale ou végétale, identifie une tendance et propose une explication écologique plausible.",
    fact:"Travailler sur des données réelles, pas seulement des exemples théoriques, prépare aux vraies méthodes de la biologie.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"biologie_3_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare un dossier de recherche sur un écosystème (OS)",
    text:"Choisis un écosystème local et constitue un dossier documenté sur sa biodiversité et les menaces qui pèsent sur lui, avec au moins deux sources fiables citées.",
    fact:"Un dossier bien sourcé sur un sujet local te prépare aux exigences d'un futur travail de maturité scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"biologie_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier avec un regard critique (OS)",
    text:"Présente ton dossier de l'étape 6 à la classe en identifiant une limite de ta propre recherche : une donnée manquante, une source moins fiable que les autres.",
    fact:"Identifier soi-même une limite de son travail est une marque de rigueur scientifique, pas un aveu de faiblesse.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqBiologie3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS=MUSEE_SEQ_BIOLOGIE_3_COLLEGE_OBJECTS;
window.getSeqBiologie3CollegeObjectsForParcours=getSeqBiologie3CollegeObjectsForParcours;
