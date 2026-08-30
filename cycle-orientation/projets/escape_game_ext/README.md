# MATRIX_1602 — Escalade outdoor (Vieille Ville de Genève)

*Idée et création : David Ferreira — relectures et corrections : Claude IA*

Parcours extérieur façon Foxtrail, reconstruit à partir de **votre
dossier complet 2024-2025** (feuille du juge + les 8 dossiers
« Élève » + Organisation) : mêmes 8 énigmes officielles, mêmes
transitions narrées entre chaque secteur, même dénouement
(l'enseignant démasqué), mêmes identifiants de fin de mission.

## ⚠️ À reprendre avant mise en production

Le jeu a beaucoup grossi au fil des demandes (badges, carnet,
bonus, porte-documents, deux puzzles...). Une relecture d'ensemble
reste utile avant de le donner aux élèves, pour vérifier que
l'équilibre global (durée, difficulté, longueur des textes) convient
à votre classe. Rien n'est bloquant, mais mieux vaut jouer une partie
complète vous-même avant le jour J.

## 🔒 Mot de passe de chantier

Le site est verrouillé par un mot de passe tant qu'il est en
construction. Mot de passe par défaut : **`drize2025`**, modifiable
en haut de `script.js` (`CONSTRUCTION_PASSWORD`).

**⚠️ Ce n'est pas une vraie sécurité** : le mot de passe est visible
en clair dans le code source. Il empêche seulement un visiteur qui
tombe sur le lien par hasard d'accéder au jeu. Retirez le bloc
"PORTAIL DE CHANTIER" (`index.html`, `script.js`, `style.css`) une
fois le site prêt à être diffusé aux élèves.

## Ce que fait le site

- **Un seul secteur affiché à la fois**, façon Foxtrail : impossible
  de revenir en arrière, on avance pas à pas comme sur le terrain.
- **Transition narrative avant chaque tâche** : les textes "Bravo,
  vous avez trouvé..." authentiques de votre dossier original
  s'affichent en arrivant sur un secteur, avant la question — pour
  que l'histoire s'enchaîne au lieu de sauter d'une énigme à l'autre.
- **Porte-documents** (bouton 📁 permanent en haut de l'écran) :
  reprend les outils papier du jeu de salle — table de conversion
  chiffres romains ↔ lettres, une roue de César numérique (entrez une
  lettre et un décalage), et un extrait du texte du « Cé qu'è lainô »
  utile pour l'énigme 6. Accessible à tout moment, sans bloquer le
  jeu derrière.
- **Écran d'accueil** avec règles + formulaire d'équipe (nom +
  membres facultatif) avant de démarrer.
- **Sauvegarde à deux niveaux** : autosauvegarde silencieuse dans le
  téléphone, + export/import manuel en `.json` (boutons 💾 / 📂).
- **Mode sobre** (coupe les animations), **mode hors-ligne** (`sw.js`,
  le site reste jouable une fois chargé, même avec un réseau faible —
  les liens Google Maps et le GPS ont toujours besoin d'une vraie
  connexion/du matériel, eux).
- **Deux mini-puzzles** à glisser-déplacer (voir plus bas) : la carte
  de Genève (énigme 1) et le blason de la ville (énigme 9, final).
- **Collier de marmites** façon Foxtrail : une pièce 🏺 gagnée par
  secteur validé, affichée en haut de page — inspiré des pièces de
  robot distribuées à chaque énigme dans les vrais parcours Foxtrail.
- **Nom de code d'équipe** (facultatif, bouton 🎲 pour en générer un
  façon roman d'espionnage), affiché à côté du nom d'équipe.
- **Guide audio** : bouton 🔊 sur chaque transition, lue à voix haute
  par la synthèse vocale du navigateur (aucun fichier audio à héberger).
- **Cartes de personnages à collectionner** (Charles-Emmanuel Ier,
  Mère Royaume, Dame Piaget, Isaac Mercier), débloquées au fil du
  parcours et récapitulées sur l'écran final.
- **Temps de marche estimé** affiché sur chaque transition (calculé à
  partir des vraies coordonnées GPS, rythme de groupe scolaire).
- **Mini-activité facultative** (non notée) à l'énigme 6 : traduire un
  vers du Cé qu'è lainô à sa façon, gardé dans le carnet final.
- **Quiz final** à choix multiples (5 questions, bilan des connaissances,
  ne change pas le score) et **confettis** à l'écran final.
- **Joker**, **sons de validation**, **badges**, **carnet historique**,
  **questions bonus**, **résumé final automatique**, **bouton "Je
  suis perdu"** : voir plus bas pour le détail de chacun.
- **Vue de classe** (`classe.html`) : page séparée pour l'enseignant,
  charge les `.json` exportés par les équipes pour un classement
  comparatif. Rien n'est envoyé sur Internet.

## 🎁 Encore 6 ajouts

- **Diplôme final téléchargeable** — généré en canvas (nom d'équipe,
  code, score, temps, badges, date), à télécharger en PNG.
- **Ambiance sonore discrète** — cloches lointaines en boucle très
  légère pendant le jeu, désactivable dès l'écran d'accueil (case
  cochée par défaut), indépendante du bouton 🔊/🔇 principal.
- **Power-up aléatoire** — environ 1 secteur de terrain sur 3 offre un
  power-up "points bonus doublés" pour la prochaine question bonus
  réussie (notification en bas d'écran).
- **Fiche "pour aller plus loin"** — 3 vraies sources (Musée d'art et
  d'histoire, Ville de Genève, Compagnie de 1602), vérifiées, sur
  l'écran final.
- **Mot du jour en patois** — un mot du Cé qu'è lainô (domaine public)
  affiché à chaque transition, avec sa traduction.
- **Record inter-années** (`classe.html`) — stocké dans le navigateur ;
  si vous rechargez des exports `.json` d'une année précédente sur le
  même appareil, le record absolu se met à jour automatiquement et
  s'affiche au-dessus du classement.

## 🆕 Tout intégré : Monetier + gaming + pédagogie

**Passage de Monetier réintégré, en digression facultative** — vous
aviez raison, c'est un vrai lieu historique de la même époque qui
mérite sa place. Mais honnêteté d'abord : contrairement au Passage de
la Petite-Corraterie, il n'est pas documenté comme lié à un épisode
précis de la nuit de l'Escalade. Il apparaît donc à l'énigme 5 comme
un **à-côté optionnel** (+5 pts, jamais bloquant, pas de vérification
GPS stricte) — présenté clairement comme une curiosité de la même
période, pas comme un second lieu de l'intrigue.

**Mini-jeu de tir de précision** (énigme 7, facultatif, +5 pts) — une
barre oscillante à arrêter dans la zone verte au bon moment, pour le
petit shoot d'adrénaline du canon décisif.

**Easter egg** — tapez "SAVOYARD" à l'énigme d'accusation pour une
réaction amusante (ne compte pas comme réponse).

**Carte mentale finale** — un schéma généré automatiquement reliant
les personnages, lieux et l'année 1602, avec un bouton pour la
télécharger en image (utile pour un travail de synthèse en classe).

**Question de recul historique** (facultative, non notée) — sur le
lien entre l'épisode de 1602 et la Course de l'Escalade actuelle
(45'000 coureurs chaque décembre depuis 1978, confirmé par recherche).

**Vue de classe : générique de fin** — un bouton "🎬 Lancer le
générique" dans `classe.html` révèle le classement un par un, du
dernier au premier, avec un effet dramatique sur le vainqueur —
sympa à projeter en classe le lendemain de la sortie.

## 🎯 Dernière série de demandes

- **Caméra AR harmonisée** — l'énigme 6 (plaque Isaac Mercier) propose
  maintenant la même vue caméra en direct avec badge superposé que
  les autres missions photo (factorisée dans une fonction partagée
  `attachArCamera`, plus de code dupliqué).
- **Tolérance GPS remontée à 20 m** (contre 3 m) — le retour terrain
  confirmait que 3 m était trop strict pour la précision réelle d'un
  smartphone en Vieille Ville. Toujours réglable en une ligne
  (`GEO_TOLERANCE_M`) si vous constatez encore des faux blocages.
- **Phrase du coupable simplifiée** — "LE COUPABLE EST PARMI NOUS"
  (5 mots, 5 premiers secteurs) au lieu de traîner deux mots
  supplémentaires ("DANS LA...") qui ne formaient plus une phrase
  complète.
- **Lieu final révélé progressivement, en chiffres** — comme pour le
  coupable, chaque secteur ajoute maintenant un fragment codé en
  chiffres (1=A, 2=B, 3=C…) au dossier ("Lieu final codé"). À
  l'énigme 9, un portail de décodage bloque le lien GPS et le puzzle
  du blason tant que l'équipe n'a pas tapé le lieu décodé
  ("BOURG DE FOUR") — table numérique disponible dans le
  porte-documents.
- **Écran d'accueil renforcé** — indique maintenant explicitement
  "Le jeu commence à : [lieu]" en toutes lettres, et rappelle
  d'activer le GPS et les données mobiles avant de commencer.
- **Quiz final chronométré et à points** — 60 secondes pour les 5
  questions, +5 points par bonne réponse (au lieu d'un simple bilan
  sans enjeu), pour un vrai sprint final avec un peu d'adrénaline.

## 🔍 Relecture complète (enchaînement, cohérence, fun/pédago)

Après une nouvelle fouille du dossier 2024-2025 (notamment
`Enigme 3.docx`, `Ah la belle escalade.pdf` — une seconde chanson de
l'Escalade, plus courte et complémentaire du Cé qu'è lainô), quatre
incohérences trouvées et corrigées :

- **Table numérique manquante** — l'énigme 1 promettait un
  "fragment codé (table numérique)" mais le porte-documents ne
  contenait que la table romaine. Ajoutée.
- **Indice fantôme à l'énigme 9** — l'indice final parlait encore de
  taper le mot "marmite", alors que cette étape est devenue un
  puzzle visuel (blason). Remplacé par un indice cohérent avec un
  puzzle.
- **Contradiction quiz / fiche historique** — le quiz final donnait
  "elle faisait la soupe" comme réponse correcte pour Mère Royaume,
  contredisant directement la nuance historique ajoutée plus tôt
  (les historiens en doutent). Corrigé : la question porte
  maintenant sur l'objet (la marmite), pas sur l'activité contestée.
- **Même contradiction sur la carte de personnage** Mère Royaume —
  corrigée dans le même sens, en gardant la nuance plutôt qu'en
  tranchant.
- **Chanson "La Belle Escalade" intégrée** au fait historique de
  l'énigme 4 : elle confirme la version populaire ("prit sa marmite
  sur le feu"), en contraste avec le doute des historiens — les deux
  versions cohabitent maintenant honnêtement dans le texte.

**Limitation connue, assumée** : l'énigme 6 (photo de la plaque
Isaac Mercier) utilise l'appareil photo classique, pas l'effet
caméra en direct avec badge superposé — ce bloc "texte + photo"
réutilise un chemin de code plus simple que les missions photo
classiques. Pas un bug, un choix pour ne pas dupliquer la logique
caméra ; à revoir si vous y tenez.

## 🛠️ Nouveautés suite à vos retours (round 2)

**Comparaison visuelle indicative, en plus du GPS** — chaque mission
photo affiche maintenant une estimation de ressemblance avec la
photo de référence (`🎨 Ressemblance visuelle : ≈X%`), calculée en
comparant les couleurs moyennes des deux images. C'est volontairement
grossier (pas de reconnaissance d'objet réelle — juste une moyenne de
couleurs sur une grille 8×8) et **jamais bloquant** : une vraie
reconnaissance fiable demanderait un service externe payant, ce qui
casserait le côté autonome/gratuit du site. Le signal reste utile
pour repérer une photo clairement hors sujet.

**Énigme 6 (Isaac Mercier) : texte + photo** — la Ville de Genève
confirme qu'une vraie plaque commémore l'exploit d'Isaac Mercier à
l'emplacement de l'ancienne Porte-Neuve (Place Neuve, où l'énigme
était déjà placée). L'énigme demande maintenant la strophe (texte)
**et** une photo de cette plaque, les deux devant être validés pour
débloquer la suite.

**Énigme 5 (Piaget) relocalisée** — direction le **Passage de
Petite-Corraterie**, confirmé depuis par la base officielle des noms
géographiques du canton de Genève (ge.ch) et une seconde source
historique concordante : c'est bien là que Dame Piaget (Jeanne Baud)
a jeté la clé aux Genevois. Beaucoup plus solide que la première
piste (Passage de Monetier), et ça résout définitivement la
confusion avec la photo de Mère Royaume.

**Énigme 4 (Mère Royaume)** : confirmé au 7, rue de la Corraterie —
photo de référence inchangée, adresse précisée.

**Correction historique** : les historiens doutent que Mère Royaume
ait vraiment fait chauffer une soupe en pleine nuit — plus probable
qu'elle ait attrapé un simple pot en étain fabriqué par son mari,
graveur de monnaie (d'où le nom de la porte de la Monnaie toute
proche). Je n'ai trouvé aucune source parlant de lessive/linge —
si vous avez une référence précise, je la vérifie volontiers et
corrige en conséquence.

## 🩹 Trois derniers correctifs (retour terrain)

**Mode test : uniquement `?test=1`** — le bouton "Activer le mode
test" a été retiré. Trop visible, il aurait pu être cliqué par erreur
un jour de sortie réelle. Seul `?test=1` dans l'URL reste disponible.

**Le mini-jeu du canon (et tous les bonus/digressions) disparaissaient
avant qu'on ait pu y toucher** — cause profonde trouvée : dès qu'une
réponse était validée, le jeu programmait automatiquement le passage
au secteur suivant 900 ms plus tard, ce qui effaçait tout contenu
optionnel (mini-jeu, question bonus, digression) avant que l'équipe
ait le temps de l'utiliser. Corrigé en profondeur : le passage au
secteur suivant se fait maintenant **toujours sur un clic manuel**
("▶ Continuer vers le secteur suivant"), jamais automatiquement. Ça
laisse le temps de jouer au mini-jeu, répondre au bonus, ou explorer
la digression avant de continuer.

**Des missions photo pouvaient être validées sans le bon mot-clé** —
confirmé et corrigé : les énigmes 2 (échelle), 4 (Mère Royaume), 5
(clé de Piaget) et 7 (canonnade) n'exigeaient en réalité qu'une
photo, sans jamais vérifier le mot attendu (parfois même sans le
demander du tout). Les quatre fonctionnent maintenant comme
l'énigme 6 : texte **et** photo exigés, dans n'importe quel ordre,
avant de débloquer le secteur suivant.

Les trois correctifs vérifiés par le test automatisé complet (voir
section suivante) : 3 exécutions, zéro erreur, y compris un test
spécifique confirmant que le mini-jeu du canon reste bien présent et
cliquable après validation.

## 🔬 Vérification en profondeur (exécution simulée du jeu)

Suite au bug de l'énigme 2, plutôt que de relire le code une nouvelle
fois, j'ai écrit un test automatisé qui **exécute réellement le jeu**
dans un navigateur simulé (jsdom) : remplit le mot de passe, le
formulaire d'équipe, répond correctement à chaque énigme (texte,
photo, puzzle résolu par un vrai solveur), jusqu'à l'écran final —
en capturant toute erreur JavaScript qui se produirait en vrai.

**Deux vrais bugs trouvés et corrigés :**

1. **Vérification `"speechSynthesis" in window` trop fragile** — sur
   certains navigateurs/contextes, cette vérification peut être vraie
   alors que l'objet lui-même est inutilisable, provoquant un plantage
   au clic sur "Continuer". Remplacé par une vérification de la valeur
   elle-même (`window.speechSynthesis`), plus robuste. Même correction
   appliquée aux vérifications GPS et mode hors-ligne, par cohérence.

2. **Bug bloquant sur l'énigme 9 (la toute dernière !)** — après avoir
   décodé le lieu de ralliement, le jeu plantait systématiquement en
   essayant de réafficher le lien GPS, qui avait été supprimé du DOM
   au lieu d'être simplement masqué. Résultat : impossible de terminer
   la mission après avoir tout fait correctement. Corrigé (masquage
   au lieu de suppression, référence DOM stabilisée).

Trois exécutions complètes du test, zéro erreur à chaque fois,
écran final (diplôme, carte mentale, quiz) inclus. `classe.html`
testé séparément (chargement de sauvegardes, générique, record) :
zéro erreur.

### Relancer ces tests vous-même

```bash
cd test
npm install        # une seule fois
npm run test:game    # simule une partie complète
npm run test:classe  # simule le chargement de sauvegardes dans classe.html
```

Utile après toute modification future du code, avant de le déployer
aux élèves — ça aurait attrapé les deux bugs ci-dessus avant qu'ils
n'arrivent sur le terrain.

## 🛠️ Corrections suite à vos tests

**Le mode test ne s'activait pas** — cause trouvée : le service
worker (mode hors-ligne) servait une version mise en cache de
`script.js`, donc les mises à jour restaient invisibles indéfiniment
une fois le site visité une première fois. Corrigé : les fichiers de
code (`html`/`css`/`js`) sont maintenant récupérés en priorité sur le
réseau (`network-first`), le cache ne servant qu'en secours si
vraiment hors-ligne. Les images restent en cache-first (elles ne
changent pas en cours de partie).

**Si votre téléphone/navigateur a déjà visité le site avant cette
mise à jour**, il peut avoir gardé l'ancien service worker en
mémoire : effacez les données du site dans les réglages du
navigateur, ou testez en navigation privée, pour repartir sur une
base saine.

**Les photos de référence de Mère Royaume et Piaget étaient
similaires** — normal en fait : les deux héroïnes sont représentées
sur le même bâtiment (deux têtes sculptées à la base de la Tour de
l'Escalade, Corraterie), et même les historiens ne s'accordent pas
sur laquelle est laquelle. Plutôt que d'inventer un second monument,
l'énigme 5 demande maintenant de photographier **une vraie clé**
(la vôtre, celle d'un cadenas, peu importe) — cohérent avec la
charade déjà posée, et plus aucune ambiguïté entre les deux photos.

**Point de départ visible dès l'accueil** — avant même de remplir le
formulaire d'équipe, l'écran d'accueil affiche maintenant où se
rendre physiquement pour commencer (Promenade de la Treille), avec
un lien Google Maps direct.

## Note sur les badges (pas de réalité augmentée)

Les badges et cartes de personnages sont des éléments d'interface
classiques (icônes + texte), pas de la réalité augmentée. Une vraie
RA (superposer des éléments via la caméra, reconnaissance de lieu)
serait un chantier technique à part entière — assez fragile en usage
extérieur mobile — non exploré ici. À envisager séparément si l'envie
vous en dit.

## Fond décoratif (design)

Sur grand écran, les marges gauche/droite étaient noires et vides —
un blason de Genève (recadré depuis la même carte ancienne),
désaturé et teinté en vert "matrix" via un simple filtre CSS, occupe
maintenant l'arrière-plan derrière le contenu. Discret sur mobile
(où le contenu remplit déjà toute la largeur), plus présent sur
desktop/tablette.

## Effet "AR-like" sur les missions photo

Sur chaque mission photo, un bouton **« 📷 Vue en direct (effet
spécial) »** ouvre la caméra du téléphone (API `getUserMedia`,
aucune bibliothèque externe) avec un badge thématique superposé en
incrustation (🪜 échelle, 🍲 marmite, 🗝️ clé, 💥 canon selon le
secteur). Le bouton **Capturer** fige l'image avec le badge
directement intégré dans la photo. Ce n'est pas de la vraie réalité
augmentée (pas de reconnaissance de lieu ni de suivi 3D) — juste un
effet visuel amusant, en incrustation fixe. Le bouton classique
« Prendre / choisir une photo » reste toujours disponible en
secours, pour les appareils qui refusent l'accès caméra en direct.

## Mode test — jouer sans être sur place

Pour tester le mécanisme et vérifier vos réponses sans vous déplacer,
ouvrez le site avec `?test=1` à la fin de l'adresse, par exemple :

```
https://<votre-compte>.github.io/<nom-du-repo>/?test=1
index.html?test=1                (en local)
```

En mode test, la vérification de position GPS est désactivée sur les
missions photo (n'importe quelle photo, même un selfie, valide le
secteur) — tout le reste fonctionne normalement : textes, puzzles,
porte-documents, quiz, dossier, badges, sons. Une bannière **🧪 MODE
TEST** reste affichée en permanence pour ne jamais l'oublier allumé
par erreur. **Ne partagez jamais un lien contenant `?test=1` aux
équipes le jour de la sortie.**

⚠️ La caméra en direct et la géolocalisation demandent un contexte
sécurisé (HTTPS, ou `localhost`) pour fonctionner dans le navigateur.
Ouvrir `index.html` directement depuis vos fichiers (`file://`) ne
suffira pas pour tester ces deux éléments précis — utilisez soit
GitHub Pages (même une version brouillon, protégée par le mot de
passe de chantier), soit un petit serveur local, par exemple :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000/?test=1
```

## Pourquoi les QR codes ont été retirés

Une version précédente proposait des QR codes physiques à imprimer et
coller sur place pour déverrouiller chaque secteur. Trop de
préparation terrain pour un site censé être clé en main : retiré.
Le site n'exige plus aucune organisation matérielle en dehors de son
hébergement — à l'exception, bien sûr, des photos de référence à
prendre vous-même (voir plus bas), qui restent nécessaires pour les
missions photo quel que soit le mécanisme choisi.

*(Un QR code générique pointant simplement vers l'URL du site, pour
le distribuer aux téléphones des élèves le jour J, reste une bonne
idée pratique — n'importe quel générateur en ligne suffit, ça n'a
rien à voir avec le mécanisme de déverrouillage retiré.)*

## Les deux mini-puzzles : pourquoi à ces deux endroits

- **Énigme 1 (départ)** : reconstituer la carte ancienne de Genève,
  recadrée depuis la vraie carte de votre dossier (`carte def.pdf`,
  dossier Élève 7) — reprend fidèlement l'esprit du puzzle physique
  original ("carte découpée en morceaux").
- **Énigme 9 (final)** : reconstituer le blason de Genève (l'aigle et
  la clé), recadré depuis le cartouche de la même carte ancienne —
  proposé comme clôture symbolique : la carte se reconstitue au
  départ, le blason de la ville se reconstitue à l'arrivée, juste
  avant de partager la marmite. Si vous préférez un autre emplacement
  (par exemple l'énigme 6, pour varier le rythme au milieu du
  parcours), le code est factorisé dans une seule fonction
  (`renderSlidingPuzzle`) : il suffit de changer le `type` d'un
  secteur en `"puzzle"` et de lui donner un champ `image` + `gridSize`.

## Énigme 7 : nouveau lieu réel (Ancien Arsenal)

L'ancienne version demandait la réponse texte "CANONNADE" à la rue de
la Tertasse (lieu jamais vérifié avec certitude). Remplacé par une
mission photo à l'**Ancien Arsenal, Rue de l'Hôtel-de-Ville 1** — lieu
réel et vérifié, où sont exposés sous les arcades **cinq canons
d'époque**, identiques à ceux qui défendaient les remparts. Cohérent
avec l'histoire : le canon décisif serait parti du boulevard de
l'Oye après avoir été acheminé depuis cet arsenal.

## Énigme 3 (cloche) et la Cathédrale

Le dossier original prévoyait plusieurs tables de conversion (dont
des leurres) disposées dans la salle physique. En extérieur, ces
tables vivent maintenant dans le **porte-documents** (📁). L'énigme
dirige aussi explicitly le regard vers les tours de la cathédrale,
d'où sont encore tirés aujourd'hui les coups de mousquet
commémoratifs chaque année pour l'Escalade — pour que la visite du
lieu ait un sens concret, pas seulement un GPS à cocher.

## Énigme 5 : la charade en question principale

« Je rentre toujours en premier, je sors toujours en dernier » est
maintenant la question posée directement (elle n'est plus cachée
derrière le bouton indice).

## Design

Direction visuelle : château médiéval + interface numérique. Cadres
"pierre" avec motif de créneaux, titres en Cinzel (police à empattement
évoquant la gravure), palette ambre/torche pour les éléments
"physiques" (porte-documents, blasons), vert terminal conservé pour
les données de jeu, et le "1602" du logo rendu dans une police
digitale avec lueur cyan pour marquer le contraste avec le thème
médiéval. Les polices (Cinzel + Share Tech Mono) viennent de Google
Fonts — une connexion est nécessaire au premier chargement pour les
récupérer, comme pour n'importe quel site utilisant des polices web.

## ⚠️ Important — vérifiez les lieux avant la sortie

| Secteur | Énigme | Lieu | Coordonnées | Fiabilité GPS |
|---|---|---|---|---|
| 1 | Genève (puzzle carte) | Promenade de la Treille | 46.2020, 6.1480 | Lieu réel, coordonnées **non géocodées** — estimation |
| 2 | Échelle | Maison Tavel | 46.20148, 6.14703 | ✅ **Géocodées** (source : fiche adresse officielle) |
| 3 | Cloche | Cathédrale Saint-Pierre | 46.20111, 6.14861 | ✅ **Géocodées** (Wikipédia/Wikidata) — corrigées, l'ancienne valeur était décalée d'≈370 m |
| 4 | Mère Royaume | 7, Rue de la Corraterie | 46.20333, 6.14333 | ✅ **Géocodées** (fiche immeuble officielle, PSS-Archi) — corrigées, l'ancienne valeur était décalée d'≈330 m |
| 5 | Clé (Piaget, charade) | Passage de la Petite-Corraterie | 46.20096, 6.14690 | ✅ **Géocodées** (base officielle ge.ch, code voie 17973) |
| 6 | Strophe 14 + plaque Isaac Mercier | Place Neuve | 46.2009, 6.14341 | ✅ **Géocodées** (Wikipédia, Théâtre de Neuve) |
| 7 | Canonnade | Ancien Arsenal | 46.2013, 6.1478 | Lieu réel, coordonnées **non géocodées** — estimation |
| 8 | Accusation | — | — | Pas de GPS |
| 9 | Blason (puzzle) + ralliement | Bourg-de-Four | 46.20024, 6.14922 | ✅ **Géocodées** (Wikipédia) |

**Fait le 26/08 : passage en revue complet des coordonnées GPS**, une
par une, avec recherche de sources géolocalisées fiables (adresses
officielles, Wikipédia/Wikidata, fiches d'immeubles). Résultat : 3
erreurs réelles corrigées (Cathédrale ≈370 m, Corraterie ≈330 m,
Maison Tavel ≈150 m). Les secteurs marqués ✅ viennent d'une source
géolocalisée précise ; Treille et Arsenal restent des estimations
raisonnables mais non géocodées — **à vérifier sur place avant la
sortie**, comme les autres.

**Avant de faire jouer vos élèves : parcourez vous-même l'itinéraire**
et corrigez au besoin les coordonnées `gps.lat` / `gps.lng` dans
`script.js`. Testez aussi le blocage GPS à 20 m sur chaque secteur :
la précision réelle d'un smartphone en Vieille Ville tourne plutôt
autour de 5-20 m — ce réglage peut encore bloquer une équipe pourtant
bien placée dans les rues les plus étroites. Élargissez
`GEO_TOLERANCE_M` si besoin.

## Côté organisation : ce qu'il reste vraiment à faire

Le site est autonome pour les élèves — rien à faire pendant le jeu.
Avant la sortie :

1. Marcher une fois le parcours et prendre les 5 photos de référence
   (`assets/ref-maison-tavel.jpg`, `assets/ref-corraterie.jpg`,
   `assets/ref-petite-corraterie.jpg`, `assets/ref-porte-neuve.jpg`,
   `assets/ref-arsenal.jpg`).
2. Vérifier/ajuster les coordonnées GPS (tableau ci-dessus).
3. Remplir `CULPRIT_ANSWERS` (nom réel de la personne à démasquer)
   dans `script.js` ; `LOCATION_STEP` pointe déjà vers le
   Bourg-de-Four.
4. Après la sortie, comparer les fichiers `.json` exportés par les
   équipes via `classe.html` si vous voulez un classement.

## Personnalisation

Tout se modifie dans `script.js` :
- Tableau `STEPS` : chaque énigme accepte `type: "text"`, `"photo"`
  ou `"puzzle"`/`"puzzle2"` (les deux types puzzle utilisent la même
  fonction de rendu), plus `gps`, `transition`, `question`, `brief`,
  `hint`, `fragment` (mot du dossier), `funFact`, `bonus`.
- `FINAL` : identifiants 2024-2025 (`escaladepointdrize@gmail.com` /
  `drize081121`).
- `POINTS_PER_STEP` / `HINT_PENALTY` / `BONUS_POINTS` /
  `GEO_TOLERANCE_M` en haut du fichier.
- `ROMAN_TABLE` / `CE_QUE_LAINO_EXCERPT` : contenu du porte-documents.

## Héberger sur GitHub Pages

Dans ce dossier :

```bash
git init
git add .
git commit -m "Escalade outdoor — v3"
git branch -M main
git remote add origin https://github.com/<votre-compte>/<nom-du-repo>.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Source : Deploy from a branch →
Branch: main / (root)**. Le site sera disponible à :

```
https://<votre-compte>.github.io/<nom-du-repo>/
```

## Test avant la sortie

- Ouvrez le site en 4G (pas seulement en Wi-Fi de classe).
- Testez la prise de photo et l'autorisation caméra.
- Testez le blocage GPS sur chaque secteur en vous y rendant
  physiquement.
- Testez l'export/import de sauvegarde sur un autre téléphone.
- Jouez une partie complète vous-même, transitions comprises.
