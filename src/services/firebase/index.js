import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbua9Lr9A_Tgd-EVOVlbxvhnneA68QKm0",
  authDomain: "giggle-learn.firebaseapp.com",
  projectId: "giggle-learn",
  storageBucket: "giggle-learn.appspot.com",
  messagingSenderId: "117604267300",
  appId: "1:117604267300:web:d46c72dfb5c3a538c6efb1",
  measurementId: "G-DY3PNLWW7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


//initialize db

export default firestore;
export const auth = getAuth(app)

