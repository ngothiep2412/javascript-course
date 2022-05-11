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
console.log(parseFloat(1 / 3).toFixed(2));
console.log(Math.ceil(Math.random() * 10)); //random từ 0 đến 10
// Math.max(1, 3, -5, 100); --> trả ra con số lớn nhất
console.log(`Max: ${Math.max(1, 3, -5, 100)}`);
// Math.min(1, 3, -5, 100); --> trả ra con số nhỏ nhất
console.log(`Min: ${Math.min(1, 3, -5, 100)}`);
// Math.pow(number 1, number 2);  ví dụ number 1 = 1; number 2 = 3 --> 1^3
console.log(Math.pow(2, 3));
// isNaN vs Number.isNaN
// NaN --> Not a Number
console.log(isNaN("This is a String")); //true
console.log(isNaN("12345")); // false  --> isNaN(12345) --> Number("12345")
console.log(Number.isNaN("This is a String")); // false;
console.log(Number.isNaN(NaN)); // true;
console.log(Number.isNaN(36)); // false;



