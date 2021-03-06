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
// 2. {a: 1, b: 2} --> [[{"a"}, 1], [{"b"}, 2]]
function objectToArray(object) {
  if (!isObject(object)) {
    return;
  }
  //   return Object.entries(object);
  // [a, b]
  // object[key]
  //   const value = Object.keys(object).map((item) => [item, object[item]]);
  //   return value;
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) --> nếu object chứa key return trả về true ngược lại trả flase
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));
// 3. ({a: 1, b: 2}, 'b') => {a: 1}
function without(object, ...key) {
  const newObject = { ...object };
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
  //   delete object[key];
  //   return object;
}
console.log(without({ a: 1, b: 2 }, "c"));

// 4. {a: 1, b: 2}, {a: 1, b: 2} --> true
//    {a: 1, b: 2}, {a: 1, b: 2, c: 3} --> false
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  const objectKey1 = Object.keys(obj1);
  const objectKey2 = Object.keys(obj2);
  if (objectKey1.length !== objectKey2.length) return false;
  // check values object
  // [a, b] --> object[a] || object[b]
  const result = objectKey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1, b2: 2 }, { a: 1, b2: 2, c: 3 }));
