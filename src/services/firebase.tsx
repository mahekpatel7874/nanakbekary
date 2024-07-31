import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCygVHXQCJqtDB9xoPhKPIG-C9tFqJMY40",
  authDomain: "nanakb-69f29.firebaseapp.com",
  projectId: "nanakb-69f29",
  storageBucket: "nanakb-69f29.appspot.com",
  messagingSenderId: "983617137219",
  appId: "1:983617137219:web:2e9c24eb0318fd2b1642f6",
  measurementId: "G-Y7D3L1KBKS",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// export default { auth, app, db };

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
//
// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCygVHXQCJqtDB9xoPhKPIG-C9tFqJMY40",
//   authDomain: "nanakb-69f29.firebaseapp.com",
//   projectId: "nanakb-69f29",
//   storageBucket: "nanakb-69f29.appspot.com",
//   messagingSenderId: "983617137219",
//   appId: "1:983617137219:web:2e9c24eb0318fd2b1642f6",
//   measurementId: "G-Y7D3L1KBKS",
// });
//
// const db = firebaseApp.firestore();
//
// export { db };
