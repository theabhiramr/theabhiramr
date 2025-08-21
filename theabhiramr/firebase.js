// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRFvY8U0VgXNf2nkvBdsrqnBtad6nV0Pg",
  authDomain: "theabhiramr-caba7.firebaseapp.com",
  projectId: "theabhiramr-caba7",
  storageBucket: "theabhiramr-caba7.firebasestorage.app",
  messagingSenderId: "684124942605",
  appId: "1:684124942605:web:8d245215ecfd3447f60044",
  measurementId: "G-KQXEK1JJFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);