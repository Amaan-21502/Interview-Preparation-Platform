// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB39zd_irM2KN8PyHERzIu1CWU53iodGa0",
  authDomain: "nexus-9066d.firebaseapp.com",
  projectId: "nexus-9066d",
  storageBucket: "nexus-9066d.firebasestorage.app",
  messagingSenderId: "719130850758",
  appId: "1:719130850758:web:266ece28edb3df962c6ec7",
  measurementId: "G-RTR0L19B83"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);