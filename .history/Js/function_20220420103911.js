// function(hàm)
// Khai báo function
// Cú pháp(Syntax): function functionName(parameter, parameters) {
// your code here
// }
// parameter là tham số
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
console.log(sum(500, 1000));
// invoke function sum(arguments) Đối số
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
  return a + b;
}
// add(5, 1000)
// Tham số là function
