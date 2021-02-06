import firebase from 'firebase/app'; 
import 'firebase/firestore'; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9fy_9etVvWBD42vG2C2Rs0JJrAkjc-30",
    authDomain: "frontline-deals.firebaseapp.com",
    projectId: "frontline-deals",
    storageBucket: "frontline-deals.appspot.com",
    messagingSenderId: "675416482742",
    appId: "1:675416482742:web:29102e5b7b7caa053f5717",
    measurementId: "G-01SJ3YRHQK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Database 
export const db = firebase.firestore()

export default firebase; 