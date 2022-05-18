window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  // Wed May 18 2022 12:37:34 GMT+0700 (Indochina Time)
  function countdown(date) {
    let days, hours, minutes, seconds;
    const now = new Date();
    // convert to timestamp
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    // time remaining
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    console.log(timeRemaining);
    // 1 ngay = 24 gio * 60 * 60 = 86400;
    days = parseInt(timeRemaining / 86400);
    timeRemaining = timeRemaining % 86400;
    hours = parseInt(timeRemaining / 3600);
    timeRemaining = timeRemaining % 3600;
    minutes = parseInt(timeRemaining / 60);
    daysText.textContent = days;
    hoursText.textContent = hours;
    minutesText.textContent = minutes;
  }
  countdown("Wed May 25 2022 12:37:34 GMT+0700 (Indochina Time)");
});
