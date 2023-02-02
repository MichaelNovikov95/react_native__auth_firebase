import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBd92lIMVtEsg7XkqfqoRrUBQv3KU63Fw",
  authDomain: "react-native-auth-3ffae.firebaseapp.com",
  projectId: "react-native-auth-3ffae",
  storageBucket: "react-native-auth-3ffae.appspot.com",
  messagingSenderId: "1068356261811",
  appId: "1:1068356261811:web:74d2fa472485e0700dddc6",
  measurementId: "G-HYC4C3F3LE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
