window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  // Wed May 18 2022 12:37:34 GMT+0700 (Indochina Time)
  function countdown(date) {
    const now = new Date();
    // convert to timestamp
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    // time remaining
    const timeRemaining = parseInt((endDate - startDate) / 1000);
    console.log(timeRemaining);
  }
  countdown("Wed May 25 2022 12:37:34 GMT+0700 (Indochina Time)");
});
