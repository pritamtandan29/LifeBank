const Donor = require("../models/Donor");
const BloodInventory = require("../models/BloodInventory");
const BloodRequest = require("../models/BloodRequest");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {
    const totalDonors = await Donor.countDocuments();
    const totalBloodGroups = await BloodInventory.countDocuments();
    const totalRequests = await BloodRequest.countDocuments();

    const pendingRequests = await BloodRequest.countDocuments({
      status: "Pending",
    });

    const approvedRequests = await BloodRequest.countDocuments({
      status: "Approved",
    });

    const rejectedRequests = await BloodRequest.countDocuments({
      status: "Rejected",
    });

    const completedRequests = await BloodRequest.countDocuments({
      status: "Completed",
    });

    const inventory = await BloodInventory.find();
    const totalBloodUnits = inventory.reduce(
      (total, item) => total + item.unitsAvailable,
      0,
    );

    return res.status(200).json({
      totalDonors,
      totalBloodGroups,
      totalBloodUnits,
      totalRequests,
      pendingRequests,
      approvedRequests,
      rejectedRequests,
      completedRequests,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};

const getDonorDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const totalDonations = 0; // temporary

    const rewardPoints = totalDonations * 200;

    const livesImpacted = totalDonations * 3;

    const lastDonationDate = user.lastDonationDate;

    let isEligible = true;
    let nextEligibleDate = null;
    let daysSinceLastDonation = null;

    if (lastDonationDate) {
      const today = new Date();

      daysSinceLastDonation = Math.floor(
        (today - lastDonationDate) / (1000 * 60 * 60 * 24),
      );

      nextEligibleDate = new Date(lastDonationDate);

      nextEligibleDate.setDate(nextEligibleDate.getDate() + 56);

      isEligible = today >= nextEligibleDate;
    }

    return res.status(200).json({
      name: user.name,
      bloodGroup: user.bloodGroup,

      totalDonations,
      rewardPoints,
      livesImpacted,
      
      lastDonationDate,
      nextEligibleDate,
      daysSinceLastDonation,
      isEligible,

      nextEligibleDate: user.lastDonation || null,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboardStats,
  getDonorDashboard,
};
