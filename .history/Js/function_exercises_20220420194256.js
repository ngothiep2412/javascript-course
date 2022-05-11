// 1. Viết function(hàm) so sánh 2 số a và b, tìm ra số lớn hơn
function compare(a = 0, b = 0) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Please enter another number");
    return 0;
  }
  return Math.max(a, b);
}
console.log(compare(2));
// 2. In hoa chữ cái đầu trong ví dụ: tuan --> Tuan, NAM --> Nam
// capitalize
function capitalize(word = "") {
  if (word.length == 0) {
    return 0;
  }
  // convert to lower case first
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  console.log(newWord);
  // charAt(index)
  // nam --> N am
  // slice(start index, end index - 1);
  let otherWord = word.toLowerCase().slice(1, 2);
  console.log(otherWord);
}
capitalize("Nam");
