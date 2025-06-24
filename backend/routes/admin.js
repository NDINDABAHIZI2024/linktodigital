const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/messages", (req, res) => {
  const messagesPath = path.join(__dirname, "../data/messages.json");

  if (!fs.existsSync(messagesPath)) {
    return res.json([]);
  }

  fs.readFile(messagesPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading messages file:", err);
      return res.status(500).json({ error: "Failed to read messages" });
    }

    try {
      const messages = JSON.parse(data);
      res.json(messages);
    } catch (parseError) {
      console.error("Error parsing messages JSON:", parseError);
      res.status(500).json({ error: "Invalid messages data" });
    }
  });
});

module.exports = router;