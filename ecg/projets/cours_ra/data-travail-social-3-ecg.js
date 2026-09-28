// SALLE OSP OSP TRAVAIL SOCIAL — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_ECG_3_OBJECTS = [
  { id:"recit_famille_migration_histoire", tier:"court", emoji:"📖", label:"Histoire-géographie : le récit de migration reconstitué",
    text:"À partir d'un témoignage fictif mais réaliste de parcours migratoire, les élèves doivent replacer chaque étape sur une carte et identifier le contexte historique correspondant à chaque période traversée — comprendre une trajectoire individuelle à travers un contexte collectif.",
    fact:"Relier systématiquement le récit individuel au contexte historique et géographique évite de réduire une situation sociale à un simple problème personnel, en révélant les causes structurelles souvent en jeu derrière un parcours de vie.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"cas_droit_famille_simplifie", tier:"court", emoji:"⚖️", label:"Droit : démêler un cas familial simplifié",
    text:"Face à une situation familiale fictive complexe (garde partagée, allocations, logement), les élèves doivent identifier quels droits et démarches légales s'appliquent réellement, en s'appuyant sur des extraits simplifiés de textes légaux fournis en classe.",
    fact:"Ce type d'exercice révèle rapidement aux élèves la complexité administrative bien réelle que rencontrent de nombreuses familles en difficulté — comprendre cette complexité de l'intérieur est un préalable à pouvoir un jour aider à s'y retrouver.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"atelier_animation_jeune_public", tier:"moyen", emoji:"🎨", label:"Discipline artistique : préparer une animation pour enfants",
    text:"Dans le cours artistique au choix, les élèves conçoivent et testent en classe une courte activité créative (dessin, jeu, mouvement) destinée à un groupe d'enfants, avant de la présenter réellement à un public jeune lors d'une sortie ou d'un partenariat local.",
    fact:"Tester d'abord l'activité sur ses camarades permet de repérer les consignes mal formulées ou trop complexes avant de l'essayer sur de vrais enfants, dont le temps d'attention et de compréhension diffère fortement de celui d'adolescents.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"projet_option_complementaire_ts", tier:"moyen", emoji:"➕", label:"Option complémentaire : le mini-projet de découverte",
    text:"Dans le cadre de l'option complémentaire proposée dès la 2e année, l'élève choisit un domaine à explorer en dehors de sa spécialisation habituelle et doit produire, en fin de semestre, une courte présentation expliquant ce que cette découverte lui apporte pour son projet de travail social.",
    fact:"Relier explicitement une découverte extérieure au projet professionnel initial, plutôt que de la traiter comme une parenthèse isolée, aide l'élève à enrichir sa vision du travail social par des apports parfois inattendus d'autres domaines.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"carnet_stage_encadre_reflexif", tier:"long", emoji:"📓", label:"Pendant le stage encadré : le carnet réflexif",
    text:"Durant les vingt-sept semaines de stage encadré exigées pour la maturité spécialisée, l'élève tient un carnet réflexif régulier où il analyse, au-delà du simple récit factuel, ce qu'une situation rencontrée lui a appris sur sa propre posture professionnelle en construction.",
    fact:"La différence entre un simple récit factuel (\"j'ai fait ceci\") et une vraie réflexion professionnelle (\"voici ce que cette situation m'a appris sur moi-même en tant que futur professionnel\") est ce qui distingue un carnet de stage réussi d'un carnet purement descriptif.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"presentation_projet_partenaire_local", tier:"long", emoji:"🤝", label:"Aboutissement : présenter un projet à un partenaire réel",
    text:"En fin de cursus, un groupe d'élèves présente un projet d'action sociale conçu sur l'année (atelier, campagne de sensibilisation) directement à un professionnel ou une structure partenaire réelle, qui donne un retour honnête sur sa faisabilité concrète — sortir du cadre purement scolaire.",
    fact:"Recevoir un retour d'un vrai professionnel du terrain, avec ses contraintes réelles de budget et de temps, confronte souvent les élèves à des limites pratiques qu'un enseignant seul, même bienveillant, n'aurait pas soulevées de la même façon.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_ECG_3_OBJECTS = MUSEE_TRAVAIL_SOCIAL_ECG_3_OBJECTS;
window.getTravailSocial3EcgObjectsForParcours = getTravailSocial3EcgObjectsForParcours;
