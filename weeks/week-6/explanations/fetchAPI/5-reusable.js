const usingTheFechApiExternal = async (method, url, body) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json", // Specifying the content type as JSON
      },
      body: JSON.stringify(body), // Convert body to JSON string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); // Log the parsed JSON data
    console.table(data); // Display data in a table format
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

// Gettting all products
usingTheFechApiExternal("GET", "https://fakestoreapi.com/products");

// Adding a new product
usingTheFechApiExternal("POST", "https://fakestoreapi.com/products", {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
});

// Updating a product
usingTheFechApiExternal("PUT", "https://fakestoreapi.com/products/7", {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
});

// Patching a product
usingTheFechApiExternal("PATCH", "https://fakestoreapi.com/products/7", {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
});

// Deleting a product
usingTheFechApiExternal("DELETE", "https://fakestoreapi.com/products/6", {});
