// db.js - Firebase configuration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCt95uBQlcEYhrUM1hD89q2jZhchoCkJMg",
  authDomain: "impactful-hawk-474406-t3.firebaseapp.com",
  projectId: "impactful-hawk-474406-t3",
  storageBucket: "impactful-hawk-474406-t3.firebasestorage.app",
  messagingSenderId: "429447704471",
  appId: "1:429447704471:web:ad20bf3b8e607e4c4d1ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

console.log("✅ Firebase initialized!");
