const CACHE_NAME = 'amharic-transliterator-v3';
const OFFLINE_URL = '/Amharic_transliterator/offline.html';
const ASSETS_TO_CACHE = [
  '/Amharic_transliterator/',
  '/Amharic_transliterator/index.html',
  '/Amharic_transliterator/styles.css',
  '/Amharic_transliterator/script.js',
  '/Amharic_transliterator/manifest.json',
  OFFLINE_URL,
  '/Amharic_transliterator/icons/icon-192x192.png',
  '/Amharic_transliterator/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          ASSETS_TO_CACHE.map(url => {
            return cache.add(url).catch(err => {
              console.log(`Failed to cache ${url}:`, err);
            });
          })
        );
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/Amharic_transliterator/index.html'))
    );
    return;
  }

  // For other requests
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request)
          .then((response) => {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => {
            if (event.request.headers.get('accept').includes('image')) {
              return new Response(
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#7c3aed"/></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
          });
      })
  );
});
