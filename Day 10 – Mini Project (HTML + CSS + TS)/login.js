"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const messageDiv = document.getElementById('message');
loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (validateEmail(email) && validatePassword(password)) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
    }
    else {
        messageDiv.textContent = 'Invalid email or password.';
        messageDiv.style.color = 'red';
    }
});
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePassword(password) {
    return password.length >= 6;
}
//# sourceMappingURL=login.js.map