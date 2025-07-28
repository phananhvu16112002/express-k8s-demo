const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello from Express + Docker + CI/CD + K8s! 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
