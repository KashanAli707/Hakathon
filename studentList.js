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
  getDocs,
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

const tableBody = document.getElementById("tableBody");

const studentData = [];

const renderTable = () => {
  tableBody.innerHTML = "";
  studentData.forEach((x) => {
    tableBody.innerHTML += `
        <tr>
        <td>${x.name}</td>
        <td>${x.fatherName}</td>
        <td>${x.cnic}</td>
        <td>${x.contact}</td>
        <td>${x.age}</td>
        </tr>
        `;
  });
};

const getData = async () => {
  const reference = collection(db, "students");
  const dt = await getDocs(reference);

  dt.forEach((doc) => {
    studentData.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  console.log(studentData);
  renderTable();
};
getData();
