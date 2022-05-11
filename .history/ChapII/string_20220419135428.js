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


