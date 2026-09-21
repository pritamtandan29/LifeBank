const mongoose = require("mongoose");

const bloodBankSchema = new mongoose.Schema(
  {
    bloodBankName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    city: String,

    address: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "BloodBank",
  bloodBankSchema
);