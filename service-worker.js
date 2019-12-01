self.__precacheManifest = [
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/_app.js",
    "revision": "d1e6b927438016233d79"
  },
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/_error.js",
    "revision": "3716c99606022416492f"
  },
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/about.js",
    "revision": "234197a5a9a4acc52d29"
  },
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/index.js",
    "revision": "99dce85389a665750dc4"
  },
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/notes.js",
    "revision": "d38b85849bb9a7cb894c"
  },
  {
    "url": "/memo/_next/static/MZ2S-yXwHn2SL_EkEOWxY/pages/notes/[id].js",
    "revision": "bef1430eda5108a376e2"
  },
  {
    "url": "/memo/_next/static/chunks/commons.d98bbcd905afc63e586e.js",
    "revision": "95aa6a2ae6e929063b13"
  },
  {
    "url": "/memo/_next/static/runtime/main-dccbff7944a56308e574.js",
    "revision": "4e8ee66f079831546091"
  },
  {
    "url": "/memo/_next/static/runtime/polyfills-667e20e904826e105507.js",
    "revision": "7dea5b6e42df34769378"
  },
  {
    "url": "/memo/_next/static/runtime/webpack-08f7b238829422e3b9b2.js",
    "revision": "fc489b339eb65f8713fe"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/icon.png",
    "revision": "72d4dcfe45c0ff2b9c37a702f9a91c54"
  },
  {
    "url": "static/manifest.json",
    "revision": "557c08a97d9357fbd58d4b1820d6649e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
