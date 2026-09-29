// SALLE OSP TRAVAIL SOCIAL — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_3_ECG_OBJECTS = [
  { id:"travail_social_3_1", tier:"court", emoji:"⚖️", label:"Étape 1 — Distingue droit et devoir",
    text:"Sur une situation fictive (un jeune quitte le domicile familial à 17 ans), liste trois droits et trois devoirs qui s'appliquent, en cherchant si besoin l'âge légal correspondant.",
    fact:"Connaître ses droits et devoirs légaux est indispensable pour accompagner quelqu'un sans lui donner de fausses informations.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"travail_social_3_2", tier:"court", emoji:"🧠", label:"Étape 2 — Repère un mécanisme de défense",
    text:"Lis une courte scène où un adolescent nie un problème évident. Identifie le mécanisme psychologique en jeu (déni, évitement) et propose une phrase d'ouverture bienveillante pour l'aborder.",
    fact:"Reconnaître un mécanisme de défense sans le juger permet d'adapter la façon d'aborder une personne en difficulté.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"travail_social_3_3", tier:"court", emoji:"📊", label:"Étape 3 — Lis un tableau de statistiques sociales",
    text:"À partir d'un tableau réel de statistiques sur la précarité en Suisse, réponds à trois questions précises (quelle tranche d'âge est la plus touchée, quelle évolution sur dix ans, une hypothèse pour l'expliquer).",
    fact:"Lire des statistiques sociales évite de se fier uniquement à des impressions individuelles pour comprendre un problème.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"travail_social_3_4", tier:"moyen", emoji:"🎭", label:"Étape 4 — Simule un entretien difficile",
    text:"Par deux, simule un entretien où une personne refuse l'aide proposée ; celui qui aide doit rester calme et reformuler sans forcer, pendant trois minutes chronométrées. L'observateur note trois moments clés.",
    fact:"Savoir accepter un refus sans se braquer est une compétence relationnelle essentielle du travail social.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"travail_social_3_5", tier:"moyen", emoji:"🗂️", label:"Étape 5 — Compare deux dispositifs d'aide",
    text:"Recherche et compare deux dispositifs d'aide sociale genevois (par exemple l'Hospice général et une association privée) : public visé, type d'aide, conditions d'accès.",
    fact:"Un même besoin peut être couvert par plusieurs dispositifs différents : les distinguer évite d'orienter quelqu'un au mauvais endroit.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"travail_social_3_6", tier:"long", emoji:"🏗️", label:"Étape 6 — Conçois un mini-projet social",
    text:"En groupe, conçois un petit projet répondant à un besoin réel observé autour de toi (isolement des personnes âgées, manque d'activités pour les jeunes) : objectif, public visé, deux actions concrètes.",
    fact:"Concevoir un projet, même petit, mobilise exactement les mêmes étapes qu'un vrai projet professionnel du social.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"travail_social_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Défends ton projet devant un jury",
    text:"Présente ton projet de l'étape 6 en trois minutes devant la classe qui joue le rôle d'un jury de financement, et réponds à deux questions critiques sur sa faisabilité.",
    fact:"Défendre un projet devant des questions critiques est une étape réelle du travail social, notamment pour obtenir des financements.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_3_ECG_OBJECTS = MUSEE_TRAVAIL_SOCIAL_3_ECG_OBJECTS;
window.getTravailSocial3EcgObjectsForParcours = getTravailSocial3EcgObjectsForParcours;
