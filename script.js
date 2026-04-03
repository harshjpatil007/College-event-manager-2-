function register(){

let name = document.getElementById("regName").value
let pass = document.getElementById("regPass").value

localStorage.setItem("username",name)
localStorage.setItem("password",pass)

alert("Registration Successful")

}

function login(){

let user = document.getElementById("loginUser").value
let pass = document.getElementById("loginPass").value

let storedUser = localStorage.getItem("username")
let storedPass = localStorage.getItem("password")

if(user==storedUser && pass==storedPass){

window.location.href="dashboard.html"

}

else{

alert("Wrong username or password")

}

}

function showRegister(){

document.getElementById("registerBox").classList.remove("hidden")

}

function showLogin(){

document.getElementById("registerBox").classList.add("hidden")

}
