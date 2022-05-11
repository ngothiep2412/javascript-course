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
    return 1; // đổi vị trí cho nhau
  }
  if (a < b) {
    return -1; // không đổi vị trí cho nhau
  }
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// ternary operator: condition ? something : something else
console.log(random3);

console.log("----array.find----");
// nó sẽ trả về phần tử đầu tiên trong mảng thỏa điều kiện
