// import firebase from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import 'firebase/storage'

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
export const storage = app.storage()

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithRedirect(provider);
export const signOut = () => auth.signOut();


window.firebase = app;

export const createUserDocument = async (user, additionalData) => {
  // If there is no user, let's not do this.
  if (!user) return;

  // Get a reference to the location in the Firestore where the user
  // document may or may not exist.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch a document from that location.
  const snapshot = await userRef.get();

  // If there isn't a document for that user. Let's use information
  // that we got from either Google or our sign up form.
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', console.error);
    }
  }

  // Get the document and return it, since that's what we're
  // likely to want to do next.
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return await firestore.collection('users').doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};
export default app;



  // Be wary of and figure out why this doesn't work
//  const setting = {Timestamp: true}
//  firestore.settings(setting);


