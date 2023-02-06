// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA95baSAKgaRGoj8MV3iV1hpF0zpvpRYNo",
  authDomain: "cx-tech-days.firebaseapp.com",
  projectId: "cx-tech-days",
  storageBucket: "cx-tech-days.appspot.com",
  messagingSenderId: "316855049115",
  appId: "1:316855049115:web:3d221fa672bb3d3bfb1f3e",
  measurementId: "G-3GJT4D9KJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const PUBLIC_URL = "";
//http://127.0.0.1:3000/cxtechdays
