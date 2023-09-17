// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaALWcoyQjgvTKTB7BtM6C3kddtePabe8",
  authDomain: "bumpcare.firebaseapp.com",
  projectId: "bumpcare",
  storageBucket: "bumpcare.appspot.com",
  messagingSenderId: "603381864922",
  appId: "1:603381864922:web:e22066a51722b59b1cc8e3",
  measurementId: "G-GF4EQXFFFL",
  databaseURL: "https://bumpcare-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// TO USE FIRESTORE DATABASE
export const db = getFirestore(app)

// Create a ReCaptchaEnterpriseProvider instance using your reCAPTCHA Enterprise
// site key and pass it to initializeAppCheck().
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6Ld3ZzIoAAAAALWIb0X_uTxstfCbyDD8Oc3XU_EF"),
  isTokenAutoRefreshEnabled: true // Set to true to allow auto-refresh.
});

// export default app