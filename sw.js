importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/bootstrap.min.css',
       '/css/styles.css',
       '/css/font.css',
       '/js/jquery-1.10.2.min.js',
       '/js/scripts.min.js',
       '/js/scripts.js',
       '/js/bootstrap.min.js',
       '/libs/font-awesome/css/font-awesome.min.css',
       '/images/brillio-logo.png',
       '/images/ford.jpg',
       '/images/lead-bg.jpg',
       '/images/logo_128.png',
       '/images/logo_144.png',
       '/images/logo_152.png',
       '/images/logo_192.png',
       '/images/move.jpg',
       '/images/verizon.jpg',
       '/images/dexa.png',
       '/images/data.png',
       '/images/di.png',
       '/images/atg.png',
       '/images/down.png',
       '/images/fb.png',
       '/images/gh.png',
       '/images/li.png',
       '/images/menu_close.png',
       '/images/menu.png',
       '/images/tw.png',
       '/images/up.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});