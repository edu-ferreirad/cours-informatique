// SALLE OSP OSP PÉDAGOGIE — 1re année (découverte) — paliers court/moyen/long
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_PEDAGOGIE_ECG_1_OBJECTS = [
  { id:"pedagogie_1re_1", tier:"court", emoji:"🧒", label:"Découverte : expliquer une notion à un enfant de 8 ans",
    text:"Chaque élève prépare en une minute l'explication d'une notion simple (le cycle de l'eau) pour un enfant de huit ans, puis la présente à un camarade qui joue l'enfant et pose des questions naïves.",
    fact:"Adapter son langage à un jeune public est une compétence centrale de l'OSP Pédagogie ; l'essayer tôt permet de tester son goût pour cette posture.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"pedagogie_1re_2", tier:"moyen", emoji:"👀", label:"Découverte : observer une séance avec une grille",
    text:"Lors d'une courte observation d'une situation d'apprentissage (vidéo ou visite), les élèves relèvent trois moments d'interaction entre l'adulte et les enfants, sans les interpréter.",
    fact:"Distinguer observer et juger est une base du regard professionnel de l'enseignant.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"pedagogie_1re_3", tier:"long", emoji:"🎓", label:"Découverte : deux voies vers l'enseignement",
    text:"Les élèves comparent le parcours vers l'enseignement primaire et celui vers l'éducation de l'enfance à partir de la brochure ECG, notamment les conditions d'admission en maturité spécialisée pédagogie.",
    fact:"La maturité spécialisée pédagogie exige notamment le niveau B1 en allemand et en anglais : le savoir dès la 1re année permet d'anticiper les langues à travailler.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getPedagogie1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_PEDAGOGIE_ECG_1_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_PEDAGOGIE_ECG_1_OBJECTS = MUSEE_PEDAGOGIE_ECG_1_OBJECTS;
window.getPedagogie1EcgObjectsForParcours = getPedagogie1EcgObjectsForParcours;
