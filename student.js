import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
    doc,
    getDoc,
    setDoc,
    addDoc,
    getFirestore,
    collection,
    getDocs,
    query,
    where,
  }from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCeuRoiB9TqZ6IURbJ41puCyOLt609h6EE",
    authDomain: "heckathone-af793.firebaseapp.com",
    projectId: "heckathone-af793",
    storageBucket: "heckathone-af793.appspot.com",
    messagingSenderId: "936813467599",
    appId: "1:936813467599:web:32d4d8e618178aea46e4ba",
    measurementId: "G-0W1TRFV19S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const done = document.getElementById("done");
done.addEventListener("click", async () => {
    var name = document.getElementById("name");
    var f_name = document.getElementById("f_name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var cnic = document.getElementById("cnic");
    var course = document.getElementById("course");
    var file = document.getElementById("file");


const docRef = await addDoc(collection (db , "classes"),{
    name : name,
    f_name : f_name,
    email : email,
    phone : phone,
    cnic : cnic,
    course : course,
    file : file,
});

console.log("Document written with ID: ", docRef.id);
});