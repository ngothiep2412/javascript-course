window.addEventListener("load", function () {
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");
  // Wed May 18 2022 12:37:34 GMT+0700 (Indochina Time)
  function countdown(date) {
    const now = new Date();
    // convert to timestamp
    const startDate = now.getTime();
    const endDate = new Date(date).getTime();
    // time remaining
    const timeRemaining = endDate - startDate;
  }
});
