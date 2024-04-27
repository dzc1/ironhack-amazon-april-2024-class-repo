// Ciprians Approach
function maxOfTwoNumbers(numOne, numTwo) {
  //Version 01 - To have all tests passing!
  // If - else - conditionals
  // in this scenario we have an implied conidtional that solves the third test of Jasmin file! AMBIGIOUS

  // should return greater of two arguments - if the first argument greater
  if (numOne > numTwo) {
    console.log(`${numOne} is greater than ${numTwo}`);
    return numOne;
  }
  //should return greater of two arguments - if the second argument greater
  else {
    console.log(`${numTwo} is greater than ${numOne}`);
    return numTwo;
  }
}

//Exercise 1 - V002

const maxOfTwoNumbersArrow = (numOne, numTwo) => {
  //Version 01 - To have all tests passing!
  // If - else - conditionals

  // should return greater of two arguments - if the first argument greater
  if (numOne > numTwo) {
    console.log(`${numOne} is greater than ${numTwo}`);
    return numOne;
  }
  //should return greater of two arguments - if the second argument greater
  else if (numOne < numTwo) {
    console.log(`${numTwo} is greater than ${numOne}`);
    return numTwo;
  }
  // should return either arguments - if both arguments are equal
  else {
    console.log(`${numTwo} is the same as ${numOne}`);
    return numOne;
  }
};

//Exercise 1 - V003 - Using a math method!
const maxOfTwoNumbersUsingMathMethod = (numOne, numTwo) => {
  return Math.max(numOne, numTwo);
};

// ITeration 002
// Find the longest word

// Steven's - Version
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crocedile",
  "crackpot",
];

// should declare a function named findLongestWord
function findLongestWord(array) {
  if (array.length === 0) {
    return null;
  }
  // should return the word when called with a single-word array
  return array.reduce((longestWord, currentWord) => {
    // should return the first occurrence of the word when longest have multiple occurrences
    // should return the longest occurrence when it has multiple words
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, "");
}
console.log(findLongestWord(words));

// findLongestWord - Using a sort method
const findLongestWordUsingSort = (array) => {
  // define an empty varibale
  let wordLength = "";

  // if, else-if  & else
  if (!array.length) {
    return null;
  } else if (array.length === 1) {
    return array.toString();
  } else {
    let sortVar = array.sort((wordOne, wordTwo) =>
      wordOne.length > wordTwo.length ? -1 : 1
    );
    wordLength = sortVar[0];
  }
  // return
  console.log(wordLength);
  return wordLength;
};

findLongestWordUsingSort(words);

/// Iteration 3

function sumNumbers(sumArray) {
  let totalSum = 0;
  // For each - method
  // given thsat we have an implied return inside the for Each, let's remove the curlyBrackets!
  sumArray.forEach((number) => (totalSum += number));

  // Return totalSunm
  console.log(totalSum);
  return totalSum;
} // Iteration 3.1

function sumTwo(mixedArr) {
  if (mixedArr.length === 0) return 0;

  let result = 0;

  for (let i = 0; i < mixedArr.length; i++) {
    let element = mixedArr[i];
    // check for stringz
    if (typeof element === "string") {
      result += element.length;
    } // check for bool value
    else if (element === true) {
      result += 1;
    } // cehck for objects + arrays
    else if (typeof element === "object" || typeof element === "array") {
      throw new Error("no no....");
    } else {
      result += mixedArr[i];
    }
  }
}

const numbersAvg = [2, 6.86586868, 9, 10.444, 7.4444, 4, 1, 9];

function averageNumbers(numbersAvg) {
  // return null if empty
  if (!numbersAvg.length) return null;
  // Use this to store operation
  let total = 0;
  for (let i = 0; i < numbersAvg.length; i++) {
    total += numbersAvg[i];
  }
  // without toFixed()
  let solution = total / numbersAvg.length;
  console.log(solution);
  // with toFixed()
  let solutionUsingToFixedMethod = (total / numbersAvg.length).toFixed(2);
  console.log(solutionUsingToFixedMethod);

  return solution;
}

averageNumbers(numbersAvg);

//// ----

// function doesWordExist(callback) {
//   const words = wordsFind;
//   const wordToSearch = "matter";
//   const wordExists = callback(words, wordToSearch);

//   if (wordExists) {
//     console.log(`The word "${wordToSearch}" exists in the array.`);
//   } else {
//     console.log(`The word "${wordToSearch}" does not exist in the array.`);
//   }
// }

// doesWordExist((array, word) => {
//   return array.includes(word);
// });

// ------

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];
console.table(wordsUnique);

function uniquifyArray(array) {
  // should return null if receives an empty array when called
  if (!array.length) return null;
  // should return the correct uniqified array when an array of the same elements passed as argument
  // should return the same array when no element is repeated
  // should return the uniquified array
  let uniqueArray = [];
  array.forEach((word) => {
    if (!uniqueArray.includes(word)) {
      uniqueArray.push(word);
    }
  });
  // Return new array with the words that are not duplicated
  console.table(uniqueArray);
  return uniqueArray;
}
uniquifyArray(wordsUnique);

// Joseph's Versions

const uniquifyArrayJoseph = (array) => {
  // If we are using the push method to push into this new array that we are creating ?
  // why not ?
  // use other methods to first remove the duplicates and touch the original ?
  // Can we manipoulate the og ? -- YES - LEts use the for each!
  // cabn we use the pop() method ? -- yes -- we will be romivng form the last of the list!
  if (!array.length) return null;
  // point to og array using for each and lets remove!
  let emptyNewArr = [];
  let solutionTest = array.forEach((word) => {
    console.log(word);
    if (array.includes(word)) {
      console.log(`Word to be removed ${word}`);
      emptyNewArr.pop(word);
    }
  });
  console.log(solutionTest);
  return solutionTest;
};

uniquifyArrayJoseph(wordsUnique);
