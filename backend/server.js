// backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Admin login route
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  // Dummy check - replace with database later
  if (username === "admin" && password === "admin123") {
    res.json({ success: true, token: "dummy-token-123" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
