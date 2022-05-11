// function(hàm)
// Khai báo function
// Cú pháp(Syntax): function functionName(parameter, parameters) {
// your code here
// }
// parameter là tham số
// Đề bài viết hàm tính tổng 2 số a và b
function sum(a, b = 0) {
  // console.log("Is it working ?");
  console.log(a, b);
  return a + b;
  // return
  // return value
  // Không có return thì kết quả trả về là undefined
}
// function sum(parameter = defaultValue) {}
// sum(): invoke function
console.log(sum(5));
console.log(sum(500, 1000));
// invoke function sum(arguments) Đối số
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
// add(5, 1000);
const sum2 = add; // gán function add cho biến sum2 nhưng chưa đc gọi
// sum2(300, 400);
// Tham số là function
// Tính trung bình của a và b --> (a + b) / 2
// fn: function
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}

let result = average(200, 300, sum2);
console.log(`Result: ${result}`);
// Anonymous function (function expression)
// Function declaration
// Không bị hoisting
const logName = function () {
  console.log("Your Name:");
};
logName();
// IIFE --> Immediately invoked function execution
(function () {
  console.log("This is IIFE function");
})();
// Scope
// Global scope, function scope
let myName = "evondev"; //global scope
function logYourName() {
  let myName2 = myName; // function scope
  console.log(myName);
}
logYourName();
// var message;
let message;
if (2 > 1) {
  // block scope
  // let message = "Hello Thiep";
  // const message = "Hello Thiep";
  // global scope
  // hoisted
  message = "Hello Ream";
}

// alert(message);

// Lexical scope
let aNewName = "Evondev"; // Global scope
function sayHello() {
  let message5 = "Hi"; // block scope
  console.log(`${message5} ${aNewName}`);
}
sayHello();
// Closure
// Function con có thể truy xuất scope của function cha
// parent function
// function sayHello2() {
//   // parent function
//   let message = "Hi";
//   function sayHi() {
//     //inner function
//     console.log(message);
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message) {
  return function hiYourName(name) {
    console.log(`${message} ${name}`);
  };
}
let hello = sayHello3("Welcome to Javascript");
hello("Closure");
function anotherFunction() {
  let otherMessage = "hello";
}
