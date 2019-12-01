self.__precacheManifest = [
  {
    "url": "/memo/_next/static/chunks/commons.d98bbcd905afc63e586e.js",
    "revision": "95aa6a2ae6e929063b13"
  },
  {
    "url": "/memo/_next/static/runtime/main-4de8ab084ff34d90993e.js",
    "revision": "8d7804d24a970cf486b7"
  },
  {
    "url": "/memo/_next/static/runtime/polyfills-25502109c8842b40df6e.js",
    "revision": "4e0e0df1f92595986a1d"
  },
  {
    "url": "/memo/_next/static/runtime/webpack-08f7b238829422e3b9b2.js",
    "revision": "fc489b339eb65f8713fe"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/_app.js",
    "revision": "f75e6dd7069cbb6eb6f8"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/_error.js",
    "revision": "9a4770d6f7a682bbb77a"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/about.js",
    "revision": "250670a02be507e799e1"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/index.js",
    "revision": "774eeacfce4ef559664a"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/notes.js",
    "revision": "49798969041f97f16107"
  },
  {
    "url": "/memo/_next/static/vKkLLkf1ysfTv5Bq-_rAj/pages/notes/[id].js",
    "revision": "10319890de9664e10b77"
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
