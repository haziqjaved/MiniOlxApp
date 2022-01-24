import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAKx-2aElmBlrwKnzvsMugnDsSPRWcTIs",
//   authDomain: "olxreactt.firebaseapp.com",
//   projectId: "olxreactt",
//   storageBucket: "olxreactt.appspot.com",
//   messagingSenderId: "468957855607",
//   appId: "1:468957855607:web:8dff2c790d71dd35d8eb72"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAtm9rqsGnBEEQ0Y8ReUMfzwczjSDDpL6s",
  authDomain: "online-ce580.firebaseapp.com",
  databaseURL: "https://online-ce580-default-rtdb.firebaseio.com",
  projectId: "online-ce580",
  storageBucket: "online-ce580.appspot.com",
  messagingSenderId: "181136653281",
  appId: "1:181136653281:web:1717acb3388d8cd420b0a0",
  measurementId: "G-RZKQSG1X3B"
};

const app = initializeApp(firebaseConfig);


const storage = getStorage();
const auth = getAuth();
const db = getFirestore();


export {
  auth,
  storage,
  db
}