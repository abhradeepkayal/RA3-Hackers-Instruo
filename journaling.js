document.addEventListener("DOMContentLoaded", function () {
    const journalingForm = document.getElementById("journaling-form");
    const journalDate = document.getElementById("journal-date");
    const feelingSelect = document.getElementById("feeling");
    const journalEntry = document.getElementById("journal-entry");
    const savedJournal = document.getElementById("saved-journal");

    loadSavedJournals();
    
    journalingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const date = journalDate.value;
        const feeling = feelingSelect.value;
        const entry = journalEntry.value;

        if (date === "" || entry === "") {
            alert("Please fill in all the fields!");
            return;
        }

        const journalData = {
            date: date,
            feeling: feeling,
            entry: entry
        };

        saveJournal(date, journalData);

        journalDate.value = "";
        feelingSelect.value = "happy";
        journalEntry.value = "";

        displaySavedJournal(journalData);
    });

    function saveJournal(date, data) {
        let journals = JSON.parse(localStorage.getItem("journals")) || {};
        journals[date] = data;
        localStorage.setItem("journals", JSON.stringify(journals));
    }

    function loadSavedJournals() {
        const journals = JSON.parse(localStorage.getItem("journals"));
        if (journals) {
            for (const date in journals) {
                displaySavedJournal(journals[date]);
            }
        }
    }

    function displaySavedJournal(data) {
        const journalDiv = document.createElement("div");
        journalDiv.classList.add("journal-entry");
        journalDiv.innerHTML = `
            <h4>${data.date}</h4>
            <p><strong>Feeling:</strong> ${data.feeling}</p>
            <p><strong>Journal Entry:</strong> ${data.entry}</p>
        `;
        savedJournal.appendChild(journalDiv);
    }
});
