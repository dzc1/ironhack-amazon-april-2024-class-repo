// What is the DOM ?

// In web development, DOM stands for Document Object Model.

// It is an interface that allows us to create, modify, or delete elements of a web document.

// DOM manipulation is when JavaScript is used to add, remove, and modify elements of a website.

// It can be simply understood as a tree of nodes created by the browser. Each of these nodes has its own properties and methods that can be manipulated using JavaScript.

// The following image provides a visual representation of the DOM tree structure.

// ----
// ----
// ----
// ----
// ----

// Why use the DOM?

// - Dynamic Interaction: The DOM enables dynamic interaction with web pages. JavaScript can be used to modify the content, structure, and style of a web page based on user actions, events, or other conditions.

// - Dynamic Content: Websites often need to update their content dynamically without reloading the entire page. The DOM allows scripts to add, remove, or modify elements and attributes on the page, providing a seamless user experience.

// - Client-Side Web Applications: Many modern web applications rely heavily on JavaScript and the DOM to create interactive user interfaces. By manipulating the DOM, developers can create rich, responsive applications that run entirely within the web browser.

// How to use the DOM in JavaScript:

// - Accessing Elements: JavaScript can access elements in the DOM using methods like getElementById, getElementsByClassName, querySelector, and querySelectorAll. These methods allow you to select specific elements based on their IDs, classes, or CSS selectors.

// - Manipulating Content: Once you have selected an element, you can manipulate its content, attributes, and style using properties and methods provided by the DOM. For example, you can change the text content of an element using the textContent property, or modify its CSS styles using the style property.

// - Handling Events: JavaScript can register event listeners on DOM elements to respond to user interactions such as clicks, mouse movements, and keyboard input. Event listeners can be added using methods like addEventListener, allowing you to execute custom code in response to specific events.

// - Creating and Modifying Elements: JavaScript can create new DOM elements dynamically using the createElement method, and add them to the document using methods like appendChild or insertBefore. Similarly, existing elements can be removed using methods like removeChild.

// - Traversal and Navigation: JavaScript can traverse the DOM tree to navigate between elements and their ancestors, siblings, and children

// ------
// ------
// ------
// ------
// ------

// Document
// The Document interface represents any web page loaded in the browser and serves as an entry point to the content of the web page, which is the DOM (Document Object Model) tree.
// The DOM tree includes elements such as <body> and <table>, among many others. It provides document-wide functionality, such as getting the page URL and creating new elements in the document.

console.log(document);
console.log(document.title);
console.log(document.head);
console.log(document.URL);
console.log(document.doctype);
console.log(document.body);

console.log(document.body.children);

console.log(document.body.childNodes);

// ----
// ----
// ----
// Selecting Elements in the DOM

// 1. getElementById Method
// The most common way to access an HTML element is by using the element's id.
// The id is case-sensitive. For example, "dom-manipulation" and "Dom-manipulation" are completely different ids.

console.log(document.getElementById("wutang"));
let wuTangHeadingOne = document.getElementById("wutang");

console.log(wuTangHeadingOne.innerText);

// 2. getElementsByClassName() Method
// This method returns a collection/arraycollection-[] of all elements in the document with the specified class name.
// For example, our HTML page below contains 5 elements with class="wuTang".
console.log(document.getElementsByClassName("wuTang"));
console.log(document.getElementsByClassName("wuTang")[1].innerText);
console.log(document.getElementsByClassName("rock"));

// 3. getElementsByTagName() Method
// This method takes a tag name and returns all elements of the specified tag name in the order they appear in the document.

console.log(document.getElementsByTagName("h5"));
console.log(document.getElementsByTagName("h5")[4].innerHTML);

// 4. querySelector() Method
// Returns the first matching value for the given selector. This method can accept all CSS style selectors, allowing you to select by tag, class, or ID.

console.log(document.querySelector("#query-selector")); // ID's
console.log(document.querySelector(".wuTang")); // Classes
console.log(document.querySelector("h5")); // Elements

console.log(document.querySelector("#query-selector .hipHop .myLove")); // ClassName + Specificity

// 5.querySelectorAll() Method
// Works similarly to the previous one, returning a collection of node lists with all matching elements.

console.log(document.querySelectorAll(".wuTang"));

// --------------------------------------------

// Traversing the Document
// By now you'll agree with me that everything in an HTML document is a node.

// New nodes can be created, and all nodes can be modified or deleted.

// A quick recap
// Each node has exactly one parent, except the top node (which has no parent).
// A node can have more than one child.
// Siblings are nodes with the same parent.
// In this section, we'll see how to get the parent element, the siblings of an element, and the children of an element. I'll be using the following node properties to achieve these things:

// - parentNode
// - childrenNodes
// - firstElementChild
// - lastElementChild
// - nextElementSibling
// - previousElementSibling

let container = document.querySelector("#traverse-document");

// Last Element Child
// Returns the last child element of the element with the ID "traverse-document"

console.log(container.lastElementChild);

// First Element Child
// Returns the first child element of the element with the ID "traverse-document"

console.log(container.firstElementChild);

// Children
// Returns a live HTMLCollection of all child elements of the element with the ID "traverse-document"
console.log(container.children);
console.log(container.children[2]);

// parentNode
// Returns the parent node of the element with the ID "second-child"
console.log(document.querySelector("#second-child").parentNode);

// parentElement
// Returns the parent element of the element with the ID "second-child"
console.log(document.querySelector("#second-child").parentElement);

// nextElementSibling
// Returns the next sibling element of the element with the ID "traverse-document"
console.log(container.nextElementSibling);

// previousElementSibling
// Returns the previous sibling element of the element with the ID "traverse-document"
console.log(container.previousElementSibling);
