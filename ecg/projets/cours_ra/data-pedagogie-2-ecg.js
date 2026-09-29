// SALLE OSP PÉDAGOGIE — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_2_ECG_OBJECTS = [
  { id:"pedagogie_2_1", tier:"court", emoji:"👶", label:"Étape 1 — Repère une étape du développement",
    text:"À partir d'une courte description d'un comportement d'enfant (par exemple : à deux ans il dit « non » à tout), identifie à quelle étape du développement cela correspond en cherchant dans une ressource donnée.",
    fact:"Connaître les étapes du développement évite d'interpréter un comportement normal comme un problème.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"pedagogie_2_2", tier:"court", emoji:"📖", label:"Étape 2 — Choisis un livre pour un âge précis",
    text:"Feuillette trois albums jeunesse différents et détermine, pour chacun, l'âge le plus adapté en justifiant par le vocabulaire, la longueur du texte et le thème.",
    fact:"Choisir un livre adapté à l'âge est une compétence concrète, pas seulement une question de goût.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"pedagogie_2_3", tier:"court", emoji:"🧩", label:"Étape 3 — Adapte une consigne pour un enfant en difficulté",
    text:"Voici une consigne standard pour une activité. Réécris-la en la simplifiant pour un enfant qui a du mal à se concentrer longtemps, sans en changer l'objectif.",
    fact:"Adapter une consigne sans changer l'objectif d'apprentissage est un exercice quotidien de l'enseignant.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"pedagogie_2_4", tier:"moyen", emoji:"🎭", label:"Étape 4 — Gère un petit conflit entre enfants (jeu de rôle)",
    text:"Par trois, joue une dispute entre deux enfants (fictifs) pour un jouet, le troisième joue l'adulte qui doit calmer la situation sans juger qui a commencé. Notez ce qui a aidé.",
    fact:"Gérer un conflit sans désigner de coupable est une compétence relationnelle essentielle en pédagogie.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"pedagogie_2_5", tier:"moyen", emoji:"🗂️", label:"Étape 5 — Observe et documente un apprentissage",
    text:"Observe (vidéo ou scène jouée) un enfant en train d'apprendre à faire quelque chose de nouveau et rédige une fiche d'observation factuelle de cinq lignes, comme le ferait un professionnel.",
    fact:"Documenter précisément un apprentissage permet de suivre les progrès d'un enfant dans la durée.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"pedagogie_2_6", tier:"long", emoji:"🏫", label:"Étape 6 — Conçois une matinée type",
    text:"Construis le programme d'une matinée pour un groupe d'enfants (accueil, activité, collation, jeu libre) en précisant un objectif pour chaque moment, pas seulement une occupation.",
    fact:"Une matinée bien construite alterne les types d'activités pour respecter le rythme de l'enfant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"pedagogie_2_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ta matinée et anticipe un imprévu",
    text:"Présente ton programme de l'étape 6 à la classe et réponds à une question sur un imprévu réaliste (un enfant pleure, il pleut) : comment adaptes-tu ton programme ?",
    fact:"Savoir adapter un programme prévu à un imprévu est aussi important que de bien le préparer au départ.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_2_ECG_OBJECTS = MUSEE_PEDAGOGIE_2_ECG_OBJECTS;
window.getPedagogie2EcgObjectsForParcours = getPedagogie2EcgObjectsForParcours;
