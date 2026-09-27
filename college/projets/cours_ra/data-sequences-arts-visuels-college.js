// SALLE SÉQUENCES — ARTS VISUELS — DF (arts plastiques + histoire de l'art)
// années 1-2, puis OS années 2-4. Les séquences 3e-4e sont marquées "OS uniquement".
const DESK_H = 0.6, WALL_H = 1.4, SHELF_H = 1.1;
const MUSEE_SEQ_ARTS_VISUELS_COLLEGE_OBJECTS = [
  { id:"av1_observation_objet", degree:"1", emoji:"🍎", label:"Dessiner ce qu'on voit vraiment",
    text:"Face à un objet simple posé devant eux, les élèves dessinent d'abord sans lever le crayon ni regarder leur feuille (dessin aveugle), puis comparent ce croquis à un second dessin classique du même objet.",
    fact:"Aiguiser la perception visuelle par un apprentissage de l'observation est un objectif explicite de la discipline fondamentale ; le dessin aveugle force à regarder l'objet plutôt que ses habitudes de dessin.",
    anchor:{distance:2.0, angle:20, height:SHELF_H} },
  { id:"av1_portrait_image_pouvoir", degree:"1", emoji:"🖼️", label:"Lire un portrait officiel",
    text:"Face à un portrait historique de pouvoir, les élèves relèvent méthodiquement chaque détail (posture, objets, décor) avant de formuler l'intention probable de l'artiste, en petit groupe puis en classe entière.",
    fact:"Maîtriser le vocabulaire nécessaire à la lecture d'une œuvre d'art est un objectif explicite du cours d'histoire de l'art en discipline fondamentale.",
    anchor:{distance:3.4, angle:95, height:DESK_H} },
  { id:"av2_copie_variation", degree:"2", emoji:"🎨", label:"Copier puis transformer une œuvre",
    text:"Après avoir copié fidèlement un détail d'une œuvre du passé, les élèves doivent la transformer selon une contrainte imposée (changer l'époque, la technique) et expliquer les choix effectués.",
    fact:"La confrontation avec les modèles du passé par la copie, l'analyse et la variation est un objectif explicite de la formation en atelier dès la 2e année.",
    anchor:{distance:2.6, angle:300, height:SHELF_H} },
  { id:"av2_argumentation_gout", degree:"2", emoji:"💬", label:"Justifier un goût esthétique",
    text:"Face à deux œuvres contrastées, chaque élève doit exprimer une préférence personnelle en l'appuyant sur trois critères précis (composition, couleur, intention), sans se contenter de dire « j'aime » ou « je n'aime pas ».",
    fact:"Le plan d'études attend que l'élève analyse ses impressions et mette des mots sur ses émotions pour formuler un jugement personnel communicable à autrui — pas seulement une préférence brute.",
    anchor:{distance:5.2, angle:40, height:DESK_H} },
  { id:"av3_projet_personnel_os", degree:"3", emoji:"🖌️", label:"OS uniquement — Élaborer un projet personnel",
    text:"Les élèves de l'option spécifique définissent seuls un petit projet plastique personnel (thème, technique, format), le développent sur plusieurs semaines, avec un point d'étape encadré à mi-parcours.",
    fact:"Le plan d'études cite l'élaboration et le développement d'une expression personnalisée comme objectif central de l'option spécifique, distinct du simple apprentissage technique de la discipline fondamentale.",
    anchor:{distance:4.6, angle:250, height:WALL_H} },
  { id:"av3_confrontation_contemporain_os", degree:"3", emoji:"🖼️", label:"OS uniquement — Confronter modèle ancien et art contemporain",
    text:"Les élèves de l'option comparent une œuvre classique à une œuvre contemporaine traitant du même sujet, et doivent identifier ce que l'art contemporain remet en question par rapport au modèle ancien.",
    fact:"La discussion du modèle moderne et contemporain visant à développer le sens critique est un objectif explicite de l'option spécifique en 3e-4e année.",
    anchor:{distance:3.9, angle:130, height:DESK_H} },
  { id:"av4_synthese_projet_os", degree:"4", emoji:"🏛️", label:"OS uniquement — Synthèse d'un projet cohérent",
    text:"Les élèves de l'option finalisent un projet personnel démarré en 3e année et doivent présenter, à l'oral, la cohérence de leur démarche entre l'intention de départ et le résultat final obtenu.",
    fact:"La synthèse des modèles passés et présents en vue d'une démarche et d'un projet personnels fortement affirmés est l'objectif final de l'option spécifique.",
    anchor:{distance:6.0, angle:70, height:SHELF_H} },
  { id:"av4_recherche_terrain_os", degree:"4", emoji:"🏛️", label:"OS uniquement — Travail de terrain en musée",
    text:"Les élèves de l'option mènent une visite active dans un lieu d'exposition, avec une grille d'observation précise à remplir sur place, restituée ensuite sous forme d'un court compte rendu critique.",
    fact:"Le plan d'études encourage explicitement le travail sur le terrain, sous forme de visites et de recherches personnelles dans les musées et galeries, dans la mesure du possible.",
    anchor:{distance:5.7, angle:15, height:SHELF_H} },
];
function getSeqArtsVisuelsCollegeObjectsForDegree(degree){ return MUSEE_SEQ_ARTS_VISUELS_COLLEGE_OBJECTS.filter(o=>o.degree===degree); }
window.MUSEE_SEQ_ARTS_VISUELS_COLLEGE_OBJECTS = MUSEE_SEQ_ARTS_VISUELS_COLLEGE_OBJECTS;
window.getSeqArtsVisuelsCollegeObjectsForDegree = getSeqArtsVisuelsCollegeObjectsForDegree;
