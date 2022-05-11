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
  // reverse()
  // join("")
  // convert to Number
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
reverseNumber(-1234);
// Bài tập 4
function fizzBuzz(number) {
  if (!number) {
    return 0;
  }
  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 2 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Buzz");
    } else if (i % 2 == 0) {
      console.log("Fizz");
    }
  }
}

fizzBuzz(15);
// Bài tập 5
function countVowels(aString) {
  let count = 0;
  const characters = "ueoai";
  for (let c of aString) {
    if (characters.includes(c)) count = count + 1;
  }
  return count;
}
console.log("evodev");
