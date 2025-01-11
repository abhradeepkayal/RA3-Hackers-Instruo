document.getElementById('cbtQuizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question1Answer = document.querySelector('input[name="question1"]:checked');
    const question2Answer = document.querySelector('input[name="question2"]:checked');

    if (question1Answer && question2Answer) {
        let result = 'Your answers suggest that you may benefit from CBT therapy.';
        if (question1Answer.value === 'Often' || question2Answer.value === 'Yes') {
            result = 'You might be experiencing symptoms of anxiety and could consider seeking support.';
        }

        document.getElementById('quizResult').innerText = result;
    } else {
        alert('Please answer all questions.');
    }
});
