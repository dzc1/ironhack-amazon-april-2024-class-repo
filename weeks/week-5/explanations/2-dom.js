// Using an event listener - Regular Function

// Option 1
// Using a mix of AddEventListners with passing an aabsolute function inside the second argument of the parenthesis!
// 1- Select the  button
let button = document.querySelector("#btn");

// 2- Generate a logical function to "do somehting"
function hello() {
  alert("JS is super helpful!");
}

// 3- We connect these two, using an EVENT-LISTENER
// addEventListener() - expects two things inside the parenthesis
// 3.1 addEventListener() - FIRST PART - Is the ervent Type that you want to use!
// 3.2 addEventListener() - SECOND PART - the function or logic that you want to action
button.addEventListener("click", hello);

// Option 2
let buttonTwo = document.querySelector("#btn-event-listener-anonimous");

buttonTwo.addEventListener("click", () => {
  alert("I am really huingryyy");
});

// Option 3
// Direct Events
// Adding the event directly after calling the variable "TO BE DEcLARED" and passing the direct event by calling a function alerting something :)

let buttonThree = document.querySelector("#buttonThree");
function directEvent() {
  alert("I am using a direct event handler");
}
// This is the difect Event Handler
buttonThree.onclick = directEvent;

// -----
// -----
// -----
// -----
// -----
// -----
// -----
// -----

// ALY's Question with imagess

let uefa = document.querySelector("#uefa");

uefa.addEventListener("dblclick", () => {
  alert("Enjoy the game tonight!!!!");
});

// //  Working with Events & Params
let buttonFour = document.querySelector("#buttonFour");
function diego(eventParameter) {
  // The parameter inside this function refers to the event associated with the variable.
  console.log(eventParameter);
  // We have "Subproperties" inside the event properties such as "target" === is the element associated with the event, coincidentally this element is the button with id button4.
  console.log(eventParameter.target);
  // Example changing the background class
  // buttonFour.classList.add("bg-red-500")
  buttonFour.classList.toggle("bg-red-500");
}
buttonFour.addEventListener("click", diego);

// -----
// -----
// -----
// -----
// -----
// -----
// -----
// -----

// Working with multiple Events all at once!

let divMultiple = document.querySelectorAll(".multiple");
console.log(divMultiple);

divMultiple.forEach((eachDiv) => {
  //console.log(eachDiv);
  eachDiv.addEventListener("click", (eventParameter) => {
    console.log(eventParameter);
    alert(`The ID of this particular DIV is ${eachDiv.id} `);
  });
});
