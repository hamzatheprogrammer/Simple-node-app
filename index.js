// Load the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}/`);
});
