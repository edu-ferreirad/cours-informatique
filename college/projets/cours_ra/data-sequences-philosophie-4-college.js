// SALLE SÉQUENCES — PHILOSOPHIE — 4e année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS = [
  { id:"philosophie_4_1", tier:"court", emoji:"📚", label:"Étape 1 — Poursuis l'étude d'un ouvrage entier",
    text:"Lis plusieurs extraits d'un même ouvrage philosophique et reconstitue la progression de son argumentation, en notant un désaccord possible avec l'auteur.",
    fact:"Trouver un désaccord argumenté avec un philosophe, plutôt que de seulement le résumer, montre une vraie appropriation critique.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"philosophie_4_2", tier:"court", emoji:"🔗", label:"Étape 2 — Croise philosophie et actualité",
    text:"Choisis un enjeu contemporain (technologie, bioéthique) et relie-le à un concept philosophique étudié cette année.",
    fact:"Relier la philosophie à l'actualité montre sa pertinence au-delà des seuls textes anciens.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"philosophie_4_3", tier:"court", emoji:"🎓", label:"Étape 3 — Prépare ton oral blanc de maturité",
    text:"Choisis une question philosophique du programme et prépare une réponse argumentée de cinq minutes, sans notes.",
    fact:"S'entraîner à l'oral sans notes prépare directement à l'épreuve orale de maturité en philosophie.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"philosophie_4_4", tier:"moyen", emoji:"💬", label:"Étape 4 — Anime un débat philosophique structuré",
    text:"Anime un débat de classe sur une question philosophique, en veillant à ce que chaque affirmation soit justifiée par un argument.",
    fact:"Animer soi-même un débat, plutôt que seulement y participer, développe une compétence différente et complémentaire.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"philosophie_4_5", tier:"moyen", emoji:"✍️", label:"Étape 5 — Rédige une dissertation philosophique complète",
    text:"Rédige une dissertation philosophique complète sur un sujet du programme, avec introduction, développement argumenté et conclusion.",
    fact:"S'entraîner à la structure exacte de l'examen final est le meilleur moyen de s'y préparer sereinement.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"philosophie_4_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Prépare ta fiche de révision finale",
    text:"Prépare une fiche de révision reprenant les auteurs et questions philosophiques étudiés sur deux ans, avec un exemple précis pour chacun.",
    fact:"Une fiche construite par toi-même, à partir de tes propres exemples, est plus utile qu'une fiche toute faite.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"philosophie_4_7", tier:"long", emoji:"🎓", label:"Étape 7 — Passe ton oral blanc final",
    text:"Passe un dernier oral blanc de philosophie en conditions réelles, puis compare ta performance à celle de ton premier oral blanc de l'année.",
    fact:"Comparer tes deux performances rend tes progrès concrets et te donne confiance avant l'examen réel.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqPhilosophie4CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS=MUSEE_SEQ_PHILOSOPHIE_4_COLLEGE_OBJECTS;
window.getSeqPhilosophie4CollegeObjectsForParcours=getSeqPhilosophie4CollegeObjectsForParcours;
