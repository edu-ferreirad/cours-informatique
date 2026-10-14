// SALLE SÉQUENCES — HISTOIRE — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS = [
  { id:"histoire_1_1", tier:"court", emoji:"📜", label:"Étape 1 — Trie source primaire et interprétation",
    text:"Tu reçois un lot de documents sur un même événement antique : un extrait d'historien ancien, une reconstitution moderne, un manuel scolaire. Classe chacun : trace directe de l'époque, ou interprétation postérieure ?",
    fact:"Ce tri est un préalable indispensable avant toute analyse historique : savoir d'où vient un document change complètement sa valeur de preuve.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"histoire_1_2", tier:"court", emoji:"🏰", label:"Étape 2 — Construis la carte du pouvoir féodal",
    text:"En groupe, construis une carte mentale reliant seigneurs, vassaux, paysans et clergé par des flèches légendées (protection, travail, impôt). Compare ensuite ta carte à celle d'un autre groupe.",
    fact:"Représenter visuellement un système de pouvoir aide à comprendre des notions de contre-pouvoir avant même d'en connaître le vocabulaire savant.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"histoire_1_3", tier:"court", emoji:"⚖️", label:"Étape 3 — Participe au procès fictif d'une décision antique",
    text:"La classe rejoue le procès d'une décision politique controversée de l'Antiquité. Selon ton rôle (accusation ou défense), construis ton argumentation uniquement à partir des documents distribués.",
    fact:"Un argument fondé sur des preuves documentaires, pas sur ton opinion personnelle, est la démarche même de l'historien.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"histoire_1_4", tier:"moyen", emoji:"📏", label:"Étape 4 — Classe un événement : rupture ou continuité ?",
    text:"Sur une frise chronologique, place un événement donné et classe-le explicitement comme « rupture » ou « continuité » par rapport à la période précédente, avec une justification écrite d'une phrase.",
    fact:"Ce choix explicite évite l'accumulation de dates isolées sans lien les unes avec les autres.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"histoire_1_5", tier:"moyen", emoji:"🗣️", label:"Étape 5 — Débats sur une grande réforme",
    text:"En groupe tiré au sort, prépare des arguments pour ou contre une réforme majeure étudiée. Débats-en avec la classe, puis vote selon les seuls arguments entendus pendant le débat, pas tes convictions de départ.",
    fact:"Voter uniquement sur les arguments entendus t'entraîne à changer d'avis face à de bons arguments, une compétence citoyenne réelle.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"histoire_1_6", tier:"long", emoji:"🖼️", label:"Étape 6 — Décrypte un portrait officiel",
    text:"Face à un portrait officiel d'un souverain, relève méthodiquement chaque détail visuel (posture, objets, décor) et déduis-en le message de pouvoir voulu. Compare ensuite avec un second portrait d'un contexte différent.",
    fact:"Une image officielle n'est jamais neutre : elle est construite pour transmettre un message précis, à décoder comme un texte.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"histoire_1_7", tier:"long", emoji:"🗂️", label:"Étape 7 — Prépare un mini-dossier de civilisation",
    text:"En groupe, constitue un dossier sur un aspect de civilisation antique (bains, forum, légions) à partir de plusieurs documents, puis présente-le en trois minutes à la classe.",
    fact:"Constituer un dossier à partir de plusieurs sources, plutôt que d'une seule, te donne une vision plus complète et plus fiable.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqHistoire1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS=MUSEE_SEQ_HISTOIRE_1_COLLEGE_OBJECTS;
window.getSeqHistoire1CollegeObjectsForParcours=getSeqHistoire1CollegeObjectsForParcours;
