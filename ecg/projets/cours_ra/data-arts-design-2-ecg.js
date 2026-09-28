// SALLE OSP OSP ARTS ET DESIGN — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_ECG_2_OBJECTS = [
  { id:"objet_du_quotidien_redessine", tier:"court", emoji:"🪑", label:"Séquence atelier : redessiner un objet banal",
    text:"Chaque élève apporte un objet du quotidien (chaise, lampe, tasse) et doit en produire trois versions redessinées : une version épurée à l'extrême, une version exagérée, une version détournée de sa fonction d'origine — trois façons de questionner la forme avant de penser au style.",
    fact:"Travailler sur un objet banal plutôt que sur un sujet \"noble\" enlève la pression de bien faire et laisse l'élève se concentrer uniquement sur la construction plastique — la forme, avant l'idée.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"affiche_message_en_30_min", tier:"court", emoji:"📢", label:"Atelier communication visuelle : une affiche en 30 minutes",
    text:"À partir d'un message donné (\"économiser l'eau\", \"venir voter\"), chaque élève doit produire une affiche lisible et compréhensible en moins de trois secondes de regard — contrainte de temps volontairement serrée pour forcer des choix visuels rapides et tranchés plutôt que trop réfléchis.",
    fact:"La contrainte des \"trois secondes\" reproduit une réalité du métier : dans la rue, personne ne s'arrête longtemps devant une affiche — le message doit passer avant même une lecture complète.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"trente_vignettes_rapides", tier:"moyen", emoji:"✏️", label:"Atelier dessin-graphisme : trente vignettes en une heure",
    text:"Consigne unique : remplir une planche de trente petites vignettes représentant la même idée (un personnage, un objet) sous trente angles ou styles différents — l'objectif n'est jamais la qualité de chaque case, mais la quantité, pour désinhiber le trait.",
    fact:"Cette méthode de production massive et rapide, courante dans les écoles de design, casse le réflexe du perfectionnisme sur un seul dessin et révèle souvent les meilleures idées dans les dix dernières vignettes, une fois l'autocensure épuisée.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"jury_blanc_avant_tpc", tier:"moyen", emoji:"🗣️", label:"Préparation TPC : le jury blanc",
    text:"Avant la vraie soutenance du travail personnel de certificat, chaque élève présente son projet artistique en cinq minutes devant deux camarades jouant le rôle de jury, qui doivent poser au moins trois questions critiques — un entraînement à encaisser la critique avant l'épreuve réelle.",
    fact:"S'entraîner devant des pairs plutôt que devant l'enseignant change la dynamique : les questions de camarades sont souvent plus directes, ce qui prépare mieux à l'imprévisibilité d'un vrai jury.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"pastiche_puis_rupture", tier:"long", emoji:"🔄", label:"Séquence longue : pasticher puis rompre",
    text:"Sur trois semaines : d'abord copier fidèlement le style d'un artiste étudié en histoire de l'art (pastiche), puis produire une œuvre personnelle qui s'en éloigne volontairement sur un point précis (couleur, échelle, sujet) — apprendre à s'affranchir d'un modèle qu'on maîtrise déjà.",
    fact:"Cette méthode du pastiche suivi de la rupture est une pratique ancienne dans la formation des peintres : de nombreux grands artistes ont commencé par copier leurs maîtres avant de trouver leur propre voix.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"enquete_metier_stage_prepa", tier:"long", emoji:"🔍", label:"Avant le stage : enquête métier",
    text:"En amont du stage pratique obligatoire, chaque élève prépare cinq questions précises à poser à un designer ou artiste professionnel rencontré (rémunération réelle, part de temps administratif, plus grande difficulté du métier) — préparer le stage comme une vraie enquête, pas une simple observation passive.",
    fact:"Les stagiaires qui arrivent avec des questions précises obtiennent presque toujours des réponses plus honnêtes et plus utiles que ceux qui se contentent d'observer sans jamais interroger le professionnel qui les accueille.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_ECG_2_OBJECTS = MUSEE_ARTS_DESIGN_ECG_2_OBJECTS;
window.getArtsDesign2EcgObjectsForParcours = getArtsDesign2EcgObjectsForParcours;
