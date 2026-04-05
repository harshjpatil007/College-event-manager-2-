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
function createEvent(){

let name = document.getElementById("eventName").value
let date = document.getElementById("eventDate").value
let venue = document.getElementById("eventVenue").value
let organizer = document.getElementById("eventOrganizer").value

let event = {
name:name,
date:date,
venue:venue,
organizer:organizer
}

let events = JSON.parse(localStorage.getItem("events")) || []

events.push(event)

localStorage.setItem("events",JSON.stringify(events))

alert("Event Created Successfully")

window.location.href="dashboard.html"

}



function loadEvents(){

let events = JSON.parse(localStorage.getItem("events")) || []

let eventList = document.getElementById("eventList")

if(!eventList) return

eventList.innerHTML=""

events.forEach(event => {

let image = "images/default.jpg"

if(event.organizer.toLowerCase().includes("debuggers")){
image = "images/debuggers.jpg"
}

if(event.organizer.toLowerCase().includes("telekinesis")){
image = "images/telekinesis.jpg"
}

let card = document.createElement("div")

card.className="event-card"

card.innerHTML = `
<img src="${image}">
<h3>${event.name}</h3>
<p>Date : ${event.date}</p>
<p>Venue : ${event.venue}</p>
<p>Organizer : ${event.organizer}</p>
`

eventList.appendChild(card)

})

}

window.onload = loadEvents
