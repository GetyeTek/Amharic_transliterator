const CACHE_NAME = 'amharic-transliterator-v2';
const OFFLINE_URL = '/offline.html';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  OFFLINE_URL,
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// ===== INSTALL =====
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache core files (fail silently if any don't exist)
        return Promise.all(
          ASSETS_TO_CACHE.map(url => {
            return cache.add(url).catch(err => {
              console.log(`Failed to cache ${url}:`, err);
            });
          })
        );
      })
  );
  // Force the waiting service worker to become active
  self.skipWaiting();
});

// ===== ACTIVATE =====
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
  // Take control of all clients immediately
  event.waitUntil(clients.claim());
});

// ===== FETCH =====
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension URLs
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Handle API/data requests differently
  if (event.request.url.includes('/api/')) {
    return fetch(event.request)
      .catch(() => new Response('{ "error": "Offline" }', {
        headers: { 'Content-Type': 'application/json' }
      }));
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached file if found
        if (cachedResponse) {
          return cachedResponse;
        }

        // For HTML requests, try network first with offline fallback
        if (event.request.headers.get('accept').includes('text/html')) {
          return fetch(event.request)
            .then((networkResponse) => {
              // Cache successful responses
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseClone));
              return networkResponse;
            })
            .catch(() => {
              // If offline and HTML request, return offline page
              return caches.match(OFFLINE_URL);
            });
        }

        // For other files (CSS/JS/images), try cache first then network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache successful responses
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            return networkResponse;
          })
          .catch(() => {
            // Return placeholder for images if needed
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

// ===== BACKGROUND SYNC =====
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-notes') {
    console.log('Background sync triggered');
  }
});
