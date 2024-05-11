// API USED: https://picsum.photos/v2/list?limit=100
// API Notes: This api is somewhat conditioned to show us 100 images from the API url, how? we have passed the condition ?limit=[amountOfIMagesThatWeWant]
// API Website: https://picsum.photos
// API: FREE

// Let's generate some variables that will connect to the HTML via DOMSelection
let button = document.querySelector("button");
let authorSpan = document.querySelector(".author");
let imgDiv = document.querySelector(".image-container");
let img = document.querySelector(".img");
console.log(img.classList);

// Function to use fetch method and call API
// async/await
// try/catch depedency is a good must when you work with this approach :)
const getImageFromApi = async () => {
  try {
    let response = await fetch("https://picsum.photos/v2/list?limit=100");
    // Chain the json() to the response variable to cleanup info from API and be able to use it within our document
    let cleanImagesFromApi = await response.json();
    console.log(cleanImagesFromApi);
    selectRandomImage(cleanImagesFromApi);
  } catch (errorReceivedFromConnection) {
    console.error(errorReceivedFromConnection);
  }
};
//getImageFromApi();

// Declare a function to randomly select an image from the API
// let's declare 1 param inside the ()'s to be able to re-use this function dynamically
const selectRandomImage = (imageArray) => {
  // 1 - declare a variable that will generate that mathematical random operation
  let randomIndex = Math.floor(Math.random() * imageArray.length);
  let randomImageFromOperation = imageArray[randomIndex];

  console.log(randomImageFromOperation);

  displayImageInHtml(randomImageFromOperation);
};

// Generate a function that will display the informatio of the image + aiuthor into the document
const displayImageInHtml = (randomImage) => {
  //console.log(randomImage);
  console.log(randomImage.author);
  console.log(randomImage.download_url);
  console.log(randomImage.id);

  const authorName = randomImage.author;
  const imageAddress = randomImage.download_url;

  authorSpan.innerText = authorName;
  img.src = imageAddress;
  imgDiv.classList.remove("hide-class-created-that-willbe-triggered-via-js");
  //imgDiv.classList.toggle("hide-class-created-that-willbe-triggered-via-js"); // Toggle in this case does not work cause we are makling the user click 2 times to get an imnage, and the user is not seeing one of the images so we sue remove!
};

// Conection to Button to trigger the getImageFromApi function
button.addEventListener("click", getImageFromApi);
