import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'notebook-bf8bc.firebaseapp.com',
  databaseURL: 'https://notebook-bf8bc.firebaseio.com',
  projectId: 'notebook-bf8bc',
  storageBucket: 'notebook-bf8bc.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:898202060871:web:f19402732672f2bb',
};

firebase.initializeApp(firebaseConfig);
