// Log a message to confirm TypeScript is working
console.log("typescript is working");

// Import the HTTP module from Node.js to create a web server
import * as http from 'http';

// Define the port number on which the server will listen
const port = 3000;

// Create an HTTP server that handles incoming requests
const server = http.createServer((req: any, res: any) => {
    // Set the HTTP response status code to 200 (OK)
    res.statusCode = 200;
    // Set the Content-Type header to indicate plain text response
    res.setHeader('Content-Type', 'text/plain');
    // End the response by sending 'Hello, World!' as the body
    res.end('Hello, World!');
});

// Start the server and make it listen on the specified port
server.listen(port, () => {
    // Log a message to the console indicating the server is running
    console.log(`Server is running on port ${port}`);
});
