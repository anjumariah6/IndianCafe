import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyqIuSAaywDrknunbkHVB7XEIdRQPSxgM",
    authDomain: "indiancafe-7a8f1.firebaseapp.com",
    projectId: "indiancafe-7a8f1",
    storageBucket: "indiancafe-7a8f1.firebasestorage.app",
    messagingSenderId: "278941627793",
    appId: "1:278941627793:web:1c5faf1e7aeaa2304a5630",
    measurementId: "G-B0G4V9P04F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };