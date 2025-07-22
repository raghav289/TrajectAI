const express = require("express");
const router = express.Router();
const User = require("../models/User");

// @route   POST /api/user
// @desc    Register or find existing user
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({ message: "User already exists", user });
    }

    // Create new user
    user = new User({ name, email });
    await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
