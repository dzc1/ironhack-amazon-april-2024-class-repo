// Let's start by creating an array of objects that will contain all of the dogs!

const dogs = [
  // This is the dog object template
  {
    name: "Max",
    img: "assets/imgs/dog1.jpg",
    furType: "brown",
    puppy: true,
  },
  {
    name: "Bella",
    img: "assets/imgs/dog2.jpg",
    furType: "black",
    puppy: true,
  },
  {
    name: "Charlie",
    img: "assets/imgs/dog3.jpg",
    furType: "grey",
    puppy: true,
  },
  {
    name: "Lucy",
    img: "assets/imgs/dog4.jpg",
    furType: "mixed",
    puppy: true,
  },
  {
    name: "Bailey",
    img: "assets/imgs/dog5.jpg",
    furType: "all",
    puppy: true,
  },
  {
    name: "Daisy",
    img: "assets/imgs/dog6.jpg",
    furType: "brown",
    puppy: true,
  },
  {
    name: "Rocky",
    img: "assets/imgs/dog7.jpg",
    furType: "black",
    puppy: false,
  },
];

// Let's connect to our required HTML Elements

const container = document.querySelector("#container");
const favorites = document.querySelector("#favorites");
const filterDropdown = document.querySelector("#filterDropdown");

// Let's generate a variable that will contain, ann empty array called "favoriteDogs" that we will take advantage annd push some dogs here
let favoriteDogs = [];

// Create a function so we can load the initial dog array in our document :)
const loadDogs = (dogArray) => {
  // Let's target the container var and lets cahin the inerHTML, why ? cause we will be creating a little syntax to display the dog. This intially is empty but, we will be adding to it
  container.innerHTML = "";
  dogArray.forEach((dog) => {
    //console.log(dog);
    // inside the body of this forEach funcxtion, we will be iterating over the dogs Array and we will display the info from the array in a shell elemnent.
    container.innerHTML += `
      <div class="card">
      <p>${dog.name}</p>
      <p>${dog.puppy ? "Puppy" : "Adult"}</p>
      <img src=${dog.img} alt="This is a cute picture of a dog called ${
      dog.name
    }"  />
      <div class="cta-center">
      <button onclick="addToFavoriteDogsArray('${
        dog.name
      }')" >Add to Favorites</button>
      </div>
    </div>
      `;
  });
};

// Function to filter out dogs!
const filterDogs = () => {
  let valueRecieved = filterDropdown.value;
  console.log(valueRecieved);

  // Let's condition to check wetehr we get one of the options provided or ALL of the options
  // If is going to check wether the user selects all
  if (valueRecieved === "all") {
    // This will fire the function and load All dogs!
    loadDogs(dogs);
  }
  // else takes care wether the user selects a specific dog with a specific furType key
  else {
    const filteredOptionByUser = dogs.filter(
      (dog) => dog.furType === valueRecieved
    );
    loadDogs(filteredOptionByUser);
  }
};

// Generate a function to add your favorite dog to the favoriteDogs array
const addToFavoriteDogsArray = (dog) => {
  console.log(dog);
  favoriteDogs.push(dog);
  console.log(favoriteDogs);
  loadFavoriteDogs();
};

// genereate funnction to propapagte the favorites 'sectioon' within the html
const loadFavoriteDogs = () => {
  // Let's target the favorites var and lets cahin the inerHTML, why ? cause we will be creating a little syntax to display the dog. This intially is empty but, we will be adding to it
  favorites.innerHTML = "";
  favoriteDogs.forEach((dog) => {
    // console.log(dog);
    favorites.innerHTML += `
      <div class="card-fav">
      <p>${dog}</p>
    </div>
      `;
  });
};

console.log(favoriteDogs);

// Event Listenr to be able to activate the filter dogs functions
filterDropdown.addEventListener("change", filterDogs);

// THE LAST LINE OF CODE
// Calling the fucntion and passing the dogs variable as athe argument
loadDogs(dogs);
