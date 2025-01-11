document.addEventListener("DOMContentLoaded", function () {
    const trackerForm = document.getElementById("daily-form");
    const junkFoodSelect = document.getElementById("junk-food");
    const waterInput = document.getElementById("water-intake");
    const mealsInput = document.getElementById("meals");
    const stepsInput = document.getElementById("steps-walked");
    const sportsInput = document.getElementById("sports-time");
    const gymInput = document.getElementById("gym-time");

    // Check if there's stored daily tracker data
    const storedTracker = JSON.parse(localStorage.getItem("dailyTracker"));
    if (storedTracker) {
        // Fill the form with stored values
        junkFoodSelect.value = storedTracker.junkFood;
        waterInput.value = storedTracker.waterIntake;
        mealsInput.value = storedTracker.meals;
        stepsInput.value = storedTracker.stepsWalked;
        sportsInput.value = storedTracker.sportsTime || "";
        gymInput.value = storedTracker.gymTime || "";
    }

    trackerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const dailyData = {
            junkFood: junkFoodSelect.value,
            waterIntake: waterInput.value,
            meals: mealsInput.value,
            stepsWalked: stepsInput.value,
            sportsTime: sportsInput.value,
            gymTime: gymInput.value
        };

        // Store the daily tracker data in localStorage
        localStorage.setItem("dailyTracker", JSON.stringify(dailyData));

        alert("Your daily tracker data has been saved!");
    });
});
