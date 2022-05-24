function insertSort(arr) {
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    const current = array[i]; // 4
    let j; // undefined
    // j: i - 1  = 1
    // arr[j] = 5
    // 5 > 4
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
      // arr[2] = arr[1]
    }
    array[j + 1] = current; // 5
  }
  return array;
}
// Insert sort: sắp xếp chèn
// [5, 3, 6, 1, 4]
// [3, 5, 6, 1, 4]
// [1, 3, 5, 6, 4]
// [1, 3, 5, 6, 4]

let data = [3, 5, 4, 1];
console.log("Array", data);
console.log("Insert sort", insertSort(data));
