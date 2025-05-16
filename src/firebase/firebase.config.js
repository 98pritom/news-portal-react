// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeHcTW4y87Lrjx140CrtjBROPio_rGoFY",
    authDomain: "news-portal-c282c.firebaseapp.com",
    projectId: "news-portal-c282c",
    storageBucket: "news-portal-c282c.firebasestorage.app",
    messagingSenderId: "208705567501",
    appId: "1:208705567501:web:12f1deddc8ce854f810e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;