// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCC8Qi9pMpjMr7wKWuhJseIDZ4VGDY3dfk",
    authDomain: "temp-645a3.firebaseapp.com",
    projectId: "temp-645a3",
    storageBucket: "temp-645a3.appspot.com",
    messagingSenderId: "611817883485",
    appId: "1:611817883485:web:5ebb0585d938a326edcab4",
    measurementId: "G-RJS8R52RQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

