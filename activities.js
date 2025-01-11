// Pomodoro Timer Logic
let pomodoroTime = 25 * 60; // 25 minutes in seconds
let isPomodoroActive = false;
let pomodoroInterval;

// Motivational Quotes
const quotes = [
    "You are not defined by your struggles. You are defined by your strength to rise, again and again, no matter the storm.",
    "You are stronger than you think, and braver than you believe.",
    "Healing is not a destination, but a journey—a journey that allows you to rebuild stronger than before, one breath at a time.",
    "When the world feels heavy, remember: the darkest night only makes the stars shine brighter.",
    "Asking for help is not a sign of weakness, but a declaration of your strength to face the battle.",
    "Progress is not about perfection but about finding peace in each imperfect step you take."
];

// Start Pomodoro Timer
document.getElementById("start-pomodoro").addEventListener("click", startPomodoro);

function startPomodoro() {
    const pomodoroSound = document.getElementById('pomodoro-sound');
    const alarmSound = document.getElementById('alarm-sound');

    // Play soothing music
    pomodoroSound.play();

    // Disable the start button during Pomodoro
    document.getElementById("start-pomodoro").disabled = true;

    // Start the timer interval
    pomodoroInterval = setInterval(function () {
        if (pomodoroTime <= 0) {
            clearInterval(pomodoroInterval); // Stop timer when it reaches 0
            pomodoroSound.pause();
            pomodoroSound.currentTime = 0;
            alarmSound.play();
            startBreak();
        } else {
            pomodoroTime--; // Decrease time by one second
            updatePomodoroTimeDisplay();
        }
    }, 1000); // Update every second
}

// Update Pomodoro Timer Display
function updatePomodoroTimeDisplay() {
    const minutes = Math.floor(pomodoroTime / 60);
    const seconds = pomodoroTime % 60;
    document.getElementById("pomodoro-time").textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Start Break (Motivational Quote + 5-minute break)
function startBreak() {
    // Stop soothing music and play alarm
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.play();

    // Show Motivational Quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("motivational-quote").innerHTML = `<h3>Break Time: ${randomQuote}</h3>`;

    // 5-minute break (300 seconds)
    setTimeout(function () {
        pomodoroTime = 25 * 60; // Reset timer to 25 minutes
        updatePomodoroTimeDisplay();
        document.getElementById("start-pomodoro").disabled = false; // Enable the start button again
    }, 300000); // 5 minutes break
}

// Breathing Exercise Logic
let breathingStep = 0;

document.getElementById("start-breathing").addEventListener("click", startBreathingExercise);

function startBreathingExercise() {
    breathingStep = 0;
    document.getElementById("breathing-instruction").textContent = "Inhale for 4 seconds...";
    setTimeout(breatheIn, 4000);
}

function breatheIn() {
    breathingStep = 1;
    document.getElementById("breathing-instruction").textContent = "Hold for 7 seconds...";
    setTimeout(holdBreath, 7000);
}

function holdBreath() {
    breathingStep = 2;
    document.getElementById("breathing-instruction").textContent = "Exhale for 8 seconds...";
    setTimeout(exhale, 8000);
}

function exhale() {
    breathingStep = 0;
    document.getElementById("breathing-instruction").textContent = "Inhale for 4 seconds... (Repeat)";
    setTimeout(breatheIn, 4000); // Start next cycle

    if (breathingStep === 3) {
        breathingStep = 0; // Reset after 4 cycles
        document.getElementById("breathing-instruction").textContent = "Breathing exercise complete!";
    }
}
