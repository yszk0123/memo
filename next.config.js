/**
 * Workaround for Hosting on GitHub Pages
 * @see https://github.com/zeit/next.js/issues/3335#issuecomment-348802894
 * @see https://github.com/zeit/next.js/issues/3335#issuecomment-481925145
 */
const prefix = process.env.NODE_ENV === 'production' ? '/memo' : '';

module.exports = {
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_URL_PREFIX: prefix,
  },
  assetPrefix: prefix,
};
