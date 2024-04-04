// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Getting the port number from the environment variable or setting it to 3000
const PORT = process.env.PORT || 3000;

// Route for addition
app.get('/add/:num1/:num2', (req, res) => {
  // Getting the numbers from the route parameters
  const { num1, num2 } = req.params;

  // Performing addition and sending the result
  const result = parseFloat(num1) + parseFloat(num2);
  res.send({ result });
});

// Route for subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;

  // Performing subtraction and sending the result
  const result = parseFloat(num1) - parseFloat(num2);
  res.send({ result });
});

// Route for multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;

  // Performing multiplication and sending the result
  const result = parseFloat(num1) * parseFloat(num2);
  res.send({ result });
});

// Route for division
app.get('/divide/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;

  // Checking if the divisor is zero
  if (parseFloat(num2) === 0) {
    // Sending a 400 Bad Request response with an error message
    res.status(400).send({ error: "Division by zero is not allowed" });
  } else {
    // Performing division and sending the result
    const result = parseFloat(num1) / parseFloat(num2);
    res.send({ result });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  // Logging the error to the console
  console.error(err.stack);

  // Sending a 500 Internal Server Error response
  res.status(500).send({ error: 'Something broke!' });
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});