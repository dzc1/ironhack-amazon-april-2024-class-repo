const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        method: "PUT", // Specifies the HTTP method for the request as PUT
        headers: {
          "Content-Type": "application/json", // Specifies the content type as JSON
        },
        body: JSON.stringify(updatedProductData), // Converts updatedProductData to JSON string and sends it as the request body
      }
    );

    // Checks if the response is successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parses the response body as JSON
    const data = await response.json();
    console.log("Product updated:", data); // Logs the parsed JSON data
  } catch (error) {
    console.error("Error updating product:", error.message); // Handles any errors that occur during the fetch operation
  }
};

// Example Usage
let updatedProductDataObject = {
  title: "Some new shirt",
  price: 0.99,
};

updateProduct(7, updatedProductDataObject);
