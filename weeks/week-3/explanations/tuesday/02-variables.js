// Variables

// What are Variables in JavaScript?
// In JavaScript, variables are like containers that hold information. They let you store different kinds of data, such as numbers, text, or more complex things like lists of items. Think of variables as labeled boxes where you can put stuff to use later.

// Why Use Variables in JavaScript?
// Variables are used to remember and manage information in a program. Instead of repeating the same value over and over, you can use a variable to store that value once and then use the variable name whenever you need it. This makes your code cleaner, easier to understand, and more flexible to change.

// 3 Ways of declaring Variables in JS
// They use JS reserved keywords
// var - Old School
// let - New School - PREFFERED
// const - New School - PREFFERED

// Examples

var firstName = "Michael";
console.log(firstName);

let lastName = "Scott";
console.log(lastName);

const role = "Regional Manager";
console.log(role);

// Camel Case Convention
let myCountryOfOrigin = "Venezuela";

// Example of storing variables inside another variable using a oldSchool approach
let theOfficeInfo = firstName + lastName + "- " + role;
let theOfficeInfoRefactored = firstName + " " + lastName + "- " + role;
console.log(theOfficeInfo);
console.log(theOfficeInfoRefactored);

// Example of storing variables using backticks ;) --
// Personal Opinion: Better approach because, even though a bit more long in the process due to the ${} its leads to more flexibility as you can see :)
let theOfficeInfoBackticked = `${firstName} ${lastName} - ${role}`;
console.log(theOfficeInfoBackticked);

// Rules & Good Practices

// Use descriptive naming for better clarity and descriptive variable names.
// If your variables are composed of two or more words, use the camelCase convention naming.
// JS is case sensitive so y & Y are parsed different by the compiler since they are different case
// Variable names cannot start with numbers.
// Variables cannot use resrved keyword names
// URL TO SEE FULL LIST - https://www.techonthenet.com/js/reserved_words.php
// Variables declared with reserved keywords var & let can be re-assigned while variables using the reserved keyword const cannot.
// YOU CAN assign an empty value to a variable while its declared with "let" or "var", if you try to do so with "const", you will get an error
// THE "var" keyword although its still avaiable, it is not used anymore, since it has been swapped by "let" for modern practices.

// EXAMPLES

// Good Variable naming
// Descriptive naming and use of camelCase
let favoriteFoods = ["Pizza", "Sushi", "Ceviche", "Soup"];
console.table(favoriteFoods);

// Difference of case sensitive variables

let phone = "Iphone";
let Phone = "Android";
console.log(phone, ",", Phone);

console.log("---------");
console.log("---------");
// vAr & let
// Variable value reassignment
let coolVariable = "I Love pizza!";
console.log(coolVariable);
coolVariable = "I love sushi!";
console.log(coolVariable);
coolVariable = 24;
console.log(coolVariable);
coolVariable = true;
console.log(coolVariable);

//const favFoodType = "Pizza";
//favFoodType = "Pasta";

var favCountries = ["spain", "germany"];
console.log(favCountries);
favCountries = ["venezuela"];
console.log(favCountries);

console.log("---------");
console.log("---------");

// Empty values using let or var
let music;
var food;
music = ["RCHP", "Foo Fighters", "Nirvana"];
console.table(music);
food = 32;
console.log(food);

console.log("---------");
console.log("---------");

let amazingArtist = {
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
    portugal: 800,
  },
};

console.log(`Beyonce's last name is ${amazingArtist.lastName}`);

const myCoolSentence = `Beyonce's last name is ${amazingArtist.lastName} and her third label is called ${amazingArtist.labels[2]}`;

console.log(myCoolSentence);
console.log(myCoolSentence.toUpperCase());

console.log(myCoolSentence.length);
console.log(myCoolSentence[0]);
console.log(myCoolSentence.charAt(0));
