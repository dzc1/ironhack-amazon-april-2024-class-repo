const deleteProduct = async (productId) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        method: "DELETE", // Specifies the HTTP method for the request as DELETE
      }
    );

    // Checks if the response is successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parses the response body as JSON
    const data = await response.json();
    console.log("Product Deleted:", data);
  } catch (error) {
    console.error("Error deleting product", error);
  }
};

// Example Usage
deleteProduct(8);
