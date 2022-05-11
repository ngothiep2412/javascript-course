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
// 2.  Đảo ngược 1 chuỗi bao gồm các kí tự. Ví dụ: "My love" --> "evol yM";
function reverseWord(str) {
  if (!str) {
    return null;
  }
  const arrStr = str
    .split(" ")
    .map((value) => value.split("").reverse().join(""))
    .reverse()
    .join(" ");
  console.log(arrStr);
}
reverseWord("My love");
// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "My name is Thiệp" --> "My Name Is Thiệp";
function capitalizeStr(str) {
  if (!str) {
    return null;
  }
  // str.split(" ")
}
function capitalizeWord(word = "") {
  if (word.length == 0) {
    return null;
  }
  let newWord = word.toLowerCase().charAt(0).toUpperCase;
  let otherWord = word.toLowerCase().split(1);
  return `${newWord}${otherWord}`;
}
