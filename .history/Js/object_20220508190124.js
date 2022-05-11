// Cách khai báo object
// object literal
const objectLiteral = {};
// object constructor
const objectCOnstructor = new Object();
const student = {
  name: "Thiệp",
  age: 27,
  male: true,
  "last-name": "Ngô",
  hi: function () {
    // gọi là method
    console.log("hello my name is thiệp");
  },
};
// properties
// method
// 2 cách truy xuất giá trị của object
// 2.1 Dot notation object.key
console.log(student.name);
// 2.2 Bracket notation ["key"]
console.log(student["age"]);
// Thay đổi giá trị của Object
student.age = 20;
student.male = false;
student["is-Developer"] = true;
student.hello = function () {
  console.log("hello my name is thiệp");
};
// cách xóa giá trị trong object
delete student["last-name"];
console.log(student);
// for in
for (let key in student) {
  //   console.log(key);
  if (key === "name") {
  }
  console.log(`${key}: ${student[key]}`);
}
