// How to manipulate elements in the DOM
// In this section we will cover:

//  -  How to create elements
//  -  How to set innerHTML/text content of an element
//  -  How to append an element
//  -  How to insert an element before another
//  -  How to replace a child element
//  -  How to remove a child element

// How to create elements
// createElement()
// The HTML code with the ID of #parent shows a parent element with 5 child elements. Let's say we want to add another div tag with JavaScript. We would definitely have to create a new element using the createElement() method, like this:
let createElement = document.createElement("div");
console.log(createElement);

// Add some text or some HTML

// using innerText
// Add some text first
createElement.innerText = "I Like to eat Pizza";

// using innerHTML
// dd some HTML
createElement.innerHTML = `
<h1>Hello Class</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis
      reprehenderit earum quibusdam sequi error qui aperiam, ad saepe in est
      consectetur excepturi eligendi quasi iure quisquam esse alias quae?
    </p>
`;

// How to append created elements in the HTML document

// Using appendChild()
// we point to some element in the dom that is in the body and we are going to use an appendCHILD method!

let parentDiv = document.querySelector("#parent");
parentDiv.appendChild(createElement);

// Add Classes to the initial element we have created
//className Property
createElement.className = "example-1";

// Read Only property by checking the classes that the element 'createElement' contains

// Adding a class using a amix of classList + add method
createElement.classList.add("some-cool-class", "other-class");
console.log(createElement.classList);

// Removing a class using a mix of classList + remove method
createElement.classList.remove("other-class");
console.log(createElement.classList);

// Toggle a class using a mix of classList + togggle method
// How to toggle a class

// The classList.toggle() method is commonly used in most social media platforms like Twitter. It allows you to "like" a post with a button and "unlike" with that same button whenever you want.

// So JavaScript checks if our button has the CSS class.

// If it has the class and you click the button, it removes it. If it doesn't have the class and you click the button, it adds it.

const toggleFunction = () => {
  console.log("I have been clicked");
  let boxDisplay = document.querySelector(".box-display");
  let currentText = boxDisplay.innerText;
  boxDisplay.classList.toggle("toggle-test");
  // check if the text matches our current text and then let's change it
  if (currentText === "remove test") {
    boxDisplay.innerText = "Changed text and color";
  } else {
    boxDisplay.innerText = "remove test";
  }
};

// ----
// ----
// ----
// ----

// How to insert an element before another
// If you noticed in the console log above, the appended div tag was automatically added at the bottom.

// What if for some reason you want to add it anywhere of your choice? Maybe before the first element or before the fourth element. I'm here to tell you it's very possible. In the code below we are going to add it before the current first element.

// We will use the JavaScript insertBefore() method that accepts two parameters, the newNode and the existingNode in this order => document.insertBefore(newNode, existingNode).

// insertBefore(newNode, existingNode)

let parentElement = document.querySelector("#parent");
let firstElement = document.querySelector("#firstchild");
let elementIWantToInsert = document.createElement("p");
elementIWantToInsert.innerText = "I love javascript more than PHP";
elementIWantToInsert.className = "javascript";

parentElement.insertBefore(elementIWantToInsert, firstElement);

// How to replace a child element
// We are going to use the JavaScript replaceChild() method which accepts two parameters to replace our first element with the newly created one. It works in this order => document.replaceChild(newNode, existingNode).
let firstChildElement = document.querySelector("#firstchild");
const parentElReplaceChild = document.getElementById("parent");
let newElement = document.createElement("div");
newElement.innerText = "I love to eat sushi!";

parentElReplaceChild.replaceChild(newElement, firstChildElement);

// How to remove a child element
// We are going to use the JavaScript removeChild() method which only accepts one parameter (the element you want to remove), which in this case is our original first element. It works in this order => document.removeChild(element)
let elementThatWeWillRemove = document.querySelector("#secondchild");
let removeChildSynntax = document
  .querySelector("#parent")
  .removeChild(elementThatWeWillRemove);
