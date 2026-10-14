// SALLE SÉQUENCES — CHIMIE — 2e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS = [
  { id:"chimie_2_1", tier:"court", emoji:"⚗️", label:"Étape 1 — Équilibre des réactions de plus en plus complexes",
    text:"Équilibre trois équations chimiques de difficulté croissante, en vérifiant à chaque fois la conservation des atomes.",
    fact:"Maîtriser les aspects quantitatifs des réactions chimiques est un objectif de fin de discipline fondamentale.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"chimie_2_2", tier:"court", emoji:"🧪", label:"Étape 2 — Identifie une famille de composés",
    text:"Face à plusieurs formules chimiques, classe-les par grande famille (organique, minéral, ionique) en justifiant ton classement.",
    fact:"Reconnaître les grandes familles de composés est un objectif explicite du programme.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"chimie_2_3", tier:"court", emoji:"📝", label:"Étape 3 — Rédige un rapport d'expérience complet",
    text:"Après une manipulation en laboratoire, rédige seul un rapport complet suivant la structure imposée, puis échange-le avec un camarade.",
    fact:"C'est la dernière compétence commune de chimie que tous les élèves emportent, avant l'option.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"chimie_2_4", tier:"moyen", emoji:"🔬", label:"Étape 4 — Conçois un protocole de mesure de pH",
    text:"Conçois un protocole pour mesurer et comparer le pH de plusieurs solutions inconnues, en prévoyant les précautions de sécurité nécessaires.",
    fact:"Anticiper les précautions de sécurité fait partie intégrante d'un protocole expérimental sérieux.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"chimie_2_5", tier:"moyen", emoji:"🎯", label:"Étape 5 — Prépare ton choix d'option",
    text:"Prépare trois questions à poser à des élèves de 3e-4e déjà dans l'option biologie-chimie lors d'une rencontre d'orientation.",
    fact:"La chimie s'arrête en discipline fondamentale après cette année : bien choisir maintenant évite les regrets.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"chimie_2_6", tier:"long", emoji:"🔬", label:"Étape 6 — Mène une expérience complète de A à Z",
    text:"Choisis un phénomène chimique et mène une expérience complète : hypothèse, protocole, résultats, analyse rédigée.",
    fact:"Cette démarche complète est la synthèse de tout ce que tu as appris en discipline fondamentale.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"chimie_2_7", tier:"long", emoji:"🧬", label:"Étape 7 — Fais le bilan de tes deux années de chimie",
    text:"Rédige un court bilan personnel : ce que tu retiens de deux ans de chimie, et si tu choisis l'option biologie-chimie pour la suite, avec une raison précise.",
    fact:"Ce bilan personnel clôt ta discipline fondamentale de chimie, que tu continues ensuite en option ou non.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqChimie2CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS=MUSEE_SEQ_CHIMIE_2_COLLEGE_OBJECTS;
window.getSeqChimie2CollegeObjectsForParcours=getSeqChimie2CollegeObjectsForParcours;
