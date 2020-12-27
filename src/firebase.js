import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzoZ69X3Sr4ypQy8nHrq9G8e911O6dlM",
  authDomain: "whatsapp-clone-e9611.firebaseapp.com",
  projectId: "whatsapp-clone-e9611",
  storageBucket: "whatsapp-clone-e9611.appspot.com",
  messagingSenderId: "1090027411621",
  appId: "1:1090027411621:web:160abbbb31fce28a12554c",
  measurementId: "G-WDC12KGYF1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db