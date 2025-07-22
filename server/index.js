// server/index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "https://trajectai.vercel.app", credentials: true }));
app.use(helmet());
app.use(express.json());

// ► Manually sanitize only req.body
app.use((req, res, next) => {
  if (req.body && typeof req.body === "object") {
    req.body = mongoSanitize.sanitize(req.body, { replaceWith: "_removed_" });
  }
  next();
});

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => res.send("Server is running successfully ✅"));

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/roadmap", require("./routes/generateRoadmap"));

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});



//https://trajectai.vercel.app