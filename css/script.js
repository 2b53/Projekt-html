// Get the chatbox element
const chatbox = document.getElementById('chatbox');

// Get the register and login forms
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Function to handle register form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  // Send a request to the server to create a new user
  fetch('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('User created successfully!');
      } else {
        alert('Error creating user');
      }
    })
    .catch((error) => console.error(error));
});

// Function to handle login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  // Send a request to the server to authenticate the user
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated) {
        // User is authenticated, show the chatbox
        chatbox.style.display = 'block';
      } else {
        alert('Invalid credentials');
      }
    })
    .catch((error) => console.error(error));
});

// Function to send a message to the chatbox
function sendMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
}

// Example messages to populate the chatbox
sendMessage('Hello!');
sendMessage('How are you?');
sendMessage('I\'m doing great!');