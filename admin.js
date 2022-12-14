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
  var Time = document.getElementById("Time").value;
  var Schedule = document.getElementById("Schedule").value;
  var Teacher = document.getElementById("Teacher").value;
  var Section = document.getElementById("Section").value;
  var Batch = document.getElementById("Batch").value;

  const docRef = await addDoc(collection(db, "classes"), {
    Time: Time,
    Schedule: Schedule,
    Teacher: Teacher,
    Section: Section,
    Batch: Batch,
  });
  console.log("Document written with ID: ", docRef.id);
});

var Teacher = document.getElementById("Teacher");
Teacher.addEventListener("change", async () => {
  const q = query(
    collection(db, "classes"),
    where("Teacher", "==", Teacher.value)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
});

var back = document.getElementById("back").addEventListener("click",()=>{
    window.open("../dashboard.html", "_self");
})