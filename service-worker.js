self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('chess-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './pieces/greenshirt.1.png',
        './pieces/redshirt.1.png',
        // Add all other image files you use here...
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
