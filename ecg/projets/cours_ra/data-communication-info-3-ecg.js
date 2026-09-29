// SALLE OSP COMMUNICATION ET INFORMATION — 3e année — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_3_ECG_OBJECTS = [
  { id:"communication_info_3_1", tier:"court", emoji:"🔎", label:"Étape 1 — Enquête sur une fausse information",
    text:"Trouve une information douteuse en ligne (ou utilise celle fournie par ton enseignant) et mène une vérification complète : source, date, auteur, autres médias en parlent-ils ?",
    fact:"Une enquête de vérification complète va plus loin qu'une simple recherche rapide de la source.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"communication_info_3_2", tier:"court", emoji:"🗂️", label:"Étape 2 — Compare deux systèmes de classement",
    text:"Compare la façon dont deux bibliothèques ou centres de documentation classent l'information (par sujet, par date) et note un avantage et un inconvénient de chaque système.",
    fact:"L'information documentaire est un vrai métier de classement, pas seulement de recherche.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"communication_info_3_3", tier:"court", emoji:"🌍", label:"Étape 3 — Analyse une campagne touristique",
    text:"Observe une campagne de promotion touristique (affiche, site) et identifie à qui elle s'adresse et quelles images ou mots elle utilise pour convaincre.",
    fact:"Analyser une campagne touristique relie communication et connaissance des publics visés.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"communication_info_3_4", tier:"moyen", emoji:"🎬", label:"Étape 4 — Conçois un mini-plan de communication",
    text:"Pour un événement fictif (une kermesse d'école), conçois un plan de communication simple : un message principal, deux canaux utilisés, un visuel esquissé.",
    fact:"Un plan de communication, même simple, oblige à choisir un message unique plutôt que de tout dire à la fois.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"communication_info_3_5", tier:"moyen", emoji:"📖", label:"Étape 5 — Rédige un article plus long et structuré",
    text:"Rédige un article de trois paragraphes sur un sujet de ton choix, avec une introduction qui accroche, un développement structuré et une conclusion.",
    fact:"Structurer un texte plus long en parties visibles aide le lecteur à s'y retrouver, et toi à ne pas te perdre en écrivant.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"communication_info_3_6", tier:"long", emoji:"🧭", label:"Étape 6 — Prépare ton dossier d'orientation final",
    text:"À partir de tout ce que tu as produit sur les trois années (interviews, dossiers, analyses), choisis le débouché de l'OSP qui t'intéresse le plus et prépare un dossier d'une page qui explique pourquoi, avec des exemples concrets vécus.",
    fact:"S'appuyer sur des exemples concrets vécus pendant l'année rend un choix d'orientation bien plus solide qu'une intuition seule.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"communication_info_3_7", tier:"long", emoji:"🎤", label:"Étape 7 — Présente ton dossier final à la classe",
    text:"Présente ton dossier de l'étape 6 en deux minutes, avec au moins une condition d'admission précise trouvée dans la brochure ECG à l'appui de ton choix.",
    fact:"Terminer sur une information vérifiée, plutôt que sur une impression, est la meilleure façon de clore un dossier d'orientation.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo3EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_3_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_3_ECG_OBJECTS = MUSEE_COMMUNICATION_INFO_3_ECG_OBJECTS;
window.getCommunicationInfo3EcgObjectsForParcours = getCommunicationInfo3EcgObjectsForParcours;
