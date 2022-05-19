// 1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); // 2, 1
let a = 1;
let b = ++a;
console.log(a, b);
// 2. lưu ý khi return function
function total(x, y) {
  return; // undefined
  x + y;
}
// 3. 2 cách chuyển đổi dữ liệu mới
const str = "";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);
console.log(!!str);

// 4. arguments
function number(a, b, c) {
  console.log(arguments);
  //   if (!arguments.length) console.log("Please insert your arguments");
  console.log(typeof arguments); //pbject
  const args1 = Array.from(arguments);
  const args2 = [...arguments];

  return a + b + c;
}

number();
// arguments (Đối số): giống như mảng như ko phải mảng

// 5. closure in loop
// var z;

// for (let z = 1; z < 5; z++) {
//   setTimeout(() => {
//     console.log(z); // i = ?
//   }, 1000);
// }
// let -> not hoisting
// let -> scope của nó sẽ thay đổi sau mỗi lần lặp
// var -> hoisting
// scope của var sau mỗi vòng lặp thì nó không thay đổi

// 6. Sự khác nhau giữa localStorage và sessionStorage
// localStorage.getItem("abc") // đóng tab hay tắt trình duyệt vần còn
// sessionStorage.getItem("abc") // đóng tab hay tắt trình duyệt thì mất

// 7. Những trường hợp không nên sử dụng arrow function
// 7.1 Event handlers
// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//   console.log(this.value);
// });
// 7.2 Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(student.increment());

// 8. Đệ quy (recursive)
function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other);
  }
}
countDown(3);
// Maximum call stack size exceeded
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  [
    [2, 3],
    [2, 3, 5],
    [1, 2],
  ],
];
// console.log(complexArr.flat(Infinity));
//a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6]  --> a.conact(b)
//[1,2,3].slice()
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, b) => a.concat(Array.isArray(b) ? flatArray(b, deep - 1) : b),
          []
        )
      : arr.slice();
  return result;
}

// console.log(flatArray(complexArr, Infinity));

// 9. Set
const mySet = new Set();
mySet.add(1);
mySet.add("Thiep");
console.log(mySet);
mySet.has(1); //true
console.log(mySet.has("Thiep"));
mySet.delete("Thiep");
console.log(mySet);
console.log(mySet.size);
mySet.clear();
console.log(mySet);
// Set chứa các unit value giá trị duy nhất
//
const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 6, 7, 8, 9];
// -> [1,2,3,4,5,7,9]
// array to Set
const mySet2 = new Set(arr);
console.log(mySet2);
// for of
for (let item of mySet2) {
  console.log(`item: ${item}`);
}
// Set to array

const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2];
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }
}
console.log(result);

// 10. Debugger in vscode
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    console.log(z); // z = ?
  }, 1000);
}
