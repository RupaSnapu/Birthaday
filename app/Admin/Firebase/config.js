// Firebase config
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfFLRyDWDFyK84MONBRvuATH50ph15y_Q",
  authDomain: "birthdaysnapu.firebaseapp.com",
  projectId: "birthdaysnapu",
  storageBucket: "birthdaysnapu.appspot.com",
  messagingSenderId: "167811518920",
  appId: "1:167811518920:web:fd30b97a5301f255f430fd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);