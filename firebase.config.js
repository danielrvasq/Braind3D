// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- Agrega esto

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmaXCBV5Trx4N0h0aDS3hzILKTtMEtkRI",
  authDomain: "braind3d-47a91.firebaseapp.com",
  projectId: "braind3d-47a91",
  storageBucket: "braind3d-47a91.firebasestorage.app",
  messagingSenderId: "756884372815",
  appId: "1:756884372815:web:d0c67164b781815006993a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // <-- Agrega esto
