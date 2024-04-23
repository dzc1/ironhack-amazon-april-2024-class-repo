// String Methods

// As we know, in JavaScript a string is a basic data type that consists of a sequence of characters enclosed in quotes ('', "" or ``).

// JavaScript provides us with a series of built-in methods to work with strings. These methods allow us to manipulate them in various ways: extract substrings, search for a specific character or group of characters, or replace parts of a string.

// Below we will see some examples of string methods. Remember that there are many more, and that Google will always be your best friend when you want to know if something specific can be done with any built-in method or not :)

// 1. length
// The length property is used to determine the number of characters in a string. This can be useful for loops and other operations that need to know the size of a string. Remember that spaces and punctuation are also counted as characters.
// Example:
let str = "Hola, mundo!";
let arrayEx = ["ee", 2, 4, 5, 6, 7, 8, { key: "diego" }];
console.log(str.length); // 12
console.log("-----");
console.log("-----");

// 2. indexOf(valueToFind, fromIndex)
// It is used to search for a specific character or group of characters within a string. It returns the index of the first occurrence of the search value, or -1 if the value is not found in the string. The second parameter is optional and is the index from which to start the search. If not provided, it will start searching from 0.
// Example:
// Example:
console.log(str.indexOf("mundo")); // 6
console.log("-----");
console.log("-----");

console.log(str.indexOf("Mundo")); // -1
console.log("-----");
console.log("-----");

// 3. lastIndexOf(valueToFind, fromIndex)
// It is used to find the last occurrence of a specific character or group of characters within a string. It returns the index of the last occurrence of the search value, or -1 if the value is not found in the string. The second parameter is optional and is the index from which to start the search. If not provided, it will start searching from the end of the string.
// Example:
console.log(str.lastIndexOf("o"));
console.log("-----");
console.log("-----");
console.log(str.lastIndexOf("o", 5)); // 1
console.log("-----");
console.log("-----");
console.log(str.lastIndexOf("w")); // -1
console.log("-----");
console.log("-----");

// 4. replace(valueToFind, valueToReplace)
// The replace() method is used to replace a specific character or group of characters within a string with a new value. It can take two arguments: the value to be replaced and the value to replace it with.
// Example:
let string = "I like pizza";
let newSentence = string.replace("pizza", "sushi");
console.log(newSentence);
console.log("-----");
console.log("-----");

// 5. toUpperCase()
// It is used to convert an entire string to uppercase.
// Example:
console.log(str.toUpperCase()); // "HOLA, MUNDO!"
console.log("-----");
console.log("-----");

// 6. toLowerCase()
// It is used to convert an entire string to lowercase.
// Example:
console.log(str.toLowerCase()); // "hola, mundo!"
console.log("-----");
console.log("-----");

// 7. charAt(index)
// Returns the character at the index passed as an argument.
console.log(string.charAt(0)); // "I"
console.log("-----");
console.log("-----");

// 8. slice(start, end)
// Returns a substring created from the index passed as the first argument. The second argument, if included, serves as the end of the substring.
// Example:
console.log(str.slice(0, 4)); // "Hola"
console.log("-----");
console.log("-----");

// 9. substring(start, end)
// Like slice(), it is used to extract a portion of a string. It takes two arguments: the index of the first character to include and the index of the first character to exclude (i.e., the index we put as the second argument will no longer be part of the resulting substring).
// Example 1:
let stringFour = "I like pizza";
console.log(stringFour.substring(0, 4)); // "Hola"
console.log(stringFour.substring(7, 12)); // "mundo"
console.log("-----");
console.log("-----");

// 10. split(separator, limit)
// Divides a string into substrings and returns an array with the resulting substrings. The separator is a string that will be used as a guide to separate the string. Characters that match the separator will be removed from the resulting array. If the separator is not included, the array will contain a single element with the entire original string. The limit is an optional argument and serves to limit the number of elements that the array will contain.
let newSubstrings = stringFour.split(" ");
console.log(newSubstrings);

console.log(str.split(" "), 1); // ['Hola,']
console.log("-----");
console.log("-----");

console.log(str.split("")); // ['H', 'o', 'l', 'a', ',', ' ', 'm', 'u', 'n', 'd', 'o', '!']
console.log("-----");
console.log("-----");

console.log(str.split()); // ['Hola, mundo!']
console.log("-----");
console.log("-----");

// 11. includes(substring, position)
// This method searches for the substring passed as the first argument and returns true or false depending on whether the string contains that substring or not. Position is an optional argument and represents the index from which to start searching for the substring. If not specified, this position is 0.
// Examples:
console.log(str.includes("ola")); // true
console.log("-----");
console.log("-----");

console.log(str.includes("ola", 5)); // false
console.log("-----");
console.log("-----");

// 12. endsWith(substring, position)
// Checks if a string ends with the substring passed as an argument, and returns true or false accordingly. If the position is indicated, it checks if up to that index (excluding the index) the string ends with the substring we indicate.
// Examples:
console.log(str.endsWith("!")); // true
console.log("-----");
console.log("-----");

console.log(str.endsWith("mundo!")); // true
console.log("-----");
console.log("-----");

console.log(str.endsWith("mundo")); // false
console.log("-----");
console.log("-----");

console.log(str.endsWith(",")); // false
console.log("-----");
console.log("-----");

console.log(str.endsWith(",", 5)); // true
console.log("-----");
console.log("-----");

// 13. trim()
// Used to remove whitespace from a string.
// Examples:
const str2 = "   Hola, mundo! ";
console.log(str2);
console.log(str2.trim()); // 'Hola, mundo!'
console.log("-----");
console.log("-----");
