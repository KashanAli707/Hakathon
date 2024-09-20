// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBy879TJjKUzti55xklbyKR1H8QY4Xj9ds",
    authDomain: "hackathon-cab4b.firebaseapp.com",
    projectId: "hackathon-cab4b",
    storageBucket: "hackathon-cab4b.appspot.com",
    messagingSenderId: "60564523581",
    appId: "1:60564523581:web:0590e5b579dd46ef83f854",
    measurementId: "G-2E8K23V1XN"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

const studentName = document.getElementById("studentName");
const fatherName = document.getElementById("fatherName");
const contact = document.getElementById("contact");
const cnic = document.getElementById("cnic");
const age = document.getElementById("age");

window.saveStudent = () => {
  let obj = {
    name: studentName.value,
    age: age.value,
    fatherName: fatherName.value,
    contact: contact.value,
    cnic: cnic.value,
  };

  console.log(obj);

  const reference = collection(db, "students");
  addDoc(reference, obj)
    .then(() => {
      console.log("Saved Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
