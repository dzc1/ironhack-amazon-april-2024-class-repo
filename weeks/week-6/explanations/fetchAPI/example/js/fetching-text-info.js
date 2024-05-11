// 1- Generate logic that epends on the fetchMethod to gettheinformation from the text file
// 2 -  Display That info within the document

let getTextResource = document.querySelector("#getText");
let textOutput = document.querySelector("#output");

// Function to fetch for text within internal document
// 10/10 times whenusing the fetch api IS  recommended to use the async/await syntax
let getTextFunction = async () => {
  // Try Catch Block
  try {
    // Use the fetch AI
    let response = await fetch("./internal-resources/sample.txt");
    // Let's write a conditional to check wether the HTTP request using the fetch API was either sucesss/unsuccesful - We will depend on the key "success" to use within this conditional
    if (!response.ok) {
      // Inside this sectionn we use the constructor object Error just to display an error
      throw new Error("Failed to fetch.....");
    }
    // Checkking what do we get from the response, which is an object by the way always remember that
    console.log(response);
    // Given that the info provided from the text document is being fetched usig the fetchAPi, and this method returns a object which the ifo is living inside the boyd,  we as engineers have to tell/instruct our logic to display that info in the correct form that is being parsed
    // we are using await on this variable given that 'reponse' which is a variable that we are depending o below is connected/using the fetch method
    let cleanedText = await response.text();
    console.log(cleanedText);
    // Let's use a property called "innerText" property to inyect this information inside the variable that we have defined above called "textOutput"
    textOutput.innerText = cleanedText;
  } catch (errorReceivedFromFetch) {
    // The block we use whenever we arew unsucessfull
    console.log(errorReceivedFromFetch);
  }
};

getTextResource.addEventListener("click", getTextFunction);
