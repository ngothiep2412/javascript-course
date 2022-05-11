// 1. Viết 1 function kiểm tra value có phải là object hay không ?
// typeOf value === "object"
// {} [] null cũng là object
function isObject(value) {
  if (typeof value === "object") {
    return true;
  }
  return false;
}
console.log(isObject({}));
