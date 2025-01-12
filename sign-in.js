document.addEventListener("DOMContentLoaded", () => {
    const signInPopup = document.getElementById("sign-in-popup");
    const signInForm = document.getElementById("sign-in-form");

    // Retrieve user details from localStorage
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    if (!userName || !userEmail) {
        // Show sign-in popup if user is not signed in
        signInPopup.style.display = "flex";
    } else {
        // Update UI with signed-in user's info
        updateSignedInUI(userName);
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

        // Store user info in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        alert(`Welcome, ${name}!`);
        signInPopup.style.display = "none";
        updateSignedInUI(name);
    });

    function updateSignedInUI(userName) {
        const profileButton = document.getElementById("profile-button");
        if (profileButton) {
            profileButton.textContent = `Welcome, ${userName}`;
            profileButton.style.display = "block";
        }
    }
});
