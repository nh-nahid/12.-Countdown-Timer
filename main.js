import './style.css'

const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")


const targetTime = new Date().getTime() + (9 * 24 * 60 * 60 * 1000);

// Update Countdown time

function updateCountdown(){
  const currentTime = new Date();
  const diff = targetTime - currentTime;

  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor(diff/1000/60/60) % 24;
  const m = Math.floor(diff/1000/60) % 60;
  const s = Math.floor(diff/1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);


// const currentYear = new Date().getFullYear();
// const currentMonth = new Date().getMonth();
// const currentDate = new Date().getDate();
// const targetTime = new Date(`${currentMonth + 2} ${currentDate + 1 } ${currentYear} 00:00:00`);
// const targetTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);
