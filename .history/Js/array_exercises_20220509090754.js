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
  if (!str) return null;
  const result = str.split(" ").map((value) => value.split(""));
}
reverseWord("My love");
// 3. In hoa chữ cái đầu trong chuỗi ví dụ: "My name is Thiệp" --> "My Name Is Thiệp";
function capitalizeWord(word = "") {
  if (word.length == 0) {
    return null;
  }
  let newWord = word.trim().toLowerCase().charAt(0).toUpperCase();
  let otherWord = word.trim().toLowerCase().slice(1);
  return `${newWord}${otherWord}`;
}
function capitalizeStr(str) {
  if (!str) {
    return null;
  }
  const arrStr = str
    .split(" ")
    .map(capitalizeWord) // xài cách này nếu có 1 đầu vào
    // .map((item) => capitalizeWord(item))
    .join(" ");
  console.log(arrStr);
}

capitalizeStr("My name is Thiệp");
