// SALLE OSP OSP ARTS ET DESIGN — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_ECG_3_OBJECTS = [
  { id:"frise_comparee_deux_oeuvres", tier:"court", emoji:"🖼️", label:"Séquence histoire de l'art : comparer deux œuvres, deux siècles",
    text:"Les élèves reçoivent deux œuvres traitant du même sujet (un portrait, une scène de rue) à un siècle d'écart, et doivent identifier en dix minutes cinq différences de traitement — cadrage, couleur, intention — avant une mise en commun orale en classe.",
    fact:"Comparer plutôt que décrire une seule œuvre isolément oblige l'élève à formuler ce qui change, donc à nommer des choix — un réflexe d'analyse bien plus actif que la simple observation.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"carnet_art_contemporain_musee", tier:"court", emoji:"📓", label:"Sortie art contemporain : le carnet de doute",
    text:"Lors d'une visite d'exposition, chaque élève tient un \"carnet de doute\" : pour chaque œuvre, noter une chose comprise et une chose qui reste incertaine ou dérangeante — l'incompréhension face à l'art contemporain devient alors matière à discussion plutôt qu'un blocage à cacher.",
    fact:"Normaliser le doute face à une œuvre contemporaine évite le réflexe du \"je n'aime pas donc c'est nul\" et pousse à chercher ce que l'artiste a pu vouloir provoquer, même sans certitude.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"projet_design_cahier_charges", tier:"moyen", emoji:"📐", label:"Projet design : répondre à un vrai cahier des charges",
    text:"Par groupes de deux, les élèves reçoivent un cahier des charges fictif mais réaliste (concevoir un packaging économique et écologique pour un produit donné) et doivent présenter, trois semaines plus tard, une maquette accompagnée d'une justification de leurs choix face à la classe.",
    fact:"Confronter les élèves à des contraintes contradictoires (coût bas ET écologie ET esthétique) reproduit exactement la tension permanente du métier de designer, où aucune contrainte n'est jamais sacrifiée entièrement aux deux autres.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"portfolio_trois_disciplines", tier:"moyen", emoji:"📁", label:"Constituer un portfolio à trois entrées",
    text:"Sur l'année, chaque élève alimente un portfolio structuré en trois sections — travaux d'atelier, recherches d'histoire de l'art, croquis personnels — pour apprendre à documenter et sélectionner son propre travail, une compétence attendue dans tout dossier de candidature en école d'art.",
    fact:"Savoir choisir dix travaux représentatifs parmi cinquante réalisés dans l'année est une compétence à part entière : un portfolio surchargé dilue l'impression laissée, un portfolio trop mince manque de preuves.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"portes_ouvertes_atelier_public", tier:"long", emoji:"🚪", label:"Simulation : portes ouvertes de l'atelier",
    text:"En fin de semestre, la classe organise une exposition ouverte au reste de l'école : chaque élève affiche trois travaux et doit être capable de les présenter oralement à un visiteur inconnu qui n'a aucune connaissance préalable du projet — un exercice de médiation, pas seulement de création.",
    fact:"Savoir parler de son travail à un public non initié est une compétence distincte de la création elle-même — beaucoup de bons créateurs échouent au premier abord à expliquer simplement ce qu'ils ont voulu faire.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"critique_croisee_collective", tier:"long", emoji:"👥", label:"Rituel régulier : la critique croisée",
    text:"Une fois par mois, les travaux en cours de toute la classe sont affichés ensemble et chaque élève doit commenter le travail d'un camarade tiré au sort, en formulant une force et une piste d'amélioration précises — jamais un simple \"j'aime\" ou \"j'aime pas\".",
    fact:"Ce rituel de critique collective, courant dans les écoles d'art professionnelles sous le nom de \"crit\", habitue tôt les élèves à recevoir un avis extérieur sur leur travail sans le vivre comme une attaque personnelle.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_ECG_3_OBJECTS = MUSEE_ARTS_DESIGN_ECG_3_OBJECTS;
window.getArtsDesign3EcgObjectsForParcours = getArtsDesign3EcgObjectsForParcours;
