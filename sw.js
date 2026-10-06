// sw.js - Service Worker para PWA DATARED
const CACHE_NAME = 'datared-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Manejo de peticiones
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
