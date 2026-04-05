const assets = [
    "../index.html",
    "../assets/js/script.js",
    "../pages/about.html",
    "../pages/resources.html"
];

// Installation: Cache the static assets
self.addEventListener("install", function(installEvent) {
    installEvent.waitUntil(
        caches.open("my-test-pwa").then(function(cache) {
            return cache.addAll(assets);
        })
    );
});

// Fetching: Serve from cache if available, otherwise hit the network
self.addEventListener("fetch", function(fetchEvent) {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(function(res) {
            return res || fetch(fetchEvent.request);
        })
    );
});