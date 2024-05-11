const usingTheFetchApiExternal = async (method, url, body) => {
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
    // Here you can handle displaying the data within the HTML
    const output = document.getElementById("output");
    output.innerHTML = ""; // Clear previous content

    // Displaying data dynamically based on method
    if (method === "GET") {
      // Display all products
      data.forEach((product) => {
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        productInfo.innerHTML = `
              <h3>${product.title}</h3>
              <p>Price: ${product.price}</p>
              <p>Description: ${product.description}</p>
              <p>Category: ${product.category}</p>
              <img src="${product.image}" alt="${product.title}">
            `;
        output.appendChild(productInfo);
      });
    } else if (method === "POST") {
      // Display message for adding a new product
      output.textContent = "New product added successfully!";
    } else if (method === "PUT") {
      // Display message for updating a product
      output.textContent = "Product updated successfully!";
    } else if (method === "PATCH") {
      // Display message for patching a product
      output.textContent = "Product patched successfully!";
    } else if (method === "DELETE") {
      // Display message for deleting a product
      output.textContent = "Product deleted successfully!";
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

// ------
// ------
// ------
// ------

// Additional buttons to trigger other HTTP methods individually
document.getElementById("postProduct").addEventListener("click", () => {
  // Display the add product form
  const addProductForm = `
        <form id="addProductForm">
          <input type="text" id="title" placeholder="Title">
          <input type="number" id="price" placeholder="Price">
          <input type="text" id="description" placeholder="Description">
          <input type="text" id="image" placeholder="Image URL">
          <input type="text" id="category" placeholder="Category">
          <button type="submit">Add Product</button>
        </form>
      `;
  document.getElementById("output").innerHTML = addProductForm;

  // Event listener for form submission
  document
    .getElementById("addProductForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      // Extracting form data
      const title = document.getElementById("title").value;
      const price = document.getElementById("price").value;
      const description = document.getElementById("description").value;
      const image = document.getElementById("image").value;
      const category = document.getElementById("category").value;

      // Call the function with appropriate parameters for adding a new product
      await usingTheFetchApiExternal(
        "POST",
        "https://fakestoreapi.com/products",
        {
          title: title,
          price: parseFloat(price),
          description: description,
          image: image,
          category: category,
        }
      );
    });
});

// -----
// -----
// -----
// -----

document.getElementById("putProduct").addEventListener("click", async () => {
  // Prompt for new product details
  const updateTitle = prompt("Enter new title for the product number 1: ");
  const updatePrice = prompt("Enter new price for the product number 1:");
  const updateDescription = prompt(
    "Enter new description for the product number 1:"
  );
  const updateImage = prompt("Enter new image URL for the product number 1:");
  const updateCategory = prompt("Enter new category for the product number 1:");

  // Call the function with appropriate parameters for updating a product
  await usingTheFetchApiExternal("PUT", "https://fakestoreapi.com/products/1", {
    title: updateTitle,
    price: parseFloat(updatePrice),
    description: updateDescription,
    image: updateImage,
    category: updateCategory,
  });
});

// -----
// -----
// -----
// -----

document.getElementById("patchProduct").addEventListener("click", async () => {
  // Prompt for new product details
  const patchTitle = prompt("Enter new title for the product:");
  const patchPrice = prompt("Enter new price for the product:");
  const patchDescription = prompt("Enter new description for the product:");
  const patchImage = prompt("Enter new image URL for the product:");
  const patchCategory = prompt("Enter new category for the product:");

  // Call the function with appropriate parameters for patching a product
  await usingTheFetchApiExternal(
    "PATCH",
    "https://fakestoreapi.com/products/1",
    {
      title: patchTitle,
      price: parseFloat(patchPrice),
      description: patchDescription,
      image: patchImage,
      category: patchCategory,
    }
  );
});

// -----
// -----
// -----
// -----

document.getElementById("deleteProduct").addEventListener("click", async () => {
  // Confirm deletion
  const confirmDelete = confirm(
    "Are you sure you want to delete this product?"
  );
  if (confirmDelete) {
    // Call the function with appropriate parameters for deleting a product
    await usingTheFetchApiExternal(
      "DELETE",
      "https://fakestoreapi.com/products/1",
      {}
    );
  } else {
    console.log("Deletion canceled.");
  }
});
