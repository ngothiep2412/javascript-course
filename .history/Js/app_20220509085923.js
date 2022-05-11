console.log("hellow word!");

// Biến - Variables
// camelCase --> cuream  --> cuReam
// Ko nên đặt tiếng việt, hoặc có dấu các kí tự đặc biệt các từ hệ thống,

// Delcare variable : Khai báo biến
// const and let
// const ko thể thay đổi đc nữa
const number = 100;
console.log(number);

let otherNumber = 200;
otherNumber = "Welcome to my Javascript course";
console.log(otherNumber);
// Hoisting (cần phải khai báo biến phía trên)
const anotherNumber = true;
let otherValue = undefined;
console.log(anotherNumber);

// const và let ko bị hosting
// var sẽ bị hoisting
// Khi mà khai báo biến mà chưa gán giá trị gì cả ví dụ var a;
// var a; //undefined
// console.log(a);
var a;
console.log(a);
