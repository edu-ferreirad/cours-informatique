// SALLE OSP OSP COMMUNICATION ET INFORMATION — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_COMMUNICATION_INFO_ECG_1_OBJECTS = [
  { id:"communication_info_1re_1", tier:"court", emoji:"📰", label:"Découverte : décoder un titre d'actualité",
    text:"Les élèves comparent le titre d'un même fait dans trois médias et identifient ce que chaque formulation met en avant.",
    fact:"La communication et l'information reposent sur l'analyse des messages ; cette activité en donne un premier aperçu.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"communication_info_1re_2", tier:"moyen", emoji:"📱", label:"Découverte : mesurer son propre usage du numérique",
    text:"Les élèves relèvent pendant deux jours leur temps d'écran par type d'usage et en tirent deux constats à partager en classe.",
    fact:"L'OSP comprend numérique et société ; partir de ses propres usages rend le sujet concret.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"communication_info_1re_3", tier:"long", emoji:"🧭", label:"Découverte : quatre débouchés, quatre exigences",
    text:"À partir de la brochure ECG, les élèves relèvent pour l'informatique de gestion, l'information documentaire et le tourisme les conditions à remplir (langues B1, séjour linguistique, stage encadré).",
    fact:"La brochure précise pour la maturité spécialisée communication et information un niveau B1 dans deux langues, un séjour linguistique de cinq semaines et, pour certaines filières, un contrat de stage encadré.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getCommunicationInfo1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_COMMUNICATION_INFO_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_COMMUNICATION_INFO_ECG_1_OBJECTS = MUSEE_COMMUNICATION_INFO_ECG_1_OBJECTS;
window.getCommunicationInfo1EcgObjectsForParcours = getCommunicationInfo1EcgObjectsForParcours;
