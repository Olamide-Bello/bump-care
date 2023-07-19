// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8",
  authDomain: "bump-care.pages.dev",
  projectId: "bumpcare",
  storageBucket: "bumpcare.appspot.com",
  messagingSenderId: "603381864922",
  appId: "1:603381864922:web:e22066a51722b59b1cc8e3",
  measurementId: "G-GF4EQXFFFL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

// TO USE FIRESTORE DATABASE
export const db = getFirestore(app)

// export default app