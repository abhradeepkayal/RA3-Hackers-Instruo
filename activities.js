document.addEventListener("DOMContentLoaded", function () {
    const activityForm = document.getElementById("activity-form");
    const activityInput = document.getElementById("activity-type");
    const timeInput = document.getElementById("activity-time");
    const activityOutput = document.getElementById("activity-output");

    // Check if there are saved activities
    const savedActivities = JSON.parse(localStorage.getItem("activities"));
    if (savedActivities && savedActivities.length > 0) {
        activityOutput.innerHTML = savedActivities.map(activity => `<li>${activity.type} for ${activity.time} minutes</li>`).join("");
    }

    activityForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const activityType = activityInput.value.trim();
        const activityTime = timeInput.value.trim();

        if (activityType && activityTime) {
            const newActivity = { type: activityType, time: activityTime };
            const currentActivities = savedActivities || [];
            currentActivities.push(newActivity);

            // Store updated activities list in localStorage
            localStorage.setItem("activities", JSON.stringify(currentActivities));

            activityOutput.innerHTML = currentActivities.map(activity => `<li>${activity.type} for ${activity.time} minutes</li>`).join("");
            activityInput.value = "";
            timeInput.value = "";
        } else {
            alert("Please enter both activity and time.");
        }
    });
});
