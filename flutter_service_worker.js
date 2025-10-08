'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "86bc33365194535c235cdbd852b1bc50",
".git/config": "ed6b63fd9c9d060697db8bbe6ce78769",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a663022cc0fd0a181549c38f78fb8823",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "703d306fee76571be20ac0632cf02487",
".git/logs/refs/heads/main": "e1617925acb408f3d020587f44944006",
".git/logs/refs/remotes/origin/main": "319e4ff252e9eb9b43410b987bf548ec",
".git/objects/01/b95f7cfe137164d2670253e7cbce0ce5f98e21": "c87eccb3a9ced611f03ddcb88a277787",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/a41bdbb0f8544e51a5037cd65d774888e2b8c4": "9f5596966d21b2ddaae39e669305af39",
".git/objects/15/a5c8f6e41922cec2e809e4e497ba67c845208b": "806b8827754d2c21bf40314a2ed4a031",
".git/objects/1c/1ed6cb4870bb6c3bae2fa1fd4ec15729861193": "64408f49c4a95b8997347853cc405718",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/a47deaa422d7f451d3bdc3607984174b0c364d": "b71c087da251e528e3d1ddde25ee28b4",
".git/objects/29/469fd3eb0abe1fae53f5fd8522fdb92da9113d": "300a31b4a6131ffb73cd14c7f8e5d18f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/e518403b3506a55e63f9f73f00b40e3efeb4b3": "a9097ad03ae36141c5271a3911808613",
".git/objects/2b/f6e33ca40b4f82e07326c75add18ed282daba5": "035e8a2de13a3e4649b0caf4a9127202",
".git/objects/2d/94a0c356daf3d3f4d4a8e6977d272264bcc08b": "0a45a5d5b7569aad6596053a56f660c0",
".git/objects/2f/b87caaf76b3764a75f5d49b80625af427132ca": "65d540eced93dcee9df370777f9ec7d4",
".git/objects/34/e3185c702d8f723e3e448db8ec888023dfb5d1": "0e0024bdab5d590dcb62d5f40032103e",
".git/objects/38/6951cd1c3d322889abfbbc48e74345a4fac2fd": "5d12c45d8f72dbd5767d20f3baf7497d",
".git/objects/3a/8126aacb8c0658b59a466a44f3c54581ba2679": "597bfaebd01733f0c455e8a0aba44884",
".git/objects/3d/d2df9e6e045ed54726d346bbcabd7abdfffbc8": "0dc827a1552d9036c6a03c50cb3e5e56",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/4d97053e418b66e9cd5b925f86abbf863b2e54": "d7f8ec43f96ae0c110522eaf1f090199",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/56/cd237c1d524ade830fe913ca0eef2413ada914": "78f491daf6bcbeb3f4275f965ce2af43",
".git/objects/5a/26c2e5d49d9ea7804db8790993fcfb29066732": "28db572dd9ea0037c29cedaa9c3c07b7",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/4d996e4bfc7590b1d0cbcc64a14ee09b618dee": "7300917ac9000b3e5aed8b4dc604a8ff",
".git/objects/6d/9079a3a40c5a140a1efaa33052a6b63f0bcae6": "3dca7e3d57c86ca79e2e1c11d22ab934",
".git/objects/6e/d71d3d1ab726cf9d7b6c039302754c23bec366": "a2252e054f7cdcb76611fae124ef457a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/81/b57d81c2c52bce988298b73296ab60624752a3": "c6296942b1d91b00f9fb20050c3a8780",
".git/objects/82/7f186732b5270b254a6d080fd9e25ff04bea67": "95fd688c989db55446e935b8174b2d9a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a2e0a013b3619446faaabeede4a488b378cb8d": "bb87182106354fee373170bff60a7a4c",
".git/objects/8a/9b65f1097738c2535d0de4402f764011ec11dd": "a13a2978a72240650c23d6821e8a1ba9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/97/84952003971fa74b3cb09831a6a47e080b9bc6": "cf493863a813942d83780168c474d96e",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/60f58c7aeacb36c453795b5583d1a42a25a9f1": "6701b529f934577e0d1c1cd44612d9c1",
".git/objects/a2/a226142b211b9df728db8593ee7f3f8c344a56": "7f55594999d6e5b53caf727c2db95928",
".git/objects/b5/e527ed2325d543727bf8a38f1c74fd5ae50cd7": "419d769ea6429a65a2770ffe2596801a",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a5a97bc4ec412c243f45c9b5350e6df786c0fb": "05ea04a20a48dc8157065bf5ce6261f3",
".git/objects/bc/e49b9597acf0db23c579c63dc522e397c388e2": "13bd237acc0188ee2f024d5b42ac87b1",
".git/objects/bd/e0021f86a0e32356b22ae47d9c1531634b3931": "5541d03105fb128b510f66c90dcdbbdf",
".git/objects/be/2523683c32c30436b4901cdac5997c0edab56e": "3df5e3549069ac3576210cf7ba302594",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/8788a8a11053c4bc94f62870850acad92e6e5d": "5b28c68893e29cbdc63e4bf9c95bf185",
".git/objects/c5/0fdb6795b571856cc46e68accfda18df4adb0e": "be95ad95ac9817adcb2708428964d4e6",
".git/objects/c6/f9abd6a2c0eddc227377d1fb5c9d0a56cbb470": "ba60db196fe35d765b2aed05fa65f2be",
".git/objects/c7/e2815afcd3596e8497015376a0f2c6b61f783b": "b7e369ff5b9ef37a0d9d26eb8d6c131f",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cf/97bf6843bc69da3f7a5eee2079d9036288d4ba": "cfb3fb0b9cb4baa6143ee18b38ed3f6f",
".git/objects/d1/9f0b94652f95718d860c501426928ebe123648": "8a4b6a4d41236291fe44f4fd1b6e28da",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80f206d7c7b0e9b8bedf2aba176107be4286e1": "c9fda20fed69b0b4ce30e3d197c9baae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/a4bc3686a7c28d35a2873eee01588fb0d95c57": "f977ed06f2ef8abc6033e83f4a14713f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/c254416be0da2d81f0218b775e23a4b979bd81": "982b90b0ebc237f311ec5bbade2ae634",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/18e177e35110194dba83e6615ce8f2943363b0": "3889ae91330c6b0f5a2309dc7433932e",
".git/objects/f2/5ed59aa8e0dd62aa7c9997a9dd8c3101754992": "6e8f9684fb42e2ba3825a9071d230144",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/42feab09a634e280dbca4b165d6b54bf82f2f2": "ffbe0501902a05ad009fc4c57bca692f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/5a2cd836857b3eccd37250daf11e49f2032283": "c3dd0697998cfb2fcb75d31239c8dbd8",
".git/objects/ff/add0cf4a69fc8e56200d88fa67bb67fcda16ee": "eb93ffbd1055f0cec37dfec6f00625d4",
".git/refs/heads/main": "594dbf59e76361beae11e739d23b5f70",
".git/refs/remotes/origin/main": "594dbf59e76361beae11e739d23b5f70",
"assets/AssetManifest.bin": "dd47ed67d5f99476296d24a5cc3e215d",
"assets/AssetManifest.bin.json": "c3a024c75516f4bf1684114ae26cc17d",
"assets/AssetManifest.json": "e378a5e55d54a5b5e1afec169e43e3b0",
"assets/assets/cripto.png": "6e0df738342fe41c64e3c5e4e7fa18d4",
"assets/assets/crown.png": "16c4b59c0badf3166fa436c5af5b3f18",
"assets/assets/forex%2520man.png": "374234c10199352038e4884791dae4e2",
"assets/assets/forex.png": "c343b991477ac610da47d34a9994b290",
"assets/assets/FX%2520MECHANIC%2520(1).png": "a2dce44f26561d0fa4e33fd41ac5141a",
"assets/assets/gold.png": "b5c1a7662677f2f23ad4e07acec111c8",
"assets/assets/image.png": "6579dc781afcb6d315c0c4ff0987545e",
"assets/assets/oil.png": "a089806f514102cbc94fa67342318883",
"assets/assets/swing.png": "6440ce9e7d51845da35726bf9adba32b",
"assets/assets/usmarket.png": "2a57877572cb64d37e5d3cc070bb4395",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2d1a13dea1d9ad0cf6551bc987eac6bb",
"assets/NOTICES": "f23d1a60e0f05038f6afde27b20acfe2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "17b0a43422723676237a0cbf84f6a634",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c3c368bc70e14808373ed5c053bffe3",
"/": "9c3c368bc70e14808373ed5c053bffe3",
"main.dart.js": "cdc9fa9ed422bc24ec2753b6fbd3aa3c",
"manifest.json": "7e9a4fd4899947bc62f6b62400aca490",
"version.json": "11718fee13c71020ca77c0544630b288"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
