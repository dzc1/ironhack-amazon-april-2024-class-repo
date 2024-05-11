// INn this file we are usig the fetch method with ann external resource "API", please reference file name 'explanations/2-apis-https-methods.js' to learn more about API's and HTTP Methods, codes ad syntax

// API USED: https://fakestoreapi.com/products
// Documentation Reff: https://fakestoreapi.com/docs
// API Summary: This API displays a list of 20 fake products that you can manipulate.

// API RESPONSE EXAMPLE: - IMPORTANT - DISPLAYING EXAMPLE OF 1 RESPONSE
// [
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//   }
// ]

// SYNTAX
let externalApiBtn = document.querySelector("#getExternalApi"); // Connects to our html element displaying the button
let whereWeWillBeInyectingTheInfoFromExternalAPI =
  document.querySelector("#output"); // Connects to our html element which initially is empty by the ID nname of output

// Generate that function to fetch the info from the API
// fetch === async/await
let getInfoExternalApi = async () => {
  // We use the try/catch block for better legibility and easier implementation
  try {
    let response = await fetch("https://fakestoreapi.com/products"); // this variable conects tyo the API resource using the fetch method, which by the way is dependant on the await keyword because this function is using the async/await syntax (easier approach, modern approach)
    if (!response.ok) {
      throw new Error("Failed to fetch.....");
    } // The infamous if conditional, which this conditional's purpose is to simply monitor the program in case the fetfch fails, if so, this conditional will give you information about the HTTP code that persisted during the fetching of the info (100,200,300,400,500,600), remember that thius info is then catched by the catch and printed into the console
    console.log(response); // Logging the variable response to see the information recieved from the fetch object ;)

    let products = await response.json(); // to clean up the info into a format that the program can read

    //console.log(products);
    // let's define an empty variable that we can then inyect all the dynamic data into - KEEP IN MIND THAT THIS DATA WILL BE A BIX OF DATA INNCOMING FROM THE API + HTML ELEMENTS, THUSS, WE NEEDD TO USE THE innerHTML property
    // As well given that the variable 'products' contains an  array of 20 objects, we would have to iterate/go-over each object, get the info and then display it
    let structuredProductInfo = ""; // this is that empty variable which we will fill-up with some dynamic info

    // We call the products variable which is already cleaned and ready to be used in your program and we iterate over the variable containing the fake products using the for-each method.
    // Inisde this method, we define an empty arrow function that takes in 1 param called "product" which represents the inidividual instance of each iteration of the products variable.

    products.forEach((product) => {
      console.log(product);
      structuredProductInfo += `
        <div class="col col-md-4 mb-4">
            <div class="card">
                <img class="card-img-top" src="${
                  product.image
                }" alt="Image about the product ${product.title} - ${
        product.description
      }" />
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text font-weight-light">
                    Price <span class="font-weight-bold">€${
                      product.price
                    }</span>
                    </p>
                    <p class="card-text font-weight-light">
                    Desc <span class="font-weight-bold">${product.description.slice(
                      0,
                      50
                    )}...</span>
                    </p>
                    <p class="card-text font-weight-light">
                    Cat <span class="font-weight-bold">${
                      product.category
                    }</span>
                    </p>
                    <p class="card-text font-weight-light">
                    Rating <span class="font-weight-bold">${
                      product.rating.rate
                    }/5 ⭐  (${product.rating.count} Votes)</span>
                    </p>
                </div>
            </div>
        </div>
        `;
      whereWeWillBeInyectingTheInfoFromExternalAPI.innerHTML =
        structuredProductInfo;
    });
  } catch (errorFromBadFetchRequest) {
    console.error(errorFromBadFetchRequest);
    //  This czatch block is just monitoring for any errors that the try cannot execute, thus if tthe try fails the catch is executed
    // speak it to yourself "....hey try grabbing this info from this api and catch any errors that happen"
    // error() to display this info in red to the console....
  }
};

externalApiBtn.addEventListener("click", getInfoExternalApi);
