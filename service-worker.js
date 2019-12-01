self.__precacheManifest = [
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/_app.js",
    "revision": "ff30982578f8910966fc"
  },
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/_error.js",
    "revision": "9864f0e2fde903950b2b"
  },
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/about.js",
    "revision": "499de25165e73044a0c3"
  },
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/index.js",
    "revision": "c7067bc626e189ebc27f"
  },
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/notes.js",
    "revision": "63ea7b99478671aae750"
  },
  {
    "url": "/memo/_next/static/BHX7yQirLB4HFaKZOvyxa/pages/notes/[id].js",
    "revision": "297ed4c1bf90fa987643"
  },
  {
    "url": "/memo/_next/static/chunks/commons.d98bbcd905afc63e586e.js",
    "revision": "95aa6a2ae6e929063b13"
  },
  {
    "url": "/memo/_next/static/runtime/main-feb96505c916704aaee8.js",
    "revision": "aad77b0a174f2eda16c4"
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
