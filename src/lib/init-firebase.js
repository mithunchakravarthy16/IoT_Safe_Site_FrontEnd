// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfRUhY9nQFDP9i-v8ijHzmS0_EhqLBxDw",
  authDomain: "iot-safe-site-fe.firebaseapp.com",
  projectId: "iot-safe-site-fe",
  storageBucket: "iot-safe-site-fe.appspot.com",
  messagingSenderId: "937250865925",
  appId: "1:937250865925:web:fbb519739f54c72749ad6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
