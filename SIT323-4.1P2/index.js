// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Getting the port number from the environment variable or setting it to 3000
const PORT = process.env.PORT || 3000;

// Parsing JSON request bodies
app.use(express.json());

// Route for addition
app.get('/add', (req, res) => {
  // Getting the numbers from the query parameters
  const { num1, num2 } = req.query;

  // Checking if the input numbers are valid
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    // Sending a 400 Bad Request response with an error message
    res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
  } else {
    // Performing addition and sending the result
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
  }
});

// Route for subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
  } else {
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
  }
});

// Route for multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!isValidNumber(num1) || !isValidNumber(num2)) {
    res.status(400).json({ error: "Invalid input. Please provide valid numbers." });
  } else {
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
  }
});

// Route for division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  // Checking if the input numbers are valid and the divisor is not zero
  if (!isValidNumber(num1) || !isValidNumber(num2) || parseFloat(num2) === 0) {
    res.status(400).json({ error: "Invalid input. Please provide valid numbers and ensure divisor is not zero." });
  } else {
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  // Logging the error to the console
  console.error(err.stack);
  // Sending a 500 Internal Server Error response
  res.status(500).json({ error: 'Internal server error' });
});

// Helper function to check if a value is a valid number
function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});