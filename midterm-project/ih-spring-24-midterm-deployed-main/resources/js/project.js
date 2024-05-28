// Extracting the post number from the URL
let params = new URLSearchParams(location.search); // Creating a new URLSearchParams object to extract parameters from the URL query string
console.log(params); // Outputting the parameters object to the console for debugging purposes
var postUrl = params.get("p"); // Retrieving the value of the "p" parameter from the URL query string and storing it in the postUrl variable
console.log(postUrl); // Outputting the extracted post number to the console for debugging purposes

// Sumnmary:
// The function getPost is an asynchronous function that fetches post data from a JSONPlaceholder API endpoint based on the provided post ID. It then updates specific HTML elements on the page with information extracted from the fetched post data. The function is wrapped in a try/catch block to handle any potential errors that may occur during the fetching or processing of data. If an error occurs, it is logged to the console.

const getPost = async (post) => {
  // Declaring an asynchronous function named getPost which takes a parameter 'post'
  try {
    // Starting a try block to handle potential errors
    const response = await fetch(
      // Waiting for the fetch call to complete and storing the result in 'response'
      `https://jsonplaceholder.typicode.com/posts/${post}` // Constructing the URL to fetch the post data
    );
    const res = await response.json(); // Waiting for the response body to be parsed as JSON and storing it in 'res'

    // Updating the HTML content of elements with classes '.txt-title', '.subtitle', '.img-container', and '.txt-container'
    document.querySelector(".txt-title").innerHTML += `<h1>${res.title}</h1>
    <div class="subtitle">
        <h2>${res.title}</h2>
        <h3>Completed on ${new Date().toString().slice(0, 15)}</h3>
    </div>
    <div class="img-container">
        <img src="./resources/images/projects-section/${
          res.id <= 3 ? res.id : Math.floor(Math.random() * 6 + 1) // Generating a random number between 1 and 6 for the image source, ensuring it's an integer
        }.jpg" alt="">
    </div>
    <div class="txt-container">
        <p>${res.body}</p>
    </div>`;
  } catch (error) {
    // Catching and handling any errors that occur in the try block
    console.log(error); // Logging the error to the console
  }
};

getPost(postUrl);

// -------
// -------
// -------

const get3randomPosts = async () => {
  try {
    // Create arrays with 3 unique random numbers each
    const randomPosts = [];
    const imageRandomizer = [];

    // Generate random post numbers
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 100) + 1;
      while (randomPosts.includes(random)) {
        random = Math.floor(Math.random() * 100) + 1;
      }
      randomPosts.push(random);
    }

    // Generate random image numbers
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 6) + 1;
      while (imageRandomizer.includes(random)) {
        random = Math.floor(Math.random() * 6) + 1;
      }
      imageRandomizer.push(random);
    }

    // Fetch posts data
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Display random posts and images
    const projectsContainer = document.querySelector(".projects-container");
    for (let i = 0; i < 3; i++) {
      projectsContainer.innerHTML += `<div class="project">
          <img src="./resources/images/projects-section/${
            imageRandomizer[i]
          }.jpg" alt="">
          <h3>${posts[randomPosts[i]].title}</h3>
          <p>${posts[randomPosts[i]].body}</p>
          <a href="project.html?p=${posts[randomPosts[i]].id}">Learn More</a>
          </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", get3randomPosts);
