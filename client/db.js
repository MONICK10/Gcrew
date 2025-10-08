// Firebase configuration for client-side
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js';

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

console.log("✅ Firebase initialized on client!");