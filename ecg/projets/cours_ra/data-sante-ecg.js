// ============================================================================
// SALLE OSP SANTÉ — ÉCOLE DE CULTURE GÉNÉRALE (2e-3e années)
// Chaque objet = une séquence ou activité concrète en lien avec les
// disciplines réelles de la grille horaire OSP Santé (brochure
// "Concrétisez vos projets" ECG Genève, éd. 2026-2027, p. 8). Contenu
// original — pas une citation du plan d'études.
// ============================================================================
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_ECG_OBJECTS = [
  { id:"dosage_medicament_cas_reel", tier:"court", emoji:"💊", label:"Calcul médical : le cas du dosage pédiatrique",
    text:"Face à une prescription fictive mais réaliste, les élèves doivent calculer la dose exacte d'un médicament pour un enfant selon son poids, en convertissant plusieurs unités successives (mg, ml, gouttes) — un seul chiffre d'arrondi mal placé change complètement la réponse finale.",
    fact:"Ce type d'exercice reproduit volontairement la pression réelle du métier : en soins pédiatriques, une erreur de calcul de dosage peut avoir des conséquences graves, ce qui justifie l'absence totale de tolérance à l'approximation.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"jeu_role_premier_entretien", tier:"court", emoji:"🩺", label:"Cours de santé : jeu de rôle du premier entretien",
    text:"Par binômes, un élève joue un patient anxieux avec des symptômes fictifs, l'autre joue le soignant qui doit mener un entretien d'accueil complet en restant calme et rassurant — puis les rôles s'inversent pour ressentir les deux positions de l'échange.",
    fact:"Faire jouer successivement les deux rôles, patient puis soignant, aide l'élève à comprendre de l'intérieur pourquoi certaines formulations rassurent et d'autres, en apparence anodines, augmentent au contraire l'anxiété d'un patient.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"experience_reaction_chimique_securite", tier:"court", emoji:"🧪", label:"Chimie : manipuler en respectant un protocole strict",
    text:"Avant toute manipulation en laboratoire, les élèves doivent rédiger eux-mêmes le protocole de sécurité de l'expérience du jour (équipement, gestes interdits, élimination des déchets) avant que l'enseignant ne valide ou corrige leur proposition.",
    fact:"Faire rédiger le protocole de sécurité par les élèves eux-mêmes, plutôt que de le leur imposer tout fait, ancre bien mieux les réflexes de sécurité qu'une simple lecture passive d'un règlement de laboratoire.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"schema_corps_physique_biomecanique", tier:"court", emoji:"🦴", label:"Physique appliquée : le levier du corps humain",
    text:"Les élèves modélisent un mouvement simple du corps (lever un bras, se pencher) comme un système de leviers en physique, calculant la force musculaire nécessaire selon la distance au point d'appui — le corps humain devient un cas d'application concret des lois physiques déjà apprises.",
    fact:"Ce lien direct entre physique et anatomie révèle pourquoi certaines positions de travail (soulever un patient sans plier les genoux) sont physiquement bien plus coûteuses en effort qu'une posture correcte, indépendamment de la force du soignant.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"etude_cas_pathologie_biologie", tier:"moyen", emoji:"🔬", label:"Biologie : l'étude de cas clinique simplifié",
    text:"À partir d'un dossier fictif de symptômes, les élèves doivent identifier, en croisant leurs connaissances de biologie, quel système du corps est probablement affecté, avant de comparer leurs hypothèses en groupe et de justifier leur raisonnement devant la classe.",
    fact:"Ce format d'étude de cas, où l'élève doit raisonner à partir de symptômes plutôt que de recevoir directement une pathologie nommée, se rapproche directement de la démarche diagnostique enseignée plus tard dans les formations de santé.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"debat_ethique_soin_psychologie", tier:"moyen", emoji:"⚖️", label:"Psychologie : débattre d'un dilemme éthique du soin",
    text:"La classe se divise en deux groupes pour débattre d'un dilemme éthique réaliste du monde de la santé (respecter le refus de soin d'un patient conscient) — chaque groupe doit défendre une position, y compris celle qu'il ne partage pas personnellement au départ.",
    fact:"Défendre une position qu'on ne partage pas personnellement force à sortir de sa première réaction émotionnelle et développe une compétence essentielle du métier de soignant : comprendre un point de vue avant de le juger.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"journal_symptomes_biologie_transversale", tier:"moyen", emoji:"📓", label:"Biologie-chimie-physique : le journal transversal",
    text:"Une fois par mois, les élèves tiennent un journal reliant explicitement une notion apprise en biologie à une notion vue en chimie ou en physique la même semaine — obliger à voir les trois sciences comme un même socle plutôt que trois matières séparées.",
    fact:"Ce rituel transversal, simple à mettre en œuvre, contre un réflexe fréquent chez les élèves : cloisonner chaque discipline scientifique séparément, alors que la compréhension du corps humain exige justement de les combiner en permanence.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"simulation_stage_prealable", tier:"moyen", emoji:"🏥", label:"Avant le stage préalable : la checklist de terrain",
    text:"En préparation du stage préalable de quatre semaines à temps plein exigé pour la maturité spécialisée, l'élève prépare une checklist personnelle de compétences et de questions à valider concrètement sur le terrain, plutôt que de partir en stage sans objectif précis.",
    fact:"Un stage préparé avec des objectifs concrets et personnels produit presque toujours un retour bien plus riche qu'un stage vécu passivement — l'élève sait alors quoi observer activement plutôt que d'attendre qu'on lui montre les choses.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
  { id:"simulation_urgence_calcul_stress", tier:"long", emoji:"⏱️", label:"Calcul médical sous contrainte : la simulation d'urgence",
    text:"Exercice chronométré : les élèves doivent calculer un dosage médical en moins de deux minutes, dans un environnement volontairement bruyant recréé en classe — reproduire, en toute sécurité, une petite part de la pression temporelle réelle du métier de soignant.",
    fact:"Introduire volontairement du bruit et une contrainte de temps révèle souvent des erreurs de calcul invisibles dans un exercice fait au calme — une prise de conscience utile avant d'affronter un vrai service hospitalier sous tension.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"visite_service_hospitalier_reel", tier:"long", emoji:"🏨", label:"Sortie : visiter un service de soin réel",
    text:"La classe visite un service hospitalier ou une structure de soin partenaire, et chaque élève repart avec la mission d'observer et de noter un aspect logistique invisible depuis l'extérieur (organisation des équipes, gestion du matériel, circulation des patients).",
    fact:"Cette visite révèle souvent aux élèves que l'organisation logistique d'un service de soin occupe une place aussi centrale que le geste médical lui-même dans la qualité globale des soins apportés aux patients.",
    anchor:{distance:2.3,angle:340,height:WALL_H} },
  { id:"portrait_croise_metiers_sante", tier:"long", emoji:"👥", label:"Recherche : portraits croisés de deux métiers",
    text:"Chaque élève choisit deux métiers de la filière santé apparemment proches (infirmier et ambulancier, par exemple) et doit identifier précisément trois différences concrètes de formation, de quotidien et de responsabilités entre les deux.",
    fact:"Ce travail de comparaison fine évite le piège de choisir un métier uniquement sur une image générale et floue de \"travailler dans la santé\", en obligeant à distinguer des réalités professionnelles souvent très différentes malgré des apparences proches.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
  { id:"debrief_hebdomadaire_stage_sante", tier:"long", emoji:"🗣️", label:"Pendant le stage : le debrief hebdomadaire en binôme",
    text:"Deux élèves en stage dans des structures différentes s'appellent chaque semaine pour comparer leurs observations respectives — confronter deux réalités de terrain différentes révèle souvent des aspects du métier qu'une seule expérience isolée n'aurait pas mis en évidence.",
    fact:"Comparer deux expériences de stage distinctes, plutôt que de vivre son stage isolément, permet à l'élève de comprendre que le quotidien d'un métier de santé varie fortement selon la structure, la spécialité et l'équipe rencontrées.",
    anchor:{distance:5.7,angle:15,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSanteEcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_ECG_OBJECTS = MUSEE_SANTE_ECG_OBJECTS;
window.getSanteEcgObjectsForParcours = getSanteEcgObjectsForParcours;
