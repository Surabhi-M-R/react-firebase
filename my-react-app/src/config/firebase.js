
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyBKDZThw5BbeH5A9K3AUBHvJwTqCmqn-F8",
  authDomain: "fir-course-31890.firebaseapp.com",
  projectId: "fir-course-31890",
  storageBucket: "fir-course-31890.firebasestorage.app",
  messagingSenderId: "1009104734797",
  appId: "1:1009104734797:web:b7ea5e655fe412b1ab6a04",
  measurementId: "G-DEV4GQJEVM"
};


const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
export const googleProvider=new GoogleAuthProvider();