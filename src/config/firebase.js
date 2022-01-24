// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, getDoc, query, getDocs, doc, onSnapshot  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5wW5l0Rxp3FesHFWmV6cHGZvJT00l5WM",
  authDomain: "mini-olxapp-c7cec.firebaseapp.com",
  projectId: "mini-olxapp-c7cec",
  storageBucket: "mini-olxapp-c7cec.appspot.com",
  messagingSenderId: "408736445634",
  appId: "1:408736445634:web:9ca36d1ceed160c738775b",
  measurementId: "G-ZCMX3PGMWJ"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAtm9rqsGnBEEQ0Y8ReUMfzwczjSDDpL6s",
//   authDomain: "online-ce580.firebaseapp.com",
//   projectId: "online-ce580",
//   storageBucket: "online-ce580.appspot.com",
//   messagingSenderId: "181136653281",
//   appId: "1:181136653281:web:1717acb3388d8cd420b0a0",
//   measurementId: "G-RZKQSG1X3B"
// };

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

async function registerUser(authParams) {
  const {  fullname,email, phoneNo, password } = authParams
  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
  await setDoc(doc(db, 'users', uid), {
    fullname, email,phoneNo, password,uid
  })
}
async function submitAdData(data) {
  //Upload files to storage
  let { images } = data
  let imagesUrl = []
  for (let i = 0; i < images.length; i++) {
    const storageRef = ref(storage, 'ads/' + images[i].name)
    await uploadBytes(storageRef, images[i])
    const url = await getDownloadURL(storageRef)
    imagesUrl.push(url)
  }
  data.images = imagesUrl

  //Add data to database
  await addDoc(collection(db, 'ads'), data)
  alert('Data added successfully!')
}

async function getAllAds() {
  const q = query(collection(db, "ads"))
  const querySnapshot = await getDocs(q)
  const currentAds = []
  querySnapshot.forEach(doc => {
    currentAds.push({ ...doc.data(), id: doc.id })
  })
  return currentAds
}

async function getSingleAd(adId) {
  const docRef = doc(db, 'ads', adId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

async function loginUser(email, password) {
  const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
  const docRef = doc(db, "users", uid)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data())
  } else {
    console.log("No such document!");
  }
  return { uid, ...docSnap.data() }
}

const logout = () => {
  signOut(auth)
  console.log("Logout Succesfully")
}

export default db;
export {
  registerUser,
  loginUser,
  submitAdData,
  getAllAds,
  logout,
  getSingleAd
}