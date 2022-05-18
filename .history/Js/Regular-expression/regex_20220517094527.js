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
/hi$/.test("welcome to hi");
