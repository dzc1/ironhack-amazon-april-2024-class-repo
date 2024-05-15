/*

File Context:
 Within this JavaScript file, the aim is to asynchronously fetch information from 1 of the various free APIs and display it within the "projects" section of your index file. This involves utilizing the Fetch API without any expansions to retrieve data and employing DOM manipulation to present it visually on the webpage.

 - API Sources:
 You have the flexibility to choose from 1 of the many several free APIs, provided below:
 https://jsonplaceholder.typicode.com/posts
 https://jsonplaceholder.typicode.com/comments
 https://jsonplaceholder.typicode.com/albums
 https://fakestoreapi.com/products
 https://dummyjson.com/products
 IF YOU WANT TO USE ANOTHER API PLEASE CONTACT DIEGO TO VALIDATE API SCOPING

 - HTTP Method: The HTTP GET method is employed to retrieve data from the selected API.
 - Error Handling: Implementation of Try/Catch blocks ensures graceful handling of potential HTTP errors.
 - Data Elements: The fetched data may include various attributes depending on the selected API, such as title, category, image, etc., essential for displaying the retrieved information effectively.
 - Event Listener: The function is called upon the window's 'load' event, ensuring that the fetching and rendering of data occur when the page is fully loaded.

 Implementation:

 - Async Function: An asynchronous function expression is utilized to facilitate non-blocking execution, providing users/students the freedom to define their own functions.
 - Try/Catch Blocks: These blocks are employed to handle potential errors during the asynchronous fetching process, ensuring robust error management.
 - Fetch API: The Fetch API is utilized to retrieve data from the selected API endpoint, allowing for seamless handling of asynchronous operations.
 - Data Processing: Once the data is fetched successfully, it's processed according to the attributes provided by the selected API.
 - DOM Manipulation: Through a loop iterating over the fetched data, relevant information is extracted and dynamically added to the HTML document within the designated "projects-container" element.
 - Event Handling: The function is registered to execute upon the 'load' event, ensuring that data retrieval and rendering occur at an appropriate time during the webpage lifecycle.

 Conclusion:
 In summary, this JavaScript file enables users/students to fetch and display data from various free APIs of their choice.

 You can delete the comments above or copy the comments and save them for reference in another file.

*/
