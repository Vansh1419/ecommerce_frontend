import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD7PG0vA4m8xAJWSDsSORWV3v04T1KKMoQ",
  authDomain: "ecommerce-7d5e5.firebaseapp.com",
  projectId: "ecommerce-7d5e5",
  storageBucket: "ecommerce-7d5e5.appspot.com",
  messagingSenderId: "61290624173",
  appId: "1:61290624173:web:43b5554ede8171b23b4224"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)