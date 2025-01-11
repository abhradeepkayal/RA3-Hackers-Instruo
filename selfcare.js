document.addEventListener("DOMContentLoaded", function () {
    const selfCareForm = document.getElementById("selfcare-form");
    const selfCareInput = document.getElementById("selfcare-entry");
    const selfCareOutput = document.getElementById("selfcare-output");

    // Check if there's a saved self-care routine
    const savedSelfCare = JSON.parse(localStorage.getItem("selfCareRoutine"));
    if (savedSelfCare) {
        selfCareOutput.innerHTML = `<p><strong>Your saved routine:</strong></p><p>${savedSelfCare}</p>`;
    }

    selfCareForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const selfCareText = selfCareInput.value.trim();
        if (selfCareText) {
            // Store the self-care routine in localStorage
            localStorage.setItem("selfCareRoutine", selfCareText);
            selfCareOutput.innerHTML = `<p><strong>Your saved routine:</strong></p><p>${selfCareText}</p>`;
            selfCareInput.value = ""; // Clear input field
        } else {
            alert("Please write something in your self-care routine.");
        }
    });
});
