import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDTOuWSpcawz0yOMoVkosrIfpYQHy5lBJo",
    authDomain: "clone-99e4a.firebaseapp.com",
    projectId: "clone-99e4a",
    storageBucket: "clone-99e4a.appspot.com",
    messagingSenderId: "273104756536",
    appId: "1:273104756536:web:944ea07d53ac2022cd6bcd",
    measurementId: "G-QGFR9QPRCS"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}