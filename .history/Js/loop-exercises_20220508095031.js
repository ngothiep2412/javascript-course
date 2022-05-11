// Bài tập 1
const array = [
  1,
  1000,
  false,
  null,
  "thiep",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
// new Boolean
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);
