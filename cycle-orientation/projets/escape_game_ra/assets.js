// ============================================================================
// GAME ASSETS — chemins vers le dossier images/ (à côté de ce fichier)
//
// Pour changer une image : remplace simplement le fichier correspondant
// dans images/ par ta propre photo, même nom de fichier. Pas besoin de
// toucher ce fichier ni de me redemander un encodage.
// ============================================================================

const GAME_ASSETS = {
  img_echelle: "images/echelle.jpg",
  img_echelle_moderne: "images/echelle_moderne.png",
  img_ascenseur: "images/ascenseur.png",
  img_escaliers: "images/escaliers.jpg",
  img_map1602: "images/carte1602.jpg",

  ecusson_vaud: "images/ecusson_vaud.png",
  ecusson_berne: "images/ecusson_berne.png",
  ecusson_valais: "images/ecusson_valais.png",
  ecusson_geneve: "images/ecusson_geneve.png",

  rebus_true: "images/rebus_true.png",
  rebus_fake: "images/rebus_fake.png",

  img_cloche: "images/cloche.png",
  img_alarme_incendie: "images/alarme_incendie.jpg",
  img_alarme: "images/alarme.png",
  img_mere_royaume_rebus: "images/mere_royaume_rebus.png",

  bulletin_clement_cle: "images/bulletin_clement_cle.jpg",
  bulletin_leurre_1: "images/bulletin_leurre_1.jpg",
  bulletin_leurre_2: "images/bulletin_leurre_2.jpg",
  bulletin_leurre_3: "images/bulletin_leurre_3.jpg",
};

if (typeof window !== "undefined") window.GAME_ASSETS = GAME_ASSETS;
