import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBJgQ_SbICUHKiEToJyZ8EZSP-RoZriLus",
    authDomain: "vue-blog-8855a.firebaseapp.com",
    projectId: "vue-blog-8855a",
    storageBucket: "vue-blog-8855a.appspot.com",
    messagingSenderId: "3871107586",
    appId: "1:3871107586:web:8cadfef5c15705ace1d51b"
  };
 
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
export { db,serverTimestamp};