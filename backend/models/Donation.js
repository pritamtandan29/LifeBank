const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    donorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    hospitalName: {
      type: String,
      required: true,
      trim: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    unitsDonated: {
      type: Number,
      default: 1,
    },

    donationDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["Completed", "Pending"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Donation", donationSchema);