// SALLE SÉQUENCES — CHIMIE — 3e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS = [
  { id:"chimie_3_1", tier:"court", emoji:"🧬", label:"Étape 1 — Prévois une réaction organique (OS)",
    text:"Face à la formule d'une molécule organique simple, prévois le produit d'une réaction courante avant de vérifier ta prédiction.",
    fact:"Prévoir des réactions de chimie organique est un objectif explicite de l'option spécifique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"chimie_3_2", tier:"court", emoji:"🔗", label:"Étape 2 — Relie une molécule à sa fonction biologique (OS)",
    text:"En lien avec le cours de biologie, relie une structure moléculaire à sa fonction biologique concrète dans l'organisme, sous forme de schéma légendé.",
    fact:"L'option biologie-chimie renforce spécialement ce lien entre les deux sciences.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"chimie_3_3", tier:"court", emoji:"🧪", label:"Étape 3 — Mène une expérience plus exigeante (OS)",
    text:"Mène une expérience de chimie organique complète, du choix des mesures jusqu'à l'analyse critique des résultats.",
    fact:"Les expériences en option spécifique sont plus exigeantes qu'en discipline fondamentale.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"chimie_3_4", tier:"moyen", emoji:"⚡", label:"Étape 4 — Comprends l'énergie d'une pile (OS)",
    text:"Construis une pile simple en laboratoire et explique, à partir des réactions chimiques en jeu, d'où provient l'énergie électrique produite.",
    fact:"Comprendre les principes de production d'énergie électrique est un objectif de l'option spécifique.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"chimie_3_5", tier:"moyen", emoji:"📊", label:"Étape 5 — Analyse des données de réaction (OS)",
    text:"À partir de données réelles d'une réaction chimique, identifie une tendance et propose une explication scientifique plausible.",
    fact:"Travailler sur des données réelles prépare aux vraies méthodes de la chimie.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"chimie_3_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare un dossier de recherche (OS)",
    text:"Choisis un sujet de chimie organique ou énergétique et constitue un dossier documenté avec au moins deux sources fiables citées.",
    fact:"Un dossier bien sourcé te prépare aux exigences d'un futur travail de maturité scientifique.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"chimie_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier avec un regard critique (OS)",
    text:"Présente ton dossier de l'étape 6 à la classe en identifiant une limite de ta propre recherche.",
    fact:"Identifier soi-même une limite de son travail est une marque de rigueur scientifique.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqChimie3CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS=MUSEE_SEQ_CHIMIE_3_COLLEGE_OBJECTS;
window.getSeqChimie3CollegeObjectsForParcours=getSeqChimie3CollegeObjectsForParcours;
