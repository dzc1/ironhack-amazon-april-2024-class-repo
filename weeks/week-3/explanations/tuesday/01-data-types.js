// Data Types

// There are different types of data that we can use in a JavaScript.

// To be clear there are 2 types of data cagegories:
// - Primitive Data Types
// - Non-Primitive Data Types

// In simple terms, primitive data types represent only one value while non primitive data types are the collections of primitive data types

// Primitive Data Types:
// Strings - Represents textual data
// Number - An integer or a floating-point number
// BigInt - An integer with arbitrary precision - is a special type of number that allows you to work with really, really big whole numbers.
// Boolean - Any of two values: true or false
// Undefined - A data type whose variable is not defined or initialized
// Null -  A null value

// Non Primitive Data Types:
// Arrays - Container of multiples values of collection of data
// Objects - Container with key-value pairs of collection of data

// IMPORTANT!!!!
// The typeof operator returns a string indicating the type of the operand's value || the data type that is used.
// Is like a detective that helps you figure out what type of thing something is. It tells you if something is a number, a word, a function, or something else. It's like looking at an object and saying, "Hey, what are you?" to understand what kind of thing you're dealing with in your code.

// Examples

// Primitive Data Types
// Strings
console.log("Strings Example");
console.log("I love Coding!");
console.log(typeof "I love Coding!");
console.log("-------------------------");

// Numbers
console.log("Numbers Example");
console.log(100);
console.log(50.5);
console.log(-4);
console.log(typeof -4);
console.log("-------------------------");

// Comparison
console.log("4");
console.log(typeof "4");
console.log(4);
console.log(typeof 4);

// BigInt
console.log("BigInt Example");
console.log(900719925124740999n);
console.log(typeof 900719925124740999n);
console.log("-------------------------");

// Boolean
console.log("Boolean Example");
console.log(true);
console.log(false);
console.log(typeof false);
console.log("-------------------------");

// Null
console.log("Null Example");
console.log(null);
console.log(typeof null);
console.log("-------------------------");

// Undefined
console.log("undefined Example");
console.log(undefined);
console.log(typeof undefined);
console.log("-------------------------");

//
// Non-Primitive Data Types
// Arrays []

// Arrays - Array of Strings
console.log("Array of Strings Example");
console.log(["Sweden", "Spain", "Germany", "Portugal"]);
console.log("-------------------------");

// Arrays - Array of Numbers
console.log("Array of Numbers Example");
console.log([8, 4, 5, 7, 9]);
console.log("-------------------------");

// Arrays - Array of Strings, Numbers, Booleans, Null & Undefined
console.log("Mixed Array Example");
console.log(["Sweden", 8, true, undefined, null]);
console.log("-------------------------");

// Object - Logging using log()
// Objects {}
// Container with key-value pairs of collection of data

console.log("Objects Example - Using log() method");
console.log({
  name: "Beyonce Giselle",
  lastName: "Knowles",
  countryOfBirth: "USA",
  age: 41,
  queen: true,
  labels: ["Columbia", "Parkwood", "Music World"],
  totalOfAlbums: 16,
  latestAlbum: "Renaissance",
  fanClubByCountry: {
    germany: 500,
    spain: 400,
    portugsl: 800,
  },
});
