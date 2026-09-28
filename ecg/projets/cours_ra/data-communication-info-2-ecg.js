// SALLE OSP OSP COMMUNICATION ET INFORMATION — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_ECG_2_OBJECTS = [
  { id:"meme_info_trois_formats", tier:"court", emoji:"📰", label:"Atelier culture et langue : une info, trois formats",
    text:"À partir d'un même fait divers fourni, chaque élève doit le reformuler en trois versions : un tweet de 280 caractères, un chapeau d'article de 50 mots, un message vocal de trente secondes — même information, trois contraintes d'écriture totalement différentes.",
    fact:"Ce même exercice, répété sur des sujets variés au fil de l'année, entraîne un réflexe professionnel réel : savoir adapter instantanément le format d'un message selon le support, sans jamais trahir l'information de départ.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"capsule_video_60_secondes", tier:"court", emoji:"🎬", label:"Multimédias : la capsule de 60 secondes",
    text:"Par groupes de trois, les élèves produisent une courte vidéo explicative de 60 secondes maximum sur un sujet donné, en respectant un cahier des charges précis (sous-titres obligatoires, un seul plan fixe, musique libre de droits) — contraintes techniques réelles d'un vrai brief de production.",
    fact:"Imposer une durée aussi courte oblige à des choix de montage radicaux : couper une information secondaire devient plus formateur, pour apprendre la hiérarchisation, qu'un montage sans limite de temps.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"campagne_marketing_produit_fictif", tier:"moyen", emoji:"📈", label:"Économie et marketing : lancer un produit fictif",
    text:"Par groupes, les élèves inventent un produit ou service fictif et doivent en définir le public cible, le positionnement prix et une accroche publicitaire, avant de présenter leur stratégie face à la classe qui joue le rôle d'investisseurs à convaincre.",
    fact:"Jouer le rôle d'investisseurs sceptiques plutôt que de simples camarades bienveillants pousse les groupes présentateurs à anticiper de vraies objections commerciales, pas seulement à décrire une idée sans la défendre.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"decryptage_une_journal", tier:"moyen", emoji:"🗞️", label:"Sociologie des médias : décrypter une une de journal",
    text:"Face à la une du jour de trois journaux différents traitant du même événement, les élèves comparent choix de titre, de photo et d'angle, puis formulent une hypothèse sur le public visé par chaque journal en fonction de ces choix éditoriaux.",
    fact:"Comparer plusieurs unes le même jour révèle immédiatement, de façon très concrète, que le choix d'une photo ou d'un titre n'est jamais neutre : chaque rédaction fait des choix éditoriaux visibles dès la première page.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"dossier_veille_medias_langues", tier:"long", emoji:"🌍", label:"Vers la MS : constituer un dossier de veille en langue étrangère",
    text:"En préparation du séjour linguistique exigé pour la maturité spécialisée, l'élève constitue sur plusieurs semaines un dossier de veille médiatique dans l'une de ses langues secondes, résumant chaque semaine un article d'actualité lu en version originale.",
    fact:"Cette veille régulière en langue étrangère, plus qu'un simple cours de grammaire, prépare concrètement à comprendre l'information locale une fois arrivé en immersion, où l'actualité du pays devient un sujet de conversation quotidien.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"carnet_observation_stage_ci", tier:"long", emoji:"📓", label:"Pendant le stage : le carnet d'observation métier",
    text:"Durant le stage pratique obligatoire, l'élève note chaque jour une tâche de communication ou de gestion de l'information observée ou réalisée, et identifie en fin de semaine laquelle lui a demandé le plus de rigueur méthodologique, au-delà de la seule créativité.",
    fact:"Ce suivi révèle souvent aux élèves que les métiers de la communication reposent sur bien plus de rigueur organisationnelle (délais, validation, coordination) qu'ils ne l'imaginaient avant leur premier contact réel avec le milieu professionnel.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_ECG_2_OBJECTS = MUSEE_COMMUNICATION_INFO_ECG_2_OBJECTS;
window.getCommunicationInfo2EcgObjectsForParcours = getCommunicationInfo2EcgObjectsForParcours;
