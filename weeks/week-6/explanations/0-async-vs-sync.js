// Understanding the Concepts of Synchronous and Asynchronous Code in JavaScripts

// What Are Synchronous and Asynchronous Code?

// Synchronous Code

// Synchronous code executes sequentially, meaning that each task is completed one after the other. In other words, the second task waits until the first one is finished before starting.

// console.log("First Task");
// console.log("Second Task");
// console.log("Third Task");

// Asynchronous Code

// Asynchronous code does not block the following code from execution. Some tasks, like reading a file or making a network request, can take longer to complete. Asynchronous operations enable other tasks to continue executing without waiting for them to finish.

console.log("First Task");

setTimeout(() => {
  console.log("Second Task (Asynchronous)");
}, 1000);

console.log("Third Task");

// -----
// -----
// -----
// -----

// Why Do We Need Both Synchronous and Asynchronous Code?

// Synchronous Code:

// - Easier to read and understand because of the clear execution order.
// - Useful for tasks that need to be completed sequentially.

// Asynchronous Code:

// - Crucial for tasks like file handling, network requests, or UI interactions to prevent blocking the main thread.
// - Improves performance by enabling multitasking.

// Analogy:
// Imagine a restaurant kitchen. The chef (JavaScript interpreter) is working synchronously, preparing meals one by one. If they need ingredients delivered from another location (asynchronous operation), they'd continue cooking other dishes until the ingredients arrive.

// -----
// -----
// -----
// -----

// How to Use Synchronous and Asynchronous Code in JavaScript

// - Callback functions -
// - Promise Functions -
// - Async/Await Functions - Modern Approach :) - Recommended to always use

// Callbacks
// A callback function is passed to another function and invoked after the asynchronous task completes.

// Promises
// Promises represent a value that may be available now or in the future. They help handle asynchronous tasks in a more readable way.

// Async/Await
// async/await is just a modern syntax for handling Promises. It makes asynchronous code look synchronous, simplifying the code structure.

// -----
// -----
// -----
// -----

// Conclusion

/*
The choice among callbacks, promises, and async/await depends on the specific use case, but here are some general recommendations:

1. Callbacks:
  Advantages:
    - Simple to implement for basic tasks.
    - Works well for single-step asynchronous operations.

  Drawbacks:
    - Callback Hell: Nested callbacks make code difficult to read and maintain, especially when handling multiple asynchronous tasks.
    - Error handling is more complex compared to promises or async/await.

2. Promises:
  Advantages:
    - Linear error handling via .catch.
    - .then chains are more readable than deeply nested callbacks.
    - Supports chaining multiple asynchronous tasks more easily.

  Drawbacks:
    - Promises still rely on chaining, which can become cumbersome in complex workflows.

3. async/await:
  Advantages:
    - Provides the clearest and most readable structure for asynchronous code.
    - Makes asynchronous code look and behave like synchronous code.
    - Simplifies error handling with try/catch.

  Drawbacks:
    - Requires an environment that supports async/await (ES2017 or later).
    - Must be used inside functions explicitly marked with the async keyword.

Recommendation:
  - Prefer async/await: When possible, use async/await because it makes asynchronous code much more readable and simplifies error handling.
  - Fallback to Promises: In scenarios where async/await isn't an option or when you need to use an older codebase....
  - Use Callbacks Cautiously: Reserve callbacks for very simple asynchronous tasks....
  - WE WILL SEE ALL 3 here but always go for async/await ;)
  - Async is mostly used to connect with outside resources or to perform side-operations within your code. Honestly is mostly used with the fetch API to fetch a request and then display info withinn your UI or use the fetch API to send info to a resource
  - We will se all of thhis this week :) 
*/
