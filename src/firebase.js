// import firebase from 'firebase/app';
// import 'firebase/firestore' ;

// import * as firebase from 'firebase';
// import 'firebase/firestore';
const firebase = require("firebase/firebase");
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");



const firebaseConfig = {
  apiKey: "AIzaSyApUKFGeW05Iv9-7JFSSnIhCzNZXHhBxb0",
  authDomain: "trash-talkers.firebaseapp.com",
  databaseURL: "https://trash-talkers.firebaseio.com",
  projectId: "trash-talkers",
  storageBucket: "trash-talkers.appspot.com",
  messagingSenderId: "17956094321",
  appId: "1:17956094321:web:38005c16137bf31222f6d0",
  measurementId: "G-GR572FQHQQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


window.firebase = firebase;

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 

  

  // Be wary of and figure out why this doesn't work
//  const setting = {Timestamp: true}
//  firestore.settings(setting);

