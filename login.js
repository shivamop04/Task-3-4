document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])[^@]*$/;

  if (!emailPattern.test(email)) {
    showError('Please enter a valid email address.');
  }
   else if (password !== 'SmartServTest@123') {
    showError('Incorrect username or password.');
    } else {
    window.location.href = 'dashboard.html';
  }
});

function showError(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
}

function isValidPassword(password) {
  const specialChar = /[@]/;
  const hasSpecialChar = specialChar.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasSpecialChar && hasUpperCase && hasNumber;
}
