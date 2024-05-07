const usingTheFechApiExternal = async (resource) => {
  try {
    // Make an HTTP GET request using fetch
    const response = await fetch(resource);

    // Check if the response is successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();

    // Log the parsed JSON data
    console.log(data);
    //console.table(data);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    let errorMessageDestructuredForLegibility = error.message;
    console.log("Fetch error:", errorMessageDestructuredForLegibility);
    // Pr use the .error method to display the message in red
    console.error("Fetch error:", errorMessageDestructuredForLegibility);
  }
};
usingTheFechApiExternal("https://fakestoreapi.com/products");
