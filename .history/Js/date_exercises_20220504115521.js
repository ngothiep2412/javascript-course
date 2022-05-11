function getAge(year) {
  // currentYear - year
  const now = new Date();
  const currentYear = now.getFullYear(); // 2022
  return currentYear - year;
}

console.log(getAge(2001));
