const CACHE = "requisicoes-v1";

const urls = [
  "./",
  "./index.html",
  "./cadastro.html",
  "./recebidas.html"
];

self.addEventListener("install", e => {

  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(urls);
    })
  );

});

self.addEventListener("fetch", e => {

  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request);
    })
  );

});
