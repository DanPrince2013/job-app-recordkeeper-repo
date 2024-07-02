// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6sxmRP_L1Xcgp1XCzEJcMt9C8a-dc2jA",
  authDomain: "jobapprecorder072024.firebaseapp.com",
  projectId: "jobapprecorder072024",
  storageBucket: "jobapprecorder072024.appspot.com",
  messagingSenderId: "1015079525027",
  appId: "1:1015079525027:web:701d6e02d72e92589d3d16",
  measurementId: "G-8KY5N1VJV9"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.fireStore();

export {db}