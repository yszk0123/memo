self.__precacheManifest = [
  {
    "url": "/memo/_next/static/chunks/commons.d98bbcd905afc63e586e.js",
    "revision": "95aa6a2ae6e929063b13"
  },
  {
    "url": "/memo/_next/static/runtime/main-cdb7a64c709920981932.js",
    "revision": "4c2a86ab34ea1f6bded0"
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
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/_app.js",
    "revision": "09b69d20595de8135126"
  },
  {
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/_error.js",
    "revision": "ed12709c35626b2e2a58"
  },
  {
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/about.js",
    "revision": "9c522b628d6221b5a8d5"
  },
  {
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/index.js",
    "revision": "ec30ee6282a9adb27349"
  },
  {
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/notes.js",
    "revision": "92997923bd6200e6fbe4"
  },
  {
    "url": "/memo/_next/static/xkv6YQfb6VcDmCoDZYFcg/pages/notes/[id].js",
    "revision": "555fe339b8a130b3289a"
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
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
