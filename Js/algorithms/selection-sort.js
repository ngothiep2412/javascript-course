function selectionSort(arr) {
  const array = [...arr];
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
let data = [5, 3, 4, 1, 2];
console.log("Data", data);
console.log("Selection sort", selectionSort(data));
// Sắp xếp chèn: Selection sort
// [5,3,4,1,2]
// min = 5; 5 3 4 1 2
// sorted array: 1 | unsorted array: 3 4 5 2
// sorted array: 1 2 | unsorted array: 4 5 3
// sorted array: 1 2 3 | unsorted array: 5 4
// sorted array: 1 2 3 4 | unsorted array: 5
// sorted array: 1 2 3 4 5 | unsorted array []
// [1, 2, 3, 4, 5]
