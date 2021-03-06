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
    console.log("hello name");
  }
  const value = student[key];
  console.log(`${key}: ${value}`);
}

// Object.keys() --> trả về 1 mảng chứa tất cả các keys của object
const key = Object.keys(student);
console.log(key);
console.log(key.length);
// Object.values() --> trả về 1 mảng chứa tất cả các giá trị của object
const value = Object.values(student);
console.log(value);
// Object.entris(object) --> trả về 1 mảng nested (["name", "Thiệp"],["age", 20]) gốm có key và value
const entries = Object.entries(student);
console.log(entries);
// Obejct.assign()
const a = {
  firstName: "Thiệp",
};
const b = {
  lastName: "Ngô",
};
const c = Object.assign(a, b);
console.log(c);
const d = { ...a, ...b };
console.log(d);
// Object.freeze() --> ngăn chặn chỉnh sửa key và value của object
const car = {
  name: "BMW",
};
const newCar = Object.freeze(car);
newCar.name = "Audi";
console.log(car);
// Object.seal(object) --> cho phép chỉnh sửa key value nhưng không được thêm value mới
const user = {
  userName: "Thiệp",
  school: {
    name: "FPT-University",
    room: {
      name: "SE",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "Ngô Thiệp";
// newUser.age = 30;
// console.log(newUser);
// [...array] {...object}
const newUser = { ...user };
newUser.userName = "NgoXuanThiep";
console.log(user);
console.log(newUser);
// Object.assgin
const newUser2 = Object.assign({}, user);
console.log(newUser2);
// clone nested object
const newUser3 = JSON.parse(JSON.stringify(user));
console.log(newUser3);
newUser2.school.name = "HUFLIT";
console.log(newUser2);

// this keyword
// this nó sẽ đề cập đến object gần nhất
const student2 = {
  name: "Thiệp",
  age: 21,
  male: true,
  "last-name": "Ngô",
  hi: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  },
  fullName: {
    name: "Ngô Xuân Thiệp",
  },
};
student2.hi();

// optional chanining
// console.log(student2.fullName);
if (student2.fullName) {
  if (student2.fullName.name) {
    console.log(student2.fullName.name);
  }
}

// student2.fullName?.name
console.log(student2.fullName?.name);

//destructuring object
const { name, age, male, ...rest } = student2;
console.log(name, age, male);
// const name = student2.name;
// const age = student2.age;
// const male = student2.male;
// NORMAL FUNCTION
// function whatYourInfo(name, male, age, school) {
//   console.log(name, age, school);
// }
// function with object parameter
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  age: 22,
  name: "Thiệp",
  school: "FPT",
};
whatYourInfo(newObj);
// object destructuring parameter
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  name: "Thiệp",
  age: 18,
  school: "Thống Nhất A",
});
