const CACHE_NAME = 'hadifirm-admin-v1';
const urlsToCache = [
    '/admin',
    '/admin/consultation-requests',
    '/css/filament/filament/app.css',
    '/js/filament/filament/app.js',
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.log('Cache addAll failed:', error);
            })
    );
    self.skipWaiting();
});

// Fetch event - Network first, fallback to cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Clone the response
                const responseClone = response.clone();
                
                // Open cache and store the response
                caches.open(CACHE_NAME)
                    .then((cache) => {
                        // Only cache GET requests
                        if (event.request.method === 'GET') {
                            cache.put(event.request, responseClone);
                        }
                    });
                
                return response;
            })
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request);
            })
    );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Push notification event
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'طلب استشارة جديد',
        icon: '/images/icons/icon-192x192.png',
        badge: '/images/icons/icon-72x72.png',
        vibrate: [100, 50, 100],
        dir: 'rtl',
        lang: 'ar',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'view', title: 'عرض', icon: '/images/icons/icon-72x72.png' },
            { action: 'close', title: 'إغلاق', icon: '/images/icons/icon-72x72.png' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('مكتب المحامي هادي الحصين', options)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/admin/consultation-requests')
        );
    }
});
