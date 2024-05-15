/*

Objective:
This JavaScript file serves an advanced purpose, focusing on dynamic data fetching from APIs based on parameters extracted from the URL. It employs the URLSearchParams method to extract information from the URL query string and utilizes Fetch API to retrieve and display data dynamically on the webpage. The file consists of two main functions, each catering to specific aspects of data retrieval and presentation.

Explanation of URLSearchParams:
The code utilizes the URLSearchParams method to extract parameters from the URL query string. This method provides a convenient way to parse and manipulate URL query parameters, allowing for dynamic data handling based on URL inputs.

YOU CAN FIND HOW TO USE THIS METHOD ON THE EXAMPLE UPLOADED TO CLASS

Function 1: getPost()
The getPost function is an asynchronous function responsible for fetching data of a specific post from a JSONPlaceholder API endpoint based on the provided post ID. It dynamically updates HTML elements on the page with information extracted from the fetched post data. The function employs a try/catch block to handle potential errors during the data fetching process, ensuring smooth execution and error handling. If an error occurs, it is logged to the console for debugging purposes.

Function 2: get3randomPosts()
The get3randomPosts function is another asynchronous function designed to retrieve data for three random posts from the JSONPlaceholder API. It involves generating random numbers to select posts and corresponding images dynamically. The function fetches post data from the API, selects three random posts, and displays them along with their titles, bodies, and images on the webpage. Similar to getPost(), this function also utilizes a try/catch block for error handling and logs any errors to the console.

Conclusion:
In summary, this JavaScript file showcases advanced techniques for dynamic data fetching and presentation on webpages. By leveraging URLSearchParams and Fetch API, it enables dynamic interaction with APIs based on parameters extracted from the URL. The functions within the file demonstrate effective error handling and provide seamless integration of dynamic data into HTML content, enhancing the overall user experience on the webpage.

*/
