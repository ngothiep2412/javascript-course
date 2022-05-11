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
// Built-in object
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 2, 3, ["javascript"]],
  [888, 66, [90]],
];
// flat
