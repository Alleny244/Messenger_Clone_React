import firebase from "firebase";
const firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyAA0uO5BkUu8qXoDjIWlCU9vCQGMSs6DnM",
    authDomain: "clone-9dcec.firebaseapp.com",
    databaseURL: "https://clone-9dcec.firebaseio.com",
    projectId: "clone-9dcec",
    storageBucket: "clone-9dcec.appspot.com",
    messagingSenderId: "388838508161",
    appId: "1:388838508161:web:a4663e73181300c5ae6f80",
    measurementId: "G-PT5XZEZHRN"
});
const db=firebase.firestore();
export default db;