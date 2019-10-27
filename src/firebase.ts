import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'counter-64673.firebaseapp.com',
  databaseURL: 'https://counter-64673.firebaseio.com',
  projectId: 'counter-64673',
  storageBucket: 'counter-64673.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:61000756567:web:5d923c067f28d0ab8c6212',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
