// PI27 service worker — bump VERSION bij elke update zodat telefoons de nieuwe versie ophalen
const VERSION = 'pi27-v4';
const ASSETS = ['./index.html','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html')) {
    // netwerk eerst: updates komen direct binnen, offline valt terug op cache
    e.respondWith(fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r;
    }).catch(() => caches.match('./index.html')));
  } else if (ASSETS.some(a => url.pathname.endsWith(a.slice(1)))) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
