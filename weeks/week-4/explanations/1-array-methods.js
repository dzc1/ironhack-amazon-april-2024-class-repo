// Array Methods

// What are Array Methods
// Array methods are built-in functions that allow you to manipulate arrays in JavaScript. They provide functionalities like adding or removing elements, searching for elements, or transforming the array in various ways.

// Why do we use Array methods
// Array methods make working with arrays more efficient and convenient. They abstract away common operations, reducing the need for manual looping and conditional checks. This leads to cleaner, more readable code and often improves performance.

// JS Array Methods
// To facilitate array manipulation in JavaScript, we should use array methods to make our work easier and make the code cleaner.

// 1. map()
// This method creates a new array with the results of calling a provided function on every element in this array.
// Example 1
const arr = [1, 2, 3, 4, 5, 1];
const mapped = arr.map((eachElement) => eachElement + 10);
console.log("Results of the map() method iterating over an array of numbers:");
console.table(mapped);
console.log("-----");
console.log("-----");
// Example 2
const animals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];
const newAnimals = animals.map((animalPerArrayJoseph) => {
  let storge = animalPerArrayJoseph;
  return storge;
});
console.log("Results of the map() method iterating over an array of strings:");
console.table(newAnimals);
console.log("-----");
console.log("-----");
// Example 3
const movies = [
  { title: "Inception", director: "Christopher Nolan", year: 2010 },
  { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
  { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
  { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
];

const movieTitles = movies.map((movie) => movie.title);
console.log("Results of the map() method iterating over an array of objects:");
console.table(movieTitles);
console.log("-----");
console.log("-----");

// 2. filter()
// This method creates a new array with only the elements that pass the condition inside the provided function.

// Example 1
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
const filtered = arr.filter(
  (numberElement) => numberElement === 2 || numberElement === 4
);
console.log(
  "Results of the filter() method iterating over an array of numbers and filtering through the numbers of 2 OR 4:"
);
console.table(filtered);
console.log("-----");
console.log("-----");
// Example 2
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
const filteredAnimals = animals.filter((animalElement) => {
  return animalElement == "cat" || animalElement == "horse";
});
console.log(
  "Results of the filter() method iterating over an array of strings:"
);
console.table(filteredAnimals);
console.log("-----");
console.log("-----");

// Example 3
// IMPORTANT - ***movies is the array we are pointing to located on line 33 of this document***
const nolanMovies = movies.filter((moviePerArray) => {
  return moviePerArray.director === "Christopher Nolan";
});
console.log(
  "Results of the filter() method iterating over an array of objects containing movies ad filtering all movies belonging to 'Christopher Nolan'"
);
console.log(nolanMovies);
console.log("-----");
console.log("-----");

// 3. sort()
// This method is used to sort the elements of the array in ascending or descending order.
const alphabet = ["f", "a", "c", "v", "z", 9, 0, 2, 3, 33, "zzzz"];
const newSorted = alphabet.sort();

console.table(newSorted);

// Example 1
// ascending sort()
const ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
console.log(
  "The sort() method arranges elements in ascending order based on a comparison function. If a is greater than b, it returns 1, meaning a should come after b. If a is smaller, it returns -1, meaning a should come before b. This logic determines the order of elements in the sorted array."
);
console.table(ascend);
console.log("-----");
console.log("-----");
// Here, the sort() method sorts the elements of the alphabet array in ascending order. The sort() method takes a function as an argument, which compares pairs of elements in the array. If the result of the comparison is positive, it means a should come after b in the sorted array; if negative, a should come before b. So, in this case, if a is greater than b, it returns 1, indicating that a should come after b in the sorted array. If a is smaller than b, it returns -1, indicating that a should come before b in the sorted array.

// Example 2
// descending
const descend = alphabet.sort((a, b) => (a > b ? -1 : 1));
console.log(
  "This code sorts the alphabet array in descending order. The comparison logic is opposite to ascending order: if a is greater than b, it returns -1, meaning a should come before b. If a is smaller, it returns 1, meaning a should come after b in the sorted array."
);
console.table(descend);
console.log("-----");
console.log("-----");

// Example 3
// Sorting through the movies array by pointing to the Year key
// IMPORTANT - ***movies is the array we are pointing to located on line 33 of this document***
const sortedMoviesAsc = movies.sort((movieYearA, movieYearB) => {
  return movieYearA.year - movieYearB.year;
});
const sortedMoviesDesc = movies.sort();
console.log("Sorting movies by release year in ascending order");
console.table(sortedMoviesAsc);
console.table(sortedMoviesDesc);
console.log("-----");
console.log("-----");

// 4. forEach()
// This method helps to loop over an array by executing a provided callback function for each element of an array.

// Example 1
// IMPORTANT - ***alphabet is the array we are pointing to located on line 86 of this document***
console.log(
  "Display the contents of the alphabet array using the for each method"
);
alphabet.forEach((elementOfArray) => {
  console.log(elementOfArray);
  console.log(
    `The letter of the alphabet in this array poisition is: ${elementOfArray}`
  );
});
console.log("-----");
console.log("-----");
// Example 2
// IMPORTANT - ***movies is the array we are pointing to located on line 33 of this document***
console.log(
  "In this example, the forEach() method iterates over each movie object in the movies array. For each movie, it logs the title and year to the console."
);
console.log("-----");
movies.forEach((movie) => {
  console.log(
    `the title of this movie is ${movie.title} and it was released on the year ${movie.year}`
  );
});

console.log("-----");
console.log("-----");

// 5. concat()
// This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.
const arr1 = ["milan", "tokyo"];
const arr2 = ["miami", "chicago"];
const arr3 = ["london", "helsinki"];
console.log(
  "In this example, the concat() method merges arr2, arr3 into arr1 without modifying the existing array"
);
console.log("Using the concat method");
const myNewCopy = arr1.concat(arr2, arr3);
console.log(myNewCopy);
//6.  Spread Operator
// Does the same as the concat operator but it can also work with strings ;)
console.log("Using the spread operator");
const myNewCopyTwo = [...arr1, ...arr2, ...arr3];
console.log(myNewCopyTwo);

console.log("Log the existing arr1 variable to check");
console.table(arr1);
console.log("-----");
console.log("-----");

// 7. every()
// This method checks each element of the array that passes the condition, returning true or false as appropriate.

// Example 1 - all elements >5
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
const greaterFive = arr.every((numberInArray) => {
  return numberInArray > 5;
});
console.log(greaterFive);
console.log("-----");
console.log("-----");

// Example  2 - all elements <9
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
const lessNine = arr.every((numberInArray) => {
  return numberInArray < 9;
});
console.log(lessNine);
console.log("-----");
console.log("-----");

// 8. some()
// This method checks if at least one element of the array passes the condition, returning true or false as appropriate.

// Example 1
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
// at least one element is >5?
const greaterFiveSome = arr.some((number) => {
  return number > 5;
});
console.log(greaterFiveSome);
console.log("-----");
console.log("-----");

// Exmaple 2
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
// at least one element is <= 0
const lessNum = arr.some((number) => {
  return number <= 0;
});
console.log(lessNum);
console.log("-----");
console.log("-----");

// 9. includes()
// This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

// Example 1
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
const arrTwo = [1, 2, 3, 4, 5, 1];
let TestUsingIncludes = arrTwo.includes("diego");
console.log(TestUsingIncludes);

// 10. join()
//This method returns a new string by concatenating all the elements of the array separated by the specified separator.
const joinArray = ["C", ".", "R", ".", "E", ".", "A", ".", "M"];
let wutang = joinArray.join("");
let wuTangTwo = joinArray.join("..");
console.log(wuTangTwo);

// 11. reduce()
// This method applies a function against an accumulator and each element of the array to reduce it to a single value.
let reduced = arrTwo.reduce((total, currentValueOfTheArrayElement) => {
  return total + currentValueOfTheArrayElement;
});
console.log(reduced);
console.log("-----");
console.log("-----");

// 12.  find()
// This method returns the value of the first element of an array that passes the test in a check function.
// IMPORTANT - ***arr is the array we are pointing to located on line 15 of this document***
const arrThree = [1, 2, 3, 4, 5, 1];
const found = arrThree.find((numElement) => {
  return numElement > 2;
});
console.log(found);
console.log("-----");
console.log("-----");

// 13. findIndex()
// This method returns the index of the first element of an array that passes the test in a check function.

// Exampple 1
const foundInIndex = arrThree.findIndex((numElement) => {
  return numElement > 2;
});
console.log(foundInIndex);
console.log("-----");
console.log("-----");
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
// Example 2
const indexFinder = animals.findIndex((element) => {
  return element === "dog";
});
console.log(indexFinder);
console.log("-----");
console.log("-----");

// 14. indexOff()
// This method returns the index of the first occurrence of the specified element in the array, or -1 if not found.
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
const animalsThree = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];
const indexFinderOf = animalsThree.indexOf("dogs");
const indexFinderOfTwo = animalsThree.indexOf("cow");
console.log(indexFinderOf);
console.log(indexFinderOfTwo);
console.log("-----");
console.log("-----");

// 15. Slice()
// This method returns a new array with the specified elements from start to end.
const sliceArr = ["a", "b", "c", "d", "e", "f"];
console.table(sliceArr);
const sliced = sliceArr.slice(0, 3);
const sliceReverse = sliceArr.slice(0, -2);
const sliceReverseTwo = sliceArr.slice(-4, 1);
console.table(sliced);
console.table(sliceReverse);
console.table(sliceReverseTwo);
const test = "Hello studentss I love pizza";
console.log(test);
const testSliced = test.slice(0, 15);
console.log(typeof testSliced);
console.log(testSliced);

// 16. reverse()
// This method reverses an array in place. The element at the last index will be the first and the element at index 0 will be the last.
let revArr = [1, 2, 3];
console.log(revArr.reverse());
console.log("-----");
console.log("-----");

// 17. push()
// This method adds one or more elements to the end of the array and returns the new length of it.
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
animals.push("Sharks");
console.table(animals);

// 18. pop()
// This method removes the last element from the end of the array and returns that element.
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
animals.pop("Sharks");
console.table(animals);

// 19. shift()
// This method removes the first element of the array returns the new length of it.
animals.shift();
console.table(animals);

// 20. unshift()
// This method adds one or more elements to the beginning of an array and returns the new length of it.
// IMPORTANT - ***animals is the array we are pointing to located on line 22 of this document***
animals.unshift("Rhynos");
console.table(animals);
