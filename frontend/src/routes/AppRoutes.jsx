import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";

import Donors from "../pages/Donors/Donors";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Inventory from "../pages/Inventory/Inventory";
import Requests from "../pages/Requests/Requests";
import Dashboard from "../pages/Donors/Dashboard";

import MyProfile from "../pages/Donors/MyProfile";
import DonationHistory from "../pages/Donors/DonationHistory";
import Eligibility from "../pages/Donors/Eligibility";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/profile" element={<MyProfile />} />
      <Route path="/dashboard/history" element={<DonationHistory />} />
      <Route path="/dashboard/eligibility" element={<Eligibility />} />

      <Route path="/donors" element={<Donors />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/requests" element={<Requests />} />
    </Routes>
  );
}

export default AppRoutes;
