// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración real de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9GfqV3yJd142H9fxX5TPnJR2vA_lZGR8",
  authDomain: "vitaleivspa.firebaseapp.com",
  projectId: "vitaleivspa",
  storageBucket: "vitaleivspa.firebasestorage.app",
  messagingSenderId: "259687291909",
  appId: "1:259687291909:web:4cbd63187894c05512106c",
  measurementId: "G-RD3RW02F8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

