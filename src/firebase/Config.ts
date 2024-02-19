
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDbXj9kalrhWT52-wkf9hq-tSVzkTMDxyk",
  authDomain: "hojre-b3343.firebaseapp.com",
  projectId: "hojre-b3343",
  storageBucket: "hojre-b3343.appspot.com",
  messagingSenderId: "658441010885",
  appId: "1:658441010885:web:3c6d383b6e9b8d67fb3aac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Auth
export const Auth = getAuth(app);
// Initialize firestore

export const db = getFirestore(app);

export const storage = getStorage(app);


