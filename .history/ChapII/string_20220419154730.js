// String (chuỗi)
"Hello word";
'I am frontend developer'
// double quotes, single quote, backticks (template literal)

const name = "Thiep";
const job = "fullstack developer";
// console.log(name);
// console.log(typeof name);
const newStr1 = "My name is Thiep and I am frontend developer";
const newStr2 = "My name is " + name + " and I am " + job;
// console.log(newStr2);
// ${variable}
const newStr3 = `My name is ${name} and I am ${job}

I love coding
`;
const newStr4 = "Hello";
console.log(newStr3); 

// length 
console.log(newStr4.length)
// index là vị trí của từng kí tự trong chuỗi, bao gồm cả khoảng trắng 
const myStr = "FullStack Developer";
console.log(myStr.split(" "));
console.log(myStr.split(""));
console.log(myStr.split("/"));
console.log(myStr.toLowerCase());
console.log(myStr.toUpperCase());
console.log(myStr.startsWith("fullStack"));
console.log(myStr.includes("Full"));
console.log(myStr.replace("FullStack", "FrontEnd"));
console.log(myStr.repeat(5));

// slice(start, end);
console.log(myStr.slice(0, 4));
console.log(myStr.slice(0));
console.log(myStr.slice(-5));
console.log(myStr.slice(99999));

// trim là remove khoảng trống left and right
// trimStart() là remove khoảng trống left
// trimEnd() là remove khoảng trống right

console.log(myStr.trim());
console.log(myStr.trimStart());
console.log(myStr.trimEnd());
// chartAt lấy ra kí tự ở vị trí index

console.log(myStr.charAt(0));

//subStr -> Lấy ra 1 phần của chuỗi (string)
// subStr(index, length) -> index: vị trí, length: số lượng kí tự muốn lấy 
console.log(myStr.substr(1, 5));  //ullSt

//subString -> Lấy ra khác kí tự của chuỗi (String)
//subString(start index, end index);
console.log(myStr.substring(1, 5));  //ullS

const myStri3 = " FullStack Developer ";
// Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, thay chữ  Developer thành chữ  Desgined
//, sau đó repeat 2 lần;

console.log(
    myStri3
        .trim()
        .replace("Developer", "Desginer")
        .toUpperCase() 
        .repeat(2)
);
// hoặc ghi

console.log(
`Result of myStr3: ${ myStri3
    .trim()
    .replace("Developer", "Desginer")
    .toUpperCase() 
    .repeat(2)}

`

);





