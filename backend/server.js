const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Waitlist = require("./models/waitlist");

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
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

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
    console.log("New Waitlist Request:", req.body);
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
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success:false,
        message:"Invalid email address."
      });
    }
    // Phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return res.status(400).json({
        success:false,
        message:"Invalid mobile number."
      });
    }
    // =============================
    // Duplicate Email Check
    // =============================
    const existingUser = await Waitlist.findOne({
      email: email.trim().toLowerCase(),
    });
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

          name: name.trim(),

          email: email.trim().toLowerCase(),

          phone: phone.trim(),

          company: company.trim(),

          website: website?.trim(),

          revenue,

          stage,

          sectors,

          message: message?.trim(),

          applicationId,

    });

    await waitlist.save();

    // =============================
    // Success Response
    // =============================

    res.status(201).json({
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
// Get All Waitlist Entries
// =============================

app.get("/api/admin/waitlist", async (req, res) => {
  try {
    const waitlists = await Waitlist.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: waitlists,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// =============================
// Start Server
// =============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});