// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPAFhdoWXGI9cqZC1JIwu5iDZ65x1pjCQ",
  authDomain: "qpay-808ce.firebaseapp.com",
  projectId: "qpay-808ce",
  storageBucket: "qpay-808ce.appspot.com",
  messagingSenderId: "927213830984",
  appId: "1:927213830984:web:14fef0ea030873b22e697d",
  measurementId: "G-0DJGZ5KDX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);