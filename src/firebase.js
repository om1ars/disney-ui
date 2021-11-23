import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2hAqrW6mTpaIAFnPjU_bqXWC5FnPEKgU",
  authDomain: "disney-2f9e3.firebaseapp.com",
  projectId: "disney-2f9e3",
  storageBucket: "disney-2f9e3.appspot.com",
  messagingSenderId: "265477376105",
  appId: "1:265477376105:web:2ce54996b11ba990987af8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
