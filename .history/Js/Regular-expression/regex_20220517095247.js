// Regular expression: Biểu thức chính quy
// 1. 2 cách khai báo với Regex
const reg1 = /hello/;
const reg2 = new RegExp("hello");
// hello world
// regex.test(value) --> true or false
console.log(reg1.test("hello world"));
// 2. Anchor ^ $
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
const reg3 = /hi/;
reg3.test("hi"); //true
/hi$/.test("welcome to hi"); // true
/^hi/.test("hi welcome"); // true
/hi$/.test("hi welcome"); // false
/^hi/.test("hello welcome hi"); // false
// 3. ranges []
// [a-z] : kí tự từ a đến z in thường
// [A-Z] : kí tự từ A đến Z in HOA
// [0-9] : các số từ 0 đến 9
// [a-z0-9A-Z] : các số từ 0 - 9 hoặc từ a - z hoặc từ A - Z
/[a-z]/.test("a"); // true
/[a-z]/.test("A"); // false
/[A-Z]/.test("A"); // true
/[A-Z]/.test("a"); // false
/[0-9]/.test("10000"); // true
/[0-9]/.test("10000xyz"); // true
/[0-9]/.test("abc10000xyz"); // true
/[0-9]/.test("abc"); // false
/[a-z0-9A-Z]/.test("123abcA"); // true
/[a-z0-9A-Z]/.test(""); // false
/[^a-z]/.test("a"); // true
