// Async/Await
// What
// Async/await is a syntactic sugar built on top of promises, introduced in ES2017 (ES8). It allows writing asynchronous code in a synchronous-like manner, making it easier to read and maintain. The async keyword is used to define a function that returns a promise, and the await keyword is used to pause the execution of the function until a promise is settled.

// -----
// -----
// -----
// -----

// Why
// Async/await simplifies asynchronous code even further:

// - Sequential Execution: Async/await allows writing asynchronous code that resembles synchronous code, making it easier to understand the flow of execution.
// - Error Handling: Error handling with async/await is straightforward and can be done using try-catch blocks, making the code cleaner and more readable.
// - Variable Scope: Variables declared inside an async function are scoped to that function, reducing the risk of unintended side effects.
// - Promise Integration: Async/await seamlessly integrates with promises, allowing you to use existing promise-based APIs while taking advantage of the synchronous-like syntax. - To be viewed within the fetch folder

// -----
// -----
// -----
// -----

// Example 1
// Basic Async/Await

function myPromise() {
  // We want to initiate the PROMISE
  // We also are going to use the setTimeout method to mimic a async operation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey this promise has been resolved succesfully!");
    }, 2000);
  });
}

// Function Declaration Usage
// Define an async function that awaits the result of the Promise
// Keywords that we are going to use
// async
// await
async function myFirstAsyncFunctionDeclaration() {
  // Await the resolution of the Promise and store the result
  let resultfromPromise = await myPromise();
  // Log into the console to see result
  console.log(resultfromPromise);
}
// myFirstAsyncFunctionDeclaration();

// Function Expressions Usage
// Define an async function that awaits the result of the Promise
// Keywords that we are going to use
// async
// await
const myFirstAsyncFunctionExpression = async () => {
  // Await the resolution of the Promise and store the result
  let resultfromPromise = await myPromise();
  // Log into the console to see result
  console.log(resultfromPromise);
};

// myFirstAsyncFunctionExpression();

// ------
// ------
// ------
// ------

// Example 2
//  Async/Await with Error Handling
// Define a function that returns a Promise
function myPromiseWithErrorHandling() {
  // Inside the Promise, create an asynchronous operation using setTimeout
  return new Promise((resolve, reject) => {
    // After 2 seconds, resolve or reject the Promise randomly
    const success = Math.random() < 0.5;
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
}

// using async await to apply the promise above called myPromiseWithErrorHandling.

const myAsyncFunctionWithErrorHandling = async () => {
  // Using the try/catch block, this syntax is simple everything inside the try, the callStack will try to execute and if it cannot exssecute it will use the catch block to execute ay errors
  try {
    // We will be fetching the myPromiseWithErrorHandling function which conains both resolve and reject promises
    let result = await myPromiseWithErrorHandling();
    // Log the result to the console
    console.log(result);
  } catch (error) {
    // If the Promise is rejected, log the error to the console
    console.log(error);
    console.error(error);
  }
};
myAsyncFunctionWithErrorHandling();
