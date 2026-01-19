"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registrationForm = document.getElementById('registrationForm');
const phoneInput = document.getElementById('phone');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log('Registration Details:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
});
registrationForm.addEventListener('reset', function () {
    console.log('Form has been reset.');
});
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    }
    else {
        emailInput.setCustomValidity('');
    }
});
passwordInput.addEventListener('input', function () {
    const password = passwordInput.value;
    if (password.length < 6) {
        passwordInput.setCustomValidity('Password must be at least 6 characters long.');
    }
    else {
        passwordInput.setCustomValidity('');
    }
});
phoneInput.addEventListener('input', function () {
    // 1. Sirf numbers allow karein (Replace non-digits)
    let phone = phoneInput.value.replace(/\D/g, '');
    // 2. Agar length 10 se zyada ho rahi hai, toh use cut kar dein (Slice)
    if (phone.length > 10) {
        phone = phone.slice(0, 10);
    }
    // Input ki value ko update karein
    phoneInput.value = phone;
});
//# sourceMappingURL=registration.js.map