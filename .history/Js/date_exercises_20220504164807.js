// Bài tập 1:
function getAge(year = 2001) {
  if (typeof year !== "number") return 0;
  // currentYear - year
  const now = new Date();
  const currentYear = now.getFullYear(); // 2022
  return currentYear - year;
}
const yourAge = getAge("sadasd");
console.log(`Tuổi của bạn là: ${yourAge} tuổi`);

// Bài tập 2:
function countdown(minutes = 30) {
  let seconds = minutes * 60;
  let counter = 0;
  const timer = setInterval(function () {}, 1000);
}
