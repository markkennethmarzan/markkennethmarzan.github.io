(function () {
    'use strict';

    var cacheName = 'static-cache';

    var urlsToCache = [
        '/',
        '/american.html',
        '/chinese.html',
        '/filipino.html',
        'index.html',
        '/italian.html',
        '/korean.html',
        '/src/css/style.css',
        '/src/images/1.jpg',
        '/src/images/123.png',
        '/src/images/american1.jpg',
        '/src/images/american2.jpg',
        '/src/images/american3.jpg',
        '/src/images/american4.JPG',
        '/src/images/american5.jpg',
        '/src/images/american6.jpg',
        '/src/images/chinese1.jpg',
        '/src/images/chinese2.JPG',
        '/src/images/chinese3.jpg',
        '/src/images/filipino1.JPG',
        '/src/images/filipino2.jpg',
        '/src/images/filipino3.JPG',
        '/src/images/filipino4.jpg',
        '/src/images/filipino5.jpg',
        '/src/images/filipino6.png',
        '/src/images/filipino7.jpg',
        '/src/images/filipino8.jpg',
        '/src/images/filipino9.JPG',
        '/src/images/filipino10.JPG',
        '/src/images/filipino11.JPG',
        '/src/images/filipino12.JPG',
        '/src/images/italian1.jpg',
        '/src/images/italian2.jpg',
        '/src/images/italian3.jpg',
        '/src/images/italian4.JPG',
        '/src/images/italian5.jpg',
        '/src/images/italian6.jpg',
        '/src/images/korean1.jpg',
        '/src/images/korean2.jpg',
        '/src/images/korean3.jpg',
        '/src/images/korean4.JPG',
        '/src/images/korean5.jpg',
        '/src/images/korean6.jpg',
        '/src/images/korean7.jpg',
        '/src/images/korean8.jpg',
        '/src/images/location.png',
        '/src/images/resto logo.png',
        '/src/images/restologo.png',
        '/src/images/schedule.png',
        '/src/images/website.png',
        '/src/js/index.js',
        '/src/images/maps/55.PNG',
        '/src/images/maps/amare-la-cucina.PNG',
        '/src/images/maps/army.PNG',

    ];

    self.addEventListener('install', function (event) {
        event.waitUntil(
            caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
        );
    });

    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                    return response || fetchAndCache(event.request);
                })
        );
    });

    function fetchAndCache(url) {
        return fetch(url)
            .then(function(response) {
                //To check if a valid response is received
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return caches.open(cacheName)
                    .then(function(cache) {
                        cache.put(url, response.clone());
                        return response;
                    });
            })
            .catch(function(error) {
                console.log('Request failed:', error);
            });
    }

})();