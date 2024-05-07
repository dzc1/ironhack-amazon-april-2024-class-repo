// What is the Fetch API?
// The Fetch API is a modern JavaScript interface that allows you to make HTTP requests to servers.
// It provides a simpler and more powerful alternative to XMLHttpRequest (XHR) for fetching resources asynchronously from a server.

// -----
// -----
// -----
// -----

// Why Use the Fetch API?
// - Simplicity: The Fetch API provides a simpler and more intuitive way to make HTTP requests compared to XHR(outdated way), with a more modern syntax.
// - Promises-Based: It is built on top of promises, making it easier to handle asynchronous operations and chaining multiple requests.
// - Streamlined Code: Fetch simplifies the process of making requests and handling responses, resulting in cleaner and more readable code.
// - Built-in Browser Support: Fetch is supported natively in most modern browsers, reducing the need for polyfills or external libraries.

// API ==== Aplicattion Programming Interface!

// Example
// https://fakestoreapi.com/
// API used: https://fakestoreapi.com/products
// Get's a JSON Object of 20 fake products from a webShop

// POST Somethingn - image
// UPDATE The Like count of that image
// DELETE  The user can delete the image
// READ - the user is able to see images fof users followed or go to search feaure withinn  IG inn thius example!

const usingTheFetchApiExternalResourceFromWeb = async () => {
  let resource = "https://fakestoreapi.com/products";
  // Lets wrap our fetch method inside a try of the try/catch block, remember that try is for positive cases and cAtch is for negative
  try {
    // 1- declare the fetch api using await!
    // 2- if we are not able to connect to the resource, we will program a little condition
    // 3- We are going to get the info from the URL and remember that that info is sent via JSON OBJECT so ideally we will use a method is called '.json()' which convers json  to js
    // 4- Print info  into console inn both log + table

    // 1- declare the fetch api using await!
    let response = await fetch(resource);
    console.log(response); // Look at the log o see that you will a get an OBJECT
    // 2- if we are not able to connect to the resource, we will program a little condition
    if (!response.ok) {
      console.log(response.status);
      console.error(response.status); // This is a lot less styled, and less informative
      throw new Error(`HTTTP Error: Status Code: ${response.status} `); // This approach is more conventional when working with the fetch API
    }
    // 3- We are going to get the info from the URL and remember that that info is sent via JSON OBJECT so ideally we will use a method is called '.json()' which convers json  to js
    // Les store the response variable with the .json() chhaine inside a variable
    let dataClean = await response.json();
    // 4- Print info  into console inn both log + table
    console.log(dataClean);
    console.table(dataClean);
  } catch (error) {
    // 1- If we do get an error, letss store inside a variable for easy cosnumption
    let errorRecievedFromFetch = error;
    // 2- lets read that variable info usinng a conosle.error() method
    console.log(errorRecievedFromFetch);
    console.error(errorRecievedFromFetch);
  }
};
usingTheFetchApiExternalResourceFromWeb();

/// EXPANDIG THEUSSE of FETCH

// By defasult the fetch method is used to read resources
// so its like this

// fetch("someResouce")
// If I want to POST, PUT, PATCH, DELETE we have to expand the use of the fetch method with somethinng extra
// how ?
//fetch("https://fakestoreapi.com/products", {})

// TAKE A LOOK AT THE FILE POST, PUT, PATCH, DELETE within our fetchAPI subfolder ;)
