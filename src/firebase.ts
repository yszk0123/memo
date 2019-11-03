import 'firebase/auth';
import 'firebase/firestore';

import firebaseNamespace from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'counter-64673.firebaseapp.com',
  databaseURL: 'https://counter-64673.firebaseio.com',
  projectId: 'counter-64673',
  storageBucket: 'counter-64673.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:61000756567:web:5d923c067f28d0ab8c6212',
};

/**
 * Prevent the "Firebase App named '[DEFAULT]' already exists (app/duplicate-app)" error
 * @see https://github.com/zeit/next.js/issues/1999#issuecomment-326805233
 */
export const firebase =
  firebaseNamespace.apps.length === 0
    ? firebaseNamespace.initializeApp(firebaseConfig)
    : firebaseNamespace.app();

export const GoogleAuthProvider = firebaseNamespace.auth.GoogleAuthProvider;
