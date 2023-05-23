// Check if the user is logged in
var email = sessionStorage.getItem("email");
var password = sessionStorage.getItem("password");

let loggedIn = sessionStorage.getItem("loggedin");

if (loggedIn) {
    // Show the profile icon and hide the buttons
    document.getElementById("profileIcon").style.display = "row";
    document.getElementById("registreren").style.display = "none";
    document.getElementById("aanmeldbtn").style.display = "none";
} else {
    // Hide the profile icon and show the buttons
    document.getElementById("profileIcon").style.display = "none";
    document.getElementById("registreren").style.display = "row";
    document.getElementById("aanmeldbtn").style.display = "row";
}