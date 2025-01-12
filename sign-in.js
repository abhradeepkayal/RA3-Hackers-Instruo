document.addEventListener("DOMContentLoaded", () => {
    const signInPopup = document.getElementById("sign-in-popup");
    const signInForm = document.getElementById("sign-in-form");
    const profileButton = document.getElementById("profile-button");

    
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    
    if (userName) {
        signInPopup.style.display = "none"; 
        updateSignedInUI(userName); 
    } else {
        signInPopup.style.display = "flex"; 
    }

    
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();

        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        
        alert(`Welcome, ${name}!`);
        signInPopup.style.display = "none";

       
        updateSignedInUI(name);
    });

    
    function updateSignedInUI(userName) {
        if (profileButton) {
            profileButton.textContent = `Welcome, ${userName}`;
            profileButton.style.display = "block"; 
        }
    }
});
