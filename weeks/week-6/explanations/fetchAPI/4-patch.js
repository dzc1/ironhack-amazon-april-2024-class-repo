// Function to patch a product
const patchProduct = async (productId, updatedProductData) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        method: "PATCH", // Specifies the HTTP method for the request as PATCH
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
    console.log("Product patched:", data); // Logs the parsed JSON data
  } catch (error) {
    console.error("Error patching product:", error.message); // Handles any errors that occur during the fetch operation
  }
};

// Example usage:
const updatedProductData = {
  title: "Updated Product Title",
  price: 25.99,
};

patchProduct(2, updatedProductData);
