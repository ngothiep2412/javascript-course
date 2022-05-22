/**
 * status: pending
 * status: success
 * status: reject
 */
// new Promise(function(resolve, reject))
let buyIphone = true;
// let willBuyIphone = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     if (buyIphone) {
//       resolve("Yeah I have Iphone");
//       console.log("OK");
//     } else {
//       reject("I don't have Iphone");
//       console.log("not OK");
//     }
//   }, 5000);
// });
// console.log(willBuyIphone);
// .then(onfulfilled, onrejected)
// function makePromise(buyIphone) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       if (buyIphone) {
//         resolve("Yeah I have Iphone");
//       } else {
//         reject("I don't have Iphone");
//       }
//     }, 5000);
//   });
// }
// // onFulfulled --> resolve
// // onrejected --> reason
// let haveIphone = makePromise(false);
// haveIphone
//   .then((success) => {
//     console.log(success);
//     // console.log("I am still happy");
//   })
//   .catch((error) => {
//     console.log(error);
//     // console.log("I am still happy");
//   })
//   .finally(() => {
//     console.log("I am still happy");
//   });

// catch
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("1. run the first time");
//   }, 3000);
// })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("2. run the second time");
//       }, 3000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => {
//         resolve("3. run the third time");
//       }, 3000);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Promise all
function makeTimer(timer = 1000, str) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(str);
    }, timer);
  });
}

const timer1 = makeTimer(2000, "first time");
const timer2 = makeTimer(1000, "second time");
const timer3 = makeTimer(3000, "third time");
// const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
//    console.log(data);
// });
// Promise.race
// const timerTotal2 = Promise.race([timer1, timer2, timer3]).then((data) => {
//  console.log(data);
// });

//Promise.allSettled
function isFrontendDev(languages) {
  return new Promise(function (resolve, reject) {
    if (!languages.includes("html")) {
      reject("You are not FrontEnd Developer");
    }
    setTimeout(() => {
      resolve("You are FrontEnd Developer");
    }, 1000);
  });
}

const dev1 = isFrontendDev(["html", "css"]);
const dev2 = isFrontendDev(["css"]);
// const devAll = Promise.all([dev1, dev2]).then((data) => {
//   console.log(data);
// });
// const devRace = Promise.race([dev1, dev2]).then((data) => {
//   // console.log(data);
// });
const devAllSettled = Promise.allSettled([dev1, dev2]).then((data) => {
  console.log(data);
});

// try catch
function isFrontendDev2(languages) {
  if (!languages.includes("html")) {
    throw new Error("You are not FrontEnd Developer");
  }
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("You are FrontEnd Developer");
    }, 1000);
  });
}
try {
  isFrontendDev2(["css"])
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.log("Oh noooooooooo");
} finally {
  console.log("demo");
}
