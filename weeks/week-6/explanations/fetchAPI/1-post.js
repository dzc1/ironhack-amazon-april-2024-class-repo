const addProduct = async (productData) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST", // Specifies the HTTP method for the request as POST
      headers: {
        "Content-type": "application/json", // Specifies the content type as JSON
      },
      body: JSON.stringify(productData), // Converts productData to JSON string and sends it as the request body
    });

    // Checks if the response is successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsinng the responsy body as JSON
    const data = await response.json();
    console.log(data);
    console.log(`New Product Added: ${data}`);
  } catch (error) {
    console.error(
      `There was an error trying to add this enw product into the API, check the error message given: ${error.messsage}`
    );
  }
};

/// Example Usage
let newProductData = {
  title: "Cool Shoes",
  price: 69.45,
  description: "Cool Nike Shoes about running",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  category: "running shoes",
};

addProduct(newProductData);
