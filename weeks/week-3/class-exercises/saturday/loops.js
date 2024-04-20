// ------------- Exercise 1 (for loop): -------------
// Create a for loop that counts from 0 to 100 and in each iteration adds the current value to a total result. Finally, log the result.

// Diego's solution:
let result = 0; // Global Scope
for (let index = 0; index <= 100; index++) {
  console.log(index);
  result += index;
}
console.log(result);
console.log("--------------");
// ------------- Exercise 2 (for loop): -------------
// Create an array of numbers called "numbers" with random values. Use a for loop to iterate over the array and find the largest and smallest numbers. Print both numbers in the console.

// Joseph's Solution
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//console.log(`this is the original version of ${numbers}`);
let highestJoseph = 0;
let smallJoseph = 0;
for (index = 0; index < numbers.length; index++) {
  highestJoseph = Math.max(...numbers);
  smallJoseph = Math.min(...numbers);
}
console.log(`the hishest value is ${highestJoseph}`);
console.log(`the lowest value is ${smallJoseph}`);
//console.log(`this is the original version of AFTER FOR ${numbers}`);

// Diego's Solution
let numbersDiego = [200, 12234, -123, 0, 134564, 0.3456];
let biggestN = 0;
let smallestN = 0;
for (let index = 0; index < numbersDiego.length; index++) {
  if (numbersDiego[index] > biggestN) biggestN = numbersDiego[index];
  if (numbersDiego[index] < smallestN) smallestN = numbersDiego[index];
}
console.log(biggestN);
console.log(smallestN);
let highest = 0;
let small = 0;
for (let index = 0; index < numbersDiego.length; index++) {
  highest = Math.max(...numbersDiego);
  small = Math.min(...numbersDiego);
}
console.log(`Joe's ${highest}`);
console.log(`Joe's ${small}`);

// ------------- Exercise 3 (while loop): -------------
// Use a while loop to print the even numbers from 2 to 20.

// Solution 01
let num = 2;
while (num <= 20) {
  num += 2;
  console.log(num);
}
//Soluion 02
let numNenad = 2;
while (numNenad <= 20) {
  if (numNenad % 2 == 0) console.log(numNenad);
  numNenad++;
}
// Nenad's
let a = 2;
while (a <= 20) {
  if (a % 2 == 0) console.log(`The even numbers to 20 are ${a}`);
  a++;
}
// Joe's
let nJo = 0;
while (nJo <= 20) {
  nJo = nJo + 2;
  console.log(nJo);
}
