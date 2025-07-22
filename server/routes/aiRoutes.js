const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

// @route   POST /api/generate
// @desc    Generate AI-based career roadmap
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { userGoal } = req.body;

    if (!userGoal) {
      return res.status(400).json({ error: "User goal is required" });
    }

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/bigcode/starcoder",
      {
        inputs: `Generate a detailed career roadmap to achieve the goal: ${userGoal}`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;

    let roadmapText = "";

    if (Array.isArray(result) && result[0]?.generated_text) {
      roadmapText = result[0].generated_text;
    } else if (typeof result.generated_text === "string") {
      roadmapText = result.generated_text;
    } else if (typeof result === "string") {
      roadmapText = result;
    } else {
      return res.status(500).json({ error: "Failed to generate roadmap" });
    }

    res.status(200).json({ roadmap: roadmapText });
  } catch (error) {
    console.error("❌ AI generation error:", error.response?.data || error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

