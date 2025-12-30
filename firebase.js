// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBqJTLjxhZBCsvjrTH_cG0fkXlElG6BqTg",
  authDomain: "tose-ccf8f.firebaseapp.com",
  databaseURL: "https://tose-ccf8f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tose-ccf8f",
  storageBucket: "tose-ccf8f.firebasestorage.app",
  messagingSenderId: "475447495901",
  appId: "1:475447495901:web:9189276a162a3680afdf34",
  measurementId: "G-PWC5R6Q8JD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
