// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0ZvA38L9Qf_EWEHc6IY9AUk4frbbD6ZQ",
    authDomain: "gorom-khobor.firebaseapp.com",
    projectId: "gorom-khobor",
    storageBucket: "gorom-khobor.appspot.com",
    messagingSenderId: "128088911122",
    appId: "1:128088911122:web:1e048cfbc0e655173f57cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;