// SALLE OSP TRAVAIL SOCIAL — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_2_ECG_OBJECTS = [
  { id:"travail_social_2_1", tier:"court", emoji:"👂", label:"Étape 1 — Reformule en une phrase",
    text:"Ton enseignant lit un court témoignage fictif. Sans prendre de notes pendant la lecture, reformule-le en une seule phrase juste après, puis compare ta reformulation à celle d'un camarade.",
    fact:"Reformuler l'essentiel en une phrase, sans notes, entraîne l'écoute active dans des conditions proches du terrain.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"travail_social_2_2", tier:"court", emoji:"📐", label:"Étape 2 — Calcule un budget social minimal",
    text:"Avec une liste de charges fixes (loyer, assurance maladie, transport) et un revenu donné, calcule ce qu'il reste pour la nourriture sur un mois, puis compare avec le montant réel d'un budget alimentaire suisse moyen qu'on te donne.",
    fact:"Comprendre un budget serré aide à ne pas juger trop vite les choix d'une personne en difficulté financière.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"travail_social_2_3", tier:"court", emoji:"🏛️", label:"Étape 3 — Identifie l'aide sociale adaptée",
    text:"Face à trois situations fictives différentes (perte d'emploi, handicap, famille monoparentale), associe chacune à un type d'aide sociale suisse réel que tu recherches en dix minutes.",
    fact:"Savoir quelle aide correspond à quelle situation est une compétence de base pour orienter une personne correctement.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"travail_social_2_4", tier:"moyen", emoji:"🎭", label:"Étape 4 — Anime une activité de groupe",
    text:"Prépare et anime pendant cinq minutes une petite activité de groupe pour tes camarades (jeu, discussion guidée) sur un thème de ton choix, puis demande-leur un retour sur ce qui a fonctionné.",
    fact:"Animer un groupe, même petit, est une compétence centrale de l'éducation sociale et culturelle.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"travail_social_2_5", tier:"moyen", emoji:"📝", label:"Étape 5 — Rédige une note d'observation professionnelle",
    text:"À partir d'une scène observée (réelle ou vidéo), rédige une note d'observation factuelle de cinq lignes, sans interprétation ni jugement, comme le ferait un professionnel dans un dossier.",
    fact:"Une note d'observation professionnelle doit pouvoir être relue par un collègue sans qu'il devine ton avis personnel.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"travail_social_2_6", tier:"long", emoji:"🗺️", label:"Étape 6 — Construis le parcours d'une personne fictive",
    text:"Invente le parcours d'une personne en difficulté (perte d'emploi puis recherche d'aide) et trace, étape par étape, les services qu'elle contacterait réellement à Genève, en citant leurs noms réels.",
    fact:"Ce travail montre concrètement le rôle de coordination que joue un travailleur social entre plusieurs services.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"travail_social_2_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente le parcours en identifiant un point de blocage",
    text:"Présente en deux minutes le parcours construit à l'étape 6 et identifie un moment où la personne pourrait abandonner ses démarches, en proposant une solution pour l'éviter.",
    fact:"Anticiper les moments d'abandon est une vraie compétence professionnelle, pas un détail secondaire.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_2_ECG_OBJECTS = MUSEE_TRAVAIL_SOCIAL_2_ECG_OBJECTS;
window.getTravailSocial2EcgObjectsForParcours = getTravailSocial2EcgObjectsForParcours;
