// single thread
function task(message) {
  let number = 10000000;
  while (number > 0) {
    number--;
  }
  console.log(message);
}

// console.log("Start");
// task("Loading");
// console.log("End");
// main
// Call stack
/**
 * Start -->
 * task -->
 * End -->
 */
// Callbacks

console.log("Start");
// Start -->
setTimeout(() => {
  task("Loading");
}, 2000);

// Rời khỏi callstack và chạy qua Web APIs --> Callback queue --> khi call stack empty --> chạy xong
// --> rời khỏi callstack
console.log("End"); // chạy xong và rời khỏi call stack
// Web APIs: setTimeout, fetch request, DOM Event
