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
    docRef,
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


// const docRef = await addDoc(collection (db , "classes"),{
//     name : name,
//     f_name : f_name,
//     email : email,
//     phone : phone,
//     cnic : cnic,
//     course : course,
//     file : file,
// });

console.log("Document written with ID: ", docRef.id);

});




// onAuthStateChanged(auth, (user) => {
//     if (user) {
//     const uid = user.uid;
//     // ...
//     } else {
//         window.location = "./index.html";
//     }
//     });





// onAuthStateChanged(auth, (user) => {
//     if (user) {
//     const uid = user.uid;
//     // ...
//     } else {
//         window.location = "./index.html";
//     }
//     });



// signout.addEventListener("click", () => {
//     signOut(auth).then(async () => {
//         // Sign-out successful.
//         await swal("Signout Succesfull", "", "success");
//         window.location = "./index.html";
//     }).catch((error) => {
//         // An error happened.

//     });
// });



async function getData(user) {
    let allClasses = collection(db, "classDetail");
    const docSnaps = await getDocs(allClasses)
        .then((items) => {
            items.docs.forEach(doc => {
                console.log(doc.data());
                section.innerHTML = section.innerHTML +

                    `
                <option value="${doc.data().name +"  "+ doc.data().f_name +"  "+ doc.data().email +"  " + doc.data().phone +"  "  + doc.data().cnic +"  " + doc.data().course + doc.data().file+"  "}">${doc.data().TeacherName} ${doc.data().timing} ${doc.data().schedules} ${doc.data().courseName}</option>
                `
                
                
            });
        })


}

getData()


button.addEventListener("click", async () => {
    // console.log(name.value);
    // console.log(father.value);
    // console.log(rollNumber.value);
    // console.log(contact.value);
    // console.log(cnic.value);
    // console.log(picture.files);
    // console.log(courseName.value);
    // console.log(section.value);
    console.log(section.value);


    let file = profile.files[0];
    let imageRef = ref(storage, `images/${file.name}`);

    let uploaded = await uploadBytes(imageRef, file);
    let url = await getDownloadURL(imageRef);
    console.log(url, 'downloadable URL');

    console.log("upload called", profile.files[0]);




    let allClasses = collection(db, "classDetail");
    const docSnaps = await getDocs(allClasses)
        .then((items) => {
            items.docs.forEach(doc => {
                // console.log(doc.data());
            });
        })










    let studentDetail = collection(db, "studentDetail");
    await addDoc(studentDetail, { Name: name.value, FatherName: father.value, rollNumber: rollNumber.value, contact: contact.value, cnic: cnic.value, picture: url, courseName: courseName.value, section: section.value });
    name.value = "";
    f_name.value = "";
    email.value = "";
    phone.value = "";
    cnic.value = "";
    course.value = "";
    

    swal("Good job!", "New Class Added!", "success");
})