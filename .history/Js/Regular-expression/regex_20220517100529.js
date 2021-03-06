// Regular expression: Biểu thức chính quy
// 1. 2 cách khai báo với Regex
const reg1 = /hello/;
const reg2 = new RegExp("hello");
// hello world
// regex.test(value) --> true or false
// console.log(reg1.test("hello world"));
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
/[^a-z]/.test("a"); // false
// 4. Meta characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); //true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("1234"); //false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W" ngược lại với \w nó sẽ tương đương [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trắng: space, tab, newline
/\s/.test(" "); // true
// \S: khớp với các kí tự không phải khoảng trắng: space, tab, newline
/\S/.test(" "); // flase
// \n: khớp với newline (xuống hàng )
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n)

// 5. Quantifiers: {n} {n, m} + ? *
// string.match(regex) "abc".match(/\w/) --> []
// {n}: số lượng nhất định
// {n,m}: sớ lượng trong khoảng từ n đến m
// +: Lấy 1 hoặc nhiều kí tự thỏa điều kiện
const str1 = "Welcome to 2022123123213abc";
console.log(str1.match(/\d\d\d\d/)[0]);
console.log(str1.match(/\d{4}/)[0]);
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour ?";
console.log(str2.match(/color/)[0]);
