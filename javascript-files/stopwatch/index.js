const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startBtn");
const pauseButton = document.querySelector("#pauseBtn");
const resetButton = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startButton.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});

resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;

    hours = 0;
    minutes = 0;
    seconds = 0;

    timeDisplay.textContent = "00:00:00";
});


function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor(elapsedTime / 1000 % 60);
    minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    hours = Math.floor(elapsedTime / (1000 * 60 * 60) % 60);

    seconds = addZero(seconds);
    minutes = addZero(minutes);
    hours = addZero(hours);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function addZero(num){
        num = num.toString()
        if (num.length < 2) {
            num = 0 + num
        }
        return num
    }
}

