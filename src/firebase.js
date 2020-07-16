// import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


// import 'firebase/firestore';
// const firebase = require("firebase/firebase");
// // Required for side-effects
// require("firebase/firestore");
// require("firebase/auth");



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
export const app = firebase.initializeApp(firebaseConfig);




export const firestore = app.firestore();
export const auth = app.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();

firestore.settings({timestampsInSnapshots: true});

window.firebase = app;

export const createUserProfileDocument = async (user, additionalData) => {
  if(!user) return;
  const userRef = firestore.doc('users/${user.uid}')

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email, photoUrl } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoUrl,
        createdAt,
        ...additionalData,
      })
    } catch(err) {
      console.log('Error creating user', err);
    }
  }
}

export const getUserDocument = async (,uid) => {
  if(!uid) return null;
  try {
    const userDocument = await firestore.collection( `users`).doc(uid).get();

    return { uid, ...userDocument.data()};
  } catch (err) {
    console.err( 'Error fetching', err.message)
  }

  return getUserDocument(user.uid);
}
export default app;



  // Be wary of and figure out why this doesn't work
//  const setting = {Timestamp: true}
//  firestore.settings(setting);


