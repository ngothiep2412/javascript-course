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
// flatten array
// flat(number)
const result = complexArray.flat(2);
console.log(result);
// Bài tập 3. Đảo ngược số nguyên. Ví dụ: 1234 --> 4321, -567 -->  -765
// Math.sign(123) --> 1
// Math.sign(-123) --> -1
function reverseNumber(number) {
  // convert to String
  // split("") --> [value]
  // reverse
  // join("")
}
