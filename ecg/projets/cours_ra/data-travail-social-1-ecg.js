// SALLE OSP TRAVAIL SOCIAL — 1re année (découverte) — le texte s'adresse à l'élève, étape par étape
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_TRAVAIL_SOCIAL_1_ECG_OBJECTS = [
  { id:"travail_social_1_1", tier:"court", emoji:"🤝", label:"Étape 1 — Écoute sans conseiller",
    text:"Avec un camarade, raconte-lui une petite difficulté inventée (par exemple « je n'arrive pas à me faire des amis dans un nouveau club »). Lui n'a le droit que de reformuler ce que tu dis, jamais de donner un conseil. Puis échangez les rôles et discutez ensemble de ce qui était difficile à tenir.",
    fact:"Reformuler sans conseiller est la base de l'écoute active utilisée par les travailleurs sociaux ; c'est plus dur qu'il n'y paraît.",
    anchor:{distance:2.0,angle:20,height:SHELF_H} },
  { id:"travail_social_1_2", tier:"court", emoji:"🏘️", label:"Étape 2 — Cartographie les ressources de ton quartier",
    text:"Sur une carte de ton quartier (papier ou en ligne), repère et note trois lieux qui offrent un soutien à quelqu'un en difficulté : une association, un service social, une maison de quartier. Pour chacun, note en une phrase à qui il s'adresse.",
    fact:"Connaître le réseau social concret autour de soi, c'est exactement ce que fait un professionnel du social avant d'orienter une personne.",
    anchor:{distance:3.4,angle:95,height:DESK_H} },
  { id:"travail_social_1_3", tier:"court", emoji:"🗣️", label:"Étape 3 — Distingue un jugement d'une observation",
    text:"Voici cinq phrases sur une même situation (par exemple « il est en retard »). Classe chacune en « observation » (un fait) ou « jugement » (une interprétation), puis réécris les jugements en observations neutres.",
    fact:"Un professionnel du social note des faits, pas des jugements ; cette distinction évite bien des malentendus.",
    anchor:{distance:2.6,angle:300,height:SHELF_H} },
  { id:"travail_social_1_4", tier:"moyen", emoji:"🎭", label:"Étape 4 — Joue une médiation de conflit",
    text:"Par trois, joue une petite dispute (deux élèves se disputent un objet) et le troisième joue le médiateur qui doit faire reformuler chaque camp avant de proposer une solution. Notez ce qui a aidé à calmer la situation.",
    fact:"La médiation est une compétence centrale du travail social ; reformuler avant de trancher évite d'envenimer un conflit.",
    anchor:{distance:5.2,angle:40,height:DESK_H} },
  { id:"travail_social_1_5", tier:"moyen", emoji:"📋", label:"Étape 5 — Prépare un entretien d'accueil",
    text:"Imagine que tu accueilles une nouvelle personne dans un centre pour jeunes. Prépare cinq questions pour la connaître sans être indiscret, en évitant les questions qui commencent par « pourquoi » (souvent perçues comme un reproche).",
    fact:"La façon de poser une question change complètement la réponse qu'on obtient ; les professionnels du social y font très attention.",
    anchor:{distance:1.8,angle:210,height:DESK_H} },
  { id:"travail_social_1_6", tier:"long", emoji:"🗂️", label:"Étape 6 — Compare deux métiers du social",
    text:"À partir de la brochure ECG et d'une recherche courte, compare le métier d'éducateur social et celui d'assistant social : un point commun, deux différences (public visé, cadre de travail), et lequel t'attire le plus, avec une raison précise.",
    fact:"Ces deux métiers partagent des valeurs mais diffèrent par le public et le cadre : les distinguer précise vraiment ton orientation.",
    anchor:{distance:4.6,angle:250,height:WALL_H} },
  { id:"travail_social_1_7", tier:"long", emoji:"📣", label:"Étape 7 — Présente ton portrait de métier",
    text:"Présente en une minute à la classe le métier que tu as choisi à l'étape 6, en citant un exemple concret d'une tâche réelle de ce métier, pas seulement une définition générale.",
    fact:"Donner un exemple concret plutôt qu'une définition montre que tu as vraiment compris le métier, pas juste lu une fiche.",
    anchor:{distance:3.9,angle:130,height:DESK_H} },
];
const TIER_ORDER = { court:1, moyen:2, long:3 };
function getTravailSocial1EcgObjectsForParcours(p){ const m=TIER_ORDER[p]||1; return MUSEE_TRAVAIL_SOCIAL_1_ECG_OBJECTS.filter(o=>TIER_ORDER[o.tier]<=m); }
window.MUSEE_TRAVAIL_SOCIAL_1_ECG_OBJECTS = MUSEE_TRAVAIL_SOCIAL_1_ECG_OBJECTS;
window.getTravailSocial1EcgObjectsForParcours = getTravailSocial1EcgObjectsForParcours;
