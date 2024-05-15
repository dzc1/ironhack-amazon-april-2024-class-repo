/*
File Context:

The objective of this JavaScript file is to handle form submission by sending the form data to 1 of the various free APIs withinn your conntact page of your project. This involves utilizing the Fetch API with an expansion object to be able to send data and employing DOM manipulation to retrieve the data from your contact form.

As these APIs are  meant to be used for testing purposes, they do not actually store data, the main focus is on validating the success of the form submission by examining the HTTP response code. It's essential to choose an appropriate API from the provided list to ensure compatibility with the form submission process.

Context:
- API Resources: 
Students are provided with a selection of free APIs to choose 1 from. These APIs are simulated and do not persistently store data. The available APIs include:
  - https://jsonplaceholder.typicode.com/posts
  - https://jsonplaceholder.typicode.com/comments
  - https://jsonplaceholder.typicode.com/albums
  - https://fakestoreapi.com/products
  - https://dummyjson.com/products

- Form Data Submission: Upon form submission, the data is sent to the selected API endpoint using the Fetch API's POST method.
- Validation: Success of the form submission is validated by examining the HTTP response code. A response code within the range of 200-299 indicates a successful submission.
- Consideration: Given the variety of available APIs, students must analyze and choose an appropriate API endpoint that aligns with the intended functionality of their contact form.

Implementation:
- Async Function with Parameters: The sendForm function is defined as an asynchronous function expression, accepting a parameter representing the event object received upon form submission.
- Preventing Default Behavior: The preventDefault() method is utilized to prevent the default form submission behavior, enabling custom handling of form data submission.
- DOM Selection: Input elements within the form are selected using the Document Object Model (DOM) to retrieve user-entered data.
- Fetch API Usage: The Fetch API is leveraged to send a POST request to the selected API endpoint, including the form data in JSON format within the request body.
- Response Validation: Upon receiving a response from the API, the HTTP response code is examined to determine the success of the form submission. A response code within the 200-299 range signifies success.
- Resetting Form Inputs: Upon successful form submission, input fields are reset to their initial state to prepare for potential subsequent submissions.

Conclusion:
In conclusion, this JavaScript file facilitates the submission of form data to 1 of the various free APIs, enabling students to practice handling form submissions in a simulated environment. By validating the success of the submission through examination of the HTTP response code, students can ensure the functionality of their contact form. Careful consideration of the selected API endpoint is essential to ensure compatibility and successful data transmission.

 You can delete the comments above or copy the comments and save them for reference in another file.

*/
