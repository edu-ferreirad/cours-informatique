// SALLE OSP OSP ARTS ET DESIGN — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_ARTS_DESIGN_ECG_1_OBJECTS = [
  { id:"arts_design_1re_1", tier:"court", emoji:"✏️", label:"Découverte : le dessin d'observation en dix minutes",
    text:"Les élèves dessinent le même objet en dix minutes, puis affichent les dessins anonymement et commentent ce que chacun a choisi de montrer.",
    fact:"Comparer des regards différents sur un même objet illustre ce que travaille l'OSP Arts et design : le regard personnel plus que la technique seule.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"arts_design_1re_2", tier:"moyen", emoji:"🖼️", label:"Découverte : lire une affiche comme un designer",
    text:"À partir d'une affiche, les élèves identifient le message, le public visé et trois choix graphiques (couleur, typographie, composition) qui les servent.",
    fact:"La communication visuelle fait partie des disciplines de l'OSP ; l'analyser tôt permet de mesurer l'intérêt réel pour ce champ.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"arts_design_1re_3", tier:"long", emoji:"🎯", label:"Découverte : préparer son projet d'admission",
    text:"Les élèves listent ce que demande le concours d'admission en maturité spécialisée arts et design et esquissent un plan de préparation sur deux ans.",
    fact:"La brochure précise que l'accès à la maturité spécialisée arts et design passe par un concours d'admission ; s'y préparer commence dès l'orientation.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getArtsDesign1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_ARTS_DESIGN_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_ARTS_DESIGN_ECG_1_OBJECTS = MUSEE_ARTS_DESIGN_ECG_1_OBJECTS;
window.getArtsDesign1EcgObjectsForParcours = getArtsDesign1EcgObjectsForParcours;
