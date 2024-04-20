// What is a Loop ?
// A loop is a type of computer program that allows us to repeat a specific operation a predetermined number of times without having to write that operation individually. They are used when you need to perform the same or similar tasks multiple times without writing repetitive code.

// Why do we use themm ?
// Automation: Loops automate repetitive tasks, saving you time and effort.
// Efficiency: They make your code more efficient by reducing redundancy.
// Dynamic Behavior: Loops allow your code to respond dynamically to changing conditions or data.
// Scalability: They help in handling large datasets or performing operations a variable number of times.

// We have the following types of loops:
// - for
// - while
// - do while

// ------------------------

// JS - For Loop
// Syntax

// for (initialExpression, condition, updateExpression){
// //body of the for loop
// }

// Breakdown:
// 1. The initial expression initializes and/or declares variables and is executed only once.
// 2. The condition is evaluated.
// 2.a If the condition is false, the for loop terminates.
// 2.b If the condition is true, the code block inside the for loop is executed.
// 3. The update expression updates the value of the initial expression when the condition is true.
// 4. The condition is evaluated again. This process continues until the condition is false.

// For Loop - Simple Example
console.log("--------For Loop----------");
console.log("Simple Example");
// Program to print value x amount of times on the console
let forLoopExampleNumber = 11;
// Loop through this variable to print out something on the console
for (
  let initialCount = 1; // Initial Expression
  initialCount <= forLoopExampleNumber; // Condition, which basically is humanMade
  initialCount++ // pdate Expression
) {
  console.log(initialCount);
}
// ---
// Without using an external variable to pass inside the condition part
console.log("-----");
for (
  let initialCount = 1; // Initial Expression
  initialCount <= 10; // Condition, which basically is humanMade
  initialCount++
) {
  console.log(initialCount);
}

console.log("Simple Example - Array Example");
// FOR LOOP - ARRAY EXAMPLE
const cities = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];

console.log(cities);
console.log(cities.length);
for (let index = 0; index <= cities.length; index++) {
  let message = "One of my Favorite cities is";
  console.log(`${message} -- ${cities[index]}`);
}

// FOR LOOP - ARRAY OF OBJECTS EXAMPLE
const rockBands = [
  {
    name: "Led Zeppelin",
    genre: "Rock",
    formed: 1968,
    members: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
  },
  {
    name: "The Beatles",
    genre: "Rock",
    formed: 1960,
    members: [
      "John Lennon",
      "Paul McCartney",
      "George Harrison",
      "Ringo Starr",
    ],
  },
  {
    name: "Queen",
    genre: "Rock",
    formed: 1970,
    members: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"],
  },
  {
    name: "Pink Floyd",
    genre: "Progressive Rock",
    formed: 1965,
    members: ["David Gilmour", "Roger Waters", "Richard Wright", "Nick Mason"],
  },
];

console.log(rockBands);

for (let index = 0; index < rockBands.length; index++) {
  let checker = rockBands[index].members;
  //console.log(rockBands[index]);
  //console.log(`One of my favorite bands is ${rockBands[index].name}`);
  console.log(`The members of this group are: ${checker} `);
  console.table(checker);
}

// FOR LOOP - INFINITE EXAMPLE
// for (let i = 1; i > 0; i++) {
//   console.log("JS - Infinite");
// }
// Watch out cause this will cause an infinite loop, requiring you to restart your browser window and remove/commment-out the code that is doing this!

console.log("---------");
console.log("--------While Loop----------");
// JS - WHILE LOOP
// Syntax
// while (condition) {
//   // body of the while loop
// }
// Breakdown:
// 1. A while loop evaluates the condition inside the parentheses ().
// 2. If the condition is true, the code inside the while loop body is executed.
// 3. The condition is evaluated again.
// 4. This process continues until the condition is false.
// 5. When the condition is false, the loop stops.
let whileLoopExample = 0;
console.log("Simple Example");
while (whileLoopExample < 10) {
  whileLoopExample++;
  console.log(whileLoopExample);
}
console.log("Simple Example - Using an Array");
const whileLoopArrayExample = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
// We can store the length of the array in a variable and use this variable in the condition of a while loop to break the loop.
let lengthOfWhileArrayExample = whileLoopArrayExample.length;
let index = 0;
while (lengthOfWhileArrayExample--) {
  console.log(whileLoopArrayExample[index]);
  index++;
}

console.log("---------");
console.log("--------Do-While Loop----------");
// JS - DO WHILE LOOP
// SYNTAX
// do {
// //     // body of the while loop
// } while(condition)
//BREAKDOWN
// 1. First, the body of the loop is executed. Then the condition is evaluated.
// 2. If the condition evaluates to true, the body of the loop inside the do statement is executed again.
// 3. The condition is evaluated once more.
// 4. If the condition is true, the body of the loop inside the do statement is executed again.
// 5. This process continues until the condition is false. Then the loop stops.

// IMPORTANT
// The do...while loop is similar to the while loop. The only difference is that in the do...while loop, the body of the loop is executed at least once.

// DO WHILE LOOP - SIMPLE EXAMPLE
// PROGRAM TO PRINT NUMBERS FROM 1 TO 10
// variable to increment++
let i = 1;
// variable to be used as a number for iteration
const doWhileLoopExample = 10;
// loop from i = 1 to 10 [i === index "good practice"]
do {
  console.log(i);
  i++;
} while (i <= doWhileLoopExample);

// ------------- Exercise 1 (for loop): -------------
// Create a for loop that counts from 0 to 100 and in each iteration adds the current value to a total result. Finally, log the result.

// ------------- Exercise 2 (for loop): -------------
// Create an array of numbers called "numbers" with random values. Use a for loop to iterate over the array and find the largest and smallest numbers. Print both numbers in the console.

// ------------- Exercise 3 (while loop): -------------
// Use a while loop to print the even numbers from 2 to 20.
