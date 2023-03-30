import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyDLDNCToUpIqzfNPDlx86_G-dmcPZCCUpQ",
    authDomain: "iot-safe-site.firebaseapp.com",
    projectId: "iot-safe-site",
    storageBucket: "iot-safe-site.appspot.com",
    messagingSenderId: "1000233715916",
    appId: "1:1000233715916:web:92f3c5061cae4c36791a69"
};
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
