// SALLE OSP OSP SANTÉ — 3e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_ECG_3_OBJECTS = [
  { id:"jeu_role_premier_entretien", tier:"court", emoji:"🩺", label:"Cours de santé : jeu de rôle du premier entretien",
    text:"Par binômes, un élève joue un patient anxieux avec des symptômes fictifs, l'autre joue le soignant qui doit mener un entretien d'accueil complet en restant calme et rassurant — puis les rôles s'inversent pour ressentir les deux positions de l'échange.",
    fact:"Faire jouer successivement les deux rôles, patient puis soignant, aide l'élève à comprendre de l'intérieur pourquoi certaines formulations rassurent et d'autres, en apparence anodines, augmentent au contraire l'anxiété d'un patient.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"schema_corps_physique_biomecanique", tier:"court", emoji:"🦴", label:"Physique appliquée : le levier du corps humain",
    text:"Les élèves modélisent un mouvement simple du corps (lever un bras, se pencher) comme un système de leviers en physique, calculant la force musculaire nécessaire selon la distance au point d'appui — le corps humain devient un cas d'application concret des lois physiques déjà apprises.",
    fact:"Ce lien direct entre physique et anatomie révèle pourquoi certaines positions de travail (soulever un patient sans plier les genoux) sont physiquement bien plus coûteuses en effort qu'une posture correcte, indépendamment de la force du soignant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"debat_ethique_soin_psychologie", tier:"moyen", emoji:"⚖️", label:"Psychologie : débattre d'un dilemme éthique du soin",
    text:"La classe se divise en deux groupes pour débattre d'un dilemme éthique réaliste du monde de la santé (respecter le refus de soin d'un patient conscient) — chaque groupe doit défendre une position, y compris celle qu'il ne partage pas personnellement au départ.",
    fact:"Défendre une position qu'on ne partage pas personnellement force à sortir de sa première réaction émotionnelle et développe une compétence essentielle du métier de soignant : comprendre un point de vue avant de le juger.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"simulation_stage_prealable", tier:"moyen", emoji:"🏥", label:"Avant le stage préalable : la checklist de terrain",
    text:"En préparation du stage préalable de quatre semaines à temps plein exigé pour la maturité spécialisée, l'élève prépare une checklist personnelle de compétences et de questions à valider concrètement sur le terrain, plutôt que de partir en stage sans objectif précis.",
    fact:"Un stage préparé avec des objectifs concrets et personnels produit presque toujours un retour bien plus riche qu'un stage vécu passivement — l'élève sait alors quoi observer activement plutôt que d'attendre qu'on lui montre les choses.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"visite_service_hospitalier_reel", tier:"long", emoji:"🏨", label:"Sortie : visiter un service de soin réel",
    text:"La classe visite un service hospitalier ou une structure de soin partenaire, et chaque élève repart avec la mission d'observer et de noter un aspect logistique invisible depuis l'extérieur (organisation des équipes, gestion du matériel, circulation des patients).",
    fact:"Cette visite révèle souvent aux élèves que l'organisation logistique d'un service de soin occupe une place aussi centrale que le geste médical lui-même dans la qualité globale des soins apportés aux patients.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"debrief_hebdomadaire_stage_sante", tier:"long", emoji:"🗣️", label:"Pendant le stage : le debrief hebdomadaire en binôme",
    text:"Deux élèves en stage dans des structures différentes s'appellent chaque semaine pour comparer leurs observations respectives — confronter deux réalités de terrain différentes révèle souvent des aspects du métier qu'une seule expérience isolée n'aurait pas mis en évidence.",
    fact:"Comparer deux expériences de stage distinctes, plutôt que de vivre son stage isolément, permet à l'élève de comprendre que le quotidien d'un métier de santé varie fortement selon la structure, la spécialité et l'équipe rencontrées.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_ECG_3_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_ECG_3_OBJECTS = MUSEE_SANTE_ECG_3_OBJECTS;
window.getSante3EcgObjectsForParcours = getSante3EcgObjectsForParcours;
