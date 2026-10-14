// SALLE SÉQUENCES — FRANÇAIS — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS = [
  { id:"francais_4_1", tier:"court", emoji:"🧵", label:"Étape 1 — Trouve ton fil rouge personnel sur quatre ans",
    text:"Reprends trois œuvres marquantes de tes quatre années au Collège. Trouve un thème qui les relie toutes (le pouvoir, l'identité, la perte) et note un exemple précis pour chaque œuvre.",
    fact:"Ce travail de synthèse est exactement ce qu'attend le programme en fin de cursus : ne pas juxtaposer des connaissances isolées.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"francais_4_2", tier:"court", emoji:"📐", label:"Étape 2 — Identifie les faiblesses d'une dissertation type",
    text:"Lis une copie fictive de dissertation fournie par ton enseignant. Repère deux faiblesses précises (manque d'exemples, plan bancal) et propose une correction pour chacune.",
    fact:"S'entraîner sur la copie d'un autre, sans l'affect d'avoir soi-même écrit le texte, permet un regard plus objectif.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"francais_4_3", tier:"court", emoji:"🗂️", label:"Étape 3 — Prépare ta bibliographie de travail de maturité",
    text:"Si tu prépares un travail de maturité en français, note dès maintenant trois sources fiables sur ton sujet, avec leur référence complète, dans le bon format.",
    fact:"Une bibliographie tenue à jour dès le début évite la course contre la montre au moment de rendre le travail final.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"francais_4_4", tier:"moyen", emoji:"🎤", label:"Étape 4 — Passe un oral blanc de maturité complet",
    text:"Tire un extrait du programme, prépare-toi vingt minutes, puis présente-le dix minutes devant un jury de deux camarades avec la grille officielle simplifiée. Demande un retour précis après coup.",
    fact:"Répéter cette épreuve en conditions réelles réduit l'écart entre l'entraînement habituel et la pression du jour de l'examen.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"francais_4_5", tier:"moyen", emoji:"⏱️", label:"Étape 5 — Rédige une dissertation complète chronométrée",
    text:"Rédige une dissertation complète dans le temps imparti de l'examen, sans documents. Échange ta copie avec un camarade pour une première relecture croisée selon deux critères précis.",
    fact:"Cette double correction — pair puis enseignant — t'habitue à recevoir une critique construite avant le jour où aucune relecture ne sera plus possible.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"francais_4_6", tier:"long", emoji:"🗣️", label:"Étape 6 — Anime un débat en reformulant systématiquement",
    text:"Dans un débat de classe sur un sujet du programme, prends l'habitude de toujours reformuler l'argument précédent avant de répondre. Note à la fin si cette règle a changé la qualité du débat.",
    fact:"Cette règle simple, appliquée sur quatre ans, transforme un débat en vraie discussion plutôt qu'en juxtaposition d'opinions.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"francais_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Fais le bilan de ton parcours de lecteur",
    text:"Rédige un court bilan personnel : quelle œuvre t'a le plus marqué en quatre ans, et pourquoi, avec un exemple précis d'un passage qui t'a marqué. Partage-le à l'oral si tu es volontaire.",
    fact:"Ce bilan personnel clôture ton parcours de lecteur au Collège avant de continuer, ailleurs, à lire pour toi-même.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqFrancais4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS=MUSEE_SEQ_FRANCAIS_4_COLLEGE_OBJECTS;
window.getSeqFrancais4CollegeObjectsForParcours=getSeqFrancais4CollegeObjectsForParcours;
