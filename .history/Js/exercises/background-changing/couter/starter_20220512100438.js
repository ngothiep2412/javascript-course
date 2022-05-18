const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const couterNumber = document.querySelector(".counter-number");
const couterValue = parseInt(couterNumber.textContent);
buttonPlus.addEventListener("click", function () {
  couterValue++;
});
buttonMinus.addEventListener("click", function () {
  couterValue--;
});
