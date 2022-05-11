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
console.log(10 - "10"); //0  --> 10 - Number("10")4
console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log(true + false); //1
console.log("" - 1); // Number("") --> 0 - 1 = -1
console.log(false - true); //-1
console.log(null + 10); // 10
console.log(NaN + "NaN");



