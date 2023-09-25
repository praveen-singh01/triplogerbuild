'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "17abde5398e7b0e84f0ef82787e0f3f7",
"assets/AssetManifest.json": "1411185a6d5f9bd6f1d5b513daf4bab6",
"assets/assets/images/adminbg.png": "a83eb2376dba4e498291c7507d6c13da",
"assets/assets/images/admingraph.png": "b6901241118490713da2db6e2ca15379",
"assets/assets/images/adminimg.png": "17b38eaa51255e01645ec8eaa0038cb5",
"assets/assets/images/appleicon.png": "47df140ae24b9547d0cae7c7815c4a79",
"assets/assets/images/appstore.png": "bcc446decfae75463dbb2a934cda1e83",
"assets/assets/images/arrival.png": "3963df0864f669a54e8380ebd381597c",
"assets/assets/images/automatic.png": "10665908cc23bab81408579c6f7d0fb7",
"assets/assets/images/bg.jpg": "4868ba2b71ebd0b59fb9fab33fc03632",
"assets/assets/images/boardingpass.png": "0a5799148a1bde27bf77a3036bb8623b",
"assets/assets/images/Business%2520Seats.png": "a374ece6b81dbc51f2fafd251772301b",
"assets/assets/images/calander.png": "9ee541384ce47b5fb8c00e2c2e12d79b",
"assets/assets/images/calendarwithdates.png": "51ee433a812b0212a09d91e3a3043146",
"assets/assets/images/car.png": "0b3ed575582c5fa089d1705146810daa",
"assets/assets/images/caricon.png": "d09001ad38cb8e34cebda9be47f990b2",
"assets/assets/images/carimage.png": "875d2a57e3612debe11f0f124cc83d91",
"assets/assets/images/departure.png": "04da72b3e0cbf2f05411ea8e8a274ca8",
"assets/assets/images/Desktop%2520Footer.png": "0c6b9c387de4d44dc7bc2cd1aeecbc7f",
"assets/assets/images/downIcon.png": "8a1bbe2df30d04c07bf4f4ac33d15c39",
"assets/assets/images/Economy%2520Seats.png": "4ca6165e6909c0364586dd8c92ac2488",
"assets/assets/images/Ellipse%25201%2520(8).png": "f5734b16b495f6d16925d709b8b2d00c",
"assets/assets/images/Ellipse%25202.png": "3c3cb4eb5e9ab83ff5802cd3cf663680",
"assets/assets/images/facebook.png": "938831cb4487756212620d5c34706201",
"assets/assets/images/facebookgrey.png": "b943cff1ed0df21a4733e19813245b20",
"assets/assets/images/flightticket.png": "ba8d231b755ff3d910875bc1ea2bf059",
"assets/assets/images/Frame(1).png": "fcfe4d358fcd0fcb5812c4bc75896198",
"assets/assets/images/Frame.png": "677771d78caee9232ac1cefffe3fedfb",
"assets/assets/images/g10.png": "1cfa05b52d78c6bafa89ffca5ea679af",
"assets/assets/images/g8.png": "9dc27ba1a1b29bf21817926545e4f05a",
"assets/assets/images/google.png": "a6cd2d9c053fe9df2c6750294be9c18c",
"assets/assets/images/googleplay.png": "9720c2d9c901b366fca9cf5e917e899f",
"assets/assets/images/graph2.png": "3e1ff0a1c75ebbd5f2f93ac7d84a7928",
"assets/assets/images/Group.png": "81878afb9e89f95b61619162b32228be",
"assets/assets/images/Groups.png": "a570ce9a275cf1d9b987a536d06515c6",
"assets/assets/images/grow.png": "6e43ebe3d40aa10157d56ab02970a4b5",
"assets/assets/images/HawaiianAirlines.png": "0957f814734aaf80e206bf58adcbdf86",
"assets/assets/images/hotel1.PNG": "69680b15f2857f233595321a2c59aadc",
"assets/assets/images/hotelicon.png": "ce4ffc76c57295e5674121e306094297",
"assets/assets/images/hotels.jpg": "d266850da22a6d797df3ba656d0ca99a",
"assets/assets/images/htm.png": "133edcdd72dc7c59da4ea513fba982e3",
"assets/assets/images/icon.png": "d4a4092d70a385fa38f1d43aed7fadb6",
"assets/assets/images/image%252025image25.png": "74fa01a3299f1fe95273e0d24476eb7d",
"assets/assets/images/image%252056.png": "31c8d3f29f6e7507daad9ba64b83bd0c",
"assets/assets/images/image%252057.png": "6d8b5ff0a3c73789350c7e2329ca9b77",
"assets/assets/images/image.png": "aaeddd60d92ae7a5883b3962a5f9df64",
"assets/assets/images/imagehotel.png": "2f56063ee6df7e806281e0893bc69a4f",
"assets/assets/images/instagram.png": "bf601ac1e4d7243bf34663809b892f3d",
"assets/assets/images/leftwing.png": "c274bfd204af618f26f3b2b18ef1ab9a",
"assets/assets/images/Luggageluggage.png": "deab68f6f52d5e5a9da5838c4da17ded",
"assets/assets/images/map.png": "fad2344bd5b183913c0ae9a010b0a092",
"assets/assets/images/map2.PNG": "c4d2bbc43db5621c28171d9610093738",
"assets/assets/images/Mapmap.png": "efcdba9981485ce246e00e66be16265e",
"assets/assets/images/pathtwitter.png": "8e8a547e556a77398d663b985a29a36f",
"assets/assets/images/payment-success.gif": "c1e4e2b4f9388c04cdf4045b33ae7c82",
"assets/assets/images/plane.png": "9d79b90cc67cfcaac2e3b63b69167e3a",
"assets/assets/images/Price%2520Grid.png": "b7f67ebd73ee2168058034dae1e01213",
"assets/assets/images/Price%2520History.png": "26993edf108d863c9af44742378e8be9",
"assets/assets/images/Rectangle%25205.png": "8848c7fb7a583781e3231edeb882862f",
"assets/assets/images/Rectangle%2520772.png": "68be2294f6972cebe063899cc5a3b3ea",
"assets/assets/images/Rectangle%25209flightoutline.png": "47f14bc680f90f25ccf916cfcdda6545",
"assets/assets/images/rightwing.png": "6151070c35984a0694ca23698751bddc",
"assets/assets/images/room.PNG": "e65f4bd820391a7e46a8f1a9a2eade1f",
"assets/assets/images/snowflake.png": "4a69c51b7df9243b9175e97e693f455d",
"assets/assets/images/sype.png": "8e8a547e556a77398d663b985a29a36f",
"assets/assets/images/takeoff%25201.png": "a951ffc0ee446b1f4b3bed88e0245b2a",
"assets/assets/images/travelSpotSigh.png": "30aaac9a5cf28f9b6b86e030fd7939b6",
"assets/assets/images/Unioninstagram.png": "dfba966b5c6612ad4622df4aa1be7214",
"assets/assets/images/Vector.png": "41daa332ccf4f40eec186d711cf0e616",
"assets/assets/images/Vector25.png": "5ab928696ae6f58fd8e2f578b4b6e371",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "66ed50aa8cf7d0fe27fd5e44c18e4031",
"assets/NOTICES": "0fa18ab9b09d42abadd2878a8ec15e4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "74d568caaf434e99a932a5d01c742543",
"/": "74d568caaf434e99a932a5d01c742543",
"main.dart.js": "364ffb195d458c48cbd461f779404e3b",
"manifest.json": "b153c6a34636983bc2da38733bb0f0a2",
"version.json": "f362db610ea4ae5f69e240a63766d4f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
