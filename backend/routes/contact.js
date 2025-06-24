// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// POST /api/contact - save contact form messages
router.post("/", (req, res) => {
  const { name, email, telephone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  // Prepare new message object with timestamp
  const newMessage = {
    name,
    email,
    telephone: telephone || "",
    message,
    receivedAt: new Date().toISOString(),
  };

  const messagesPath = path.join(__dirname, "../data/messages.json");

  // Read existing messages file or start with empty array
  fs.readFile(messagesPath, "utf8", (err, data) => {
    let messages = [];
    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (parseErr) {
        // If JSON invalid, overwrite with empty array
        messages = [];
      }
    }

    // Add new message
    messages.push(newMessage);

    // Save back to file
    fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), (writeErr) => {
      if (writeErr) {
        console.error("Error saving message:", writeErr);
        return res.status(500).json({ error: "Failed to save message" });
      }

      res.json({ success: true, message: "Message received" });
    });
  });
});

module.exports = router;
