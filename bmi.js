document.addEventListener("DOMContentLoaded", function () {
    const bmiForm = document.getElementById("bmi-form");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const bmiResult = document.getElementById("bmi-result");
    const adviceOutput = document.getElementById("advice");

    bmiForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; 

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height values.");
            return;
        }

       
        const bmi = (weight / (height * height)).toFixed(2);

        
        bmiResult.innerHTML = `<h3>Your BMI: ${bmi}</h3>`;

        
        let advice = "";
        if (bmi < 18.5) {
            advice = "Your BMI is considered underweight. It's important to eat a balanced diet and consult a healthcare provider for advice.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            advice = "Your BMI is considered normal. Keep up the good work with maintaining a healthy lifestyle!";
        } else if (bmi >= 25 && bmi <= 29.9) {
            advice = "Your BMI is considered overweight. Try to incorporate regular physical activity and a balanced diet into your routine.";
        } else {
            advice = "Your BMI is considered obese. It's recommended to consult a healthcare provider for personalized advice on diet and exercise.";
        }

        
        adviceOutput.innerHTML = `<p><strong>Health Advice:</strong> ${advice}</p>`;
    });
});
