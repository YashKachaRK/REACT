// backed entry point 
const connectToMongo = require('./db');
const express = require('express');
require('dotenv').config();

connectToMongo()

const app = express();
const port = process.env.PORT ;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello World!' );
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});