/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Ironhack Cafe! What would you like to order today?"
Where Ironhack Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafeName = "Ironhack Cafe";
console.log(`Welcome to ${cafeName}! What would you like to order today?`);

/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/
let price = 2;
let quantity = 3;
let elvinsVariable = price * quantity;
console.log(`There you go, that'll be ${price * quantity} euros`);
console.log(`There you go, that'll be ${elvinsVariable} euros`);

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/
let isBestCoffee = false;
// USING IF ELSE
if (isBestCoffee) {
  console.log(
    `You said this coffee is the best, that was actually ${isBestCoffee}`
  );
} else {
  console.log(
    `You said this coffee is the best, that was actually NOT ${isBestCoffee}`
  );
}
// USING SWITCH
switch (isBestCoffee) {
  case true:
    console.log(
      `You said this coffee is the best, that was actually ${isBestCoffee}`
    );
    break;
  case false:
    console.log(
      `You said this coffee is the best, that was actually NOT ${isBestCoffee}`
    );
    break;
}

/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you the new value.
*/

// LET + VAR are re-assignable
// const , never!!!

let cafeGuests = 18;
console.log(cafeGuests);
cafeGuests = true;
console.log(cafeGuests);
cafeGuests = ["iphonne", "macbook", "microphone"];
console.log(cafeGuests);
/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/
const maxGuests = 18;
//maxGuests = 22;
// console.log(maxGuests); // Uncommet to force error on console!
/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
let favoriteBand = "rEd hoT cHilli peppers";
console.log(favoriteBand);
let favBandUpper = favoriteBand.toUpperCase();
console.log(favBandUpper);
/*
7)
Print out the same string in only lowercase letters.
*/
let newBandWord = favBandUpper.toLowerCase();
console.log(newBandWord);
/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/

// Nenads Option
let extra = "Today we have a special summer deal!";
console.log(extra.replace("summer deal", "winter sales"));

// Ryans Code
let coffeePrice = 2;
coffeeCups = 5;
console.log(`There you go, that will be ${coffeePrice * coffeeCups} euros`);
