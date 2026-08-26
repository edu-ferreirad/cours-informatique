/* Service worker — MATRIX_1602
   v3 — stratégie corrigée : les fichiers de CODE (html/css/js) sont
   récupérés en priorité sur le réseau (network-first), avec repli sur
   le cache uniquement si hors-ligne. Cela évite le problème du
   "?test=1 ne s'active jamais" : avec l'ancienne version en
   cache-first, une mise à jour de script.js pouvait rester invisible
   indéfiniment, le navigateur continuant à servir l'ancienne version
   mise en cache lors de la toute première visite.

   Les IMAGES (assets/*) restent en cache-first : elles ne changent
   pas d'une partie à l'autre, autant économiser de la donnée.

   ⚠ Après avoir mis à jour ce fichier ou script.js sur votre dépôt,
   les téléphones ayant déjà visité le site une fois peuvent mettre
   jusqu'à quelques secondes à voir la nouvelle version (le temps que
   ce fichier soit re-téléchargé et que l'ancien cache soit purgé).
   En cas de doute pendant vos tests : dans les réglages du
   navigateur, effacez les données du site, ou ouvrez la page en
   navigation privée.
*/

const CACHE_NAME = "matrix1602-v3";
const CODE_FILES = ["./", "./index.html", "./style.css", "./script.js", "./classe.html"];
const IMAGE_FILES = [
  "./assets/carte-geneve.jpg",
  "./assets/blason-geneve.jpg",
  "./assets/ref-maison-tavel.jpg",
  "./assets/ref-corraterie.jpg",
  "./assets/ref-arsenal.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        [...CODE_FILES, ...IMAGE_FILES].map((url) => cache.add(url).catch(() => null))
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

function isCodeFile(pathname) {
  return pathname.endsWith("/") || pathname.endsWith(".html") || pathname.endsWith(".css") || pathname.endsWith(".js");
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== "GET") return;

  if (isCodeFile(url.pathname)) {
    // Network-first : toujours essayer la version la plus récente en ligne.
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first pour les images : elles ne changent pas en cours de partie.
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          return response;
        }).catch(() => cached);
      })
    );
  }
});
