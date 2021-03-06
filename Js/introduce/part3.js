"4.5"; //4.5 parseFloat
"4"; // 4 parseInt
// Number(value)  --> number
console.log(Number("4.5"));
console.log(Number("asdasd"));
// NaN: Not a number
console.log(Number(undefined)); //NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(true)); // 1
// falsy values
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
// String(value)  --> String
console.log(String(4.5)); // "4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN)); //"NaN"
console.log(String(false)); //"false"
console.log(String(true)); //"true"

// Boolean(value) --> true or false
console.log(`Boolean of zero: ${Boolean(0)}`); // false
console.log(`Boolean of "": ${Boolean("")}`); // false
console.log(`Boolean of null: ${Boolean(null)}`); // false
console.log(`Boolean of undefined: ${Boolean(undefined)}`); // false
console.log(`Boolean of NaN: ${Boolean(NaN)}`); // false
console.log(`Boolean of false: ${Boolean(false)}`); // false
console.log(`Boolean of text thiep: ${Boolean("Thiệp")}`); // true

//type coercion
// + - * /
// weird
console.log(10 + "10"); //1010
console.log("10" + 10); //1010
console.log(10 + 2); //12
console.log(10 - "10"); //0  --> 10 - Number("10")
console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log(true + false); //1
console.log("" - 1); // Number("") --> 0 - 1 = -1
console.log(false - true); //-1
console.log(null + 10); // 10

// Toán tử so sánh > < >= <=
console.log(5 > 7); // false
console.log(null > 0); //false
console.log(null >= undefined); //false
console.log(6 >= 6); //true

// Toán tử logic cơ bản: && || !
console.log(5 > 7 && 8 >= 8); // false
console.log(5 > 7 || 8 >= 8); //true
const amIWrong = true;
console.log(!amIWrong); // false
// #Boolean && 
// false && true --> false
// false && false --> false
// true && false --> false
// true && true --> true
// #Boolean ||
// false || false --> false
// false || true --> true
// true || false --> true
// true || true --> true

// == loose equality vs === strict equality
console.log("== vs ===");
console.log(10 == 10); //true
console.log(10 == "10"); // "10" == "10" --> true
console.log(true == 1); // Number(true) --> 1 == 1 --> true
console.log(1 == "01"); // Number("01") --> 1 == 01 --> true
console.log(null == ""); // "null" != "" --> false
console.log(10 === "10"); // false (Xét thêm type of)
console.log(10 !== "10"); // true
console.log(10 != "10"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(true == "true"); // Number(true) == 1 != "true" --> false


