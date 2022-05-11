// 1. Viết function(hàm) so sánh 2 số a và b, tìm ra số lớn hơn
function compare(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    console.log("Không có số nào lớn hơn");
  }
}
let result = compare;
result(5, 3);
