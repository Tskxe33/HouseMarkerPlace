// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeH6RpfF_dJAgWDUfsbBo7B0o1AnBp9rI",
  authDomain: "house-market-app-330a4.firebaseapp.com",
  projectId: "house-market-app-330a4",
  storageBucket: "house-market-app-330a4.appspot.com",
  messagingSenderId: "282085871995",
  appId: "1:282085871995:web:a65cfe23b40ed75cf4adde",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
