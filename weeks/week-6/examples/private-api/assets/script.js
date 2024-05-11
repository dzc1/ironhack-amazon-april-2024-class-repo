// API USED:
// API Notes: You need to request an API Key in order to be able to work with this API
// API Website: https://www.dictionaryapi.com
// API: FREE
// API KEY: 40ff706d-cc39-483c-98d6-c9a02c0745d9
// API Endpoint + API Key Example - Word to search is 'umpire'
// https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=40ff706d-cc39-483c-98d6-c9a02c0745d9

// Declare some variables that will hold API Endopoint (url), Api Key, Word that we will search for
let baseUrl = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json/";
let word = "love";
let agreggator = "?key=";
let apiKey = "40ff706d-cc39-483c-98d6-c9a02c0745d9";

let url = `${baseUrl}${word}${agreggator}${apiKey}`;
console.log(url);

// Function to fetch this url that we have constructed
// Fetch Dependency 1 : async/await
// Fetch Dependency 2 : try/catch
const fetchWordFromApi = async () => {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch.....");
    }
    let cleanData = await response.json();
    console.log(cleanData[0].meta.syns[0]);
    updateHtml(cleanData);
  } catch (errorFromApi) {
    console.error(errorFromApi);
  }
};

fetchWordFromApi();

// Generate function to display info within the HTML
const updateHtml = (cleanDataFromApi) => {
  // 1 - connect to h2 via the id usiong dom
  document.querySelector("#word").innerText = cleanDataFromApi[0].meta.id;
  document.querySelector("#type").innerText = cleanDataFromApi[0].fl;
  let synDiv = document.querySelector("#synonym");
  synDiv.innerHTML = cleanDataFromApi[0].meta.syns[0]
    .map((individualSyn) => `<li>${individualSyn}</li>`)
    .join("");
  // synonym id used....
  // let's define the definitions by pointing to the api key that we need
  let definitions = cleanDataFromApi[0].shortdef;
  if (definitions >= 2) {
    let definitions = cleanDataFromApi[0].shortdef
      .forEach((eachDef, positionFromArray) => {
        `<li>${positionFromArray} - ${eachDef} </li>`;
      })
      .join("");
    document.querySelector("#explanation").innerHTML = definitions;
  } else {
    let definition = cleanDataFromApi[0].shortdef;
    document.querySelector("#explanation").innerHTML = definition;
  }
};
