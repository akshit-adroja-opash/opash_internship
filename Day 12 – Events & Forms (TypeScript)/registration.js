var usernameInput = document.getElementById('username');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var registrationForm = document.getElementById('registrationForm');
var phoneInput = document.getElementById('phone');
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    console.log('Registration Details:');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
});
registrationForm.addEventListener('reset', function () {
    console.log('Form has been reset.');
});
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
emailInput.addEventListener('input', function () {
    var email = emailInput.value;
    if (!validateEmail(email)) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    }
    else {
        emailInput.setCustomValidity('');
    }
});
passwordInput.addEventListener('input', function () {
    var password = passwordInput.value;
    if (password.length < 6) {
        passwordInput.setCustomValidity('Password must be at least 6 characters long.');
    }
    else {
        passwordInput.setCustomValidity('');
    }
});
phoneInput.addEventListener('input', function () {
    // 1. Sirf numbers allow karein (Replace non-digits)
    var phone = phoneInput.value.replace(/\D/g, '');
    // 2. Agar length 10 se zyada ho rahi hai, toh use cut kar dein (Slice)
    if (phone.length > 10) {
        phone = phone.slice(0, 10);
    }
    // Input ki value ko update karein
    phoneInput.value = phone;
});
