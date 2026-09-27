// SALLE SÉQUENCES — PHILOSOPHIE — particularité : DF seulement 3e-4e années
// (2h/2h), pas de philosophie en 1ère ni en 2e année.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_PHILOSOPHIE_COLLEGE_OBJECTS = [
  { id:"ph1_info_pas_de_cours", degree:"1", emoji:"ℹ️", label:"Pas de philosophie en 1ère année",
    text:"La philosophie n'apparaît pas dans la grille horaire de 1ère année du Collège de Genève : elle démarre seulement en 3e année, à raison de 2h hebdomadaires, et continue en 4e année.",
    fact:"Certaines disciplines de sciences humaines (histoire) sont enseignées sur 4 ans, d'autres (géographie) sur 3, et la philosophie seulement sur 2 — une organisation propre à chaque discipline, pas un oubli.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"ph2_info_pas_de_cours", degree:"2", emoji:"ℹ️", label:"Pas encore de philosophie en 2e année",
    text:"Comme en 1ère année, aucune heure de philosophie n'est prévue en 2e année : le cours démarre l'année suivante, en 3e année, avec un accès direct aux grands textes philosophiques.",
    fact:"Ce délai laisse aux élèves le temps de consolider d'autres disciplines de sciences humaines (histoire, géographie) avant d'aborder l'exercice, plus abstrait, de la réflexion philosophique.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"ph3_dialogue_texte_source", degree:"3", emoji:"📖", label:"Dialoguer directement avec un texte source",
    text:"Face à un court extrait d'un philosophe étudié, les élèves formulent d'abord leurs propres questions sur le texte avant même toute explication de l'enseignant, qui construit ensuite le cours à partir de ces questions réelles.",
    fact:"Le plan d'études insiste sur le recours prioritaire aux grands textes de la philosophie, dans un dialogue permanent avec les penseurs du passé — partir des questions des élèves rend ce dialogue authentique plutôt qu'imposé.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"ph3_discussion_libre_encadree", degree:"3", emoji:"💬", label:"Discussion libre mais encadrée par la rigueur",
    text:"Sur une question philosophique simple (qu'est-ce que la liberté ?), les élèves débattent librement, mais chaque affirmation doit être immédiatement suivie d'une justification argumentée, sinon elle est écartée du débat par l'enseignant.",
    fact:"Le plan d'études exige une discussion soumise à examen critique et sans restriction, mais fondée sur la validité des raisonnements — la rigueur de la justification prime sur la liberté d'opinion seule.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"ph4_etude_auteur_ouvrage", degree:"4", emoji:"📚", label:"Suivre la continuité d'une pensée sur un ouvrage",
    text:"Les élèves lisent en autonomie plusieurs extraits successifs d'un même ouvrage philosophique et doivent reconstituer, sans aide, la progression de l'argumentation de l'auteur d'un extrait à l'autre.",
    fact:"Le plan d'études précise que l'étude par auteur, en lisant un ouvrage entier ou en partie, ouvre à la continuité d'une pensée et au détail de sa démarche.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"ph4_lien_interdisciplinaire_philo", degree:"4", emoji:"🔗", label:"Un problème philosophique, plusieurs disciplines",
    text:"Sur un sujet contemporain (technologie et vie privée, bioéthique), les élèves croisent un texte philosophique avec un document d'une autre discipline (droit, biologie) pour construire une réflexion multidisciplinaire.",
    fact:"Le plan d'études cite explicitement que de nombreux sujets philosophiques peuvent être traités en relation avec d'autres disciplines, notamment dans le cadre de l'option complémentaire.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqPhilosophieCollegeObjectsForDegree(degree){ return MUSEE_SEQ_PHILOSOPHIE_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_PHILOSOPHIE_COLLEGE_OBJECTS = MUSEE_SEQ_PHILOSOPHIE_COLLEGE_OBJECTS;
window.getSeqPhilosophieCollegeObjectsForDegree = getSeqPhilosophieCollegeObjectsForDegree;
