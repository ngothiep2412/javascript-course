// Mảng
const a = "a";
const b = "b";

// 2 cách tạo mảng
// array literal
// const students1 = ["thiep", "nam", "lam", "duc", "khoi"];
// array constructor
const students2 = new Array();
// Ví dụ một mảng
// Mảng phức tạp [0, false, undefined, null, String, ["thiep", false, 200, [] ] ]
// Mảng đơn giản [0, false, undefined, null, String]

// [1,2,3,4,5] ["a", "b", "c"] [false, true, true]
// []: empty array --> mảng rỗng
const students = ["thiep", "nam", "lam", "duc", "khoi"];
// index: vị trí của phần tử (giá trị) trong mảng và bắt đầu từ 0
// length: độ dài của mảng, nó đếm từ 1
// truy xuất trong mảng --> students[index]
console.log(students[0]);
console.log(students[5]); // undefined
// Lấy phần tử cuối cùng trong mảng = độ dài của mảng - 1 --> array.length - 1
console.log(students[students.length - 1]);
// students.length = 0;
// console.log(students);
// []: empty array, mảng rỗng
// Phương thức hay dùng của mảng nên biết
//arrayName.method
// length --> trả về độ dài của mảng
console.log(students.length);
// reverse --> Đảo ngược giá trị trong mảng
console.log(students.reverse());
// join --> nối các phần tử trong mảng thành chuỗi
console.log(students.join());
console.log(students.join(" "));
// includes --> Kiểm tra mảng đó có chứa phần tử nào đó không
console.log(students.includes("thiep")); //true
