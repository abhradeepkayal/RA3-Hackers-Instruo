document.addEventListener("DOMContentLoaded", function () {
    const journalForm = document.getElementById("journal-form");
    const journalInput = document.getElementById("journal-entry");
    const journalOutput = document.getElementById("journal-output");

    // Check if there's a saved journal entry
    const savedJournal = localStorage.getItem("journalEntry");
    if (savedJournal) {
        journalOutput.innerHTML = `<p><strong>Your last entry:</strong></p><p>${savedJournal}</p>`;
    }

    journalForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const journalText = journalInput.value.trim();
        if (journalText) {
            // Store the journal entry in localStorage
            localStorage.setItem("journalEntry", journalText);
            journalOutput.innerHTML = `<p><strong>Your last entry:</strong></p><p>${journalText}</p>`;
            journalInput.value = ""; // Clear input field
        } else {
            alert("Please write something in your journal.");
        }
    });
});
