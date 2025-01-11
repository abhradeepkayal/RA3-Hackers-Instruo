const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');

bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100; 
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        bmiResult.textContent = "Please enter valid numbers!";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    bmiResult.textContent = `Your BMI is ${bmi} - ${category}`;
});


const trackerForm = document.getElementById('tracker-form');

trackerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const junkFood = document.getElementById('junk-food').value;
    const waterIntake = parseFloat(document.getElementById('water-intake').value);
    const stepsWalked = parseInt(document.getElementById('steps-walked').value);

    if (isNaN(waterIntake) || isNaN(stepsWalked)) {
        alert("Please enter valid numbers!");
        return;
    }

    alert(`Tracker submitted!\nJunk Food: ${junkFood}\nWater Intake: ${waterIntake} liters\nSteps Walked: ${stepsWalked}`);
});
