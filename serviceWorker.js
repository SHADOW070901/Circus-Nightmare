const staticCircus = "Circus Nightmare"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/fondo.jpg",
  "img/timmy3.jpg",
  "img/timmy4.jpg",
  "img/suelo.jpg",
  "img/globo2.jpg",
  "img/algodón2.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCircus).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })