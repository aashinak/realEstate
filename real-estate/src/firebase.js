// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
//   apiKey: "AIzaSyAzse66yXJZOI7xPc8Hv2Zp1Q3DS1oCurw" ,

  authDomain: "mern-estate-c715e.firebaseapp.com",
  projectId: "mern-estate-c715e",
  storageBucket: "mern-estate-c715e.appspot.com",
  messagingSenderId: "132168465757",
  appId: "1:132168465757:web:0d58a8f107d812d628fcb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);