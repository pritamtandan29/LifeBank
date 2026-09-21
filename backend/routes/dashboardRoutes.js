const express = require("express");

const router = express.Router();

const{
    getDashboardStats,getDonorDashboard
} = require("../controllers/dashboardController");

router.get("/", getDashboardStats);
router.get("/:id", getDonorDashboard);

module.exports = router;