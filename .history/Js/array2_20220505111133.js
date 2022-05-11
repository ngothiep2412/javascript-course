console.log("----array.slice----");
// Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "dolphin", "lion", "dog"];
// slice(): Tạo ra mảng mới y chang mảng ban đầu
const animals2 = animals.slice();
console.log(animals2);
// slice(start).start --> vị trí index ở trong mảng
const animals3 = animals.slice(1);
console.log(animals3); //["dolphin", "lion", "dog"]
