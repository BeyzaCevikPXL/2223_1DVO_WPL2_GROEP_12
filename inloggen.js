// const emailInput = document.getElementById('email-input');
// const passwordInput = document.getElementById('password-input');
// const loginButton = document.getElementById('login-button');
//
// loginButton.addEventListener('click', logIn);
//
// function logIn() {
//     const email = emailInput.value;
//     const password = passwordInput.value;
//
//     if(email === "test@test.be" && password === "test1234"){
//         localStorage.setItem("loggedin","true");
//     }
//
//     if (email === '' || password === '') {
//         alert('Vul alles in!');
//         return;
//     }
//     window.location.href = 'accountarbeider.html';
// }
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;


    // Save the email and password in local storage
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // Redirect to the dashboard page
    window.location.href = "accountarbeider.html";
});