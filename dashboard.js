
function Button1(){
    window.open("admin.html", "_self")
}

function Button2(){
    window.open("student.html", "_self");
}

function button3(){
   window.open("attendence.html" , "_self")
}

function logout(){
const logout = document.getElementById("logout")
logout.addEventListener("click" , logout)
window.open("../index.html" , "_self")
}