// SALLE SÉQUENCES — FRANÇAIS — 1ère année — texte adressé à l'élève, étape par étape
const DESK_H=0.6, WALL_H=1.4, SHELF_H=1.1;
const MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS = [
  { id:"francais_1_1", tier:"court", emoji:"🎭", label:"Étape 1 — Dis une phrase banale avec une émotion cachée",
    text:"Avec un camarade, dis la phrase « il fait beau aujourd'hui » en cachant une émotion précise que ton enseignant te donne en secret (colère rentrée, peur, mensonge). Le reste de la classe doit deviner laquelle, sans connaître ta consigne.",
    fact:"C'est exactement ce que le programme de 1ère appelle le sous-texte : l'écart entre ce qu'on dit et ce qu'on veut vraiment dire.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"francais_1_2", tier:"court", emoji:"📓", label:"Étape 2 — Écris ta réaction à chaud, sans réfléchir",
    text:"Après la lecture d'un chapitre, tu as cinq minutes chrono pour écrire dans ton carnet une réaction spontanée : un ressenti, une question, un désaccord. N'essaie pas de dire ce que tu crois que le professeur attend.",
    fact:"Cette page n'est jamais notée sur sa « qualité », seulement sur sa sincérité — c'est ce qui la rend utile.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"francais_1_3", tier:"court", emoji:"✏️", label:"Étape 3 — Corrige une dictée à trois, en justifiant",
    text:"Après une courte dictée, compare ton texte avec deux camarades. Mettez-vous d'accord sur une version commune, mais chaque correction doit être justifiée par une règle précise, jamais par un vote à la majorité.",
    fact:"Justifier chaque correction par une règle, plutôt que par l'intuition du groupe, consolide vraiment les bases du cycle d'orientation.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"francais_1_4", tier:"moyen", emoji:"⚖️", label:"Étape 4 — Défends un avis qui n'est pas le tien",
    text:"Sur un sujet tiré d'une œuvre étudiée, prépare trois arguments et un exemple précis du texte — mais pour la position opposée à ta vraie opinion. Défends-la à l'oral face à un camarade.",
    fact:"Défendre une thèse qu'on ne partage pas force à construire un vrai raisonnement, pas juste à répéter une opinion déjà faite.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"francais_1_5", tier:"moyen", emoji:"📝", label:"Étape 5 — Résume en exactement 80 mots",
    text:"Résume un texte argumentatif d'une page en exactement 80 mots, ni plus ni moins. Compte-les toi-même avant de rendre ton résumé.",
    fact:"Cette contrainte stricte oblige à choisir l'essentiel, plutôt qu'à simplement raccourcir le texte au hasard.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"francais_1_6", tier:"long", emoji:"🎙️", label:"Étape 6 — Prépare et présente un flash-info d'une minute",
    text:"Choisis un fait d'actualité culturelle lié au programme (sortie d'un livre, anniversaire d'un auteur) et présente-le en deux minutes dans un registre oral soutenu. La classe ne note qu'un seul critère : la clarté de ta construction.",
    fact:"Se concentrer sur un seul critère à chaque fois permet de progresser à l'oral sans être submergé par trop de consignes.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"francais_1_7", tier:"long", emoji:"🖼️", label:"Étape 7 — Continue une histoire à partir de quatre images",
    text:"À partir de quatre images muettes que te donne l'enseignant, écris une histoire courte en allemand… non, en français simple et clair. Échange ton texte avec un camarade qui doit redessiner la suite d'images à partir de ton texte seul.",
    fact:"Si ton camarade arrive à redessiner correctement, c'est la preuve que ton texte était vraiment précis.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER={court:1,moyen:2,long:3};
function getSeqFrancais1CollegeObjectsForParcours(p){const m=TIER_ORDER[p]||1;return MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m);}
window.MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS=MUSEE_SEQ_FRANCAIS_1_COLLEGE_OBJECTS;
window.getSeqFrancais1CollegeObjectsForParcours=getSeqFrancais1CollegeObjectsForParcours;
