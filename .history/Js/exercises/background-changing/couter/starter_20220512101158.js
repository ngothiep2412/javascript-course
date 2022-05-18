const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const couterNumber = document.querySelector(".counter-number");
let couterValue = parseInt(couterNumber.textContent);
buttonPlus.addEventListener("click", function () {
  couterValue++;
  couterNumber.textContent = couterValue;
});
buttonMinus.addEventListener("click", function () {
  if (couterValue <= 0) {
    return 0;
  }
  couterValue--;
  couterNumber.textContent = couterValue;
});
