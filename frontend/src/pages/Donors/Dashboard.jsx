import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import StatsCards from "../../components/Dashboard/StatsCards";
import BloodGroupCard from "../../components/Dashboard/BloodGroupCard";

import RecentDonations from "../../components/Dashboard/RecentDonations";

import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardApi";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    const fetchDashboard = async () => {
      const data = await getDashboardData(user.id);
      setDashboardData(data);
    };

    fetchDashboard();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">Welcome back, {user?.name} 👋</h1>

          <p className="text-gray-400 mt-2">
            Here's your donation overview for 2025.
          </p>

          {/* Stats Cards */}
          <div className="mt-6">
            <StatsCards data={dashboardData} />
          </div>

          {/* Blood Group*/}
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            <div>
              <BloodGroupCard />
            </div>
            {/* Recent Donations */}
            <div className="lg:col-span-2">
              <RecentDonations />
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
