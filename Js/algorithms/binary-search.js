// arr [1,3,5,7,11,13,19,23,29,31,37,41,43,47,53,59]
// low = 0; high = arr.length - 1; value = 37
// mid = 23; value = 37 --> 37 > 23
// [29,31,37,41,43,47,53,59]
// mid = 41; value = 37 --> 37 < 41
// [29,31,37]
// mid = 31; value = 37 --> 37 > 31
// value = 37 --> found
function binarySearch(list, value) {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    const midValue = list[midIndex];
    if (midValue === value) return midIndex;

    if (midValue > value) {
      high = midIndex - 1;
    } else {
      low = midIndex + 1;
    }
  }
  return null;
}
