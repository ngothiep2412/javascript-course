// Vòng lặp
const numbers = [1, 2, 3, 4, 5];
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
for (let i = 0; i <= numbers.length - 1; i = i + 2) {
  console.log(`The index is ${i}`);
  console.log(`The value is ${numbers[i]}`);
  // Nếu giá trị là 8 thì dừng vòng lặp 
  if (numbers.[i] == 8) {

  }
}
// i++ --> i = i + 1
