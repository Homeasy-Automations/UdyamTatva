const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Waitlist = require("./models/Waitlist");

const app = express();

// =============================
// Middleware
// =============================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://udyamtatva.com",
      "https://www.udyamtatva.com",
    ],
    credentials: true,
  })
);
app.use(express.json());

// =============================
// MongoDB Connection
// =============================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

// =============================
// Home Route
// =============================

app.get("/", (req, res) => {
  res.send("🚀 UdyamTatva Backend Running");
});

// =============================
// Waitlist API
// =============================

app.post("/api/waitlist", async (req, res) => {
  try {
    const {
      role,
      name,
      email,
      phone,
      company,
      website,
      revenue,
      stage,
      sectors,
      message,
    } = req.body;

    // =============================
    // Validation
    // =============================

    if (!role || !name || !email || !phone || !company) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // =============================
    // Duplicate Email Check
    // =============================

    const existingUser = await Waitlist.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "This email has already joined the waitlist.",
      });
    }

    // =============================
    // Generate Application ID
    // =============================

    const applicationId = `UT-${Date.now()}`;

    // =============================
    // Save Data
    // =============================

    const waitlist = new Waitlist({
      role,
      name,
      email,
      phone,
      company,
      website,
      revenue,
      stage,
      sectors,
      message,
      applicationId,
      submittedAt: new Date(),
    });

    await waitlist.save();

    // =============================
    // Success Response
    // =============================

    res.status(200).json({
      success: true,
      message: "Application submitted successfully.",
      applicationId,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.get("/api/waitlist", (req, res) => {
  res.json({
    message: "Waitlist API is working 🚀"
  });
});

// =============================
// Start Server
// =============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});