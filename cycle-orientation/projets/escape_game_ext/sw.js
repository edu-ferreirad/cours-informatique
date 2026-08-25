/* Service worker — MATRIX_1602
   Cache "cache-first" des fichiers du jeu pour qu'il reste jouable
   même avec une connexion faible ou coupée en Vieille Ville, une fois
   la première visite effectuée en ligne.

   Ne met PAS en cache : les liens Google Maps (nécessitent une vraie
   connexion) et la géolocalisation (nécessite le GPS de l'appareil,
   pas affecté par ce fichier).
*/

const CACHE_NAME = "matrix1602-v2";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./assets/carte-geneve.jpg",
  "./assets/blason-geneve.jpg",
  "./assets/ref-maison-tavel.jpg",
  "./assets/ref-corraterie.jpg",
  "./assets/ref-corraterie-piaget.jpg",
  "./assets/ref-arsenal.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // addAll échoue si UN SEUL fichier manque (ex. photo pas encore
      // ajoutée) : on ajoute donc chaque fichier séparément, en
      // ignorant ceux qui échouent, plutôt que de bloquer tout le cache.
      Promise.all(
        CORE_ASSETS.map((url) => cache.add(url).catch(() => null))
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // On ne touche qu'aux requêtes vers le même site (pas Google Maps, etc.)
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => cached); // hors-ligne et pas en cache : rien à faire
    })
  );
});
