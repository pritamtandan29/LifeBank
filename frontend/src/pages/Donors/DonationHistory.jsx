import { useEffect, useState } from "react";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import DonationHistoryTable from "../../components/Dashboard/DonationHistoryTable";

import { getDonationsByDonor } from "../../services/donationApi";

export default function DonationHistory() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const data = await getDonationsByDonor(
        user.id
      );

      setDonations(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">
          <h1 className="text-4xl font-bold">
            Donation History
          </h1>

          <p className="text-gray-400 mt-2">
            View all your donation records.
          </p>

          <DonationHistoryTable
            donations={donations}
          />
        </div>
      </div>
    </div>
  );
}