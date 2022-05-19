// Declaration, new, this, method, caution
let student = {
  name: "Thiep",
  age: 21,
};
// Constructor function Person Student
function Student(name, age) {
  // this = {}
  // add properties to this
  this.name = name;
  this.age = age;

  this.getName = function () {
    return `your name is ${this.name}`;
  };
  // return this
}
let student2 = new Student("John", 40);
console.log(student2.getName());
// propotype
