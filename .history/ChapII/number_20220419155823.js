 // Số nguyên: 1 2 3 99 33 444
 // Số thập phân: 3,4 5,8 1,2 --> 1.2 5.8
 console.log(5 + 7);
 console.log(typeof(5 + 7));
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1));
console.log(parseFloat(number2));
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3));
// Math.floor(value) --> Làm tròn xuống ví dụ: 4,3 --> 4
console.log(Math.floor(number2));
// Math.ceil(value) --> Làm tròn lên ví dụ: 4,3 --> 5
console.log(Math.ceil(number2));
// Math.round(value) --> Làm tròn gần nhất ví dụ 4,3 --> 4
console.log(Math.round(number2));

console.log(1 / 3);
// toFixed(number) ví dụ: 0.3333333 -> 0.33
// toFixed(2);
console.log((1 / 3).toFixed(2));