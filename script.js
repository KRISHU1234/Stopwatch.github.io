let hours = 0, minutes = 0, seconds = 0;
let intervalId;
let isRunning = false;

function updateDisplay() {
    const display = document.getElementById('time-display');
    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        intervalId = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    isRunning = false;
    updateDisplay();
}
