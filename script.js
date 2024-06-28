const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millesecondsEl = document.querySelector("#milleseconds");
const btnStartEl = document.querySelector("#btn_Start");
const btnPauseEl = document.querySelector("#btn_Pause");
const btnResetEl = document.querySelector("#btn_Reset");
const btnResumeEl = document.querySelector("#btn_Stop");

let interval;
let minutes = 0;
let seconds = 0;
let milleseconds = 0;
let isPaused = false;

btnStartEl.addEventListener("click", startTimer);
btnPauseEl.addEventListener("click", pauseTimer);
btnResumeEl.addEventListener("click", resumeTimer);
btnResetEl.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milleseconds += 10;
      if (milleseconds === 1000) {
        seconds++;
        milleseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millesecondsEl.textContent = formatMilleseconds(milleseconds);
    }
  }, 10);

  btnStartEl.style.display = "none";
  btnPauseEl.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  btnPauseEl.style.display = "none";
  btnResumeEl.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  btnPauseEl.style.display = "block";
  btnResumeEl.style.display = "none";
}

function resetTimer() {
  minutes = 0;
  seconds = 0;
  milleseconds = 0;

  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
  millesecondsEl.textContent = "000";

  btnStartEl.style.display = "block";
  btnPauseEl.style.display = "none";
  btnResumeEl.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilleseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
