// Always double check that your files are connected by displaying some message in conssole or by an alert!
//alert("Hello");

// What is an Operator ?
// JavaScript operators are symbols that perform operations on variables and values. They are essential for performing arithmetic, comparison, logical, assignment, and other operations in JavaScript.

// For example:

const add = 2 + 3;
console.log(add);

//Here + is an operator that performs addition, and 2 and 3 are operands.

// WHy do we have these operators ?

// Why are JavaScript operators important?
// Operators are fundamental for manipulating data and controlling program flow in JavaScript.
// They enable mathematical calculations, string manipulation, logical decisions, and other crucial operations within a program.
// By using operators, developers can create complex expressions and algorithms to achieve various tasks efficiently.

// How do they work ?

// How do JavaScript operators work?
// JavaScript operators work by taking one or more operands and performing specific actions on them.
// The behavior of operators depends on the type of operator and the type of operands.
// For example, arithmetic operators perform mathematical calculations on numeric operands, while comparison operators compare operands and return a Boolean value indicating the result of the comparison.
// Operators can be unary (operating on a single operand), binary (operating on two operands), or ternary (operating on three operands).
// Unary operators act on a single operand. One common unary operator is the negation operator (-), which changes the sign of its operand.
// Binary operators act on two operands. Addition (+) and subtraction (-) are examples of binary operators.
// The ternary operator (also known as the conditional operator) is the only ternary operator in JavaScript. It takes three operands and is often used as a shorthand for an if-else statement.

// Examples

// Vars
let a = 5;
let b = 3;

// Arithmetic operators
let negative = -b; //   Unary
let sum = a + b; // Addition - Binary
let difference = a - b; // Subtraction - Binary
let product = a * b; // Multiplication - Binary
let quotient = a / b; // Division - Binary
let remainder = a % b; // Modulus - Binary
console.log(`
// Arithmetic operators: 
${sum}
${difference}
${product}
${quotient}
${remainder}
// --------------------
`);

// Comparison operators
let isEqual = a === b; // Strict equality comparison
let isGreaterThan = a > b; // Greater than comparison
let isLessThan = a < b; // Less than comparison
console.log(`
// Comparison operators: 
${isEqual}
${isGreaterThan}
${isLessThan}
// --------------------
`);

// Logical operators
let logicalAnd = a > 0 && b > 0; // Logical AND
let logicalOr = a > 0 || b > 0; // Logical OR
let logicalNot = !(a > 0); // Logical NOT

console.log(`
// Logical operators: 
${logicalAnd}
${logicalOr}
${logicalNot}
// --------------------
`);

// Ternary Operator:
// The ternary operator (also known as the conditional operator) is the only ternary operator in JavaScript. It takes three operands and is often used as a shorthand for an if-else statement.

//
//
// Syntax: condition ? expr1 : expr2
// Explanation: If the condition evaluates to true, expr1 is returned; otherwise, expr2 is returned.
//
//

// Ternnary Operator Example
// Let's say that we are bouncers on a bar, and we are checking for people's age to see if that they can come in to the bar!
let age = 18;
let usingTheTernaryOperator =
  age >= 18
    ? "You are bigger than 21, enjoy your night and please drink responsibly"
    : "You are smaller than 21, please go home and rest, you are a kid!";
console.log(usingTheTernaryOperator);

// JavaScript Comparison Operators
//Comparison operators compare two values and return a boolean value, either true or false. For example,

console.log("Comparison Operators");
console.table([
  {
    operator: "==",
    description: "Equal to: returns true if the operands are equal",
    example: "x == y",
  },
  {
    operator: "!=",
    description: "Not equal to: returns true if the operands are not equal",
    example: "x != y",
  },
  {
    operator: "===",
    description:
      "Strict equal to: true if the operands are equal and of the same type",
    example: "x === y",
  },
  {
    operator: "!==",
    description:
      "Strict not equal to: true if the operands are equal but of different type or not equal at all",
    example: "x !== y",
  },
  {
    operator: ">",
    description:
      "Greater than: true if left operand is greater than the right operand",
    example: "x > y",
  },
  {
    operator: ">=",
    description:
      "Greater than or equal to: true if left operand is greater than or equal to the right operand",
    example: "x >= y",
  },
  {
    operator: "<",
    description:
      "Less than: true if the left operand is less than the right operand",
    example: "x < y",
  },
  {
    operator: "<=",
    description:
      "Less than or equal to: true if the left operand is less than or equal to the right operand",
    example: "x <= y",
  },
]);

// Excercises

// Exercise -  001
// Declare a variable without assigning any value to it. Then, on another line, assign it a numeric value. Finally, perform a reassignment to add 1 to that variable. Do this reassignment in three different ways. Remember to use console.logs every time you want to check your progress.

// Exercise -  002
// Declare two variables, one with the value 3 (number) and the other with the value "3" (string). Make a console.log to compare if both are equal and return true. Make another one to compare them strictly and return false. Do the same but checking if they are NOT equal. Make a console.log to check if the first one is greater than or equal to 7. Finally, make a console.log to check if the two variables are strictly equal OR if the first variable is less than or equal to 3.
