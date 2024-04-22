// --------- Exercise 1 (map): ---------
// Create an array with the names of 5 of your friends or family members. Use the .map() method to create a new array with the initials of each name.

// Solution:
/* const family = ['Joan', 'Sandra', 'Joel', 'Aleix'];
const initials = family.map(member => member.slice(0,1));
console.log(initials);
// Expanded version: 
const initialsV2 = family.map((member) => {
  return member.slice(0,1);
}) */

//...
//...
//...
//...

// --------- Exercise 2 (filter): ---------
//  Create an array with numbers from 1 to 10. Use the .filter() method to create a new array with only the even numbers.

// Solution:
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenN = numbers.filter(number => number%2 === 0);
console.log(evenN);
// Expanded version:
const evenNV2 = numbers.filter((number) => {
  if(number % 2 === 0) return number;
});
console.log(evenNV2); */

//...
//...
//...
//...

// --------- Exercise 3 (sort): ---------
// Create an array with names of fruits unordered. Use the .sort() method to sort the fruit names in alphabetical order.

// Solution:
/* const frutas = ['plátano', 'manzana', 'coco', 'kiwi', 'fresa', 'pera'];
const frutasOrdenadas = frutas.sort((a, b) => a > b ? 1 : -1);
console.log(frutasOrdenadas); */

//...
//...
//...
//...

// --------- Exercise 4 (forEach): ---------
// Create an array with random numbers. Use the .forEach() method to add each number to a final result.

// Solution:
/* const numbers = [2, 3910, 23, 456, 2555, 421, 2689, 182, 334, 901];
let result = 0;
numbers.forEach(number => result += number);
console.log(result); */

//...
//...
//...
//...

// --------- Exercise 5 (concat): ---------
// Create two arrays, one with numbers and one with letters. Use the .concat() method to join both arrays into a single array.

// Solution:
/* const numbers = [0, 1, 2, 3, 4, 5, 6];
const names = ['Diego', 'Jarko', 'Aleix', 'Montse', 'Chloe'];
const joined = numbers.concat(names);
console.log(joined); */

//...
//...
//...
//...

// --------- Exercise 6 (every): ---------
// Create two arrays with numbers. Use the .every() method to check if all numbers in the array are less than 40. Make one array return true and the other false.

// Solution:
/* const n1 = [0, 1, 3, 467, 24421, 344, 345];
const n2 = [0, 22, 35, 39, 23, 9];
console.log(n1.every(n => n < 40));
console.log(n2.every(n => n < 40)); */

//...
//...
//...
//...

// --------- Exercise 7 (some): ---------
// Create an array with objects, each object should have a property called "status" with a value of "complete" or "incomplete". Use the .some() method to check if at least one object in the array has a status of "incomplete".

// Solution:
/* const statusArr = [{status: 'complete'}, {status: 'incomplete'}, {status: 'complete'}, {status: 'complete'}];
console.log(statusArr.some(obj => obj.status === "incomplete")); */

//...
//...
//...
//...

// --------- Exercise 8 (includes): ---------
// Create an array with animal names. Use the .includes() method to check if a specific animal is in the array.

// Solution:
/* const animales = ['perro', 'gato', 'cocodrilo', 'gorila', 'tigre', 'avestruz'];
console.log(animales.includes('gato')); */

//...
//...
//...
//...

// --------- Exercise 9 (join): ---------
// Create an array with animal names. Use the .join() method to convert the array into a string separated by commas.

// Solution:
/* const animales = ['perro', 'gato', 'cocodrilo', 'gorila', 'tigre', 'avestruz'];
const animalesJoined = animales.join(', ');
console.log(animalesJoined); */

//...
//...
//...
//...

// --------- Exercise 10 (reduce): ---------
// Create an array with numbers from 1 to 10. Use the .reduce() method to sum all the numbers in the array.

// Solution:
/* const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = nums.reduce((acc, currentNumber) => acc += currentNumber, 0);
console.log(sum);
// Expanded version:
const sum2 = nums.reduce((acc, currentNumber) => {
  acc = acc + currentNumber;
  return acc;
});
console.log(sum2); */

//...
//...
//...
//...

// --------- Exercise 11 (find): ---------
// Create an array with singer names. Use the .find() method to find the first name that starts with 'M'.

// Solution:
/* const singers = ['Bob Dylan', 'Kanye West', 'Stevie Nicks', 'Madonna', 'Michael Jackson'];
const singerWithM = singers.find(name => name.slice(0,1) === 'M');
console.log(singerWithM); */

//...
//...
//...
//...

// --------- Exercise 12 (findIndex): ---------
// Create an array of movie titles. Use the .findIndex() method to find the index of the first movie whose title consists of only one word.

// Solution:
/* const movies = ['The Godfather', 'Gentlemen prefer blondes', 'Jurassic Park', 'Star Wars', 'Requiem for a Dream', 'Persona', 'Crash', 'Kill Bill'];
const oneWordTitleIndex = movies.findIndex(movie => movie.split(' ').length === 1);
console.log(oneWordTitleIndex); */

//...
//...
//...
//...

// --------- Exercise 13 (indexOf): ---------
// Create an array with numbers. Use the .indexOf() method to find the first occurrence of a specific number in the array.

// Solution:
/* const numbers = [0, 12, 345, 674, 34, 68, 6];
console.log(numbers.indexOf(12)); */

//...
//...
//...
//...

// --------- Exercise 14 (fill): ---------
// Create an array with random numbers. Using the .fill() method, make the fourth element of the array change its value to 55.

// Solution:
/* const numbers = [0, 34, 678, 4678, 34, 678, 33, 56, 46, 5];
console.log(numbers.fill(55, 3, 4)); */

//...
//...
//...
//...

// --------- Exercise 15 (slice): ---------
// Create an array with numbers from 1 to 10. Use the .slice() method to create an array that contains only from 5 to 8.

// Solution:
/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const from5to8 = numbers.slice(4, 8);
console.log(from5to8); */

//...
//...
//...
//...

// --------- Exercise 16 (reverse): ---------
// Create an array with strings. Use the .reverse() method to reverse the order of the strings in the array.

// Solution:
/* const stringArr = ['hola', 'qué tal?', 'adiós'];
console.log(stringArr.reverse()); */

//...
//...
//...
//...

// --------- Exercise 17 (push, pop, shift, unshift): ---------
// Create an array with proper names. Use the .pop() method to remove the last name from the array, .push() to add a new name at the end, .shift() to remove the first element from the array, and .unshift() to add a new name at the beginning.

// Solution:
/* const names = ['Maria', 'Juan', 'Marcos', 'Ana', 'Paula', 'Dani'];
names.pop();
names.push('Marta');
names.shift();
names.unshift('Javier');
console.log(names); */

//...
//...
//...
//...
