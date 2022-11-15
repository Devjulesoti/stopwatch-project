let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hours");

let second = 00;
let minute = 00;
let hour = 00;
let interval;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    second++;
    if (second <= 9) {
      seconds.innerHTML = "0" + second;
    }
    if (second > 9) {
      seconds.innerHTML = second;
    }
    if (second > 99) {
      minute++;
      minutes.innerHTML = "0" + minute;
      second = 0;
      seconds.innerHTML = "00";
    }
    if (minute > 9) {
      minutes.innerHTML = minute;
    }
    if (minute > 59) {
      hour++;
      hours.textContent = "0" + hour;
      minute = 0;
      minutes.textContent = "00";
    }
    if (hour > 9) {
      hours.textContent = hour;
    }
  }, 10);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  minute = 0;
  second = 0;
  hour = 0;
  minutes.textContent = "00";
  seconds.textContent = "00";
  hours.textContent = "00";
});
