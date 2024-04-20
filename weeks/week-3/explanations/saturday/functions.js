// Functions in JS
greet(); // BIG PRO OF USING FUNCTION DECLARATION IS THAT YOU CAN CALL THEM ANYWHERE ON THE FILE!
// Objective: By the end of this intro, you will understand the basic concepts of functions in JavaScript, including their purpose, different ways to declare them, how to use parameters, respond to events, pass arguments, and utilize the return statement.

// -----
// -----
// -----
// -----

// What are Functions in JavaScript?
// Functions in JavaScript are blocks of code that perform specific tasks. They allow you to group together a sequence of statements to be executed whenever needed. Functions play a crucial role in making your code organized, efficient, and reusable.

// -----
// -----
// -----
// -----

// Why are functions important?
// Functions serve several important purposes:

// - Reusability: Instead of writing the same code multiple times, you can define a function once and reuse it whenever required.

// - Modularity: Functions allow you to break down complex tasks into smaller, manageable parts, making your code easier to understand and maintain.

// - Abstraction: Functions hide the implementation details, focusing on what the function does rather than how it does it, which enhances code readability.
//Math.max();

// Ternnary Operator Example
// Let's say that we are bouncers on a bar, and we are checking for people's age to see if that they can come in to the bar!
let age = 18;
let usingTheTernaryOperator =
  age >= 18
    ? "You are bigger than 21, enjoy your night and please drink responsibly"
    : "You are smaller than 21, please go home and rest, you are a kid!";
// console.log(usingTheTernaryOperator);

function meanBouncerDude() {
  // Since we are providing the bouncer with an age, we need to get the age from the user
  // WE ARE GOINNG TO DO THIS WITH 2 NATIVE JS METHODS
  // parseINt() - Grabs a strinng annd parses it to a number
  // prompt() - Proviedes a way for the user to interact with your code natively using the browsers windowPrompt

  //let age = 18; // From static
  let age = parseInt(prompt("Welcome to my bar, let's seee some ID")); // From Dynamic
  let usingTheTernaryOperator =
    age >= 18
      ? "You are bigger than 21, enjoy your night and please drink responsibly"
      : "You are smaller than 21, please go home and rest, you are a kid!";
  console.log(usingTheTernaryOperator);
  alert(usingTheTernaryOperator);
}
// meanBouncerDude(); - UNCOMMENT TO TEST OUT FUNCTION

//  -------
//  -------
//  -------
//  -------

// How to Declare Functions:
// There are two common ways to declare functions in JavaScript: function declarations and function expressions.

// Function Declaration
// A function declaration starts with the function keyword followed by the function name and a pair of parentheses. The function body is enclosed in curly braces.
function greet() {
  console.log("Hello! - GLOBAL SCOPE");
}

// Function Expression
// A function expression involves assigning an anonymous function to a variable. The variable then holds the function and can be used to call it.
let greetExpression = () => {
  console.log("Hello! - HOISTED - ONLY CALLED AFTER ITS DECLARATION ");
};
greetExpression();

// Pros and Cons of Function Expressions and Function Declarations
// Function Declarations
// PROS:
// - Hoisting: Function declarations are hoisted, which means they can be called before they are defined in the code. This allows you to place the function call anywhere in your code.
// - Clarity: Function declarations often lead to clearer code due to their traditional structure. The function's name is directly associated with its purpose.
// - Simplicity: They are straightforward to use and read, making them a good choice for simpler functions.

// CONS:
// - Global Scope: Function declarations are added to the global scope, which can lead to potential naming conflicts and code pollution in larger applications.
// - Order Dependency: Since function declarations are hoisted, their order of appearance in the code can affect the program's behavior, potentially leading to unexpected results.

// Function Expressions:

// PROS:
// - Local Scope: Function expressions can be encapsulated within a block of code or another function, reducing the risk of polluting the global scope.
// - Flexibility: You can assign function expressions to variables, making them versatile and allowing you to pass functions as arguments or return them from other functions.
// - Closures: Function expressions are often used to create closures, which allow access to variables from their containing scope even after that scope has finished executing.

// CONS:
// - Hoisting Issue: Unlike function declarations, function expressions are not hoisted, so they must be defined before they are called in the code.
// - Readability: Function expressions can be more complex to read, especially when they are assigned to variables with less intuitive names.
// - Debugging: Debugging function expressions might be more challenging since their variable name holds the function itself.

// -----
// -----
// -----
// -----

// Functions with Parameters:
// Parameters are placeholders for values that you can pass into a function to customize its behavior.

// ON line 106 inside the parenthesis is called the parameter (emptyPlaceHolder)
function greetOneParam(name) {
  console.log(`Hello ${name}!!!`);
}
greetOneParam("Diego"); // Argument is what you pass onto the parameter to be filling up or propagAting the empty placeholder parameter
greetOneParam("Nenad");
greetOneParam("Aly");
greetOneParam("Joseph");
greetOneParam("Flora");
greetOneParam("Daniel");
greetOneParam("Nenad");

function greetTwoParam(name, lastName) {
  console.log(`Hello ${name} ${lastName}!!!`);
}

greetTwoParam("Diego", "Zito");

let europeanCities = [
  "Paris",
  "London",
  "Berlin",
  "Madrid",
  "Rome",
  "Amsterdam",
  "Vienna",
  "Prague",
  "Athens",
  "Lisbon",
];
let southAmericanCities = [
  "Sao Paulo",
  "Buenos Aires",
  "Rio de Janeiro",
  "Lima",
  "Bogota",
  "Santiago",
  "Caracas",
  "Brasilia",
  "Montevideo",
  "Quito",
];

// Function that we can then reuse to print out the citiezs of eahc array!
function printCitiesOfTheWorld(cityArray) {
  for (let i = 0; i < cityArray.length; i++) {
    console.log(cityArray[i]);
  }
}

printCitiesOfTheWorld(europeanCities);
printCitiesOfTheWorld(southAmericanCities);

// Calling Functions with Arguments:
// Arguments are the actual values you provide to a function when you call it.
// The return statement in a function specifies the value that the function will produce.

function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log(result);

// The Return Statement:
// The return statement in a function specifies the value that the function will produce.
// Take a look
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const studentScore = 85;
const studentGrade = calculateGrade(studentScore);
console.log(`Student Grade is ${studentGrade}`);

//Summary:

// In this lesson, we covered the basics of functions in JavaScript. We learned what functions are, why they are important, and how to declare them using function declarations and expressions. We also explored using parameters to make functions more flexible, responding to events with functions, and calling functions with arguments. Functions are a fundamental concept in programming, and mastering them will greatly enhance your ability to write efficient and organized code.

// Exercises

// Exercise #1
// Create a function that takes three arguments: a string name, a number age, and an object livesIn. Note that the livesIn object will be an object containing two keys: livesInCity and livesInTown. Both will have a boolean value, one true and the other false.
// Create an arrow function that returns a string like "Diego is 30 years old and lives in the city". Based on the key that is true in the livesIn argument, we will return either lives in the city or lives in a town.

// Exercise #2
// Create a function called calculateCircleArea that takes the radius of a circle as an argument and returns its area. Use Math.PI for the value of pi.

// Exercise #3
// Create a function called mergeArrays that takes two arrays as arguments and returns a new array that merges both arrays.
// HINT USE THE SPREAD OPERATOR
