// 1 Write a function named multiply that takes two parameters: num1 and num2, and a callback function named callback. Inside the multiply function, calculate the product of num1 and num2, then call the callback function with the result.

function multiply(num1, num2, callback) {
  const result = num1 * num2;
  callback(result);
}
// Example calling multiply func
function callback(result) {
  console.log(`The result of the operation is ${result}`);
  console.log("The result of the operation is ", result);
}
multiply(7, 7, callback);
multiply(7, 7, (result) => {
  console.log(`The result of the operation is ${result}`);
});

console.log("------------");
console.log("------------");
console.log("------------");
console.log("------------");

let callbackDva = (result) => {
  console.log("solution:", result);
};
multiply(8, 8, callbackDva);

// 2 Create a function greetUser that takes a name and a callback function. Inside greetUser, concatenate the name with a greeting message and call the callback function.

function greetUser(name, callback) {
  const greetingMessage = `Hello, ${name}!`;
  callback(greetingMessage);
}
function callbackTwo(message) {
  console.log(message);
}
// Calling a declared function
greetUser("Elvin", callbackTwo);
// Calling an anonymous function expression
greetUser("Elvin", (message) => {
  console.log(message);
});

// 3 Create an displayMessages function to use an arrow function instead of a named function for the callback inside setTimeout.

const messages = [
  { content: "I love pizza", delay: 1000 }, // Delay of 1000 milliseconds (1 second)
  { content: "I plan on running a marathon", delay: 2000 }, // Delay of 2000 milliseconds (2 seconds)
  { content: "I like ice cream", delay: 3000 }, // Delay of 3000 milliseconds (3 seconds)
];

const displayMessaages = (messageArray) => {
  messageArray.map((messageObject, index) => {
    let count = 1;
    setTimeout(() => {
      console.log(`Message number is ${index + 1}`);
      console.log(`Message value is ${messageObject.content}`);
    }, 2000);
  });
};

displayMessaages(messages);

// 4 Create a function called printNumbers that takes a number as input and uses setInterval to print numbers from 1 to the input number at an interval of 1 second.

function printNumbers(num) {
  let count = 1;
  const interval = setInterval(() => {
    if (count <= num) {
      console.log(count);
      count++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// Example usage:
printNumbers(5);

// 5 Write a function called countdown that takes a duration in seconds and logs a countdown from that duration to 0 with 1-second intervals.

function countdown(seconds) {
  let currentSecond = seconds;
  const interval = setInterval(() => {
    if (currentSecond >= 0) {
      console.log(currentSecond + " seconds remaining...");
      currentSecond--;
    } else {
      clearInterval(interval);
      console.log("Countdown completed!");
    }
  }, 1000);
}

// Example usage:
countdown(10);
