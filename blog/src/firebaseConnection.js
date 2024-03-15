// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSDIDzE4-_oYtWKQcHGV8FO9lri4LBWIk",
  authDomain: "atividade-64644.firebaseapp.com",
  projectId: "atividade-64644",
  storageBucket: "atividade-64644.appspot.com",
  messagingSenderId: "918221705739",
  appId: "1:918221705739:web:ec00da9b43cb2047a22d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};
