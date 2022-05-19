// 1. String, Number, Boolean
// String.prototype, Number.prototype
let str = "abc";
str.toLowerCase();

String.prototype.duplicate = function () {
  return this + this;
};
str.duplicate();
console.log(str.duplicate());

function girl() {
  this.cook = function () {
    console.log("Your girl friend can cook");
  };
}
girl.prototype.sing = function () {
  console.log("Your girl friend can sing");
};
let jane = new girl();
jane.sing();
Object.prototype.makeSandwich = function () {
  console.log("Make sandwich");
};
jane.makeSandwich();
