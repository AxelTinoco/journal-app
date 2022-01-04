// Import the functions you need from the SDKs you need
import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOwdZFMK2MDaPniWFwP4WQgYk-SVvQ2w8",
  authDomain: "journal-app-71d4f.firebaseapp.com",
  projectId: "journal-app-71d4f",
  storageBucket: "journal-app-71d4f.appspot.com",
  messagingSenderId: "317497698957",
  appId: "1:317497698957:web:555d5875073faa6eee90c4"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firestore
 
const db = getFirestore();
 
//Provider de google
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    app
}