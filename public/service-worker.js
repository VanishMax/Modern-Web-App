var CACHE = 'cache'

self.addEventListener('install', function(evt) {
  evt.waitUntil(precache())
})

self.addEventListener('fetch', function(evt) {
  evt.respondWith(fromCache(evt.request))
  evt.waitUntil(update(evt.request))
})

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      './',
      '/assets/MWA.png',
      '/assets/global.css',
      '/assets/logos/favicon.ico',
      '/assets/logos/yellow 192.png',
      '/assets/logos/yellow 512.png',
      '/robots.txt'
    ])
  })
}

function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || null
    })
  })
}

function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response)
    })
  })
}
