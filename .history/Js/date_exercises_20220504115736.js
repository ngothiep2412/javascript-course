function getAge(year = 2001) {
  if (typeof year !== "number") return 0;
  // currentYear - year
  const now = new Date();
  const currentYear = now.getFullYear(); // 2022
  return currentYear - year;
}
const yourAge = getAge("sadasd");
console.log(`Tuổi của bạn là: ${yourAge} tuổi`);
