import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvRQLn1o2F_qUerTN27nFch8qYjKN4aNA",
  authDomain: "lyfe-social-a40f4.firebaseapp.com",
  projectId: "lyfe-social-a40f4",
  storageBucket: "lyfe-social-a40f4.appspot.com",
  messagingSenderId: "798513833673",
  appId: "1:798513833673:web:e5b1bb587d1fa170c68f18",
  measurementId: "G-7XNDN9TNZT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
