// index.js
const express = require("express");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log('port', PORT);


// Middleware để parse JSON
app.use(express.json());

// Route cơ bản
app.get("/", (req, res) => {
  console.log('aolo alas');
  
  res.status(200).json("Hello, World!");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});