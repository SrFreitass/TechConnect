// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuGBzS1FLktJu84-1ql9ZoNUY-en1Kx58",
  authDomain: "techconnectdb.firebaseapp.com",
  projectId: "techconnectdb",
  storageBucket: "techconnectdb.appspot.com",
  messagingSenderId: "615342452845",
  appId: "1:615342452845:web:f52b493b58716aeb250f64",
  measurementId: "G-6SB4TSG0BG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)