// Number methods and numeric notation

// There are 5 ways to write numbers. Let's see them using the number 100 as an example
// Normal
let num1 = 100;
// Decimal
let num2 = 50.5;
// Hexadecimal
let num3 = 0x64;
// Exponential
let num4 = 1e2;
// Negative
let num5 = -5;

// Number, converts a string to a Number
console.log(typeof "2");
console.log(typeof 2);
let oldString = "2";
let newChange = Number("2");
console.log(typeof oldString);
console.log(typeof newChange);

// Number to be used
let number = 1000.3333333333;

// Sets the number of decimal places of a number as the value specified in toFixed. If there is nothing or it's 0, it does not add any decimal places.
console.log(number.toFixed(2)); // 1000.33
console.log(number.toFixed(3)); // 1000.333
console.log(number.toFixed(4)); // 1000.3333

// Converts a number to exponential notation with base 10. If a parameter is provided, there will be as many decimals as the parameter introduced.
console.log(number.toExponential());
console.log(number.toExponential(5));

// Sets all the significant digits of a number
console.log(number.toPrecision(2));

// If you have an object but want to convert it to its numeric value you can use .valueOf(). You shouldn't use this method unless it's to convert a data.
let numberTwo = {
  x: "20",
  y: "40",
};

console.log(typeof numberTwo.x.valueOf());

console.log((numberTwo.x + numberTwo.y).valueOf());

// If you want to convert a number to a string use the .toString() method
console.log(number.toString());
console.log(typeof number.toString());
