// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  //  iteration 1.1 - Clean the array of directors
  let uniqueDirectors = [];

  // Loop through each movie in the movies array
  movies.forEach((movie) => {
    // Check if the director of the current movie is already in the uniqueDirectors array
    if (!uniqueDirectors.includes(movie.director)) {
      // If not, add the director to the uniqueDirectors array
      uniqueDirectors.push(movie.director);
    }
  });

  // Return the array of unique directors
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // Check if movies array is empty
  if (!movies) return 0;

  // Filter Spielberg drama movies
  let stevenDrama = movies.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  // Return the count of Spielberg drama movies
  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // Check if movies array is empty
  if (movies.length === 0) return 0;

  // Calculate the total score of all movies
  let score = movies.reduce((accumulator, actualValue) => {
    // Check if the movie has a score
    if (actualValue.score) {
      // Add the score to the accumulator
      return accumulator + actualValue.score;
    } else {
      // If the movie has no score, return the accumulator unchanged
      return accumulator;
    }
  }, 0);

  // Calculate the average score with 2 decimal places
  let average = (score / movies.length).toFixed(2);

  // Convert the average to a number and return it
  return Number(average);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // Check if movies array is empty
  if (movies.length === 0) return 0;

  // Filter drama movies
  let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  // Return the average score of drama movies
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Create a copy of the movies array
  let moviesInner = movies.map((movie) => movie);

  // Sort the movies by year in ascending order
  moviesInner.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) return movieA.year - movieB.year;
    if (movieA.year < movieB.year) return movieA.year - movieB.year;
    else return movieA.title.localeCompare(movieB.title);
  });

  // Return the sorted movies array
  return moviesInner;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Map the movies to an array of titles, sort them alphabetically, and return the first 20 titles
  return movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // Implementation for this bonus iteration is missing
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  // Implementation for this bonus iteration is missing
}
