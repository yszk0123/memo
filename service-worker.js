self.__precacheManifest = [
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/_app.js",
    "revision": "a80e2c81896b207ef804"
  },
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/_error.js",
    "revision": "312a200929160713b938"
  },
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/about.js",
    "revision": "c2eca31edba1f739a2d7"
  },
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/index.js",
    "revision": "bd98efa6f3473d6ef055"
  },
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/notes.js",
    "revision": "372724cb801fe16b31ad"
  },
  {
    "url": "/memo/_next/static/B1PbNzKKU95TePivSJkB5/pages/notes/[id].js",
    "revision": "e06ff7c3bc04e2a9548f"
  },
  {
    "url": "/memo/_next/static/chunks/commons.d98bbcd905afc63e586e.js",
    "revision": "95aa6a2ae6e929063b13"
  },
  {
    "url": "/memo/_next/static/runtime/main-4cf7405d7e023b0845f5.js",
    "revision": "0002c5b4f1e846760be6"
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
