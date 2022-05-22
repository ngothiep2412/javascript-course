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
function makePromise(buyIphone) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (buyIphone) {
        resolve("Yeah I have Iphone");
      } else {
        reject("I don't have Iphone");
      }
    }, 5000);
  });
}
// onFulfulled --> resolve
// onrejected --> reason
let haveIphone = makePromise(false);
haveIphone
  .then((success) => {
    console.log(success);
    // console.log("I am still happy");
  })
  .catch((error) => {
    console.log(error);
    // console.log("I am still happy");
  })
  .finally(() => {
    console.log("I am still happy");
  });

// catch
