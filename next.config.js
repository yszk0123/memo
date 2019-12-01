const withOffline = require('next-offline');

const nextConfig = {
  env: {
    REACT_APP_FIREBASE_API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/memo' : '',
  registerSwPrefix: process.env.NODE_ENV === 'production' ? '/memo' : '',
  scope: process.env.NODE_ENV === 'production' ? '/memo/' : '/',
};

module.exports = withOffline(nextConfig);
