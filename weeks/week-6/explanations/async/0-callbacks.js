// Callbacks

// What
// Callbacks are functions passed as arguments to other functions. They are executed asynchronously, meaning they don't block the execution of the program.

// -----
// -----
// -----
// -----

// Why
// Before Async/Await callbacks were used to manage asynchronous code execution. They allow you to define what should happen after an asynchronous operation completes without blocking the rest of the program. This is particularly useful in scenarios where the result of an operation is not immediately available, such as fetching data from a server. Callbacks enable a non-blocking, event-driven programming model in JavaScript.

// -----
// -----
// -----
// -----

// Example 1
// This function called myCallback takes another function (callback) as its input. Inside myCallback, it sets a timer for 2 seconds using setTimeout, then calls the provided callback function with the message 'Callback executed!' after the timer ends.
// When myCallback is called, it waits for 2 seconds, then executes the callback function, which logs the message to the console

function myCallback(callback) {
  // Inside the function, create an asynchronous operation using setTimeout
  setTimeout(() => {
    // After 2 seconds, call the provided callback function with the message "Callback executed!"
    // It is a function remember that it has the parenthesis next to it, so at first glance it might look like aa native js method but always pay attention to the paramteres defined within at the top of the function. Right aaffter myCallBack, inside those parenthesis
    callback("Callback executed!");
  }, 2000);
}

// Call the function and pass a callback function to handle the result
// myCallback((result) => {
//   // Log the result to the console
//   console.log(result);
// });

// -----
// -----
// -----
// -----

// Example 2
// Callback Hell

// Define three functions, each executing an asynchronous operation using setTimeout
// In this example, there are three functions: first, second, and third, each performing an asynchronous operation using setTimeout. Each function calls its provided callback function after a certain delay. The three functions are called sequentially with nested callbacks, creating what's known as 'callback hell.' It becomes challenging to read and manage the code due to multiple nested levels of callbacks

function first(callback) {
  setTimeout(() => {
    console.log("First function Executed");
    callback();
  }, 1000);
}
function second(callback) {
  setTimeout(() => {
    console.log("Second function Executed");
    callback();
  }, 1500);
}
function third() {
  setTimeout(() => {
    console.log("Third function Executed");
  }, 500);
}

// CALLING THE CALLBACK HELL HERE
// THis is a mess, impossible to read
// first(() => {
//   second(() => {
//     third();
//   });
// });

// -----
// -----
// -----
// -----

// Example 3
// Callback with Error Handling

function myCallBackErrorHandling(callback, errorCallback) {
  // Inside the function, create an asynchronous operation using setTimeout
  setTimeout(() => {
    // Simulate success or failure randomly
    // if success is less than 0.5 we will execute the callback function define first
    // if success is more than 0.5 we will execute the errorCallback function defined second
    let success = Math.random() < 0.5;
    if (success) {
      // If success, call the success callback with the message "Callback executed!"
      callback(`Callback executed! - Number is ${success.toString()}`);
      console.log(success);
    } else {
      // If failure, call the error callback with the message "Error occurred!"
      errorCallback(`Error occurred! - Number is ${success.toString()}`);
    }
  }, 2000);
}

// Call the function and provide success and error callback functions
myCallBackErrorHandling(
  (result) => {
    console.log(result);
  },
  (errorProvidedByCode) => {
    console.log(errorProvidedByCode);
  }
);
