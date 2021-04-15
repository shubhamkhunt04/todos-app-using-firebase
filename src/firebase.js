import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

firebase.initializeApp({
  apiKey: 'AIzaSyDgNFE53sHORw2Hat-1R2brytfdI7PzfD4',
  authDomain: 'react-todo-78867.firebaseapp.com',
  projectId: 'react-todo-78867',
  storageBucket: 'react-todo-78867.appspot.com',
  messagingSenderId: '879898677385',
  appId: '1:879898677385:web:87f7ddd6d91ec4d1b53658',
  measurementId: 'G-77FBFRQXEL',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

// if (window.location.hostname.includes('localhost')) {
//   auth.useEmulator('http://localhost:9099');
//   firestore.useEmulator('localhost', 8080);
//   functions.useEmulator('localhost', 5001);
// }

export default firebase;
