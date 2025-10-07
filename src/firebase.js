// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxoptneYU1WydqUatUS6j2BT-FxeJp_sI",
  authDomain: "gdg-iul-31938.firebaseapp.com",
  projectId: "gdg-iul-31938",
  storageBucket: "gdg-iul-31938.firebasestorage.app",
  messagingSenderId: "351771177237",
  appId: "1:351771177237:web:0b352e71d83ecbed7f391c",
  measurementId: "G-XL660YSZC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
