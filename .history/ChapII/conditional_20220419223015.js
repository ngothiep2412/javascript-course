// Điều kiện
// if (condition) {
// your code here: 
// }
const isRich = false;
const myMoney = 1000;
if (isRich) {
    console.log("I will buy a new car.");    
} else if(myMoney < 10) {
    console.log("I will give you my money.");
} else {
    console.log("I poor");
}
// promt, confirm, alter
// alert("Your website has been hacked !!!");
// const yourName = prompt("Vui lòng nhập vào tên của bạn", "Thiep");
// console.log(yourName);
// const isYourMoney = confirm("Is that your money ?");
// console.log(isYourMoney);
// const 1abc = "sadsd";
// const abc-asda = "asdsd";
// const new = 123;

// 1. Nhập vào số tuổi và kiểm tra nếu số tuổi lớn hơn hoặc bằng 18 thì được coi phim rạp ngược lại
// thì không được vô coi.
const yourAge = prompt("Vui lòng nhập số tuổi của bạn: ");
if (Number(yourAge) >= 18) {
   message = "Bạn được coi phim rạp.";
} else {
    message = "Bạn không được coi phim rạp.";
}
console.log(message);





//Switch case