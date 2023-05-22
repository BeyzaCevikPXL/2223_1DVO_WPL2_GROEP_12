/*// HTML elements
const voornaamInput = document.getElementById('voornaam');
const achternaamInput = document.getElementById('achternaam');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signUpButton = document.getElementById('sign-up');
const radioChecked = document.getElementById('akkoord_registreren')
const radioLabel = document.getElementById('tekst_akkoord_registreren')

signUpButton.addEventListener('click', signUp);

function uncheckRadio() {
    const radioButtons = document.getElementsByName('option');

    radioButtons.forEach(radioButton => {
        radioButton.checked = false;
    });
}
function validateForm(event) {
    const hiddenInput = document.getElementById('acceptTermsHidden');
    const acceptTermsRadio = document.querySelector('input[name="acceptTerms"]:checked');

    if (acceptTermsRadio) {
        hiddenInput.value = acceptTermsRadio.value;
    } else {
        event.preventDefault(); // Prevent form submission
        alert('Please accept the terms and conditions.');
    }
}
function signUp() {
    const voornaam = voornaamInput.value;
    const achternaam = achternaamInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (voornaam === '' || achternaam === '' || email === '' || password === '' || email === '') {
        alert('Vul alles in!');
        return;
    }
    if (password !== length(8)) {
        alert('Wachtwoord komt niet overeen!');
        return;
    }
    if (password !== confirmPassword) {
        alert('Wachtwoord komt niet overeen!');
        return;
    }

    window.location.href = 'index.html';
}*/
function validateForm(event) {
    event.preventDefault();
    // Retrieve form inputs
    var voornaam = document.getElementById("voornaam").value;
    var naam = document.getElementById("achternaam").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var checkbox = document.getElementById("akkoord_registreren").checked;

    // Validate inputs
    if (voornaam === "" || naam === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Vul gelieve alles in.");
        return false;
    }

    if (password.length < 8) {
        alert("Wachtwoord moet 8 tekens lang zijn.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Wachtwoorden komen niet overeen.");
        return false;
    }

    if (!checkbox) {
        alert("Gelieve het vereiste vakje aan te vinken.");
        return false;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = "index.html";
}