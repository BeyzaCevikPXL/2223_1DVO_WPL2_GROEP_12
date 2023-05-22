//eerst alles inladen, dan pas showen//
window.addEventListener("load", function() {
    var container = document.getElementById("container");
    container.style.visibility = "visible";
    var container_fluid = document.getElementById("container-fluid");
    container_fluid.style.visibility = "visible";

});

// aantal personen geholpen//
window.addEventListener("load", function() {
    var counter = 9885;
    var counterSpan = document.getElementById("counter");

    function incrementCounter() {
        counter++;
        counterSpan.textContent = counter;
    }

    setInterval(incrementCounter, 10000);
});

// Check if the user is logged in
var email = localStorage.getItem("email");
var password = localStorage.getItem("password");
var loggedIn = email && password; // Assume logged in if email and password are present

if (loggedIn) {
    // Show the profile icon and hide the buttons
    document.getElementById("profileIcon").style.display = "block";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
} else {
    // Hide the profile icon and show the buttons
    document.getElementById("profileIcon").style.display = "none";
    document.getElementById("button1").style.display = "block";
    document.getElementById("button2").style.display = "block";
}