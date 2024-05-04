// Let's create som variables to be  able to connect to the elements within our HTML

const myForm = document.getElementById("my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

// Let's  connect the myForm varible with a eventListener!

// nameInput.addEventListener("keydown", () => {
//   console.log(nameInput.value);
// });

// ---

myForm.addEventListener("submit", onSubmit);
function onSubmit(eventParam) {
  // This methiod prevents the usual behaviour from forms, which is basically reloading the page.
  eventParam.preventDefault();

  // Lets geneerate a litle validation using conditionals!

  // we will be cheking for the negative useCase
  //  In conditional logic, whenever you are working with  poisitive and a a negatiove scenario, it is recommended to condition the negative scenario firsgt, given that is the scenario that your user, would not embark on!
  // ALWAYS ASSUME THAT ALL OF YOUR USERS ARE LIKE 2 YEAR OLDS

  // Negative case
  // user tries to submit an empty form
  // Now we know ewe can use the nnameInput.value where the .value retrieves the information out of the input element thzat you are conected to
  if (nameInput.value === "" || emailInput.value === "") {
    // Testing out with a antive method
    // alert("you cannot send an empty form");
    // Take advatage that we have the msg variale which initilly is emptyy, that we can trigger and fill out twith 2 things. First we will be adding some content into the div + adding a class

    // Add content
    // msg.innerHTML = "" // Not chosen cause we are just passing some info here, something more direct
    msg.innerText = "Hey, please enter all fields...";
    // Add a class within your style.csss thatis triggered using the classList property y conjucntion with the add() method!
    msg.classList.add("error");

    // Remove the 'error message' after 2 seconds of being shown within the screen.
    // We will use the setTimeout method to execute this!
    // setTimeout always works in MILLISECONDS!
    setTimeout(() => msg.remove(), 2000);
  }
  // Poxsitive case
  // user submits succesfully form with info
  else {
    console.log("successfull");

    // create a new list item with the user !
    let li = document.createElement("li");

    // Add text node with the values form the email + name
    li.appendChild(
      document.createTextNode(`${nameInput.value}:  ${emailInput.value}`)
    );

    // Append the li to the user's ul
    userList.appendChild(li);

    // Clear both input fields
    nameInput.value = "";
    emailInput.value = "";
  }
}

//// -----
//// -----
//// -----
//// -----
//// -----
//// -----
//// -----
//// The approach whereew the method, recievies an anonnynous function

// myForm.addEventListener('submit', () => { })
// myForm.addEventListener("submit", function (eventParam) {
//   // This methiod prevents the usual behaviour from forms, which is basically reloading the page.
//   eventParam.preventDefault();

//   // Lets geneerate a litle validation using conditionals!

//   // we will be cheking for the negative useCase
//   //  In conditional logic, whenever you are working with  poisitive and a a negatiove scenario, it is recommended to condition the negative scenario firsgt, given that is the scenario that your user, would not embark on!
//   // ALWAYS ASSUME THAT ALL OF YOUR USERS ARE LIKE 2 YEAR OLDS

//   // Negative case
//   // user tries to submit an empty form
//   // Now we know ewe can use the nnameInput.value where the .value retrieves the information out of the input element thzat you are conected to
//   if (nameInput.value === "" || emailInput.value === "") {
//     // Testing out with a antive method
//     // alert("you cannot send an empty form");
//     // Take advatage that we have the msg variale which initilly is emptyy, that we can trigger and fill out twith 2 things. First we will be adding some content into the div + adding a class

//     // Add content
//     // msg.innerHTML = "" // Not chosen cause we are just passing some info here, something more direct
//     msg.innerText = "Hey, please enter all fields...";
//     // Add a class within your style.csss thatis triggered using the classList property y conjucntion with the add() method!
//     msg.classList.add("error");

//     // Remove the 'error message' after 2 seconds of being shown within the screen.
//     // We will use the setTimeout method to execute this!
//     // setTimeout always works in MILLISECONDS!
//     setTimeout(() => msg.remove(), 2000);
//   }
//   // Poxsitive case
//   // user submits succesfully form with info
//   else {
//     console.log("successfull");

//     // create a new list item with the user !
//     let li = document.createElement("li");

//     // Add text node with the values form the email + name
//     li.appendChild(
//       document.createTextNode(`${nameInput.value}:  ${emailInput.value}`)
//     );

//     // Append the li to the user's ul
//     userList.appendChild(li);

//     // Clear both input fields
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// });
