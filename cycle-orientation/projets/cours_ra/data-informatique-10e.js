// ============================================================================
// SALLE INFORMATIQUE 10e — "Clavier et bureautique"
// Contenu reformulé à partir de la brochure officielle Informatique 10e
// (Genève) : dispositions de clavier, signes diacritiques, mise en forme
// de texte, tabulations, styles, insertion d'objets. Aucun énoncé n'est
// copié tel quel.
// ============================================================================

const DESK_H = 0.6;
const WALL_H = 1.4;
const SHELF_H = 1.1;

const MUSEE_INFORMATIQUE_10E_OBJECTS = [
  {
    id: "dispositions_clavier",
    tier: "court",
    emoji: "⌨️",
    label: "Un clavier n'est pas universel",
    text: "La disposition des touches d'un clavier change selon la langue et le pays : un clavier français (AZERTY) place les lettres différemment d'un clavier anglais (QWERTY), et certaines langues comme le russe ou le japonais nécessitent des dispositions de clavier entièrement différentes, parfois même plusieurs alphabets sur un même clavier.",
    fact: "Un clavier russe intègre plusieurs dispositions à la fois (cyrillique et latine) pour permettre à son utilisateur de basculer facilement d'une langue à l'autre sans changer de matériel.",
    anchor: { distance: 2.0, angle: 20, height: SHELF_H }
  },
  {
    id: "touches_mortes_diacritiques",
    tier: "court",
    emoji: "´",
    label: "Les touches mortes et les accents",
    text: "Pour écrire un caractère accentué (é, à, ç) ou un signe diacritique, certains claviers utilisent des \"touches mortes\" : une première touche ne produit rien à l'écran toute seule, mais modifie la lettre suivante qu'on tape — un mécanisme discret mais indispensable pour écrire correctement en français.",
    fact: "Sans ces touches mortes ou ces raccourcis clavier, il serait impossible d'écrire directement à l'écran la plupart des lettres accentuées du français avec un clavier standard, sans passer par un menu de caractères spéciaux.",
    anchor: { distance: 3.4, angle: 95, height: DESK_H }
  },
  {
    id: "casse_texte",
    tier: "court",
    emoji: "🔠",
    label: "Respecter la casse d'un texte",
    text: "La \"casse\" désigne l'usage des majuscules et des minuscules dans un texte : respecter précisément la casse d'un mot (Genève, et non genève ou GENÈVE) n'est pas qu'une question d'esthétique — dans certains contextes informatiques, un mot de passe ou une adresse web peuvent être sensibles à la casse et refuser une saisie mal capitalisée.",
    fact: "De nombreux systèmes informatiques distinguent strictement les majuscules des minuscules (on parle de sensibilité à la casse) : pour un ordinateur, \"Genève\" et \"genève\" ne sont pas du tout le même mot.",
    anchor: { distance: 1.4, angle: 160, height: DESK_H }
  },
  {
    id: "autocorrection_limites",
    tier: "court",
    emoji: "✏️",
    label: "L'autocorrection, utile mais imparfaite",
    text: "Les logiciels de traitement de texte proposent une autocorrection automatique de l'orthographe, capable de repérer et parfois de corriger seule de nombreuses fautes courantes — un outil précieux, mais qui ne remplace jamais une vraie relecture attentive, car il passe à côté de certaines erreurs et peut en introduire de nouvelles.",
    fact: "Un correcteur automatique peut \"corriger\" un mot juste mais rare en un mot plus courant mais faux, simplement parce qu'il ne connaît pas ce mot rare — une erreur de correction parfois plus difficile à repérer que la faute d'origine.",
    anchor: { distance: 4.6, angle: 250, height: WALL_H }
  },
  {
    id: "mise_en_forme_police",
    tier: "moyen",
    emoji: "🔤",
    label: "Choisir sa police et sa mise en forme",
    text: "Gras, italique, taille, police de caractères : ces attributs de mise en forme du texte ne sont pas de simples décorations — bien utilisés, ils hiérarchisent visuellement l'information et aident le lecteur à distinguer immédiatement un titre, un mot important ou une citation dans un document.",
    fact: "Utiliser trop de mises en forme différentes dans un même document (plusieurs polices, plusieurs couleurs, du gras partout) produit souvent l'effet inverse de celui recherché : au lieu de hiérarchiser l'information, cela la rend plus difficile à lire.",
    anchor: { distance: 2.6, angle: 300, height: SHELF_H }
  },
  {
    id: "taquets_tabulation",
    tier: "moyen",
    emoji: "↹",
    label: "Les taquets de tabulation",
    text: "Plutôt que d'aligner du texte avec de multiples espaces (une méthode peu fiable), les taquets de tabulation permettent de définir des positions précises où le texte doit s'arrêter et s'aligner — un outil particulièrement utile pour construire un tableau simple ou une liste bien alignée directement dans un traitement de texte.",
    fact: "Aligner un texte avec des espaces répétés fonctionne à l'écran, mais casse souvent complètement à l'impression ou sur un autre ordinateur, car toutes les polices n'occupent pas exactement la même largeur — les taquets de tabulation évitent ce piège.",
    anchor: { distance: 5.2, angle: 40, height: DESK_H }
  },
  {
    id: "styles_documents",
    tier: "moyen",
    emoji: "🎨",
    label: "Les styles, pour une cohérence automatique",
    text: "Plutôt que de mettre en forme chaque titre manuellement un par un, un style prédéfini (\"Titre 1\", \"Titre 2\"...) permet d'appliquer automatiquement une mise en forme cohérente à tout un document — et de la modifier partout en une seule fois si on change d'avis, plutôt que de tout reprendre manuellement.",
    fact: "Utiliser des styles de titre cohérents permet aussi à un traitement de texte de générer automatiquement une table des matières complète, sans avoir à la construire à la main ligne par ligne.",
    anchor: { distance: 1.8, angle: 210, height: DESK_H }
  },
  {
    id: "mise_en_evidence_bordures",
    tier: "moyen",
    emoji: "🖍️",
    label: "Surligner, encadrer, mettre en évidence",
    text: "Au-delà du gras et de l'italique, un traitement de texte propose de nombreux outils de mise en évidence : surlignage, bordures de page, encadrés colorés — autant de moyens visuels d'attirer l'attention du lecteur sur une information précise sans avoir besoin de la reformuler.",
    fact: "Une bordure de page ou un encadré trop chargé visuellement peut, comme un excès de couleurs, distraire le lecteur au lieu de l'aider — la mise en évidence fonctionne d'autant mieux qu'elle reste rare et ciblée dans un document.",
    anchor: { distance: 3.9, angle: 130, height: DESK_H }
  },
  {
    id: "insertion_objets_texte",
    tier: "long",
    emoji: "🖼️",
    label: "Insérer des objets dans un texte",
    text: "Un document de traitement de texte peut intégrer bien plus que du texte simple : images, effets de texte spéciaux, pieds de page automatiques — autant d'éléments qui, correctement positionnés, transforment une simple page de texte en un document visuellement structuré et professionnel.",
    fact: "Un pied de page bien conçu (avec le nom de l'auteur, la date ou le numéro de page) se met à jour automatiquement sur toutes les pages d'un document à la fois, sans qu'il soit nécessaire de le retaper à chaque page.",
    anchor: { distance: 6.0, angle: 70, height: SHELF_H }
  },
  {
    id: "copier_coller_sources",
    tier: "long",
    emoji: "📋",
    label: "Copier-coller un contenu trouvé en ligne",
    text: "Copier un texte trouvé sur un site comme Wikipédia dans son propre document pose une question essentielle de citation des sources : reprendre un contenu sans en indiquer la provenance, même pour un exercice scolaire, peut être considéré comme un plagiat — une pratique bien différente du fait de résumer une information dans ses propres mots.",
    fact: "La plupart des enseignants et des logiciels de détection de plagiat peuvent repérer un copier-coller non signalé en comparant simplement la mise en forme ou le style d'écriture d'un passage avec le reste d'un document rédigé par l'élève.",
    anchor: { distance: 2.3, angle: 340, height: WALL_H }
  },
  {
    id: "export_formats_fichiers",
    tier: "long",
    emoji: "📤",
    label: "Exporter dans le bon format",
    text: "Un même document peut être enregistré dans différents formats de fichier selon son usage : le format natif du logiciel pour continuer à le modifier, ou un format comme le PDF pour le partager tel quel, avec une mise en page garantie identique quel que soit l'appareil ou le logiciel utilisé pour l'ouvrir.",
    fact: "Contrairement à un fichier de traitement de texte modifiable, un PDF fige délibérément la mise en page : c'est précisément pour cette raison qu'il est devenu le format standard pour partager un document destiné à être lu, mais pas modifié, par son destinataire.",
    anchor: { distance: 4.4, angle: 185, height: DESK_H }
  },
  {
    id: "clavier_langues_asiatiques",
    tier: "long",
    emoji: "🈁",
    label: "Écrire en japonais sur un clavier",
    text: "Une langue comme le japonais, qui utilise des milliers de caractères, ne peut évidemment pas avoir une touche par caractère : on tape généralement une transcription phonétique en lettres latines, que le logiciel convertit ensuite automatiquement en caractères japonais correspondants, parmi lesquels l'utilisateur choisit le bon.",
    fact: "Cette méthode de saisie par conversion phonétique permet d'écrire des milliers de caractères japonais, chinois ou coréens avec un clavier occidental standard, sans avoir besoin d'un clavier physique spécifique à des milliers de touches.",
    anchor: { distance: 5.7, angle: 15, height: SHELF_H }
  },
];

const TIER_ORDER = { court: 1, moyen: 2, long: 3 };

function getInformatique10eObjectsForParcours(parcours) {
  const maxLevel = TIER_ORDER[parcours] || 1;
  return MUSEE_INFORMATIQUE_10E_OBJECTS.filter(o => TIER_ORDER[o.tier] <= maxLevel);
}

window.MUSEE_INFORMATIQUE_10E_OBJECTS = MUSEE_INFORMATIQUE_10E_OBJECTS;
window.getInformatique10eObjectsForParcours = getInformatique10eObjectsForParcours;
