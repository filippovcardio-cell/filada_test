// self.addEventListener('install', event => {
//     console.log('Service Worker installing...');
//   });
  
//   self.addEventListener('activate', event => {
//     console.log('Service Worker activating...');
//   });

//   self.addEventListener('install', event => {
//     event.waitUntil(
//       caches.open('my-cache').then(cache => {
//         return cache.addAll([
//           '/',
//           '/index.html',
//           '/static/js/bundle.js',
//           '/static/css/main.css',
//         ]);
//       })
//     );
//   });
  
//   self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.match(event.request).then(response => {
//         return response || fetch(event.request);
//       })
//     );
//   });

self.addEventListener('install', event => {
  // console.log('Service Worker установлен');
});

self.addEventListener('activate', event => {
  // console.log('Service Worker активирован');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});

  