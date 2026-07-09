const mongoose = require("mongoose");

const waitlistSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["founder", "investor"],
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      default: "",
      trim: true,
    },

    revenue: {
      type: String,
      default: "",
    },

    stage: {
      type: String,
      default: "",
    },

    sectors: {
      type: [String],
      default: [],
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },

    applicationId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Reviewed",
        "Approved",
        "Rejected",
        "Contacted",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Waitlist", waitlistSchema);