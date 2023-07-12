// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljHwQOe8yYYV0UXiqv8RyCKKYvalZmY8",
  authDomain: "market-for-house.firebaseapp.com",
  projectId: "market-for-house",
  storageBucket: "market-for-house.appspot.com",
  messagingSenderId: "137105990938",
  appId: "1:137105990938:web:f02ba62cdf11ef5216f8a3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
