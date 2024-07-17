// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCygVHXQCJqtDB9xoPhKPIG-C9tFqJMY40",
  authDomain: "nanakb-69f29.firebaseapp.com",
  projectId: "nanakb-69f29",
  storageBucket: "nanakb-69f29.appspot.com",
  messagingSenderId: "983617137219",
  appId: "1:983617137219:web:2e9c24eb0318fd2b1642f6",
  measurementId: "G-Y7D3L1KBKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const auth = firebase.auth();
