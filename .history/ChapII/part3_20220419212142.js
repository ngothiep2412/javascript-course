"4.5"; //4.5 parseFloat
"4"; // 4 parseInt
// Number(value)
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
// String(value)
console.log(String(4.5)); // "4.5"
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String(NaN)); //"NaN"


