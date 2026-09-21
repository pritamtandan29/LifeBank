import { useEffect, useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import EligibilityStatus from "../../components/Dashboard/EligibilityStatus";
import EligibilityDetails from "../../components/Dashboard/EligibilityDetails";

import { getDashboardData } from "../../services/dashboardApi";

export default function Eligibility() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const response =
        await getDashboardData(user.id);

      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return (
      <div className="text-white p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold">
            Eligibility Status
          </h1>

          <p className="text-gray-400 mt-2 mb-8">
            Check whether you can donate blood today.
          </p>

          <div className="space-y-6">
            <EligibilityStatus
              isEligible={data.isEligible}
            />

            <EligibilityDetails
              lastDonationDate={
                data.lastDonationDate
              }
              nextEligibleDate={
                data.nextEligibleDate
              }
              daysSinceLastDonation={
                data.daysSinceLastDonation
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}