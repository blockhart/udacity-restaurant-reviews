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

var staticCacheName = 'restaurant-files-v1'

/**
 * Listen for install and then add the files to cache
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});


/**
 * Delete the old cache(s)
 */
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-files-') &&
						cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);	
});


/**
 * Set up fetch function for handling responses for cache'd items
 */
 self.addEventListener('fetch', function(event) {
 	event.respondWith(
 		caches.match(event.request).then(function(response) {
 			if (response) {
 				console.log('Found ' + event.request + ' in cache');
 				return response;
 			} else {
 				console.log('Could not find ' + event.request + ' in cache, so will fetch over network'); 				
 				return fetch(event.request)
 				.then(function(response) {
 					caches.open('staticCacheName').then(function(cache){
 	 					cache.put(event.request, response);					
 					})
					return response;
 				})
 				.catch(function(error) {
 					console.log(error);
 				})
 			}	
 		})
 	);
 });