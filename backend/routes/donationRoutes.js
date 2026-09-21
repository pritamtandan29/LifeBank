const express = require("express");

const router = express.Router();

const {
  createDonation,
  getDonationsByDonor,
} = require("../controllers/donationController");

router.post("/", createDonation);
router.get("/:donorId", getDonationsByDonor);

module.exports = router;