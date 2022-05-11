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
console.log(animals5); // ["dog"]
