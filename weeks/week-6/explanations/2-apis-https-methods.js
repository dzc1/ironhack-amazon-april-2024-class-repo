// What are APIs?

/*
   In summary, APIs:
   - What: Are interfaces that define rules and protocols for different software applications to communicate. 
   - What: Based on the CRUD acronym, where it means [Create, Read, Update, Delete] information from a server
   - Why: Enable integration, automation, and scalability of systems and services.
   - How: Use HTTP methods, standardized data formats, authentication, and documentation to facilitate communication and interaction between applications.
*/

// -----
// -----
// -----
// -----

// What are HTTP Methods?

/*
   In summary, HTTP methods:
   - What: Are actions that can be performed on a resource identified by a URI in the context of the HTTP protocol.
   - Why: Allow clients to manipulate resources on a server, providing semantics for safe and idempotent operations.
*/

/*
   
   How:
   - GET: Retrieves data from the server.
   - POST: Submits data to the server to create a new resource.
   - PUT: Updates an existing resource on the server.
   - DELETE: Removes a resource from the server.
   - PATCH: Partially updates a resource on the server.
   - HEAD: Retrieves metadata about a resource without fetching the resource itself.
   - OPTIONS: Returns the HTTP methods supported by a server for a given resource.
   - TRACE: Echoes back the received request to the client, allowing it to see what changes or additions have been made by intermediate servers.
   
   HTTP methods provide a standardized way for clients to interact with web servers, enabling the manipulation of resources in a predictable and efficient manner.
*/

// Listt of HTTP Codes by number ID

// Here's a list of some common HTTP status codes along with their meanings:

// 1xx Informational
// 100: Continue
// 101: Switching Protocols
// 102: Processing

// 2xx Success
// 200: OK
// 201: Created
// 202: Accepted
// 204: No Content
// 206: Partial Content

// 3xx Redirection
// 300: Multiple Choices
// 301: Moved Permanently
// 302: Found (Moved Temporarily)
// 304: Not Modified
// 307: Temporary Redirect

// 4xx Client Errors
// 400: Bad Request
// 401: Unauthorized
// 403: Forbidden
// 404: Not Found
// 405: Method Not Allowed
// 429: Too Many Requests

// 5xx Server Errors
// 500: Internal Server Error
// 501: Not Implemented
// 502: Bad Gateway
// 503: Service Unavailable
// 504: Gateway Timeout

// These are some of the most commonly encountered status codes, but there are many more defined by the HTTP standard. Each status code indicates the outcome of an HTTP request and helps in troubleshooting and debugging network and server-related issues.
