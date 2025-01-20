'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "59477fcee407fa1b188bd9152683fcf8",
".git/config": "70dce8dd09a2288f6bf056591af6b702",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "14f4443ba9b843dc61376755d2f113c7",
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
".git/index": "f57e17aa53795694ef44cf72f5552915",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4264dbd8b37272a5b325f55871e4fa53",
".git/logs/refs/heads/main": "46dfe3badd40073b930117fd0534841f",
".git/logs/refs/remotes/origin/main": "78d411d2e609d4e924b33cb84adf8919",
".git/objects/01/71a5b9069807a2b0d83ea775f3978ef0877ce8": "3ed80a51b683ae99918798e0a21443e7",
".git/objects/02/012760d3cead8ddb8c3a846e360404597d5554": "2fc005693ad698b240875782553bb25f",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/efe278900f5c1baac0f966f423969c9468e22d": "a407a5bb088521052ff3c973d28211bb",
".git/objects/0a/d8f2d03828e5075c776c02f97a52de6dcc4332": "51ee5a8361786c0ba3df8c4f52e9d2ea",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0c/f908559dcafa2ed76c5dd6206c84b4511730dc": "557f76aa1f94e580550b8bd341cc0065",
".git/objects/0f/ce796e9316ef5d32bf9cc105e04a5c04652a4f": "43a619d0d55ffd06b7db53c388e5ca1c",
".git/objects/19/6bac097df5a54a33c469c3a47606032b5caa08": "d11470225c3cc452eef2bef57874c353",
".git/objects/19/e43dea7d08d651ede699dfa8942b1b13c563e0": "ab843916dbde8dfb43b7c797878494b8",
".git/objects/1b/933890197ed0d160457036795dfdbfe14b1006": "a620dec84a5ecc8b190c5f4b41a036fc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/941bd52e36877a445769c43c210427f916ec58": "89dafd67a5b5fa2d8b0061eafe814dfb",
".git/objects/20/b3f1fae74a02de41d71eec068b39efebf98818": "1345c1fbdfa75c67248bff9d8b5836d7",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/bfbbc3aa51528b75d2443a13f669c485887cf1": "1c9f0bd4de7fac38a4a5127af4c53b88",
".git/objects/28/425b4d57ce73d3c6520b76317ab15814aeef96": "1d074715de637a667e3f39ff6cdc50bc",
".git/objects/2b/a31c0ff76c8d230e9982ae193fd61b2bb3ed4e": "bbff4de5cb5107ca317e8e309cf4b290",
".git/objects/2c/fe6623b19bb36cd6a588d1b5bb3ed830280974": "114dda88078ddcfe96c76afc8432ea42",
".git/objects/2f/44165c2d218d24a26345fbdfaca4c8c5d1a391": "9e1135c712f1371a5c2eef793b79f494",
".git/objects/2f/bfa95f595ff47bee46f4fd35e49ce726dd5642": "04438b608def8e60d142d4dff6ed5feb",
".git/objects/30/bf7fe6db6b5c18fbba54270ad1bbaa8edd812f": "e68708af856eafd96bc2c05ec33ae17e",
".git/objects/35/1597d1f3a4204f758f9296a8b18327b63321d5": "225f438f17d93d75bde4c21d7ef0f90f",
".git/objects/36/5d51339a579b6cc8a9b2960b14814f0a81d5db": "6042bf9fab95cc63f0c76a8bf650e7f6",
".git/objects/36/d343eda5a8ef7596809adbd8986ac345542488": "0102e8c1970b18cb5f376d38e624a319",
".git/objects/37/0940c8012263f88c1dc1f8a55115b0b7a65f81": "ce8fc0f9b7e8547ffc370fee8c637520",
".git/objects/3a/3b191f9ffbbabf5f42d802b95cdeeaa78e3c52": "c9a61c9799dbea9dae6436fe8db4e8d5",
".git/objects/3f/87d183de0d53a3bab62055ce73f62fd7e53561": "681746380cd03092fc5cdfc92ca9ff40",
".git/objects/42/2f94e7f840bbbdf0d58aa46fef3a0c6959693d": "2d02354a0be0b5ec6f12c8c413052155",
".git/objects/45/508a15e00382e6e096cf8add0be347dce94d64": "4def8425e81bccc022102f7c347ced14",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/4b6e1aa4878371da1ff5e586ce0dbe54920a59": "c205afd41664b9c3adcb7c6c6c28a98a",
".git/objects/47/1e3f1f35731450422c6b110f61a21b5f966716": "2d2b68aeb2d63f2b77dccd176404dc01",
".git/objects/49/b922be293b0b0431a75fbc8a941d5f7cfef959": "4ec75f28117c6e6273ef67dc6bb07a3e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/a0fbb174e36e1946a70c012c8f8685f0f0b4ed": "89f159d32707faa19820393afe19a2eb",
".git/objects/56/6c3855f330b8059d661e03ee0f918100948181": "8cce8712d24de97c482c0d48a6b6d887",
".git/objects/5a/714d027b491509bfb7f054b9c5fd1d7a196895": "a8b5863c34f3bbf404908e119f0584ec",
".git/objects/5c/f4cf33b6bef0b7ff43f5b651696001bfe9cc68": "437a1ec14a2661650a2726b4b8c75be4",
".git/objects/5e/47ef9599edca1601a8aff40c4ecbcdcf1e2a64": "f34c7c94d95e91c4f19b04fe11b1f48f",
".git/objects/5e/ed77ed1f2b9c8ee338138b8104cc3a72629f9b": "44a22ea67a0fa17319306d61dddbd877",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/b06c984caf4dc52c00c0c4e79cce66ebfbf7cd": "b7154e24994afe89c62e601e4c058ff1",
".git/objects/66/96a31d39b55937669cec8d195f81c29fae4c08": "929c67ccb779f9fb306ac5e41b707c70",
".git/objects/6c/826673db1e6d81c496fced0ff77b7324fc1f57": "d211c7f4334c7dbbd8e4ffa23ecd6f34",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/73c97b8b5b41634df01cb35d8a00cdf88ea4cf": "6969fd35a6c79515d49c4081dbc9d7d1",
".git/objects/72/a1040d2a2b9bc6045a6087484147cf39d42e98": "860fab301c070b55056e90203fea30f9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/26d8b22ef68b22bbd1202f897e225dc701895f": "4f8c2e3e711bff39576e9dbf62e413da",
".git/objects/76/e879add0bbf74a81982379440c53ac86a42c5a": "8bc6c1404d9ffb500ebc58fa5c34d74c",
".git/objects/77/99f91cd9265071723fe7e3bad4458d20049884": "404a18e2d3c8179eb548094b77272dc6",
".git/objects/7b/b869a92ae3916837b47d41cfbc0c54b2b7c369": "d84a4158f4f2bad8791606f40977762e",
".git/objects/7c/a88e4a6423919113c4d09003a5495da7e3e838": "2a90bf58122fa49640f0cfa09cbf672a",
".git/objects/7c/ab090e4e4cf827b0b5fe50c4885b3d62e486e5": "c06715f90b9cd3d2f789dbc1bf7398d4",
".git/objects/81/c85b9476dc2584bb6c1a4de1547480a4c59c7f": "853ea8bcd0a0fb5c850c363e9d30a4fb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/8aa34b4a0a5f2aa6bcc650de2e1bb3d3061109": "2fdc72eb35f63d073215610f70b00291",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/2efc9259ea87f4c194cf52c0452fd587d3edcb": "d92aed9d4b5848ab3488a4dd7c4e9ccf",
".git/objects/92/7f44bb48cb80c479ffca2315a65f94251a3d82": "8a1ed86d43f739ba3ec7d790c3aca832",
".git/objects/92/d9d19db87fd0e48dc751a128db673c32061412": "289921a23aba36f66d45c844d090d488",
".git/objects/93/d330a52f0021c68965a2b72bf254d1b99f659a": "a7c12ce863c5962162639c5269ac8d89",
".git/objects/94/5a9a3af60f0172b7e0a50139ec763802343e45": "28baa9d5b9a809c54ed60c2df2ec5d69",
".git/objects/96/5898d90be4257584f25e934fcc75753d74433f": "710baffe54a7838264dfcc768ac42178",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9c/45fc18338019cbe5b82b747e1f45dc492d0eef": "0912973998de40178d4527fecb4f7956",
".git/objects/9c/4a31c1fbc645951194e2ef1c5d598b80d35475": "02cfd1659d33731e90819a3f4d43148b",
".git/objects/a4/ca763b0dfceb1bd6b57ab98451fa106818da60": "cfc27644bf51398e5312a6efbae175da",
".git/objects/a4/d40df71990954d4d7119dd0801b5716d497045": "14b37061a2d4a728ab186e358822a298",
".git/objects/aa/2aa3bcbdb5163f4d6a459ba2ad6ee400ad458a": "e7a3b9145c359201032320cd80e1b1cd",
".git/objects/ad/cd5f4e923e2923f07a0bcb74381ec350b8b6c1": "639892161183ad60ab7b688c49b85848",
".git/objects/ae/dde256c4ed4cd3931f341512105fb90ea16e57": "4b56084d2cd74f638f3e626d171ddd5c",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/17c412c9371315302d8b37589fbc411ea2b0bb": "15726250eb2f5d7e12740a334be42831",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/d19c3d234b544c9accea6e3feb4cba144f60de": "25bb14951301bb4dbbc9fc47b3d244d8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/493d83cda4f0aa3248346844876230b0b7f8eb": "5cdba29bc3d8dbf43e0056d8fb54a7b5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/8d4b3b12d5fbd7c83cdaae85358d605f25dd19": "bc1cb61bc3246515519b26895cbd5d5c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/7197e4c4520d9d2febd14797804c3cca487af5": "85a2ebb6952b8798b9055e388b7fb9ec",
".git/objects/cb/b524d7907db072d7332f0c55cc8505ac589e20": "afe2b1745c72e7e263168e5dec80323d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/552a6e22ed8ee1dd843888b3c9235bc8115aa7": "453a5d42f49a393ec2b20e24ed4bc707",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/39e2bbcc381553c9ebce5215ace2c77fb5abb5": "879bcb074c3a10ba2b81de93a91cbebe",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/a901396177b8055e1db467f1f50334f787aa23": "a842589cd93b59c1aabb4b69a37ee6a2",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/e6/3f52cbde7a596cea65f0cb9e2192cbbaa10a59": "816650ee3dcff199affc08ea98f31ed2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/373411ab88d1b69559f2f5bac82a07fdef33b2": "12492889f6853825f8afae139a2ced6a",
".git/objects/f5/7535ce087fd36299747ef2f2040b11192a3915": "9869df4eb1367d23de3bb0eba8c1cc79",
".git/objects/f8/0d888e42a4fae29005dce5b34b8bd0ace757ec": "6a3c574b5ef36209859921af17aa3aa6",
".git/objects/fc/74c942f5a4e7b3c3329d2faaa32989cc9a555a": "6ba6277c8ef802e9513bf30c356e4e1e",
".git/ORIG_HEAD": "311cae35834b6e2dbee277673304f904",
".git/refs/heads/main": "bd589f0ea99ee9c2d11a6571edf55f2e",
".git/refs/remotes/origin/main": "bd589f0ea99ee9c2d11a6571edf55f2e",
"assets/AssetManifest.bin": "a7a8c0362e18acfa4028a41a1c3d3bf5",
"assets/AssetManifest.bin.json": "dbf1c25078312ca2204fe94d8233d0be",
"assets/AssetManifest.json": "1481fa66c67d11e1648cc377b346e876",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "92cf48e0a00751a2a8e9bc4de20c93f0",
"assets/lib/presentation/images/recycling_bin_pointer.png": "1f76b775b4e8dede0874c109e7a98393",
"assets/lib/presentation/images/recycling_bin_pointer1.png": "d8ee9da52939ff55bcfb8603047f789a",
"assets/lib/presentation/images/step1.png": "8c627e5f56d62e7b9f6aef73b5e56c33",
"assets/lib/presentation/images/step2.png": "c30efe03f5a22dd54ada79118ba5e163",
"assets/lib/presentation/images/step3.png": "f91c0be2af1a1c0f10c753a46e4d2435",
"assets/lib/presentation/images/step4.png": "7ff47d4bfc4c9c4ba2ecc46a4d113e67",
"assets/lib/presentation/images/testQRcode.png": "6c7d43f57f8c25dc39003d01dac16c50",
"assets/lib/presentation/images/tpLogo.png": "a04b46abfa9f6b74f5df4b6172b4b842",
"assets/NOTICES": "87ba4f30742aebc5b4ba1eb47232e318",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "df77132d2139021ed9ad04ebf6da5ccf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a4a549b482cdd6e0894c1b15ea4f27ad",
"/": "a4a549b482cdd6e0894c1b15ea4f27ad",
"main.dart.js": "61727f416b51047855c960db3fdfd226",
"manifest.json": "96f7eb050c018a995d37027252e38804",
"README.md": "f4c3df64e7be66aeeb41d32d68e6a26e",
"version.json": "9d877a508a8889c177538f6d3c67e673"};
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
