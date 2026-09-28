// ============================================================================
// SALLE OSP ARTS ET DESIGN — ÉCOLE DE CULTURE GÉNÉRALE (2e-3e années)
// Chaque objet = une séquence ou activité concrète, telle qu'un enseignant
// pourrait la construire, en lien avec les disciplines réelles de la
// grille horaire OSP Arts (brochure "Concrétisez vos projets" ECG Genève,
// éd. 2026-2027, p. 6-7). Contenu original — pas une citation du plan
// d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_ECG_OBJECTS = [
  { id:"objet_du_quotidien_redessine", tier:"court", emoji:"🪑", label:"Séquence atelier : redessiner un objet banal",
    text:"Chaque élève apporte un objet du quotidien (chaise, lampe, tasse) et doit en produire trois versions redessinées : une version épurée à l'extrême, une version exagérée, une version détournée de sa fonction d'origine — trois façons de questionner la forme avant de penser au style.",
    fact:"Travailler sur un objet banal plutôt que sur un sujet \"noble\" enlève la pression de bien faire et laisse l'élève se concentrer uniquement sur la construction plastique — la forme, avant l'idée.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"frise_comparee_deux_oeuvres", tier:"court", emoji:"🖼️", label:"Séquence histoire de l'art : comparer deux œuvres, deux siècles",
    text:"Les élèves reçoivent deux œuvres traitant du même sujet (un portrait, une scène de rue) à un siècle d'écart, et doivent identifier en dix minutes cinq différences de traitement — cadrage, couleur, intention — avant une mise en commun orale en classe.",
    fact:"Comparer plutôt que décrire une seule œuvre isolément oblige l'élève à formuler ce qui change, donc à nommer des choix — un réflexe d'analyse bien plus actif que la simple observation.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"affiche_message_en_30_min", tier:"court", emoji:"📢", label:"Atelier communication visuelle : une affiche en 30 minutes",
    text:"À partir d'un message donné (\"économiser l'eau\", \"venir voter\"), chaque élève doit produire une affiche lisible et compréhensible en moins de trois secondes de regard — contrainte de temps volontairement serrée pour forcer des choix visuels rapides et tranchés plutôt que trop réfléchis.",
    fact:"La contrainte des \"trois secondes\" reproduit une réalité du métier : dans la rue, personne ne s'arrête longtemps devant une affiche — le message doit passer avant même une lecture complète.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"carnet_art_contemporain_musee", tier:"court", emoji:"📓", label:"Sortie art contemporain : le carnet de doute",
    text:"Lors d'une visite d'exposition, chaque élève tient un \"carnet de doute\" : pour chaque œuvre, noter une chose comprise et une chose qui reste incertaine ou dérangeante — l'incompréhension face à l'art contemporain devient alors matière à discussion plutôt qu'un blocage à cacher.",
    fact:"Normaliser le doute face à une œuvre contemporaine évite le réflexe du \"je n'aime pas donc c'est nul\" et pousse à chercher ce que l'artiste a pu vouloir provoquer, même sans certitude.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"trente_vignettes_rapides", tier:"moyen", emoji:"✏️", label:"Atelier dessin-graphisme : trente vignettes en une heure",
    text:"Consigne unique : remplir une planche de trente petites vignettes représentant la même idée (un personnage, un objet) sous trente angles ou styles différents — l'objectif n'est jamais la qualité de chaque case, mais la quantité, pour désinhiber le trait.",
    fact:"Cette méthode de production massive et rapide, courante dans les écoles de design, casse le réflexe du perfectionnisme sur un seul dessin et révèle souvent les meilleures idées dans les dix dernières vignettes, une fois l'autocensure épuisée.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"projet_design_cahier_charges", tier:"moyen", emoji:"📐", label:"Projet design : répondre à un vrai cahier des charges",
    text:"Par groupes de deux, les élèves reçoivent un cahier des charges fictif mais réaliste (concevoir un packaging économique et écologique pour un produit donné) et doivent présenter, trois semaines plus tard, une maquette accompagnée d'une justification de leurs choix face à la classe.",
    fact:"Confronter les élèves à des contraintes contradictoires (coût bas ET écologie ET esthétique) reproduit exactement la tension permanente du métier de designer, où aucune contrainte n'est jamais sacrifiée entièrement aux deux autres.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"jury_blanc_avant_tpc", tier:"moyen", emoji:"🗣️", label:"Préparation TPC : le jury blanc",
    text:"Avant la vraie soutenance du travail personnel de certificat, chaque élève présente son projet artistique en cinq minutes devant deux camarades jouant le rôle de jury, qui doivent poser au moins trois questions critiques — un entraînement à encaisser la critique avant l'épreuve réelle.",
    fact:"S'entraîner devant des pairs plutôt que devant l'enseignant change la dynamique : les questions de camarades sont souvent plus directes, ce qui prépare mieux à l'imprévisibilité d'un vrai jury.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"portfolio_trois_disciplines", tier:"moyen", emoji:"📁", label:"Constituer un portfolio à trois entrées",
    text:"Sur l'année, chaque élève alimente un portfolio structuré en trois sections — travaux d'atelier, recherches d'histoire de l'art, croquis personnels — pour apprendre à documenter et sélectionner son propre travail, une compétence attendue dans tout dossier de candidature en école d'art.",
    fact:"Savoir choisir dix travaux représentatifs parmi cinquante réalisés dans l'année est une compétence à part entière : un portfolio surchargé dilue l'impression laissée, un portfolio trop mince manque de preuves.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"pastiche_puis_rupture", tier:"long", emoji:"🔄", label:"Séquence longue : pasticher puis rompre",
    text:"Sur trois semaines : d'abord copier fidèlement le style d'un artiste étudié en histoire de l'art (pastiche), puis produire une œuvre personnelle qui s'en éloigne volontairement sur un point précis (couleur, échelle, sujet) — apprendre à s'affranchir d'un modèle qu'on maîtrise déjà.",
    fact:"Cette méthode du pastiche suivi de la rupture est une pratique ancienne dans la formation des peintres : de nombreux grands artistes ont commencé par copier leurs maîtres avant de trouver leur propre voix.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"portes_ouvertes_atelier_public", tier:"long", emoji:"🚪", label:"Simulation : portes ouvertes de l'atelier",
    text:"En fin de semestre, la classe organise une exposition ouverte au reste de l'école : chaque élève affiche trois travaux et doit être capable de les présenter oralement à un visiteur inconnu qui n'a aucune connaissance préalable du projet — un exercice de médiation, pas seulement de création.",
    fact:"Savoir parler de son travail à un public non initié est une compétence distincte de la création elle-même — beaucoup de bons créateurs échouent au premier abord à expliquer simplement ce qu'ils ont voulu faire.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"enquete_metier_stage_prepa", tier:"long", emoji:"🔍", label:"Avant le stage : enquête métier",
    text:"En amont du stage pratique obligatoire, chaque élève prépare cinq questions précises à poser à un designer ou artiste professionnel rencontré (rémunération réelle, part de temps administratif, plus grande difficulté du métier) — préparer le stage comme une vraie enquête, pas une simple observation passive.",
    fact:"Les stagiaires qui arrivent avec des questions précises obtiennent presque toujours des réponses plus honnêtes et plus utiles que ceux qui se contentent d'observer sans jamais interroger le professionnel qui les accueille.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"critique_croisee_collective", tier:"long", emoji:"👥", label:"Rituel régulier : la critique croisée",
    text:"Une fois par mois, les travaux en cours de toute la classe sont affichés ensemble et chaque élève doit commenter le travail d'un camarade tiré au sort, en formulant une force et une piste d'amélioration précises — jamais un simple \"j'aime\" ou \"j'aime pas\".",
    fact:"Ce rituel de critique collective, courant dans les écoles d'art professionnelles sous le nom de \"crit\", habitue tôt les élèves à recevoir un avis extérieur sur leur travail sans le vivre comme une attaque personnelle.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesignEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_ECG_OBJECTS = MUSEE_ARTS_DESIGN_ECG_OBJECTS;
window.getArtsDesignEcgObjectsForParcours = getArtsDesignEcgObjectsForParcours;
