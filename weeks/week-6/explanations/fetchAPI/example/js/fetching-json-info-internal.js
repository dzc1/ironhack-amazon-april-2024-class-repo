let getJsonResource = document.querySelector("#getJson");
let jsonOutput = document.querySelector("#output");

// Function to fetch the info from the json file
// 10/10 fetch === async/await
let getJsonInfo = async () => {
  try {
    // 1 - Use the fetch method, rememberto store inisde a variable
    let response = await fetch("./internal-resources/users.json");
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch.....");
    }
    let cleanedObject = await response.json();
    console.log(cleanedObject);
    let transformedJsonObjectToJavascriptObject = "";
    cleanedObject.forEach((objectReadyToBeUsed) => {
      transformedJsonObjectToJavascriptObject += `
      <div class="p-4 block">
        <ul >
            <li>Name: ${objectReadyToBeUsed.name}</li>
            <li>Profession  ${objectReadyToBeUsed.profession}</li>
            <li>ID:  ${objectReadyToBeUsed.id}</li>
        </ul>
      </div>
          `;
    });
    jsonOutput.innerHTML = transformedJsonObjectToJavascriptObject;
  } catch (errorFromBadFetchRequest) {
    console.error(errorFromBadFetchRequest);
  }
};

getJsonResource.addEventListener("click", getJsonInfo);
