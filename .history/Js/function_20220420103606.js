// function(hàm)
// Khai báo function
// Cú pháp(Syntax): function functionName(parameter, parameters) {
// your code here
// }
// Đề bài viết hàm tính tổng 2 số a và b
function sum(a, b = 0) {
  // console.log("Is it working ?");
  console.log(a, b);
  return a + b;
  // return
  // return value
  // Không có return thì kết quả trả về là undefined
}
// function sum(parameter = defaultValue) {}
// sum(): invoke function
console.log(sum(5));
