const now = new Date();
// buit-in object
console.log(now);
// Thu Apr 21 2022 18:37:48 GMT+0700 (Indochina Time)
// Time zone: GMT+0700 (Indochina Time)
// Second: 48
// Minute: 37
// Hour: 18
// Year :2022
// Month: Apr
// Day: 21
// Day of the week: Thu
// Timestamp & Epoch time
// Unix time
// console.log(now.getTime()); //print timestamp
// console.log(new Date(0));
// 4 cách sử dụng new Date
// new Date() --> In ra ngày giờ hiện tại
// new Date(timestamp) --> dựa vào timestamp để in ra ngày giờ
// new Date(date String) -->
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
console.log(new Date("Thu Apr 21 2022 18:49:25 GMT+0700"));
console.log(new Date(2021, 05, 12, 22, 22, 22, 22)); //month đếm từ số 0
// Các hàm get trong Date

const birthday = new Date(2001, 11, 24);
// In ra năm
console.log(birthday.getFullYear());
// In ra tháng
// getMonth() chạy từ 0 cho đến 11
// 0: tháng 1 (Jan) 11: tháng 12(Dec)
console.log(birthday.getMonth());
// In ra ngày của tháng
console.log(birthday.getDate());
// In ra thứ của tuần
// 0-6: 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getDay()); //1
// In ra giờ
console.log(birthday.getHours());
// In ra phút
console.log(birthday.getMinutes());
// In ra second
console.log(birthday.getSeconds());
// In ra milisecond
console.log(birthday.getMilliseconds());
// In ra timestamp
console.log(birthday.getTime()); //1009126800000
// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(11);
birthday.setDate(30);
birthday.setHours(12);
birthday.setMinutes(12);
birthday.setSeconds(22);
console.log(`My birthday after update: ${birthday}`);

// UTC Universal Time Coordinated
// getFullYear()
const birthday2 = new Date(2001, 11, 24);
// In ra năm
console.log(birthday2.getUTCFullYear());
// In ra tháng
// getMonth() chạy từ 0 cho đến 11
// 0: tháng 1 (Jan) 11: tháng 12(Dec)
console.log(birthday.getUTCMonth());
// In ra ngày của tháng
console.log(birthday.getUTCDate());
// In ra thứ của tuần
// 0-6: 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getUTCDay());
// In ra giờ
console.log(birthday.getUTCHours());
// In ra phút
console.log(birthday.getUTCMinutes());
// In ra second
console.log(birthday.getUTCSeconds());
// In ra milisecond
console.log(birthday.getUTCMilliseconds());
// In ra timestamp
console.log(birthday.getTime()); //1009126800000
// Các hàm set trong Date
console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(11);
birthday.setDate(30);
birthday.setHours(12);
birthday.setMinutes(12);
birthday.setSeconds(22);
console.log(`My birthday after update: ${birthday}`);
