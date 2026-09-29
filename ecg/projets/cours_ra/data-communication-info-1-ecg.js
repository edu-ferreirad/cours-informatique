// SALLE OSP COMMUNICATION ET INFORMATION — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_1_ECG_OBJECTS = [
  { id:"communication_info_1_1", tier:"court", emoji:"📰", label:"Étape 1 — Compare trois titres sur le même fait",
    text:"Trouve le même fait d'actualité relaté par trois médias différents et compare leurs titres : qu'est-ce que chaque formulation met en avant ou cache ?",
    fact:"Comparer des titres sur un même fait montre qu'une information n'est jamais neutre dans sa formulation.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"communication_info_1_2", tier:"court", emoji:"📱", label:"Étape 2 — Mesure ton propre usage du numérique",
    text:"Pendant deux jours, note ton temps d'écran par type d'usage (réseaux sociaux, jeux, travail scolaire) puis calcule un total et compare avec un camarade.",
    fact:"Partir de ses propres chiffres rend un sujet abstrait immédiatement concret.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"communication_info_1_3", tier:"court", emoji:"🔍", label:"Étape 3 — Vérifie une information douteuse",
    text:"Choisis une information qui te semble douteuse trouvée en ligne et vérifie son origine avec deux méthodes simples (recherche de la source, recherche d'image inversée si besoin).",
    fact:"Vérifier une source avant de la partager est la compétence de base de l'éducation aux médias.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"communication_info_1_4", tier:"moyen", emoji:"🎙️", label:"Étape 4 — Prépare une mini-interview",
    text:"Prépare trois questions précises pour interviewer un camarade sur un sujet d'actualité de son choix, puis mène l'interview en la filmant ou en l'enregistrant si possible.",
    fact:"Préparer des questions précises à l'avance est ce qui distingue une vraie interview d'une simple discussion.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"communication_info_1_5", tier:"moyen", emoji:"🖥️", label:"Étape 5 — Analyse une page d'accueil de site",
    text:"Observe la page d'accueil d'un site d'actualité et repère trois choix qui orientent ton attention (taille des titres, emplacement, images).",
    fact:"Une page d'accueil est construite pour orienter le regard, pas organisée au hasard.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"communication_info_1_6", tier:"long", emoji:"🧭", label:"Étape 6 — Compare quatre débouchés de l'OSP",
    text:"Dans la brochure ECG, relève pour l'informatique de gestion, l'information documentaire, le tourisme et un quatrième débouché de ton choix, les conditions à remplir (langues, stage, séjour).",
    fact:"La maturité spécialisée communication et information demande, pour certaines filières, un niveau B1 dans deux langues et un séjour linguistique de cinq semaines au moins.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"communication_info_1_7", tier:"long", emoji:"📢", label:"Étape 7 — Présente ton dossier de comparaison",
    text:"Présente en deux minutes à la classe le débouché de l'étape 6 qui t'intéresse le plus, avec au moins une condition d'admission précise à l'appui.",
    fact:"Citer une condition d'admission précise, plutôt qu'une impression générale, montre une vraie recherche d'orientation.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_1_ECG_OBJECTS = MUSEE_COMMUNICATION_INFO_1_ECG_OBJECTS;
window.getCommunicationInfo1EcgObjectsForParcours = getCommunicationInfo1EcgObjectsForParcours;
