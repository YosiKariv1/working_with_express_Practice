const express = require("express");
const app = express();

// Middleware 1
app.use((req, res, next) => {
  console.log("Middleware 1 - Request received");
  next();
});

// Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2 - Continuing...");
  next();
});

// Route: "/"
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Route: "/users"
app.get("/users", (req, res) => {
  res.send("Here is the users page.");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
