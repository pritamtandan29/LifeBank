const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },

    password: {
      type: String,
      required: true,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },

    role: {
      type: String,
      enum: ["admin", "donor", "hospital"],
      default: "donor",
    },

    phone: {
      type: String,
      required: true,
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian phone number",
      ],
    },

    bloodGroup: {
      type: String,
    },

    age: {
      type: Number,
    },

    gender: {
      type: String,
    },

    city: {
      type: String,
    },

    address: {
      type: String,
    },

    pincode: {
      type: String,
    },
    lastDonationDate: {
      type: Date,
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model("User", userSchema);
