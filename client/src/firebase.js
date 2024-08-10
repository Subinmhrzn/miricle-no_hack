// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8b47.firebaseapp.com",
  projectId: "mern-estate-a8b47",
  storageBucket: "mern-estate-a8b47.appspot.com",
  messagingSenderId: "1719456950",
  appId: "1:1719456950:web:ef602cb898dcdb40f88217"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);