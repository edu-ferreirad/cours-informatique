# MATRIX_1602 — Escalade outdoor (Vieille Ville de Genève)

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

## Note sur les badges (pas de réalité augmentée)

Les badges et cartes de personnages sont des éléments d'interface
classiques (icônes + texte), pas de la réalité augmentée. Une vraie
RA (superposer des éléments via la caméra, reconnaissance de lieu)
serait un chantier technique à part entière — assez fragile en usage
extérieur mobile — non exploré ici. À envisager séparément si l'envie
vous en dit.

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

| Secteur | Énigme (feuille juge) | Lieu | Fiabilité GPS |
|---|---|---|---|
| 1 | Genève (puzzle carte) | Promenade de la Treille | Lieu réel, coordonnées approximatives |
| 2 | Échelle | Maison Tavel (Rue du Puits-Saint-Pierre 6) | **Lieu réel et confirmé** : échelles originales exposées, entrée libre |
| 3 | Cloche | Cathédrale Saint-Pierre | Lieu réel, coordonnées fiables |
| 4 | Mère Royaume | Rue de la Corraterie (Tour de l'Escalade) | Lieu réel associé par la tradition populaire ; sa maison réelle documentée était plutôt vers l'ancienne porte de la Monnaie |
| 5 | Clé (Piaget, charade) | 7, Rue de la Corraterie (mascaron, près du Grand Théâtre) | **Lieu réel et confirmé** : sa maison jouxtait la tour de la Corraterie |
| 6 | Strophe 14 | Place Neuve (ancienne Porte-Neuve) | Lieu réel et coordonnées vérifiées |
| 7 | Canonnade | Ancien Arsenal (Rue de l'Hôtel-de-Ville 1) | **Lieu réel et confirmé** : cinq canons d'époque sous les arcades |
| 8 | Accusation | — | Pas de GPS |
| 9 | Blason (puzzle) + ralliement | Bourg-de-Four | Lieu réel, place historique avec bancs — idéale pour partager la marmite |

**Avant de faire jouer vos élèves : parcourez vous-même l'itinéraire**
et corrigez au besoin les coordonnées `gps.lat` / `gps.lng` dans
`script.js`. Testez aussi le blocage GPS à 3 m sur chaque secteur : la
précision réelle d'un smartphone en Vieille Ville tourne plutôt autour
de 5-20 m — ce réglage peut bloquer une équipe pourtant bien placée.
Élargissez `GEO_TOLERANCE_M` si besoin.

## Côté organisation : ce qu'il reste vraiment à faire

Le site est autonome pour les élèves — rien à faire pendant le jeu.
Avant la sortie :

1. Marcher une fois le parcours et prendre les 4 photos de référence
   (`assets/ref-maison-tavel.jpg`, `assets/ref-corraterie.jpg`,
   `assets/ref-corraterie-piaget.jpg`, `assets/ref-arsenal.jpg`).
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
