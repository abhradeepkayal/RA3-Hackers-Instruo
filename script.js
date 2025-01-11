
document.addEventListener('DOMContentLoaded', function() {
    
    const signupTab = document.getElementById('signup-tab');
    const loginTab = document.getElementById('login-tab');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    
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

    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        
        console.log('Sign Up:', { name, email, password });
        
        signupForm.reset();
        alert('Sign Up successful!');
    });

    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        
        console.log('Login:', { email, password });
        
       
        loginForm.reset();
        alert('Login successful!');
    });
});
