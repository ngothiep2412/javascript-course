// By value vs By referrences
// By value --> giá trị thực sự được lưu trong vùng bộ nhớ
const null1 = 1;
const null2 = 1;
console.log(null1 == null2); // true
// By referrences --> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2); //false
// JSON: Javascript Object Notation
/*
    {
        "key":value,
        "key":value,
        "key":value,
    }
 */
// JSON.stringify (value) --> convert giá trị sang dưới dạng JSON string
// toString()
// [1,2,3].toString() --> "1,2,3"
// JSON.stringify([1,2,3]) --> "[1,2,3]"
// [1,2,3]
// JSON.parse("[1,2,3]") --> [1,2,3]
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.stringify([1, 2, 3]));
const arrStr1 = JSON.stringify(arr1);
const arrStr2 = JSON.stringify(arr2);
console.log(arrStr1 == arrStr2);
// clone
const students = ["a", "b", "c", "d", "e"];
students.pop(); //
console.log(students); //['a', 'b', 'c', 'd']
