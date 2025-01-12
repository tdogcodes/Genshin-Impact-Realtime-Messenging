import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-messenger-d3cd0.firebaseapp.com",
  projectId: "react-messenger-d3cd0",
  storageBucket: "react-messenger-d3cd0.firebasestorage.app",
  messagingSenderId: "597082173563",
  appId: "1:597082173563:web:80ca9bc8ab08f14ebaf2de",
  measurementId: "G-MBBN49SY1N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()