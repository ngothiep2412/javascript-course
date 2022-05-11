console.log("----array.slice----");
// Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "dolphin", "lion", "dog"];
// slice(): Tạo ra mảng mới y chang mảng ban đầu
const animals2 = animals.slice();
console.log(animals2);
// slice(start) .start --> vị trí index ở trong mảng
const animals3 = animals.slice(1);
console.log(animals3); //["dolphin", "lion", "dog"]
// slice(start, end) .start là ví trị bắt đầu và .end là vị trí kết thúc
// nó sẽ sao chép từ phần tử start tới phần tử end - 1
const animals4 = animals.slice(1, 3);
console.log(animals4); // ["dolphin", "lion"]
const animals5 = animals.slice(-1);
console.log(animals5); // ['dog']
const animals6 = animals.slice(-3);
console.log(animals6); // ['dolphin', 'lion', 'dog']

console.log("----array.splice----");
// Nó sẽ xóa phần tử trong mảng hoặc thay thế trong mảng
const pets = ["dog", "cat", "bird", "fish"];
// // splice(start)
// const pets2 = pets.splice(2);
// console.log(pets2);
// // splice(start, deleteCount) : deleteCount là số lượng phần tử muốn xóa hoặc thay thế
// const pets3 = pets.splice(0, 1);
// console.log(pets);
// splice(start, deleteCount, item1, item2, itemN) : deleteCount là số lượng phần tử muốn xóa hoặc thay thế
const pets4 = pets.splice(0, 2, "dolphin", "shark", false, 100);
console.log(pets);

console.log("----array.sort----");
// Sắp xếp phần tử trong mảng theo chuẩn unicode-16
const random = [1, 1000, 2, 5, 3];
console.log(random.sort());
// sort(function(a, b))
// function(callback)
const random2 = random.sort(function (a, b) {
  if (a > b) {
    return 1; // sắp xếp theo tăng dần
  }
  if (a < b) {
    return -1; // sắp xếp theo giảm dần
  }
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);

console.log("----array.find----");
// nó sẽ trả về phần tử đầu tiên trong mảng thỏa điều kiện nào đó
const number1 = [1, 9999, 10, 5, 2];
// Tìm phần đầu tiên trong mảng lớn hơn 10
const isYourNumber = number1.find((element) => element > 1000000);
// Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefined
console.log(isYourNumber);
console.log("----array.findIndex----");
// nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findIndex = number1.findIndex((elemet) => elemet > 10);
// Nếu không tìm thấy thì nó sẽ trả ra kết quả là -1
console.log(findIndex);
// Sort bổ sung
const random4 = random.sort((a, b) => (a > b ? -1 : 1));
console.log(random4);
console.log("----array.map----");
// duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble);
console.log("----array.forEach----");
// .forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple);
// Hãy cho biết sự khác nhau giữa forEach và map
// forEach không có return
// map trả về mảng mới
// forEach ko có return nên chạy mảng
console.log("----array.filter----");
// Dùng để filter(sàng lọc) các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const filter = listNumber.filter((value) => value > 30);
// nếu không thỏa mảng điều kiện trả về mảng rỗng
console.log(filter);
console.log("----array.some----");
console.log("----array.every----");
