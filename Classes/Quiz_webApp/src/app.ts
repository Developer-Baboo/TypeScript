// Define user data array
const users: { email: string; password: string }[] = [
  { email: 'user@example.com', password: 'password123' },
  // Add more user data as needed
];

// Get form and error message element
const registrationForm = document.getElementById('registrationForm') as HTMLFormElement;
const errorMessage = document.getElementById('error-message') as HTMLDivElement;

// Add form submission event listener
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user input values
  const emailInput = document.getElementById('email') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const enteredEmail = emailInput.value;
  const enteredPassword = passwordInput.value;

  // Check if entered email and password match with any user data
  const matchedUser = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

  if (matchedUser) {
    // Login successful
    errorMessage.textContent = '';
    alert('Login successful!');
  } else {
    // Login failed, show error message
    errorMessage.textContent = 'Invalid email or password. Please try again.';
  }
});

