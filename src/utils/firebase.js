// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs_Ca1Rpc8lR1mNTxadsRxflxkPXGnLrE",
  authDomain: "netflixgpt-f97b2.firebaseapp.com",
  projectId: "netflixgpt-f97b2",
  storageBucket: "netflixgpt-f97b2.appspot.com",
  messagingSenderId: "850932284901",
  appId: "1:850932284901:web:73d56db4c59f4cf1c2430c",
  measurementId: "G-8VFTMFJFW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();