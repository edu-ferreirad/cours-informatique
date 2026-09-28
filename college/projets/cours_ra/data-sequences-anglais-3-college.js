// SALLE SÉQUENCES — ANGLAIS — 3e année
// Régénéré à partir du contenu déjà rédigé, réorganisé en paliers court/moyen/long.
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;

const MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS = [
  { id:"an3_explication_texte_litteraire", tier:"court", emoji:"📚", label:"Explication de texte littéraire guidée",
    text:"Face à un court extrait d'une œuvre littéraire anglophone étudiée, les élèves doivent, en autonomie puis en groupe, repérer trois procédés stylistiques précis et expliquer leur effet sur le lecteur, avant de présenter leur analyse à l'oral.",
    fact:"Le plan d'études mentionne explicitement expliquer un texte littéraire comme situation d'expression orale attendue en discipline fondamentale ; travailler d'abord seul puis en groupe permet à chacun de construire une première lecture personnelle avant la mise en commun.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"an3_interview_reportage_fictif", tier:"moyen", emoji:"🎙️", label:"Oral : formuler une interview sur un sujet culturel",
    text:"Par binômes, les élèves préparent puis jouent une interview fictive entre un journaliste et une personnalité liée à un sujet culturel ou socio-économique d'un pays anglophone, en s'appuyant sur des faits vérifiés dans une brève recherche préalable.",
    fact:"Le plan d'études cite précisément formuler une interview parmi les situations orales attendues dès la 3e année ; adosser l'exercice à une recherche documentaire réelle évite que l'interview ne reste un jeu de rôle sans contenu.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"an3_commentaire_texte_actualite", tier:"long", emoji:"🗞️", label:"Écriture : commenter un texte d'actualité anglophone",
    text:"À partir d'un article de presse anglophone récent, les élèves rédigent un commentaire structuré exprimant et justifiant un point de vue personnel, avec une exigence explicite de nuancer leur position par au moins un contre-argument.",
    fact:"Exiger un contre-argument dans un texte qui exprime pourtant une opinion personnelle pousse les élèves vers la nuance attendue en discipline fondamentale, plutôt que vers une prise de position à sens unique plus facile à rédiger.",
    anchor:{distance:2.3, angle:340, height:WALL_H} },
];
function getSeqAnglais3CollegeObjectsForParcours(parcours) {
  const TIER_ORDER = { court: 1, moyen: 2, long: 3 };
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}
window.MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS = MUSEE_SEQ_ANGLAIS_3_COLLEGE_OBJECTS;
window.getSeqAnglais3CollegeObjectsForParcours = getSeqAnglais3CollegeObjectsForParcours;
