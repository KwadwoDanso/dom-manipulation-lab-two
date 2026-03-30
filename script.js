// Get references to the form, inputs, and error spans
const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
let confirmInput = document.getElementById("confirmPassword");

let usernameError = document.getElementById("usernameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let confirmError = document.getElementById("confirmPasswordError");
let successMessage = document.getElementById("successMessage");

// Load saved username from localStorage on page load
let savedUsername = localStorage.getItem("username");
if (savedUsername) {
    usernameInput.value = savedUsername;
}

// Shows an error message and marks the input red
function showError(input, span, message) {
    span.textContent = message;
    input.classList.add("invalid");
    input.classList.remove("valid");
}

// Clears the error message and marks the input green
function clearError(input, span) {
    span.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
}

// Validates the username field
function validateUsername() {
    if (usernameInput.validity.valueMissing) {
        showError(usernameInput, usernameError, "Username is required.");
        return false;
    }
    if (usernameInput.validity.tooShort) {
        showError(usernameInput, usernameError, "Username must be at least 3 characters.");
        return false;
    }
    clearError(usernameInput, usernameError);
    return true;
}

// Validates the email field
function validateEmail() {
    if (emailInput.validity.valueMissing) {
        showError(emailInput, emailError, "Email is required.");
        return false;
    }
    if (emailInput.validity.typeMismatch) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    }
    clearError(emailInput, emailError);
    return true;
}

// Validates the password field
function validatePassword() {
    if (passwordInput.validity.valueMissing) {
        showError(passwordInput, passwordError, "Password is required.");
        return false;
    }
    if (passwordInput.validity.tooShort) {
        showError(passwordInput, passwordError, "Password must be at least 8 characters.");
        return false;
    }
    if (passwordInput.validity.patternMismatch) {
        showError(passwordInput, passwordError, "Password must include an uppercase letter, a lowercase letter, and a number.");
        return false;
    }
    clearError(passwordInput, passwordError);
    return true;
}

// Validates the confirm password field
function validateConfirm() {
    if (confirmInput.validity.valueMissing) {
        showError(confirmInput, confirmError, "Please confirm your password.");
        return false;
    }
    if (confirmInput.value !== passwordInput.value) {
        showError(confirmInput, confirmError, "Passwords do not match.");
        return false;
    }
    clearError(confirmInput, confirmError);
    return true;
}

// Real-time validation as the user types
usernameInput.addEventListener("input", validateUsername);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", function () {
    validatePassword();
    // Re-check confirm if the user has already typed something there
    if (confirmInput.value) {
        validateConfirm();
    }
});
confirmInput.addEventListener("input", validateConfirm);

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Run all validators
    let usernameValid = validateUsername();
    let emailValid = validateEmail();
    let passwordValid = validatePassword();
    let confirmValid = validateConfirm();

    // Focus the first invalid field and stop
    if (!usernameValid) { usernameInput.focus(); return; }
    if (!emailValid) { emailInput.focus(); return; }
    if (!passwordValid) { passwordInput.focus(); return; }
    if (!confirmValid) { confirmInput.focus(); return; }

    // All valid — save username, show success, reset the form
    localStorage.setItem("username", usernameInput.value);
    successMessage.textContent = "Registration successful! Welcome, " + usernameInput.value + ".";

    form.reset();

    // Re-fill username from localStorage after reset
    usernameInput.value = localStorage.getItem("username");

    // Remove valid/invalid styling from all inputs
    let inputs = form.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("valid", "invalid");
    }
});