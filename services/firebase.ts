import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQwslRai5qHWuIie0gFQs5ygx-o2lVWMA",
  authDomain: "myportfoliowebsite-2410d.firebaseapp.com",
  projectId: "myportfoliowebsite-2410d",
  storageBucket: "myportfoliowebsite-2410d.appspot.com",
  messagingSenderId: "681329054825",
  appId: "1:681329054825:web:83db414e5065b6ed98bef8"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();