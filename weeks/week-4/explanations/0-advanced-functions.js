// In this lesson, we'll explore the following function types:

// - Callbacks
// - Anonymous
// - Delayed functions using the SetTimeout() method
// - Repeated functions with a specific time delayu between each call using the setInterval() method

// Callback Functions

// What are Callback functions
// A callback function is a function that is declared as a parameter and then passed as an argument located inside of another function.

// Why do we use them ?
// Callbacks let us control what happens after certain tasks finish, processing information or like fetching data.

// Example 1
// Using a function declaration
// This is the outer function
// DECLARATION OF FUNCTION
function sayHello(name, callbackFunctionExample) {
  console.log(`Hello ${name}`);
  callbackFunctionExample(); // Function within a function
}
// Calling the Function
sayHello("Diego", function () {
  console.log("Hello Aly");
});
// Calling the Function
sayHello("Class", function () {
  //prompt("Do you like burgers?");
});

console.log(
  "This example demonstrates the usage of a callback function. The function `sayHello` takes two parameters: `name` and `callbackFunctionExample`. It first logs a greeting message with the provided `name`, then calls the `callback` function."
);

console.log("-------");
console.log("-------");
console.log("-------");

// Example 2
// Same as above but using a function expression
// function sayHello() {} // Declaration
// const sayHelloVar = () => {}; // Expression also known as arrow func

// DECLARATION OF FUNCTION
const sayHelloVar = (favoriteFood, diego) => {
  console.log(`One thing I really love is ${favoriteFood}`);
  diego();
};

// CALLING THE FUNCTION
sayHelloVar("Pizza", () => {
  console.log("A great pizzeria in Barcelona is called Parking Pizza");
});

console.log(
  "Calling the functionExpression sayHelloVar that contains 2 paramaters. 1 we use to pass the string 'Pizza' and 1 function paramater which we then take advantage an declare an anonymous function expression as the 2nd argument after the string 'Pizza'"
);

console.log("-------");
console.log("-------");
console.log("-------");

// ----
// ----
// ----
// ----

// Anonnymous Functions

// What are Anonnymous Functions
// An anonymous function has no name, simply. So far we have seen two of them inside this document

// They might seem weird at time but in essence its all bout understanding its syntax

// Why do we use Anonnymous Functions
// They're great for tasks we only need to do once and don't need to remember later.

// Examples
// 1. Anonymous function declaration assigned to a variable:
let greet = function () {
  console.log("Hello - Using an anonymous function declaration!");
};
console.log(greet);
console.log(greet());
console.log("-------");
console.log("-------");
console.log("-------");

// 2. Anonymous function expression assigned to a variable:
let greetTwo = () => {
  console.log("Hello - Using an anonymous function expression!");
};
console.log(greetTwo);
console.log(greetTwo());
console.log("-------");
console.log("-------");
console.log("-------");

// 3. Anonymous function declaration as an argument to array methods like map:
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function (number) {
  return number * 2;
});
console.table(doubled);

console.log("-------");
console.log("-------");
console.log("-------");
// 4. Anonymous function expression AKA arrow function as an argument as same as above:
let doubledArrowFunction = numbers.map((numberThaIWriteThis) => {
  return numberThaIWriteThis * 4;
});
console.table(doubledArrowFunction);

console.log("-------");
console.log("-------");
console.log("-------");

// 5. Event hanfler weith an anonymous function declaration
// An event handler is basically a way to connect a js method with a html elemennt

document
  .getElementById("myButtonDeclaration")
  .addEventListener("click", function () {
    console.log("Hellooo class welcome to working with anonymous functions");
  });

// document.getElementById("myButtonDeclaration"): This method is part of the Document Object Model (DOM) API. It is used to select an HTML element by its unique ID attribute. In this case, it selects the HTML element with the ID "myButtonDeclaration".
// .addEventListener("click", function () { ... }): Once the element is selected, the addEventListener() method is called on it. This method allows you to attach an event listener to the selected element. It takes two parameters:
// -  "click": This specifies the type of event to listen for. In this case, it listens for a mouse click event on the selected element.
// - function () { ... }: This is the event handler function that will be executed when the specified event occurs. It's an anonymous function defined inline.

