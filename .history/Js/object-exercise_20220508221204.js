// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeOf value === "object"
// {} [] null cũng là object
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
//{}
// plain object --> true else return false
console.log(isObject({}));
// 2. {a: 1, b: 2} --> [{"a"}, 1], [{"b"}, 2]
