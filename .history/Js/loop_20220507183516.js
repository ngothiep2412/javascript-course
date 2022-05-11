// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
    for(let i = 0; i <numbers.length; i++) {
        body code
    }
 */
// for (let i = 0; i < numbers.length; i++) {
//   console.log(`The index is ${i}`);
// }
/*
    length: 5
    i = 0;
    i < 5 --> true
    i++ --> 1
    result: 0

    i = 1;
    i < 5 --> true
    i++ --> 2
    result: 1

    i = 2;
    i < 5 --> true
    i++ --> 3
    result: 2

    i = 3;
    i < 5 --> true
    i++ --> 4
    result: 3

    i = 4;
    i < 5 --> true
    i++ --> 5
    result: 4

    i = 4;
    i < 5 --> false

    loop end
    
*/
// for (let i = 0; i < numbers.length; i++) {
//   //   console.log(`The index is ${i}`);
//   //   console.log(`The value is ${numbers[i]}`);
//   // Nếu giá trị là 8 thì dừng vòng lặp
//   //   if (numbers[i] == 8) {
//   //     break;
//   //   }
//   //   console.log(`The value is ${numbers[i]}`);

//   // Nếu giá trị là 8 thì bỏ qua giá trị đó

//   if (numbers[i] == 8) {
//     continue;
//   }
//   console.log(`The value is ${numbers[i]}`);
// }
//
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The value is ${numbers[i]}`);
  for (let j = numbers.length - 1; j >= 0; j--) {
    console.log(j);
  }
}
// let i = numbers.length - 1 --> lấy vị trí cuối cùng của mảng
// i >= 0 --> điều kiện index lớn hơn hoặc bằng 0
// i-- --> i = i - 1
// 1. Sao chép mảng dùng vòng lặp for
let copyArr = [];
// 1 2 3 4
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);
// 2. Đảo ngược từ "i love" --> "evol "
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);

// while và do while
// while(condition: điều kiện) {
// body code
// }
// let numbers1 = 1;
// while (numbers1 < 10) {
//   console.log("This number is less than 10");
//   // điều kiện để dừng
//   numbers1 = numbers1 + 1;
//   if (numbers1 == 3) {
//     break;
//   }
// }

/*
  do {
    
  } while(condition: điều kiện)
*/

// let numbers2 = 1;
// do {
//   console.log("This number is less than 10");
//   // điều kiện để dừng
//   numbers2 = numbers2 + 1;
//   if (numbers2 == 3) {
//     break;
//   }
// } while (numbers2 < 10);

// for of
// for(value of array) {}
for (const n of numbers) {
  console.log(n);
}
