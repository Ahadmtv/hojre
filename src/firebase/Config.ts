
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// api key
const firebaseConfig = {
  apiKey: "AIzaSyDbXj9kalrhWT52-wkf9hq-tSVzkTMDxyk",
  authDomain: "hojre-b3343.firebaseapp.com",
  projectId: "hojre-b3343",
  storageBucket: "hojre-b3343.appspot.com",
  messagingSenderId: "658441010885",
  appId: "1:658441010885:web:3c6d383b6e9b8d67fb3aac"
};

// تعریف اپلیکیشن برای فایر بیس 
export const app = initializeApp(firebaseConfig);

// تعریف احراز هویت برای فایربیس
export const Auth = getAuth(app);

//تعریف دیتابیس برای فایربیس 
export const db = getFirestore(app);

// تعریف استوریج برای فایربیس
export const storage = getStorage(app);


