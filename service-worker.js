self.__precacheManifest = [
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/_app.js",
    "revision": "08266b0a8a2842448e92"
  },
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/_error.js",
    "revision": "4db9d005e0a648c1ad23"
  },
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/about.js",
    "revision": "1902cacdc0d51e07265f"
  },
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/index.js",
    "revision": "2fe212b3fefdb8af1d59"
  },
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/notes.js",
    "revision": "710d03100a99394c5006"
  },
  {
    "url": "/memo/_next/static/85wR9Ca2EQlaMuT8yuFTU/pages/notes/[id].js",
    "revision": "b676a29241d729b8048d"
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
