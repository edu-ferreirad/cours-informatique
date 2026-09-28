// SALLE OSP OSP SANTÉ — 2e année — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SANTE_ECG_2_OBJECTS = [
  { id:"dosage_medicament_cas_reel", tier:"court", emoji:"💊", label:"Calcul médical : le cas du dosage pédiatrique",
    text:"Face à une prescription fictive mais réaliste, les élèves doivent calculer la dose exacte d'un médicament pour un enfant selon son poids, en convertissant plusieurs unités successives (mg, ml, gouttes) — un seul chiffre d'arrondi mal placé change complètement la réponse finale.",
    fact:"Ce type d'exercice reproduit volontairement la pression réelle du métier : en soins pédiatriques, une erreur de calcul de dosage peut avoir des conséquences graves, ce qui justifie l'absence totale de tolérance à l'approximation.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"experience_reaction_chimique_securite", tier:"court", emoji:"🧪", label:"Chimie : manipuler en respectant un protocole strict",
    text:"Avant toute manipulation en laboratoire, les élèves doivent rédiger eux-mêmes le protocole de sécurité de l'expérience du jour (équipement, gestes interdits, élimination des déchets) avant que l'enseignant ne valide ou corrige leur proposition.",
    fact:"Faire rédiger le protocole de sécurité par les élèves eux-mêmes, plutôt que de le leur imposer tout fait, ancre bien mieux les réflexes de sécurité qu'une simple lecture passive d'un règlement de laboratoire.",
    anchor:{distance:1.4,angle:160,height:DESK_H} },
  { id:"etude_cas_pathologie_biologie", tier:"moyen", emoji:"🔬", label:"Biologie : l'étude de cas clinique simplifié",
    text:"À partir d'un dossier fictif de symptômes, les élèves doivent identifier, en croisant leurs connaissances de biologie, quel système du corps est probablement affecté, avant de comparer leurs hypothèses en groupe et de justifier leur raisonnement devant la classe.",
    fact:"Ce format d'étude de cas, où l'élève doit raisonner à partir de symptômes plutôt que de recevoir directement une pathologie nommée, se rapproche directement de la démarche diagnostique enseignée plus tard dans les formations de santé.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"journal_symptomes_biologie_transversale", tier:"moyen", emoji:"📓", label:"Biologie-chimie-physique : le journal transversal",
    text:"Une fois par mois, les élèves tiennent un journal reliant explicitement une notion apprise en biologie à une notion vue en chimie ou en physique la même semaine — obliger à voir les trois sciences comme un même socle plutôt que trois matières séparées.",
    fact:"Ce rituel transversal, simple à mettre en œuvre, contre un réflexe fréquent chez les élèves : cloisonner chaque discipline scientifique séparément, alors que la compréhension du corps humain exige justement de les combiner en permanence.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"simulation_urgence_calcul_stress", tier:"long", emoji:"⏱️", label:"Calcul médical sous contrainte : la simulation d'urgence",
    text:"Exercice chronométré : les élèves doivent calculer un dosage médical en moins de deux minutes, dans un environnement volontairement bruyant recréé en classe — reproduire, en toute sécurité, une petite part de la pression temporelle réelle du métier de soignant.",
    fact:"Introduire volontairement du bruit et une contrainte de temps révèle souvent des erreurs de calcul invisibles dans un exercice fait au calme — une prise de conscience utile avant d'affronter un vrai service hospitalier sous tension.",
    anchor:{distance:6.0,angle:70,height:SHELF_H} },
  { id:"portrait_croise_metiers_sante", tier:"long", emoji:"👥", label:"Recherche : portraits croisés de deux métiers",
    text:"Chaque élève choisit deux métiers de la filière santé apparemment proches (infirmier et ambulancier, par exemple) et doit identifier précisément trois différences concrètes de formation, de quotidien et de responsabilités entre les deux.",
    fact:"Ce travail de comparaison fine évite le piège de choisir un métier uniquement sur une image générale et floue de \"travailler dans la santé\", en obligeant à distinguer des réalités professionnelles souvent très différentes malgré des apparences proches.",
    anchor:{distance:4.4,angle:185,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getSante2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_SANTE_ECG_2_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_SANTE_ECG_2_OBJECTS = MUSEE_SANTE_ECG_2_OBJECTS;
window.getSante2EcgObjectsForParcours = getSante2EcgObjectsForParcours;
