// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Cache DOM elements
    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    // Add event listener to toggle between Sign Up and Login forms
    signupTab.addEventListener('click', function() {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    });

    loginTab.addEventListener('click', function() {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    });

    // Add event listener for the Sign Up form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        // Process the signup data (e.g., send it to a server or store locally)
        console.log('Sign Up:', { name, email, password });
        
        // Reset the form
        signupForm.reset();
        alert('Sign Up successful!');
    });

    // Add event listener for the Login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        // Process the login data (e.g., send it to a server for authentication)
        console.log('Login:', { email, password });
        
        // Reset the form
        loginForm.reset();
        alert('Login successful!');
    });
});
