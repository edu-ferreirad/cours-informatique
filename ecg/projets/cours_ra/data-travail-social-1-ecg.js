// SALLE OSP OSP TRAVAIL SOCIAL — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_ECG_1_OBJECTS = [
  { id:"travail_social_1re_1", tier:"court", emoji:"🤝", label:"Découverte : écouter sans conseiller",
    text:"Par binômes, un élève raconte une difficulté ordinaire (fictive) pendant que l'autre a pour seule consigne de reformuler sans jamais donner de conseil, avant un échange sur ce qui a été difficile à retenir.",
    fact:"L'écoute active est au cœur des métiers du travail social ; l'expérimenter dès la 1re année permet de vérifier si ce type de posture vous parle avant de choisir l'OSP.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"travail_social_1re_2", tier:"moyen", emoji:"🏘️", label:"Découverte : cartographier les ressources sociales de son quartier",
    text:"Les élèves repèrent sur une carte de leur quartier trois lieux qui offrent un soutien (association, service social, maison de quartier) et notent à qui chacun s'adresse.",
    fact:"Découvrir le réseau social concret autour de soi rend visible le terrain de travail des futurs éducateurs, animateurs et assistants sociaux.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"travail_social_1re_3", tier:"long", emoji:"🗂️", label:"Découverte : portrait croisé de deux métiers du social",
    text:"Les élèves comparent deux professions (assistant social, éducateur social) en identifiant deux points communs et deux différences, à partir d'une brève interview ou d'une fiche métier.",
    fact:"Les métiers du social partagent des valeurs mais diffèrent par le public et le cadre ; les distinguer précise le choix d'orientation.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_ECG_1_OBJECTS = MUSEE_TRAVAIL_SOCIAL_ECG_1_OBJECTS;
window.getTravailSocial1EcgObjectsForParcours = getTravailSocial1EcgObjectsForParcours;
