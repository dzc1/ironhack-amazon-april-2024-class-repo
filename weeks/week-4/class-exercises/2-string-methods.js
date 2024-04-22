// Exercise 1
// Given a string, count the number of vowels (a, e, i, o, u) it contains, using a function that accepts 1 paramater as an argument
let stringWithVowels = "hello world";
// Expected output: 3

/*
Solution:
const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
console.log(countVowels(stringWithVowels));
*/

// ----
// ----
// ----
// ----

// Exercise 2
// Given a string, reverse it using a function that accepts 1 paramater as an argument
let stringToReverse = "hello";
// Expected output: "olleh"

/*
Solution:
const reverseString = (str) => {
  return str.split('').reverse().join('');
};
console.log(reverseString(stringToReverse));
*/

// ----
// ----
// ----
// ----

// Exercise 3
// Given a string, check if it contains a specific substring using a function that accepts 2 paramaters as arguments
let mainString = "JavaScript is awesome";
let subString = "script";
// Expected output: true

/*
Solution:
const containsSubstring = (str, sub) => {
  return str.toLowerCase().includes(sub.toLowerCase());
};
console.log(containsSubstring(mainString, subString));
*/

// ----
// ----
// ----
// ----

// Exercise 4
// Given a string representing a name, extract the first name (assuming the first word is the first name) using a function that accepts 1 paramater as an argument.
let userName = "John Doe";
// Expected output: "John"

/*
Solution:
const extractFirstName = (str) => {
  return str.split(' ')[0];
};
console.log(extractFirstName(userName));
*/

// ----
// ----
// ----
// ----

// Exercise 5
// Given a string, convert it to uppercase using a function that accepts 1 paramater as an argument.
let stringToLower = "hello world";
// Expected output: "HELLO WORLD"

/*
Solution:
const toUpperCase = (str) => {
  return str.toUpperCase();
};
console.log(toUpperCase(stringToLower));
*/

// ----
// ----
// ----
// ----
