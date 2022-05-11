// 1.  Đảo ngược 1 chuỗi. Ví dụ: "My name is Thiệp" --> "Thiệp is name My";
function reverseString(str) {
  if (!str) {
    return null;
  }
  // split(" ")
  const newStr = str.split(" ");
  const reverseStr = newStr.reverse().join(" ");
  // chaining method
  return reverseStr;
}
console.log(reverseString("My name is Thiệp");
