// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjUO3XsO_ma-5aAhi7BtfqSAGyERdkynM",
  authDomain: "braind3d-431a7.firebaseapp.com",
  projectId: "braind3d-431a7",
  storageBucket: "braind3d-431a7.firebasestorage.app",
  messagingSenderId: "353185792288",
  appId: "1:353185792288:web:69fd84292cd8e4c4bdd745",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
