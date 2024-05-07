// Promises

// What
// Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callbacks for handling asynchronous code. A promise can be in one of three states: pending, fulfilled (resolved), or rejected.

// Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callbacks for handling asynchronous code. A promise can be in one of three states: pending, fulfilled (resolved), or rejected.

// -----
// -----
// -----
// -----

// Why
// Promises offer several advantages over callbacks:

// - Better Readability: Promises provide a more structured way to handle asynchronous code compared to nested callbacks, making the code easier to read and understand.
// - Chaining: Promises support method chaining (then() and catch()), which allows for sequential execution of asynchronous operations and better error handling.
// - Error Propagation: Errors can be easily propagated through the promise chain, making error handling more straightforward.
// - Promise Composition: Promises can be composed using functions like Promise.all()

// .ALL is used for a specific part of your PROMISE ME A DINNER LAB ;)

// -----
// -----
// -----
// -----

// Example 1
// Basic Promise
// This function, myPromise, creates a promise that represents an asynchronous task. Inside the promise constructor, it sets up a timer using setTimeout. After 2 seconds, it resolves the promise with the message "Promise resolved!". This means that after 2 seconds, the task is considered successfully completed.

// In simpler terms, myPromise function creates a promise that waits for 2 seconds before saying, "Hey, everything went well!". It's like setting a timer for a task and telling yourself, "When this timer runs out, I'll consider the task done!". The new Promise part is like setting up this timer and deciding what message to give yourself when it's done.

function myPromiseFunction() {
  // We want to initiate the PROMISE
  // We also are going to use the setTimeout method to mimic a async operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey this promise has been resolved succesfully!");
    }, 2000);
  });
}

// then() -
// catch() -

// myPromiseFunction()
//   .then((result) => {
//     // Log the resolved value to the console
//     console.log(result);
//   })
//   .catch((error) => {
//     // Log any errors that occur during the Promise execution
//     console.error(error);
//   });

// Example 2
// Promise with Error Handling
// In this example, we define a function myPromise that returns a promise with an asynchronous operation using setTimeout. After 2 seconds, the promise is rejected with the message "Promise rejected!". We handle any errors using the catch() method, where the rejection message is logged to the console. This demonstrates how promises handle errors gracefully, allowing you to catch and handle them in a clean and structured way.

function myPromiseError() {
  return new Promise((resolve, reject) => {
    // After 2 seconds, reject the Promise with the message "Promise rejected!"
    setTimeout(() => {
      reject("Promise Rejected.....");
    }, 2000);
  });
}

// myPromiseError()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Example 3
// Chaining Promises
// This example demonstrates chaining promises in JavaScript. Two functions, firstPromise and secondPromise, are defined, each returning a promise that resolves immediately with a specific message. The promises are chained using the then() method, where the result of the first promise is logged, and then the second promise is executed and its result is logged. Error handling is included with the catch() method to log any errors that occur during the promise execution.

function firstPromise() {
  // Resolve the first Promise immediately with the message "First Promise resolved!"
  return new Promise((resolve, reject) => {
    resolve("First Promise resolved!");
  });
}

function secondPromise() {
  // Resolve the second Promise immediately with the message "Second Promise resolved!"
  return new Promise((resolve, reject) => {
    resolve("Second Promise resolved!");
  });
}

// Cal the function and create a set of chains using the then and catch methods
firstPromise()
  .then((result) => {
    console.log(result);
    // Chain the second Promise and handle its resolved value
    return secondPromise();
  })
  .then((result) => {
    // Log the resolved value of the second Promise
    console.log(result);
  })
  .catch((error) => {
    // Log any errors that occur during the Promise execution
    console.error(error);
  });
