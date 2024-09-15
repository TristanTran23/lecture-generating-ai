// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABYnGffCw-W8il7SsGe7-di7fFAB4az30",
  authDomain: "lecturegeneratingai.firebaseapp.com",
  projectId: "lecturegeneratingai",
  storageBucket: "lecturegeneratingai.appspot.com",
  messagingSenderId: "235171927710",
  appId: "1:235171927710:web:07bf093ad36a6906950d8f",
  measurementId: "G-53CKTGEGWC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);