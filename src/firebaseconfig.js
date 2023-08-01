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
  apiKey: "AIzaSyC9L7BicuTZXCX8Husw4xBuJ5AwACGHsx4",
  authDomain: "techconenctbe.firebaseapp.com",
  projectId: "techconenctbe",
  storageBucket: "techconenctbe.appspot.com",
  messagingSenderId: "596614892694",
  appId: "1:596614892694:web:fb950eab775327ea82c6b7",
  measurementId: "G-PWBSS1CRZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)