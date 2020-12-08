const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const countdown = () => {
  const countdownDate = new Date(getDate());
  const currentDate = new Date();

  const totalSeconds = (countdownDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysDOM.innerHTML = days;
  hoursDOM.innerHTML = formatTime(hours);
  minutesDOM.innerHTML = formatTime(minutes);
  secondsDOM.innerHTML = formatTime(seconds);
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const getDate = () => {
  const dayInput = document.getElementById("select-day").value;
  const monthInput = document.getElementById("select-month").value;
  const yearInput = document.getElementById("select-year").value;

  return `${dayInput} ${monthInput} ${yearInput}`;
};

countdown();
setInterval(countdown, 1000);
