document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cbt-quiz-form');
    const feedbackSection = document.getElementById('cbt-feedback');
    const resultMessage = document.getElementById('cbt-result');
    const extraQuestions = document.getElementById('extra-questions');

    // Dynamically add 12 more questions
    for (let i = 4; i <= 15; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <label>${i}. Sample question ${i} (replace with real content).</label>
            <select name="q${i}" required>
                <option value="5">Strongly Agree</option>
                <option value="4">Agree</option>
                <option value="3">Neutral</option>
                <option value="2">Disagree</option>
                <option value="1">Strongly Disagree</option>
            </select>
        `;
        extraQuestions.appendChild(questionDiv);
    }

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get all answers
        const answers = Array.from(form.querySelectorAll('select')).map((select) => parseInt(select.value, 10));

        // Calculate total score
        const totalScore = answers.reduce((sum, value) => sum + value, 0);

        // Provide feedback based on score
        let feedback = '';

        if (totalScore <= 30) {
            feedback = `
                Your score suggests that you have a positive mindset and handle stress well. 
                However, it’s essential to continue practicing self-care to maintain this balance. 
                Engage in activities that bring you joy, and don’t hesitate to seek support when needed.
            `;
        } else if (totalScore <= 60) {
            feedback = `
                Your score indicates that you might be struggling with occasional negative thinking or stress. 
                Consider practicing mindfulness, journaling your thoughts, or trying Cognitive Behavioral Therapy (CBT) techniques 
                to challenge and reframe negative patterns. Make sure to take breaks and talk to someone you trust about your concerns. 
            `;
        } else {
            feedback = `
                Your score suggests significant emotional distress or overwhelming negative thoughts. 
                This is an opportunity to explore ways to regain control. Start by identifying triggers for your feelings and 
                challenging negative beliefs. Practicing deep breathing, talking to a professional counselor, or starting CBT exercises 
                can make a big difference. Remember, it’s okay to seek help—you don’t have to go through this alone.
            `;
        }

        // Display feedback
        feedbackSection.classList.remove('hidden');
        resultMessage.textContent = feedback;
    });
});
