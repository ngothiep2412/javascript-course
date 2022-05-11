// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectCOnstructor = new Object();
const student = {
  name: "Thiep",
  age: 27,
  male: true,
  hi: function () {
    // gọi là method
    console.log("hello my name is thiệp");
  },
};
// properties
// method
// 2 cách truy xuất giá trị của object
// 2.1 Dot notation .
student.name;
