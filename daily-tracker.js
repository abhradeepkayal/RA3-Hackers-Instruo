

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('daily-form');
    const feedbackSection = document.getElementById('feedback');
    const feedbackMessage = document.getElementById('feedback-message');

    
    const lastSubmissionDate = localStorage.getItem('lastSubmissionDate');
    const currentDate = new Date().toLocaleDateString();

    
    if (lastSubmissionDate === currentDate) {
        alert('You have already submitted your Daily Tracker today.');
        return; 
    }

    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const junkFood = document.getElementById('junk-food').value;
        const waterIntake = document.getElementById('water-intake').value;
        const meals = document.getElementById('meals').value;
        const stepsWalked = document.getElementById('steps-walked').value;
        const sportsTime = document.getElementById('sports-time').value || 0; 
        const gymTime = document.getElementById('gym-time').value || 0; 

        
        let score = 0;

        
        if (junkFood === 'yes') {
            score -= 10;
        }

        
        if (waterIntake >= 2) {
            score += 10;
        } else if (waterIntake >= 1) {
            score += 5;
        }

        
        if (meals > 5) {
            score -= 5;
        }

       
        if (stepsWalked >= 10000) {
            score += 15;
        } else if (stepsWalked >= 5000) {
            score += 10;
        } else if (stepsWalked >= 2000) {
            score += 5;
        }

        
        if (sportsTime > 0) {
            score += sportsTime / 10; 
        } else {
            score -= 5; 
        }

        
        if (gymTime > 0) {
            score += gymTime / 5;
        }

        
        let feedback = '';

        if (score >= 30) {
            feedback = 'Great job! Keep up the good work.';
        } else if (score >= 10) {
            feedback = 'Good effort, but there is room for improvement.';
        } else {
            feedback = 'Try to focus on improving your habits for better results.';
        }

        
        feedbackSection.classList.remove('hidden');
        feedbackMessage.textContent = feedback;

        
        localStorage.setItem('lastSubmissionDate', currentDate);
    });
});
