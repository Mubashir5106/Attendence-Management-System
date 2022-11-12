import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCeuRoiB9TqZ6IURbJ41puCyOLt609h6EE",
    authDomain: "heckathone-af793.firebaseapp.com",
    projectId: "heckathone-af793",
    storageBucket: "heckathone-af793.appspot.com",
    messagingSenderId: "936813467599",
    appId: "1:936813467599:web:32d4d8e618178aea46e4ba",
    measurementId: "G-0W1TRFV19S"
};
import {
    doc, getDoc, getFirestore, query, collection, where, getDocs, addDoc, updateDoc, onSnapshot, orderBy
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
let email;
let password;
async function Login() {
    let login_email = document.getElementById("login_email").value
    let login_password = document.getElementById("login_password").value
    const docRef = doc(db, "admin", "V17KFHQmndNHuMsd910w");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        if(login_email == docSnap.data().email && login_password == docSnap.data().password){
            window.open("dashboard.html","_self")
        }
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}
let login_btn = document.getElementById("login_btn")
login_btn.addEventListener("click", Login)