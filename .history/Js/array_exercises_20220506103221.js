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
console.log(reverseString("My name is Thiệp"));
// 1.  Đảo ngược 1 chuỗi bao gồm các kí tự. Ví dụ: "My love" --> "evol yM";
function reverseWord(str) {
  if (!str) {
    return null;
  }
  const arrStr = str
    .split(" ")
    .map((value) => value.split("").reverse().join(""));
  const result = arrStr.reverse();
  console.log(arrStr);
}
reverseWord("My love");
