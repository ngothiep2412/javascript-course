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
function countdown(minutes = 1) {
  let seconds = minutes * 60;
  let counter = 0;
  const timer = setInterval(function () {
    counter = counter + 1;
    console.log(counter);
    if (counter == seconds) {
      clearInterval(timer);
      console.log("Your time is end!");
    }
  }, 1000);
}
// Bài tập 3
function timeSince(date) {
  // currentTime - date
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  let timer = seconds / 31536000;
  console.log(timer);
  if (timer > 1) {
    console.log(`${timer} năm trước`);
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(`${timer} tháng trước`);
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(`${timer} tuần trước`);
  }
}
timeSince("Wed May 04 2022 15:55:00 GMT+0700 (Indochina Time)");
