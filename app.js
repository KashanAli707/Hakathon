// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC325NbbFcDovlzzzCjne722tbIAsDQnnk",
    authDomain: "bazar-e36dc.firebaseapp.com",
    projectId: "bazar-e36dc",
    storageBucket: "bazar-e36dc.appspot.com",
    messagingSenderId: "1019607170009",
    appId: "1:1019607170009:web:451e8c3fd1f1f9a1e3b7c8",
    measurementId: "G-4827JY8Q2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
