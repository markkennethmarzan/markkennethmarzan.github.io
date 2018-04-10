//service worker install
self.addEventListener('install', function (event) {
    console.log('SW Installed');
    //making sure that the service worker doesn't shutdown before caching, with the use of wait until
    event.waitUntil(
        //static cache
        caches.open('static')
            .then(function (cache) {
                //this will cache files
                cache.addAll([
                    '/',
                    '/index.html',
                    '/american.html',
                    '/chinese.html',
                    '/filipino.html',
                    '/italian.html',
                    '/korean.html',
                    '/src/css/style.css',
                    '/src/js/index.js',
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
                    '/src/images/maps/baguio-central-park.PNG',
                    '/src/images/maps/barn.PNG',
                    '/src/images/maps/central.PNG',
                    '/src/images/maps/chicken.PNG',
                    '/src/images/maps/chil.PNG',
                    '/src/images/maps/chocolate.PNG',
                    '/src/images/maps/chow.PNG',
                    '/src/images/maps/date.PNG',
                    '/src/images/maps/dev.PNG',
                    '/src/images/maps/diner.PNG',
                    '/src/images/maps/don.PNG',
                    '/src/images/maps/forest.PNG',
                    '/src/images/maps/frok.PNG',
                    '/src/images/maps/garden.PNG',
                    '/src/images/maps/gerry.PNG',
                    '/src/images/maps/good-taste.PNG',
                    '/src/images/maps/grump-joe.PNG',
                    '/src/images/maps/gulay.PNG',
                    '/src/images/maps/hill.PNG',
                    '/src/images/maps/hodori.PNG',
                    '/src/images/maps/home.PNG',
                    '/src/images/maps/korean-palace.PNG',
                    '/src/images/maps/kuya.PNG',
                    '/src/images/maps/mang-inasal.PNG',
                    '/src/images/maps/mario.PNG',
                    '/src/images/maps/pamana.PNG',
                    '/src/images/maps/park.PNG',
                    '/src/images/maps/pearl-meat-korean-restaurant.PNG',
                    '/src/images/maps/red.PNG',
                    '/src/images/maps/red2.PNG',
                    '/src/images/maps/ruins.PNG',
                    '/src/images/maps/seoul.PNG',
                    '/src/images/maps/shake.PNG',
                    '/src/images/maps/solibao-burnham.PNG',
                    '/src/images/maps/trad.PNG',
                    '/src/images/maps/tros.PNG',
                    '/src/images/maps/wood-nymph.PNG',
                    '/src/images/maps/zark.PNG'


                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('SW Activated');
});

//since the files is cached then you can now fetch
//this is for offline support
self.addEventListener('fetch', function(event) {
    //respond width the fetch or get it from the cache
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    //get the response from the cache
                    return res;
                } else {
                    //if not then make a network request
                    return fetch(event.request)
                }
            })
    );
});