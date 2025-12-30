import { auth, database } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// LOGIN
const loginBtn = document.getElementById('loginBtn');
if(loginBtn){
  loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "main-menu.html";
      })
      .catch((err) => alert(err.message));
  });
}

// SIGN UP
const submitSignUp = document.getElementById('submitSignUp');
if(submitSignUp){
  submitSignUp.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const idNumber = document.getElementById('idNumber').value;
    const email = document.getElementById('emailSignUp').value.toLowerCase();
    const nationality = document.getElementById('nationality').value;
    const cell = document.getElementById('cell').value;
    const home = document.getElementById('homeAddress').value;
    const suburb = document.getElementById('suburb').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const password = document.getElementById('passwordSignUp').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const bankName = document.getElementById('bankName').value;
    const accountNumber = document.getElementById('accountNumber').value;

    // Basic validations
    if(password.length < 8){
      return alert("Password must be at least 8 characters");
    }
    if(password !== confirmPassword){
      return alert("Passwords do not match");
    }

    // Check unique ID
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `users/${idNumber}`));
    if(snapshot.exists()){
      return alert("ID Number already exists");
    }

    // Create user in Firebase Auth
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      // Save details in Realtime Database
      await set(ref(database, `users/${idNumber}`), {
        name, surname, idNumber, email, nationality, cell,
        home, suburb, city, zip,
        bankName, accountNumber
      });
      alert("SUBMITTED");
      window.location.href = "index.html"; // back to login
    } catch(err){
      alert(err.message);
    }
  });
}
