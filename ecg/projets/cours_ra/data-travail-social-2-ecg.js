// SALLE OSP OSP TRAVAIL SOCIAL — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_ECG_2_OBJECTS = [
  { id:"cartographie_quartier_sociologie", tier:"court", emoji:"🗺️", label:"Sociologie : cartographier les ressources d'un quartier",
    text:"Par groupes, les élèves choisissent un quartier genevois et recensent sur une carte tous les lieux d'aide et de lien social qui s'y trouvent (centre de loisirs, permanence sociale, épicerie solidaire) — rendre visible un réseau d'entraide souvent invisible au premier regard.",
    fact:"Ce travail de repérage révèle presque toujours aux élèves l'existence de structures d'aide qu'ils ignoraient totalement, alors même qu'elles se trouvent parfois à quelques rues de leur propre domicile.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"simulation_entretien_ecoute_active", tier:"court", emoji:"👂", label:"Psychologie : s'entraîner à l'écoute active",
    text:"Par binômes, un élève raconte une difficulté fictive pendant deux minutes pendant que l'autre s'entraîne à ne reformuler que ce qu'il a entendu, sans jamais donner de conseil ni juger — un exercice volontairement frustrant qui force à résister au réflexe de vouloir \"résoudre\" tout de suite.",
    fact:"Le réflexe de vouloir immédiatement conseiller ou résoudre le problème d'autrui est l'un des obstacles les plus fréquents à une vraie écoute — cet exercice le rend visible en interdisant explicitement le conseil.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"jeu_role_conseil_municipal", tier:"moyen", emoji:"🏛️", label:"Économie politique : simuler un conseil municipal",
    text:"La classe se répartit en groupes représentant différents intérêts (habitants, commerçants, associations) pour débattre d'une proposition budgétaire fictive concernant les services sociaux d'une commune — comprendre de l'intérieur comment se négocient des choix de politique sociale.",
    fact:"Faire défendre des intérêts parfois contradictoires à des groupes d'élèves révèle concrètement pourquoi une décision de politique sociale, en apparence simple sur le papier, résulte toujours d'un compromis entre plusieurs priorités légitimes mais opposées.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"debat_prejuges_sociologie", tier:"moyen", emoji:"💬", label:"Sociologie : déconstruire un préjugé collectif",
    text:"La classe liste anonymement des préjugés courants sur une population donnée (personnes sans-abri, familles monoparentales), puis chaque préjugé est confronté à des données sociologiques réelles apportées par l'enseignant — comparer la perception commune aux faits établis.",
    fact:"Confronter directement un préjugé oral à des données chiffrées réelles a souvent plus d'impact pour le déconstruire qu'un simple discours moralisateur expliquant pourquoi ce préjugé serait injuste.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"simulation_situation_urgence_sociale", tier:"long", emoji:"🆘", label:"Mise en situation : gérer une urgence sociale simulée",
    text:"Un groupe d'élèves doit gérer, en temps limité, une situation fictive urgente (une personne se présente sans logement pour la nuit) en mobilisant uniquement les ressources réelles identifiées lors du travail de cartographie du quartier — relier théorie et action concrète sous pression.",
    fact:"Cette simulation révèle souvent que connaître l'existence théorique d'une ressource d'aide ne suffit pas : il faut aussi savoir rapidement comment y accéder concrètement, avec quels horaires et quelles conditions d'admission réelles.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"debat_ethique_limites_intervention", tier:"long", emoji:"⚖️", label:"Débat approfondi : où s'arrête l'aide ?",
    text:"La classe débat longuement d'un dilemme réaliste : jusqu'où un travailleur social doit-il intervenir dans la vie privée d'une personne qu'il accompagne, sans devenir intrusif ni la priver de son autonomie de décision — un débat sans réponse simple, volontairement laissé ouvert.",
    fact:"Laisser volontairement ce débat sans conclusion définitive reflète une réalité du métier : les travailleurs sociaux eux-mêmes n'ont jamais de règle absolue pour ce dilemme, mais réévaluent constamment cette limite selon chaque situation rencontrée.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_ECG_2_OBJECTS = MUSEE_TRAVAIL_SOCIAL_ECG_2_OBJECTS;
window.getTravailSocial2EcgObjectsForParcours = getTravailSocial2EcgObjectsForParcours;
