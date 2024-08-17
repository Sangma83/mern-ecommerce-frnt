// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqrKoTK5I2aDk420tzaCFSeXHkYV5knt0",
  authDomain: "mern-ecommerce-project-4e3ff.firebaseapp.com",
  projectId: "mern-ecommerce-project-4e3ff",
  storageBucket: "mern-ecommerce-project-4e3ff.appspot.com",
  messagingSenderId: "1029725476124",
  appId: "1:1029725476124:web:8f6f4810c91f17fe1816d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;