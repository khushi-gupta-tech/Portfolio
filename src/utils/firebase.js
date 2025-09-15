// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc0yvf77wxBWGoOsw55MdRptbnca-m7pI",
  authDomain: "portfolio-9242a.firebaseapp.com",
  projectId: "portfolio-9242a",
  storageBucket: "portfolio-9242a.firebasestorage.app",
  messagingSenderId: "719423066329",
  appId: "1:719423066329:web:9d13fd2e7a82972a2eeec8",
  measurementId: "G-2G6JERZ0WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);