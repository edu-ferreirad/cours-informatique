// SALLE OSP COMMUNICATION ET INFORMATION — 2e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_2_ECG_OBJECTS = [
  { id:"communication_info_2_1", tier:"court", emoji:"📊", label:"Étape 1 — Lis un tableau de statistiques médiatiques",
    text:"À partir d'un tableau réel sur l'usage des réseaux sociaux par âge, réponds à trois questions précises et formule une hypothèse pour expliquer une tendance observée.",
    fact:"Lire des statistiques réelles évite de se fier uniquement à des impressions sur les usages numériques.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"communication_info_2_2", tier:"court", emoji:"🖋️", label:"Étape 2 — Rédige une brève de dix lignes",
    text:"Choisis un fait (réel ou inventé pour l'exercice) et rédige une brève journalistique de dix lignes maximum en répondant aux questions qui, quoi, où, quand.",
    fact:"La brève journalistique impose de trier l'essentiel en très peu de mots.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"communication_info_2_3", tier:"court", emoji:"💾", label:"Étape 3 — Explore une base de données simple",
    text:"Ouvre un tableur contenant une liste de données (films, livres) et utilise le tri et le filtre pour répondre à deux questions précises sur ces données.",
    fact:"Savoir interroger une base de données, même simple, est une compétence de base en gestion de l'information.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"communication_info_2_4", tier:"moyen", emoji:"🎨", label:"Étape 4 — Conçois une mise en page de brève",
    text:"Mets en page ta brève de l'étape 2 avec un titre, une image (ou un emplacement pour une image) et une mise en forme claire, en pensant à ce qui attire l'œil en premier.",
    fact:"La mise en page influence la lecture autant que le texte lui-même.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"communication_info_2_5", tier:"moyen", emoji:"🌐", label:"Étape 5 — Compare deux stratégies numériques",
    text:"Compare les comptes de réseaux sociaux de deux organisations différentes (une entreprise, une association) et note deux différences dans leur façon de communiquer.",
    fact:"Comparer des stratégies réelles fait comprendre que la communication numérique se pense selon un public visé.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"communication_info_2_6", tier:"long", emoji:"📈", label:"Étape 6 — Prépare un mini-dossier sur un enjeu numérique",
    text:"Choisis un enjeu numérique actuel (désinformation, protection des données) et rédige un dossier d'une page avec deux sources fiables citées.",
    fact:"Citer ses sources est indispensable dès qu'on travaille sur un sujet numérique sensible.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"communication_info_2_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier comme un professionnel",
    text:"Présente ton dossier de l'étape 6 en deux minutes à la classe, avec une structure claire (constat, enjeu, une piste de solution).",
    fact:"Structurer une présentation en trois temps clairs est une compétence transférable à tous les métiers de la communication.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo2EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_2_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_2_ECG_OBJECTS = MUSEE_COMMUNICATION_INFO_2_ECG_OBJECTS;
window.getCommunicationInfo2EcgObjectsForParcours = getCommunicationInfo2EcgObjectsForParcours;
