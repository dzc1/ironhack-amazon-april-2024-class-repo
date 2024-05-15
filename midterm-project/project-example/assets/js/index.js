// Context
// We will be using an API to fetch 3 products and then display them in the "projects" section withi m y index.html file.

// API USED: https://fakestoreapi.com/products
// HTTP METHOD TYPE: GET
// NOTES: No needd for object expansion of the fetch()
// API VARIATIONS:
// https://fakestoreapi.com/products?limit=3

// Function
// Async/Await
// Try/Catch Blocks
const getHomePagePosts = async () => {
  try {
    // use Fetch to call the resource, store it in a variable

    // USING API VARIATION
    let response = await fetch("https://fakestoreapi.com/products?limit=3");

    // USING JAVASCRIPT
    // UNCOMMENT CODE BELOW TO WORK WITH CODE-BLOCK STARTING ON LINE 53 ANND ENDING ON LINE 64
    // let response = await fetch("https://fakestoreapi.com/products");

    // Layer of security, in case of HTTTP ERROR, we want to see the error + some info
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let cleanResponseProjects = await response.json();

    // Info used from the fake products api
    // title
    // category
    // image

    // use the cleanResponse variable to loop through the array that you get from the response and then use some dom manipuklation to print stuff to the page!
    // Let's define a variable that connects to the div with the class "projects-container" annd we print it out there!
    let projectContainer = document.querySelector(".projects-container");
    // lets a for of loop to keep things simple!
    for (const project of cleanResponseProjects) {
      console.log(project);
      let projectInfo = `
        <div class="project">
            <img src="${project.image}" alt="" />
            <h3>${project.title}</h3>
            <p>${project.category}</p>
            <a href="#">Learn More</a>
        </div>
        `;
      projectContainer.innerHTML += projectInfo;
    }

    // UNCOMMENT CODE BELOW TO WORK WITH  LINE 21
    // for (const project of cleanResponseProjects.slice(0, 3)) {
    //   console.log(project);
    //   let projectInfo = `
    //       <div class="project">
    //           <img src="${project.image}" alt="" />
    //           <h3>${project.title}</h3>
    //           <p>${project.category}</p>
    //           <a href="#">Learn More</a>
    //       </div>
    //       `;
    //   projectContainer.innerHTML += projectInfo;
    // }
  } catch (errorFromCatchBlock) {
    console.error(errorFromCatchBlock);
  }
};

// Calling the function like this is ok!
//getHomePagePosts();

// I want to take advantage of the window object!
window.addEventListener("load", getHomePagePosts);
