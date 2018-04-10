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
                    '/src/js/index.js',
                    '/src/css/style.css',
                    '/src/images/chinese1.jpg',
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
                    '/src/images/filipino13.jpg',
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
                    'https://fonts.googleapis.com/css?family=Open+Sans',
                    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
                ]);
            })
    );
});

//
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