//  In summary, this code selects an HTML button element with the ID "myButtonDeclaration", and when it's clicked, it displays an alert saying "Button clicked!".

// 6. Event handler with an anonymous function expression:
document.getElementById("myButtonExpression").addEventListener("click", () => {
  //alert("Hello, you have click me usig this syntax!");
});

/// HUGEEE NO NO
// MOST LIKELY WILL NEVER ERNCOUNTER THESE BELOW:

// 5. Immediately Invoked Function Expression (IIFE) -  through the declarationn syntax  - Really Old School - Never use cause is realaly hard to read and get used, rememember the concept of functions where being reusable codeBlocks
(function () {
  console.log("This is an IIFE.");
})();

// 6. Immediately Invoked Function Expression (IIFE) - through the declarationn syntax - Really Old School - Never use cause is realaly hard to read and get used, rememember the concept of functions where being reusable codeBlocks
(() => {
  console.log("This is also an IIFE");
})();

console.log("-------");
console.log("-------");

// END OF HUGEEE NO NO
// MOST LIKELY WILL NEVER ERNCOUNTER THESE BELOW:\
// -----
// -----
// -----
// -----
// -----
// -----
// -----

// What is the setTimeout method?
// The setTimeout() method is a built-in JavaScript function used to delay the execution of a function by a specified amount of time. It schedules a single execution of a specified function after a specified number of milliseconds.

//

// Why do we use the setTimeout method?
// We use the setTimeout() method to introduce delays in program execution, especially for scenarios where we want certain actions to occur after a specified period of time. This is particularly useful for handling asynchronous tasks, creating animations, implementing time-based events, or improving user experience by preventing blocking operations.

// Basic Syntax

// Using an expression also called arrow function
// setTimeout(() => {}, 4000); // Stick to this one, is easier to ready
// setTimeout(function () {}, 4000);

// Examples

// Example 1: Delayed Execution of a Function
// Using a stored function inside the setTimeout method
function helloDelayed() {
  console.log("Hello class, after two seconds.....");
}

setTimeout(helloDelayed, 5000);

// Example 2 - ANonymous arrow function
setTimeout(() => {
  console.log(
    "Hey this is a delayed message using just an anlonympus arrow function"
  );
}, 6000);

// Example 3
// Displaying Messages with Delay Using Array of Objects

const messages = [
  { content: "I love pizza", delay: 1000 }, // Delay of 1000 milliseconds (1 second)
  { content: "I plan on running a marathon", delay: 2000 }, // Delay of 2000 milliseconds (2 seconds)
  { content: "I like ice cream", delay: 3000 }, // Delay of 3000 milliseconds (3 seconds)
];

// function to displaye messagesn with a bit of delay

function displayMessage(messageArray) {
  messageArray.map((message, index) => {
    setTimeout(() => {
      console.log(`Message is ${index + 1}: ${message.content} `);
    }, message.delay);
  });
}

//displayMessage(messages);

// - Repeated functions with a specific time delay between each call using the setInterval() method

// What is the setInterval method ?
// The setInterval() method is a built-in JavaScript function used to repeatedly execute a specified function at fixed time intervals.

// Why do we use the setInnterval Method ?
// We use the setInterval() method to create repetitive actions or execute code at regular intervals. It's particularly useful for scenarios such as polling for updates, running animations, or implementing timed actions like a countdown timer.We use the setInterval() method to create repetitive actions or execute code at regular intervals. It's particularly useful for scenarios such as polling for updates, running animations, or implementing timed actions like a countdown timer.

// Example 1: Creating a countdown timer

let seconds = 10;

const countDown = setInterval(() => {
  //console.log("I will repeat every second");
  if (seconds > 0) {
    console.log(`${seconds} seconds remaining....`);
    seconds--;
  } else {
    clearInterval(countDown);
    console.log(`Countdown completedd....`);
  }
}, 1000);
