// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  // apiKey: "AIzaSyDPGogjXOQe9AUfSjrKJHg841GBoRnKtZU",
  // authDomain: "neo-task-management-sn17.firebaseapp.com",
  // projectId: "neo-task-management-sn17",
  // storageBucket: "neo-task-management-sn17.appspot.com",
  // messagingSenderId: "205167317230",
  // appId: "1:205167317230:web:49fe184f8dfc23c8f0a3ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
