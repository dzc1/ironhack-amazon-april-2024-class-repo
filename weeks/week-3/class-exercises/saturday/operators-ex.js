// Excercises

// Exercise -  001
// Declare a variable without assigning any value to it. Then, on another line, assign it a numeric value. Finally, perform a reassignment to add 1 to that variable. Do this reassignment in three different ways. Remember to use console.logs every time you want to check your progress.

// part 01
let myEmptyVariable = "";
let myEmptyVariableTwo;
myEmptyVariable = 5;
console.log(myEmptyVariable);
// Using a simple arithemtic operator
myEmptyVariable = myEmptyVariable + 1;
console.log(myEmptyVariable);
// Using a more complex arithemetixc operator
let complexApproach = (myEmptyVariable += 1);
console.log(complexApproach);
let complexApproachTwo = (myEmptyVariable -= 1);
console.log(complexApproachTwo);
// According to Steven the 'Easiset one';
let incrementOperator = myEmptyVariable++;
console.log(incrementOperator--);
// Elvin's approach
console.log(myEmptyVariable + 1);

console.log("----------");
console.log("----------");
// Exercise -  002
// Declare two variables, one with the value 3 (number) and the other with the value "3" (string). Make a console.log to compare if both are equal and return true. Make another one to compare them strictly and return false. Do the same but checking if they are NOT equal. Make a console.log to check if the first one is greater than or equal to 7. Finally, make a console.log to check if the two variables are strictly equal OR if the first variable is less than or equal to 3.

let num = 3;
let string = "3";

// Part 01 -= Return True
let Nenad = num == string;
console.log(Nenad);

// Part 02 - Return False
let strictly = num === string;
console.log(strictly);

// Part 03 - Do the same but checking if they are NOT equal
let elvins = num != string;
console.log(elvins);

// Part 04 -  Strickly not!
let strict = num !== string;
console.log(strict);

// Part 05 -  Make a console.log to check if the first one is greater than or equal to 7.
console.log(num >= 7);

// Part 06 -  Finally, make a console.log to check if the two variables are strictly equal OR if the first variable is less than or equal to 3.
// Using a Ternary
// Mental Notesz: strict opperator (===) as well as the OR (||), as well asthe less tan or equal to (<=)
// Syntax: condition ? expr1 : expr2
// Syntax: condition ? expr1 : condition ? expr1 : condition ? expr1 : condition ? expr1 : condition ? expr1 : expr2
let ternaryOp =
  num === string
    ? "Both vars are typeChecked correctly"
    : num <= 3
    ? "Number is less or equal to theree than to 3"
    : "";

let joseph = num === string || num <= 3;
console.log(joseph);
