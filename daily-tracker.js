// dailytracker.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('daily-form');
    const feedbackSection = document.getElementById('feedback');
    const feedbackMessage = document.getElementById('feedback-message');

    // Get the current date to track submission
    const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
    const currentDate = new Date().toLocaleDateString();

    // Check if user has already submitted today
    if (lastSubmissionDate === currentDate) {
        alert('You have already submitted your Daily Tracker today.');
        return; // Prevent further submission if it's already done today
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Collect answers from form
        const junkFood = document.getElementById('junk-food').value;
        const waterIntake = document.getElementById('water-intake').value;
        const meals = document.getElementById('meals').value;
        const stepsWalked = document.getElementById('steps-walked').value;
        const sportsTime = document.getElementById('sports-time').value || 0; // Default to 0 if empty
        const gymTime = document.getElementById('gym-time').value || 0; // Default to 0 if empty

        // Calculate score based on user answers
        let score = 0;

        // Junk food: minus points if yes
        if (junkFood === 'yes') {
            score -= 10;
        }

        // Water intake: score based on amount (add points for healthy water intake)
        if (waterIntake >= 2) {
            score += 10;
        } else if (waterIntake >= 1) {
            score += 5;
        }

        // Meals: minus points if more than 5
        if (meals > 5) {
            score -= 5;
        }

        // Steps: add points based on steps
        if (stepsWalked >= 10000) {
            score += 15;
        } else if (stepsWalked >= 5000) {
            score += 10;
        } else if (stepsWalked >= 2000) {
            score += 5;
        }

        // Sports: minus points if no, add time if yes
        if (sportsTime > 0) {
            score += sportsTime / 10; // Add points based on time spent in sports
        } else {
            score -= 5; // Minus points for not playing sports
        }

        // Gym: add points based on gym time
        if (gymTime > 0) {
            score += gymTime / 5; // Add points based on gym time
        }

        // Provide feedback based on score
        let feedback = '';

        if (score >= 30) {
            feedback = 'Great job! Keep up the good work.';
        } else if (score >= 10) {
            feedback = 'Good effort, but there is room for improvement.';
        } else {
            feedback = 'Try to focus on improving your habits for better results.';
        }

        // Show feedback
        feedbackSection.classList.remove('hidden');
        feedbackMessage.textContent = feedback;

        // Store the submission date in localStorage
        localStorage.setItem('lastSubmissionDate', currentDate);
    });
});
