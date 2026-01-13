const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
const messageDiv = document.getElementById('message') as HTMLDivElement;

loginButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (validateEmail(email) && validatePassword(password)) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Invalid email or password.';
        messageDiv.style.color = 'red';
    }
});
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password: string): boolean {
    return password.length >= 6;
}               

                    