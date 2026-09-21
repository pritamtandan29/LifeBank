const Donation = require("../models/Donation");
const User = require("../models/User");

const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create(req.body);

    await User.findByIdAndUpdate(
      donation.donorId,
      {
        lastDonationDate:
          donation.donationDate,
      }
    );

    res.status(201).json({
      message: "Donation added successfully",
      donation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getDonationsByDonor = async (req, res) => {
  try {
    const { donorId } = req.params;

    const donations = await Donation.find({
      donorId,
    }).sort({ donationDate: -1 });

    res.status(200).json(donations);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createDonation,
  getDonationsByDonor,
};