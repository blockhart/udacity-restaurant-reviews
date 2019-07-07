console.log('Service Worker: Registered');

const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/css/responsive.css',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/dbhelper.js',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];


/**
 * Listen for install and then add the files to cache
 */
self.addEventListener('install', function(event) {
  console.log('before event.waitUntil');
  event.waitUntil(
    caches.open('restaurant-files-v1').then(function(cache) {
      console.log('before cache.addAll');
      return cache.addAll(cacheFiles);
    })
  );
});
