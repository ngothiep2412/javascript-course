// By value vs By referrences
// By value --> giá trị thực sự được lưu trong vùng bộ nhớ
const null1 = 1;
const null2 = 1;
console.log(null1 == null2); // true
// By referrences --> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 == arr2); //false
